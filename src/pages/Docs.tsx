import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/ui/footer";
import { 
  Brain, 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Code2, 
  Zap,
  Shield,
  Users,
  Clock,
  Sparkles,
  Globe,
  Lock,
  BarChart3,
  MessageSquare,
  Download,
  Upload,
  ArrowRight,
  HelpCircle,
  CreditCard,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  Copy,
  Check,
  Play,
  Terminal,
  Database,
  Settings,
  Key,
  FileText,
  AlertCircle,
  Info,
  Lightbulb,
  Star,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

const Docs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("getting-started");

  const quickStart = [
    {
      title: "1. Create an Account",
      description: "Sign up for a free account to get started",
      code: "Visit our signup page and create your account",
      icon: Users
    },
    {
      title: "2. Choose Your AI Mode",
      description: "Select the perfect assistant for your needs",
      code: "Code Generation | Debug Assistant | General Assistant | Code Enhancement",
      icon: Brain
    },
    {
      title: "3. Start Coding",
      description: "Begin generating code with AI assistance",
      code: "Describe what you want to build and let AI help you code",
      icon: Code2
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/generate",
      description: "Generate code based on natural language description",
      parameters: [
        { name: "prompt", type: "string", required: true, description: "Natural language description of the code you want to generate" },
        { name: "language", type: "string", required: false, description: "Programming language (default: auto-detect)" },
        { name: "mode", type: "string", required: false, description: "AI mode: code, debug, chat, enhance" }
      ],
      example: {
        request: `{
  "prompt": "Create a React component for a todo list",
  "language": "javascript",
  "mode": "code"
}`,
        response: `{
  "code": "import React, { useState } from 'react';\\n\\nconst TodoList = () => {\\n  const [todos, setTodos] = useState([]);\\n  // ... rest of component",
  "explanation": "This React component creates a todo list with add/remove functionality",
  "language": "javascript"
}`
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/debug",
      description: "Debug and fix code issues",
      parameters: [
        { name: "code", type: "string", required: true, description: "The code to debug" },
        { name: "error", type: "string", required: false, description: "Error message if available" },
        { name: "language", type: "string", required: true, description: "Programming language of the code" }
      ],
      example: {
        request: `{
  "code": "function add(a, b) { return a + b; }",
  "error": "TypeError: Cannot read property 'length' of undefined",
  "language": "javascript"
}`,
        response: `{
  "fixed_code": "function add(a, b) {\\n  if (typeof a !== 'number' || typeof b !== 'number') {\\n    throw new Error('Both arguments must be numbers');\\n  }\\n  return a + b;\\n}",
  "explanation": "Added type checking to prevent undefined errors",
  "suggestions": ["Consider using TypeScript for better type safety"]
}`
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/chat",
      description: "Get AI assistance for any programming question",
      parameters: [
        { name: "message", type: "string", required: true, description: "Your question or request" },
        { name: "context", type: "string", required: false, description: "Additional context or code" }
      ],
      example: {
        request: `{
  "message": "How do I implement authentication in a React app?",
  "context": "I'm building a todo app with user accounts"
}`,
        response: `{
  "response": "Here's how to implement authentication in your React todo app:\\n\\n1. Use Firebase Auth or Auth0\\n2. Create login/signup components\\n3. Protect routes with authentication guards\\n\\nHere's a basic example...",
  "code_examples": ["// Login component", "// Protected route wrapper"],
  "resources": ["Firebase Auth docs", "React Router docs"]
}`
      }
    }
  ];

  const tutorials = [
    {
      title: "Building a Todo App with ClingAI",
      description: "Learn how to build a complete todo application using AI assistance",
      duration: "15 min",
      difficulty: "Beginner",
      tags: ["React", "JavaScript", "AI"],
      steps: [
        "Set up your development environment",
        "Create the basic React component structure",
        "Use AI to generate the todo list logic",
        "Add styling and user interactions",
        "Deploy your application"
      ]
    },
    {
      title: "Debugging Common JavaScript Errors",
      description: "Master the art of debugging with AI assistance",
      duration: "20 min",
      difficulty: "Intermediate",
      tags: ["JavaScript", "Debugging", "AI"],
      steps: [
        "Understanding common error types",
        "Using AI to analyze error messages",
        "Implementing proper error handling",
        "Testing and validating fixes",
        "Best practices for error prevention"
      ]
    },
    {
      title: "API Integration with AI Help",
      description: "Learn to integrate external APIs with AI-powered assistance",
      duration: "25 min",
      difficulty: "Advanced",
      tags: ["API", "REST", "AI", "JavaScript"],
      steps: [
        "Understanding API documentation",
        "Using AI to generate API calls",
        "Handling authentication and headers",
        "Error handling and retry logic",
        "Testing and monitoring API calls"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I get started with ClingAI?",
      answer: "Getting started is easy! Simply create a free account, choose your preferred AI mode, and start describing what you want to build. Our AI will help you generate code, debug issues, and answer any programming questions."
    },
    {
      question: "What programming languages does ClingAI support?",
      answer: "ClingAI supports 50+ programming languages including Python, JavaScript, TypeScript, Java, C++, Go, Rust, PHP, Ruby, Swift, Kotlin, and many more. The AI can auto-detect the language or you can specify it explicitly."
    },
    {
      question: "How accurate is the generated code?",
      answer: "Our AI generates high-quality, production-ready code with best practices and proper error handling. However, we always recommend reviewing and testing the generated code before deploying to production."
    },
    {
      question: "Can I use ClingAI for commercial projects?",
      answer: "Yes! All plans allow commercial use. The Free plan is perfect for personal projects, while Pro and Enterprise plans offer additional features for professional and commercial development."
    },
    {
      question: "How do I integrate ClingAI into my existing workflow?",
      answer: "ClingAI integrates seamlessly with popular IDEs and development tools. You can use our web interface, API endpoints, or IDE extensions to incorporate AI assistance into your existing development workflow."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including documentation, tutorials, community forums, and direct support for Pro and Enterprise users. Our team is always ready to help you succeed with ClingAI."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Button variant="ghost" onClick={() => navigate("/")}>Home</Button>
            <Button variant="ghost" onClick={() => navigate("/features")}>Features</Button>
            <Button variant="ghost" onClick={() => navigate("/pricing")}>Pricing</Button>
            <Button variant="ghost" className="text-primary">Docs</Button>
            <Button variant="ghost" onClick={() => navigate("/about")}>About Us</Button>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Brain className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to know about using ClingAI. From quick start guides to advanced API documentation.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Documentation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="api-reference">API Reference</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            {/* Getting Started Tab */}
            <TabsContent value="getting-started" className="mt-6">
              <div className="space-y-8">
                {/* Quick Start Guide */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Quick Start Guide</h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {quickStart.map((step, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <step.icon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </div>
                          <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-muted p-3 rounded-md">
                            <code className="text-sm">{step.code}</code>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* AI Modes */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">AI Modes</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Code2 className="h-6 w-6 text-blue-500" />
                          <CardTitle>Code Generation</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Generate production-ready code from natural language descriptions. Perfect for building new features and components.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Multi-language support
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Best practices included
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Error handling
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-red-500" />
                          <CardTitle>Debug Assistant</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Get intelligent debugging help with error analysis, code review, and optimization suggestions.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Error analysis
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Code optimization
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Security checks
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Brain className="h-6 w-6 text-purple-500" />
                          <CardTitle>General Assistant</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Get expert-level answers on any programming topic with context-aware responses and detailed explanations.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Comprehensive knowledge
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Context-aware responses
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Code examples
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Sparkles className="h-6 w-6 text-green-500" />
                          <CardTitle>Code Enhancement</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Improve existing code with advanced optimization, refactoring, and enhancement suggestions.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Performance optimization
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Code refactoring
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            Modern syntax updates
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* API Reference Tab */}
            <TabsContent value="api-reference" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">API Reference</h2>
                  <p className="text-muted-foreground mb-8">
                    Integrate ClingAI into your applications using our RESTful API. All endpoints require authentication using your API key.
                  </p>

                  {/* Authentication */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5" />
                        Authentication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Include your API key in the Authorization header:
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                      </div>
                    </CardContent>
                  </Card>

                  {/* API Endpoints */}
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="font-mono">
                              {endpoint.method}
                            </Badge>
                            <code className="text-lg font-mono">{endpoint.endpoint}</code>
                          </div>
                          <CardDescription>{endpoint.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Parameters</h4>
                              <div className="space-y-2">
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <div key={paramIndex} className="flex items-start gap-4 text-sm">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <code className="bg-muted px-2 py-1 rounded">{param.name}</code>
                                      <Badge variant={param.required ? "default" : "secondary"}>
                                        {param.type}
                                      </Badge>
                                      {param.required && (
                                        <Badge variant="destructive">Required</Badge>
                                      )}
                                    </div>
                                    <p className="text-muted-foreground flex-1">{param.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <h4 className="font-semibold mb-2">Example</h4>
                              <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                  <h5 className="text-sm font-medium mb-2">Request</h5>
                                  <div className="bg-muted p-3 rounded-md">
                                    <pre className="text-xs overflow-x-auto">
                                      <code>{endpoint.example.request}</code>
                                    </pre>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium mb-2">Response</h5>
                                  <div className="bg-muted p-3 rounded-md">
                                    <pre className="text-xs overflow-x-auto">
                                      <code>{endpoint.example.response}</code>
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Tutorials</h2>
                  <p className="text-muted-foreground mb-8">
                    Step-by-step guides to help you master ClingAI and build amazing applications.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tutorials.map((tutorial, index) => (
                      <Card key={index} className="h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{tutorial.difficulty}</Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {tutorial.duration}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                          <CardDescription>{tutorial.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex flex-wrap gap-1">
                              {tutorial.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                {tutorial.steps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full" />
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button className="w-full mt-4">
                              Start Tutorial
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground mb-8">
                    Find answers to common questions about using ClingAI.
                  </p>

                  <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-8">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No FAQ items found matching your search.</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Resources */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore more resources to help you succeed with ClingAI
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Github className="h-6 w-6 text-primary" />
                    <CardTitle>GitHub Repository</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access our open-source components, examples, and community contributions.
                  </p>
                                     <Button variant="outline" className="w-full" onClick={() => window.open("https://github.com/CryptoGuyDeve/clingai-beta", "_blank")}>
                     View on GitHub
                     <ExternalLink className="ml-2 h-4 w-4" />
                   </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <CardTitle>Community Forum</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Connect with other developers, share tips, and get help from the community.
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Community
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle>Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Need help? Contact our support team for personalized assistance.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Docs; 