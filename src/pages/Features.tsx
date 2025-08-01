import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/ui/footer";
import { 
  Brain, 
  ArrowLeft, 
  Code2, 
  Zap, 
  Crown, 
  Shield, 
  FileText, 
  Search, 
  Sparkles,
  Lightbulb,
  Rocket,
  Target,
  Globe,
  Lock,
  Clock,
  Users,
  BarChart3,
  Palette,
  Languages,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Terminal,
  GitBranch,
  Bug,
  TestTube,
  BookOpen,
  MessageSquare,
  Video,
  Download,
  Upload,
  Share2,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ai-modes");

  const features = {
    aiModes: [
      {
        title: "Code Generation",
        icon: Code2,
        description: "Generate production-ready code in any programming language with intelligent suggestions and best practices.",
        highlights: [
          "Multi-language support (Python, JavaScript, TypeScript, Java, C++, Go, Rust, and more)",
          "Context-aware code generation",
          "Best practices and design patterns",
          "Error handling and validation",
          "Documentation generation"
        ],
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
      },
      {
        title: "Debug Assistant",
        icon: Bug,
        description: "Get intelligent debugging help with error analysis, code review, and optimization suggestions.",
        highlights: [
          "Error analysis and debugging",
          "Code review and optimization",
          "Performance profiling",
          "Security vulnerability detection",
          "Refactoring suggestions"
        ],
        color: "text-red-500",
        bgColor: "bg-red-500/10"
      },
      {
        title: "General Assistant",
        icon: Brain,
        description: "Get expert-level answers on any topic with context-aware responses and detailed explanations.",
        highlights: [
          "Comprehensive knowledge base",
          "Context-aware responses",
          "Detailed explanations",
          "Citation and references",
          "Multi-format responses"
        ],
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
      },
      {
        title: "Code Enhancement",
        icon: Sparkles,
        description: "Improve existing code with advanced optimization, refactoring, and enhancement suggestions.",
        highlights: [
          "Code optimization",
          "Refactoring suggestions",
          "Performance improvements",
          "Modern syntax updates",
          "Architecture recommendations"
        ],
        color: "text-green-500",
        bgColor: "bg-green-500/10"
      }
    ],
    coreFeatures: [
      {
        title: "Multi-Language Support",
        icon: Languages,
        description: "Support for 50+ programming languages and frameworks",
        details: "From Python and JavaScript to Rust and Go, we support all major programming languages with syntax highlighting and language-specific optimizations."
      },
      {
        title: "Real-time Collaboration",
        icon: Users,
        description: "Collaborate with team members in real-time",
        details: "Share code snippets, collaborate on projects, and get feedback from team members with our real-time collaboration features."
      },
      {
        title: "Advanced Security",
        icon: Shield,
        description: "Enterprise-grade security and privacy",
        details: "Your code and data are protected with end-to-end encryption, secure authentication, and compliance with industry standards."
      },
      {
        title: "Performance Analytics",
        icon: BarChart3,
        description: "Track and optimize your development workflow",
        details: "Monitor your coding patterns, identify bottlenecks, and optimize your development process with detailed analytics."
      },
      {
        title: "Cloud Integration",
        icon: Cloud,
        description: "Seamless integration with cloud platforms",
        details: "Deploy directly to AWS, Google Cloud, Azure, and other cloud platforms with our integrated deployment tools."
      },
      {
        title: "Version Control",
        icon: GitBranch,
        description: "Built-in Git integration and version control",
        details: "Manage your code versions, create branches, and collaborate with Git integration built directly into the platform."
      }
    ],
    advancedFeatures: [
      {
        title: "AI-Powered Code Review",
        icon: Search,
        description: "Automated code review with AI insights",
        benefits: [
          "Automated code quality checks",
          "Security vulnerability detection",
          "Performance optimization suggestions",
          "Best practices enforcement",
          "Custom review rules"
        ]
      },
      {
        title: "Intelligent Testing",
        icon: TestTube,
        description: "Generate comprehensive test suites automatically",
        benefits: [
          "Unit test generation",
          "Integration test creation",
          "Test coverage analysis",
          "Mock object generation",
          "Test scenario suggestions"
        ]
      },
      {
        title: "Documentation Generation",
        icon: BookOpen,
        description: "Auto-generate comprehensive documentation",
        benefits: [
          "API documentation",
          "Code comments",
          "README generation",
          "Technical specifications",
          "User guides"
        ]
      },
      {
        title: "Code Migration",
        icon: ArrowRight,
        description: "Migrate between languages and frameworks",
        benefits: [
          "Language-to-language conversion",
          "Framework migration",
          "Legacy code modernization",
          "Platform-specific adaptations",
          "Backward compatibility"
        ]
      }
    ],
    integrations: [
      {
        title: "IDE Integration",
        icon: Monitor,
        description: "Seamless integration with popular IDEs",
        platforms: ["VS Code", "IntelliJ IDEA", "Sublime Text", "Atom", "Vim/Neovim"]
      },
      {
        title: "Cloud Platforms",
        icon: Cloud,
        description: "Direct deployment to cloud platforms",
        platforms: ["AWS", "Google Cloud", "Azure", "Heroku", "DigitalOcean", "Vercel"]
      },
      {
        title: "Version Control",
        icon: GitBranch,
        description: "Integration with version control systems",
        platforms: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps", "Git"]
      },
      {
        title: "CI/CD Pipelines",
        icon: Rocket,
        description: "Automated CI/CD pipeline integration",
        platforms: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "Travis CI"]
      }
    ]
  };

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "5 AI requests per day",
        "Basic code generation",
        "Community support",
        "Standard response time",
        "Basic documentation"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For professional developers",
      features: [
        "Unlimited AI requests",
        "Advanced code generation",
        "Priority support",
        "Faster response time",
        "Advanced documentation",
        "Custom templates",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom AI models",
        "Dedicated support",
        "SLA guarantees",
        "Advanced security",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

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
            <Button variant="ghost" className="text-primary">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Docs</Button>
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
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the comprehensive suite of AI-powered tools designed to revolutionize your development workflow and boost productivity.
            </p>
          </div>

          {/* Feature Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="ai-modes">AI Modes</TabsTrigger>
              <TabsTrigger value="core-features">Core Features</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            {/* AI Modes Tab */}
            <TabsContent value="ai-modes" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                {features.aiModes.map((feature, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.bgColor}`}>
                          <feature.icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6" variant="outline">
                        Try {feature.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Core Features Tab */}
            <TabsContent value="core-features" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.coreFeatures.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {feature.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Advanced Features Tab */}
            <TabsContent value="advanced" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                {features.advancedFeatures.map((feature, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <Star className="h-3 w-3 text-yellow-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {features.integrations.map((integration, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <integration.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{integration.title}</CardTitle>
                          <CardDescription className="text-base">
                            {integration.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {integration.platforms.map((platform, idx) => (
                          <Badge key={idx} variant="secondary">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Pricing Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start with our free tier and upgrade as you grow. All plans include our core AI features.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-lg' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <CardDescription className="text-base">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? "default" : "outline"}
                    >
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Join thousands of developers who are already using ClingAI to build better software faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate("/auth")}>
                    Start Coding Now
                    <Code2 className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Documentation
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features; 