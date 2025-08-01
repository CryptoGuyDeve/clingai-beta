import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Footer from "@/components/ui/footer";
import { 
  Brain, 
  ArrowLeft, 
  Check, 
  X, 
  Crown, 
  Star,
  Zap,
  Shield,
  Users,
  Clock,
  Code2,
  Sparkles,
  Globe,
  Lock,
  BarChart3,
  MessageSquare,
  BookOpen,
  Download,
  Upload,
  ArrowRight,
  HelpCircle,
  CreditCard,
  Calendar,
  Mail,
  Phone
} from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  const [showMaintenanceDialog, setShowMaintenanceDialog] = useState(false);

  const pricingTiers = [
    {
      name: "Free",
      icon: Brain,
      description: "Perfect for getting started and exploring our platform",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { text: "5 AI requests per day", included: true },
        { text: "Basic code generation", included: true },
        { text: "Community support", included: true },
        { text: "Standard response time", included: true },
        { text: "Basic documentation", included: true },
        { text: "Limited language support", included: true },
        { text: "Advanced debugging", included: false },
        { text: "Priority support", included: false },
        { text: "Custom templates", included: false },
        { text: "Team collaboration", included: false },
        { text: "API access", included: false },
        { text: "Advanced analytics", included: false }
      ],
      popular: false,
      color: "text-gray-500",
      bgColor: "bg-gray-500/10"
    },
    {
      name: "Pro",
      icon: Crown,
      description: "For professional developers and small teams",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { text: "Unlimited AI requests", included: true },
        { text: "Advanced code generation", included: true },
        { text: "Priority support", included: true },
        { text: "Faster response time", included: true },
        { text: "Advanced documentation", included: true },
        { text: "All programming languages", included: true },
        { text: "Advanced debugging", included: true },
        { text: "Custom templates", included: true },
        { text: "Team collaboration (up to 5)", included: true },
        { text: "API access", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom integrations", included: false }
      ],
      popular: true,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "Enterprise",
      icon: Star,
      description: "For large organizations with advanced needs",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Custom AI models", included: true },
        { text: "Dedicated support", included: true },
        { text: "SLA guarantees", included: true },
        { text: "Advanced security", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced analytics", included: true },
        { text: "On-premise deployment", included: true },
        { text: "White-label options", included: true },
        { text: "Custom training", included: true },
        { text: "24/7 phone support", included: true }
      ],
      popular: false,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 5 AI requests per day, basic code generation, community support, and access to fundamental features. It's perfect for trying out our platform and getting started with AI-powered development."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. You can manage your subscription directly from your account dashboard."
    },
    {
      question: "Do you offer annual billing discounts?",
      answer: "Yes! We offer significant discounts for annual billing. The Pro plan is $290/year (saving $58) and the Enterprise plan is $990/year (saving $198) compared to monthly billing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, all paid plans come with a 14-day free trial. You can cancel anytime during the trial period without being charged. No credit card required to start your trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Free users get community support through our forums. Pro users get priority email support with 24-hour response time. Enterprise users get dedicated support with phone and video call options."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can cancel your subscription at any time from your account settings. You'll continue to have access to your plan features until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 30 days of your purchase for a full refund."
    }
  ];

  const features = [
    {
      category: "AI Capabilities",
      items: [
        { name: "Code Generation", free: "Basic", pro: "Advanced", enterprise: "Custom" },
        { name: "Debug Assistant", free: "Limited", pro: "Full", enterprise: "Advanced" },
        { name: "Language Support", free: "10+", pro: "50+", enterprise: "All" },
        { name: "Response Time", free: "Standard", pro: "Fast", enterprise: "Instant" }
      ]
    },
    {
      category: "Team Features",
      items: [
        { name: "Team Members", free: "1", pro: "5", enterprise: "Unlimited" },
        { name: "Collaboration", free: "No", pro: "Yes", enterprise: "Advanced" },
        { name: "Shared Projects", free: "No", pro: "Yes", enterprise: "Yes" },
        { name: "Role Management", free: "No", pro: "Basic", enterprise: "Advanced" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
        { name: "Response Time", free: "72h", pro: "24h", enterprise: "4h" },
        { name: "Security", free: "Standard", pro: "Enhanced", enterprise: "Enterprise" },
        { name: "SLA", free: "No", pro: "No", enterprise: "Yes" }
      ]
    }
  ];

  const getPrice = (tier: any) => {
    if (tier.monthlyPrice === 0) return "Free";
    const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
    return `$${price}${isAnnual ? '/year' : '/month'}`;
  };

  const getSavings = (tier: any) => {
    if (tier.monthlyPrice === 0) return null;
    const annualSavings = (tier.monthlyPrice * 12) - tier.annualPrice;
    return annualSavings > 0 ? `Save $${annualSavings}/year` : null;
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
            <Button variant="ghost" className="text-primary">Pricing</Button>
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your development needs. Start free and upgrade as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Save up to 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 mb-24">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${tier.bgColor}`}>
                      <tier.icon className={`h-6 w-6 ${tier.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold">{getPrice(tier)}</span>
                  </div>
                  {getSavings(tier) && (
                    <Badge variant="secondary" className="mb-4">
                      {getSavings(tier)}
                    </Badge>
                  )}
                  <CardDescription className="text-base">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 text-red-500" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                                     <Button 
                     className="w-full" 
                     variant={tier.popular ? "default" : "outline"}
                     onClick={() => {
                       if (tier.name === "Free") {
                         navigate("/auth");
                       } else {
                         setShowMaintenanceDialog(true);
                       }
                     }}
                   >
                     {tier.name === "Free" ? "Get Started" : tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                     <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Feature Comparison
              </h2>
              <p className="text-xl text-muted-foreground">
                Compare features across all plans to find the perfect fit
              </p>
            </div>

            <div className="space-y-8">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="font-medium text-sm">Feature</div>
                        <div className="text-center font-medium text-sm">Free</div>
                        <div className="text-center font-medium text-sm">Pro</div>
                        <div className="text-center font-medium text-sm">Enterprise</div>
                        
                        {category.items.map((item, itemIndex) => (
                          <>
                            <div key={`label-${itemIndex}`} className="text-sm text-muted-foreground">
                              {item.name}
                            </div>
                            <div key={`free-${itemIndex}`} className="text-center text-sm">
                              {item.free}
                            </div>
                            <div key={`pro-${itemIndex}`} className="text-center text-sm">
                              {item.pro}
                            </div>
                            <div key={`enterprise-${itemIndex}`} className="text-center text-sm">
                              {item.enterprise}
                            </div>
                          </>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
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
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Crown className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Join thousands of developers who are already using ClingAI to build better software faster.
                </p>
                                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button size="lg" onClick={() => setShowMaintenanceDialog(true)}>
                     Start Free Trial
                     <Zap className="ml-2 h-5 w-5" />
                   </Button>
                   <Button size="lg" variant="outline" onClick={() => setShowMaintenanceDialog(true)}>
                     Contact Sales
                     <MessageSquare className="ml-2 h-5 w-5" />
                   </Button>
                 </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

             {/* Footer */}
       <Footer />

       {/* Maintenance Dialog */}
       <Dialog open={showMaintenanceDialog} onOpenChange={setShowMaintenanceDialog}>
         <DialogContent className="sm:max-w-md">
           <DialogHeader>
             <DialogTitle className="flex items-center gap-2">
               <Shield className="h-5 w-5 text-orange-500" />
               Under Maintenance
             </DialogTitle>
             <DialogDescription>
               Our payment system is currently under maintenance. Please try again later or contact our support team for assistance.
             </DialogDescription>
           </DialogHeader>
           <div className="flex flex-col gap-4">
             <p className="text-sm text-muted-foreground">
               We're working hard to improve our payment processing system. In the meantime, you can:
             </p>
             <ul className="text-sm text-muted-foreground space-y-2">
               <li>• Try our free plan to explore the platform</li>
               <li>• Contact us at clingai.business@gmail.com</li>
               <li>• Check back later for updates</li>
             </ul>
             <div className="flex gap-2 pt-4">
               <Button 
                 variant="outline" 
                 onClick={() => setShowMaintenanceDialog(false)}
                 className="flex-1"
               >
                 Close
               </Button>
               <Button 
                 onClick={() => {
                   setShowMaintenanceDialog(false);
                   navigate("/auth");
                 }}
                 className="flex-1"
               >
                 Try Free Plan
               </Button>
             </div>
           </div>
         </DialogContent>
       </Dialog>
     </div>
   );
 };

export default Pricing; 