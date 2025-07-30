import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, User, Bot, Coins } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  codeBlocks?: Array<{ language: string; code: string }>;
}

interface ChatInterfaceProps {
  mode: string;
  className?: string;
}

export function ChatInterface({ mode, className }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState<number>(0);
  const { user, session } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCredits();
    }
  }, [user]);

  const fetchCredits = async () => {
    try {
      const { data, error } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        console.error('Error fetching credits:', error);
        return;
      }

      setCredits(data?.credits || 0);
    } catch (error) {
      console.error('Error fetching credits:', error);
    }
  };

  const modeConfig = {
    code: { placeholder: "Describe the code you want to generate...", title: "Code Generator" },
    chat: { placeholder: "Ask me anything...", title: "General Assistant" },
    debug: { placeholder: "Paste your code or describe the issue...", title: "Debug Helper" },
    enhance: { placeholder: "Share your code for optimization...", title: "Code Enhancer" },
  };

  const config = modeConfig[mode as keyof typeof modeConfig] || modeConfig.chat;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (credits < 10) {
      toast.error("Insufficient credits. You need at least 10 credits to generate content.");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-code', {
        body: { 
          prompt: input, 
          mode: mode 
        },
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      if (error) {
        console.error('Error calling generate-code function:', error);
        toast.error(error.message || "Failed to generate response");
        setIsLoading(false);
        return;
      }

      const { generatedText, creditsUsed, creditsRemaining } = data;
      
      // Extract code blocks from the response
      const codeBlocks: { language: string; code: string }[] = [];
      const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
      let match;
      
      while ((match = codeBlockRegex.exec(generatedText)) !== null) {
        codeBlocks.push({
          language: match[1] || "plaintext",
          code: match[2].trim()
        });
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generatedText.replace(/```(\w+)?\n[\s\S]*?```/g, '').trim(),
        timestamp: new Date(),
        codeBlocks: codeBlocks.length > 0 ? codeBlocks : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
      setCredits(creditsRemaining);
      toast.success(`Response generated! ${creditsUsed} credits used. ${creditsRemaining} credits remaining.`);
      
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error("Failed to generate response");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={cn("flex flex-col h-[600px]", className)}>
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">{config.title}</h2>
            <p className="text-sm text-muted-foreground">AI-powered assistance tailored to your needs</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Coins className="h-4 w-4 text-primary" />
            <span className="font-medium">{credits} credits</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <Bot className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Start a conversation with your AI assistant</p>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}>
            <div className={cn("flex gap-3 max-w-[80%]", message.role === "user" ? "flex-row-reverse" : "flex-row")}>
              <div className="flex-shrink-0">
                {message.role === "user" ? (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className={cn("rounded-lg p-3", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-ai-surface")}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                {message.codeBlocks?.map((block, index) => (
                  <CodeBlock
                    key={index}
                    code={block.code}
                    language={block.language}
                    className="mt-3"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Bot className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="bg-ai-surface rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={config.placeholder}
            className="min-h-[50px] resize-none"
            disabled={isLoading}
          />
          <Button type="submit" disabled={!input.trim() || isLoading} size="icon" className="self-end">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
}