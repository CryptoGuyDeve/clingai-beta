import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeSelector } from "@/components/ui/mode-selector";
import { ChatInterface } from "@/components/ui/chat-interface";
import { SubscriptionCard } from "@/components/subscription-card";
import { useAuth } from "@/hooks/useAuth";
import { Brain, Code2, Zap, Crown, Menu, User, LogOut } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [selectedMode, setSelectedMode] = useState("code");
  const [showChat, setShowChat] = useState(false);
  const { user, session, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to auth if not authenticated when trying to use chat
    if (showChat && !loading && !session) {
      navigate("/auth");
    }
  }, [showChat, session, loading, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-ai-surface">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">ClingAI</span>
            <Badge variant="secondary" className="ml-2">Beta</Badge>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Docs</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About Us</Button>
          </nav>
          
          <div className="flex items-center gap-2">
            {loading ? (
              <div className="w-20 h-9 bg-muted animate-pulse rounded-md" />
            ) : session ? (
              <>
                <div className="hidden md:flex items-center gap-2 mr-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Welcome back!</span>
                </div>
                <Button variant="outline" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
                <Button onClick={() => navigate("/auth")}>
                  Get Started
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!showChat && (
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                <Code2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <Zap className="h-6 w-6 text-primary" />
              <div className="w-16 h-16 bg-gradient-to-br from-muted-foreground to-muted-foreground/80 rounded-2xl flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              AI-Powered Code Generation & Assistance
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate, debug, and enhance code with advanced AI. Get instant answers and insights on any development topic with multiple specialized modes.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => setShowChat(true)} className="text-lg px-8">
                Start Coding
                <Code2 className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>
          </div>

          {/* Mode Selection */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Choose Your AI Mode</h2>
              <p className="text-muted-foreground">Select the perfect assistant for your needs</p>
            </div>
            
            <ModeSelector 
              selectedMode={selectedMode} 
              onModeSelect={setSelectedMode}
              className="max-w-6xl mx-auto"
            />
            
            <div className="text-center mt-8">
              <Button size="lg" onClick={() => setShowChat(true)}>
                Start with {selectedMode === "code" ? "Code Generator" : selectedMode === "chat" ? "General Assistant" : selectedMode === "debug" ? "Debug Helper" : "Code Enhancer"}
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Code Generation</h3>
              <p className="text-muted-foreground">Generate production-ready code in any programming language with intelligent suggestions.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Assistance</h3>
              <p className="text-muted-foreground">Get expert-level answers on any topic with context-aware responses and citations.</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Features</h3>
              <p className="text-muted-foreground">Advanced debugging, code optimization, and unlimited usage with premium subscription.</p>
            </Card>
          </div>
        </main>
      )}

      {/* Chat Interface */}
      {showChat && (
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">AI Assistant</h1>
                <p className="text-muted-foreground">Powered by advanced AI models</p>
              </div>
              <Button variant="outline" onClick={() => setShowChat(false)}>
                Back to Home
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <ModeSelector 
                  selectedMode={selectedMode} 
                  onModeSelect={setSelectedMode}
                  className="mb-6"
                />
                
                <ChatInterface mode={selectedMode} />
              </div>
              
              <div className="lg:col-span-1">
                <SubscriptionCard />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Index;
