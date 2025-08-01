import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/ui/footer";
import { 
  Brain, 
  ArrowLeft, 
  Search, 
  HelpCircle, 
  Mail, 
  MessageSquare,
  Phone,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  ExternalLink,
  Send,
  FileText,
  Settings,
  Bug,
  Lightbulb,
  Star,
  Users,
  Shield,
  Zap,
  Code2,
  Crown,
  Sparkles,
  Globe,
  Lock,
  BarChart3,
  Download,
  Upload,
  ArrowRight,
  CreditCard,
  Calendar,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

const HelpCenter = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("contact");
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    issueType: "general"
  });

  const contactInfo = {
    email: "clingai.business@gmail.com",
    phone: "+1 (555) 123-4567",
    address: "123 AI Street, Tech City, TC 12345",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    responseTime: "Within 24 hours"
  };

  const issueTypes = [
    { value: "general", label: "General Inquiry", icon: HelpCircle },
    { value: "technical", label: "Technical Issue", icon: Bug },
    { value: "billing", label: "Billing & Payment", icon: CreditCard },
    { value: "feature", label: "Feature Request", icon: Lightbulb },
    { value: "bug", label: "Bug Report", icon: AlertCircle },
    { value: "account", label: "Account Issue", icon: Users }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get direct help from our team",
      icon: MessageSquare,
      action: () => setShowContactDialog(true),
      color: "text-blue-500"
    },
    {
      title: "Email Us",
      description: "Send us a detailed message",
      icon: Mail,
      action: () => window.open(`mailto:${contactInfo.email}`, "_blank"),
      color: "text-green-500"
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive docs",
      icon: FileText,
      action: () => navigate("/docs"),
      color: "text-purple-500"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: Users,
      action: () => window.open("#", "_blank"),
      color: "text-orange-500"
    }
  ];

  const faqCategories = [
    {
      category: "Getting Started",
      icon: Zap,
      faqs: [
        {
          question: "How do I create an account?",
          answer: "Visit our signup page and create your account using your email address. You'll receive a verification email to activate your account."
        },
        {
          question: "What are the different AI modes?",
          answer: "We offer 4 AI modes: Code Generation (create new code), Debug Assistant (fix issues), General Assistant (get answers), and Code Enhancement (improve existing code)."
        },
        {
          question: "How do I choose the right AI mode?",
          answer: "Select Code Generation when you want to build new features, Debug Assistant for fixing errors, General Assistant for questions, and Code Enhancement for improving existing code."
        }
      ]
    },
    {
      category: "Technical Issues",
      icon: Settings,
      faqs: [
        {
          question: "Why is my code generation slow?",
          answer: "Code generation speed depends on complexity and server load. For faster results, try breaking complex requests into smaller parts or upgrade to Pro for priority processing."
        },
        {
          question: "How do I report a bug?",
          answer: "Use our contact form or email us directly at clingai.business@gmail.com with detailed information about the issue, including steps to reproduce and your browser/OS details."
        },
        {
          question: "The AI isn't understanding my request",
          answer: "Try being more specific in your description. Include the programming language, desired functionality, and any specific requirements. You can also provide code examples for better context."
        }
      ]
    },
    {
      category: "Billing & Subscriptions",
      icon: CreditCard,
      faqs: [
        {
          question: "How do I upgrade my plan?",
          answer: "Go to your account settings and select 'Upgrade Plan'. You can choose between Pro ($29/month) and Enterprise ($99/month) plans with different features and limits."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team within 30 days for a full refund."
        }
      ]
    },
    {
      category: "Account & Security",
      icon: Shield,
      faqs: [
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a password reset link via email."
        },
        {
          question: "Is my code and data secure?",
          answer: "Yes, we use industry-standard encryption and security measures. Your code and conversations are protected and we never share your data with third parties."
        },
        {
          question: "Can I export my conversation history?",
          answer: "Currently, conversation history is stored for your convenience but cannot be exported. We're working on adding this feature in future updates."
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.flatMap(category => 
    category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Contact form submitted:", contactForm);
    setShowContactDialog(false);
    setContactForm({ name: "", email: "", subject: "", message: "", issueType: "general" });
    // Show success message
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

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
            <Button variant="ghost" onClick={() => navigate("/docs")}>Docs</Button>
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
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get the help you need. Find answers, contact support, and resolve issues quickly.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Get in touch with our support team for personalized assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.responseTime}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Help Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Contact Support Tab */}
            <TabsContent value="contact" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
                  <p className="text-muted-foreground mb-8">
                    Need help? Our support team is here to assist you with any questions or issues.
                  </p>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Send us a message</CardTitle>
                        <CardDescription>
                          Fill out the form below and we'll get back to you within 24 hours.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <label className="text-sm font-medium">Name</label>
                              <Input
                                value={contactForm.name}
                                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                placeholder="Your name"
                                required
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Email</label>
                              <Input
                                type="email"
                                value={contactForm.email}
                                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                placeholder="your@email.com"
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Issue Type</label>
                            <select
                              value={contactForm.issueType}
                              onChange={(e) => setContactForm({...contactForm, issueType: e.target.value})}
                              className="w-full p-2 border rounded-md bg-background"
                            >
                              {issueTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Subject</label>
                            <Input
                              value={contactForm.subject}
                              onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                              placeholder="Brief description of your issue"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium">Message</label>
                            <Textarea
                              value={contactForm.message}
                              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                              placeholder="Please provide detailed information about your issue..."
                              rows={5}
                              required
                            />
                          </div>
                          
                          <Button type="submit" className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>

                    {/* Direct Contact */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-primary" />
                            Email Support
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            For detailed inquiries or complex issues, email us directly.
                          </p>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open(`mailto:${contactInfo.email}`, "_blank")}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            Live Chat
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            Get instant help during business hours.
                          </p>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => alert("Live chat feature coming soon!")}
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Start Chat
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-primary" />
                            Phone Support
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            Call us for urgent issues during business hours.
                          </p>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open(`tel:${contactInfo.phone}`, "_blank")}
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
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
                    Find quick answers to common questions about ClingAI.
                  </p>

                  {searchQuery && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Search Results</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFaqs.map((faq, index) => (
                          <AccordionItem key={index} value={`search-${index}`}>
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
                  )}

                  <div className="space-y-8">
                    {faqCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <category.icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{category.category}</h3>
                        </div>
                        
                        <Accordion type="single" collapsible className="w-full">
                          {category.faqs.map((faq, faqIndex) => (
                            <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="mt-6">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Helpful Resources</h2>
                  <p className="text-muted-foreground mb-8">
                    Explore these resources to get the most out of ClingAI.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <FileText className="h-6 w-6 text-blue-500" />
                          <CardTitle>Documentation</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Comprehensive guides and API documentation.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => navigate("/docs")}>
                          View Docs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Users className="h-6 w-6 text-green-500" />
                          <CardTitle>Community Forum</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Connect with other developers and share tips.
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
                          <Github className="h-6 w-6 text-purple-500" />
                          <CardTitle>GitHub</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Open-source components and examples.
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
                          <Lightbulb className="h-6 w-6 text-orange-500" />
                          <CardTitle>Feature Requests</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Suggest new features and improvements.
                        </p>
                        <Button variant="outline" className="w-full">
                          Submit Request
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Bug className="h-6 w-6 text-red-500" />
                          <CardTitle>Bug Reports</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Report bugs and technical issues.
                        </p>
                        <Button variant="outline" className="w-full">
                          Report Bug
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Star className="h-6 w-6 text-yellow-500" />
                          <CardTitle>Status Page</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Check system status and uptime.
                        </p>
                        <Button variant="outline" className="w-full">
                          Check Status
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HelpCenter; 