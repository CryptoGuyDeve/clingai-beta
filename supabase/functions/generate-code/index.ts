import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[GENERATE-CODE] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) throw new Error('GEMINI_API_KEY is not set');
    logStep("Gemini API key verified");

    // Create Supabase client for auth verification
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    
    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user) throw new Error("User not authenticated");
    logStep("User authenticated", { userId: user.id });

    // Create service role client for database operations
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Check user credits
    const { data: creditsData, error: creditsError } = await supabaseService
      .from('credits')
      .select('credits')
      .eq('user_id', user.id)
      .single();

    if (creditsError) {
      logStep("Credits check error", creditsError);
      throw new Error("Failed to check user credits");
    }

    if (!creditsData || creditsData.credits < 10) {
      logStep("Insufficient credits", { available: creditsData?.credits || 0 });
      return new Response(JSON.stringify({ error: "Insufficient credits. You need at least 10 credits." }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    logStep("Credits available", { credits: creditsData.credits });

    // Get request data
    const { prompt, mode } = await req.json();
    if (!prompt) throw new Error("Prompt is required");
    logStep("Request received", { mode, promptLength: prompt.length });

    // Create system prompt based on mode
    let systemPrompt = "";
    switch (mode) {
      case "code":
        systemPrompt = "You are an expert code generator. Generate clean, efficient, and well-documented code based on the user's requirements. Include explanations and best practices.";
        break;
      case "debug":
        systemPrompt = "You are a debugging expert. Analyze the code, identify issues, and provide solutions with explanations.";
        break;
      case "enhance":
        systemPrompt = "You are a code enhancement specialist. Improve the provided code for better performance, readability, and maintainability.";
        break;
      default:
        systemPrompt = "You are a helpful AI assistant that provides accurate and helpful responses.";
    }

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\nUser request: ${prompt}` }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      logStep("Gemini API error", { status: response.status, error: errorData });
      
      // Handle specific error cases with user-friendly messages
      if (response.status === 503) {
        return new Response(JSON.stringify({ 
          error: "The AI service is temporarily overloaded. Please try again in a few moments." 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 503,
        });
      }
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          error: "Rate limit exceeded. Please wait a moment before trying again." 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        });
      }
      
      throw new Error(`Gemini API error: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    logStep("Gemini response received");

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error("No content generated from Gemini API");
    }

    const generatedText = data.candidates[0].content.parts[0].text;

    // Deduct credits (10 per generation)
    const { error: updateError } = await supabaseService
      .from('credits')
      .update({ credits: creditsData.credits - 10 })
      .eq('user_id', user.id);

    if (updateError) {
      logStep("Credits update error", updateError);
      // Don't fail the request if credits update fails, just log it
    } else {
      logStep("Credits deducted", { remaining: creditsData.credits - 10 });
    }

    return new Response(JSON.stringify({ 
      generatedText,
      creditsUsed: 10,
      creditsRemaining: creditsData.credits - 10
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in generate-code", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});