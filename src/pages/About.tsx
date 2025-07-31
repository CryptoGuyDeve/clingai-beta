import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, ArrowLeft, Shield, FileText, Copyright, Scale, Search, User, Calendar, Building, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const companyInfo = {
    name: "Cling AI",
    ceo: "FaizuRrehman",
    founded: "2025",
    description: "Cling AI is a cutting-edge artificial intelligence company focused on revolutionizing code generation and development assistance through advanced AI technologies.",
    mission: "To democratize AI-powered development tools and make coding accessible to everyone, from beginners to experienced developers.",
    vision: "To become the leading platform for AI-assisted software development, enabling developers to build better software faster and more efficiently."
  };

  const contactInfo = {
    email: "clingai.business@gmail.com",
    phone: "+92 326 0502484",
    address: "Lahore, Pakistan",
    website: "https://www.clingai.space"
  };

  const termsAndConditions = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Cling AI's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Cling AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on Cling AI's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      title: "Disclaimer",
      content: "The materials on Cling AI's website are provided on an 'as is' basis. Cling AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "Limitations",
      content: "In no event shall Cling AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cling AI's website, even if Cling AI or a Cling AI authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "Accuracy of Materials",
      content: "The materials appearing on Cling AI's website could include technical, typographical, or photographic errors. Cling AI does not warrant that any of the materials on its website are accurate, complete or current. Cling AI may make changes to the materials contained on its website at any time without notice."
    },
    {
      title: "Links",
      content: "Cling AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cling AI of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "Modifications",
      content: "Cling AI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use."
    },
    {
      title: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
    },
    {
      title: "Privacy Policy",
      content: "Your privacy is important to us. It is Cling AI's policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information."
    },
    {
      title: "Data Collection",
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. We also automatically collect certain information when you use our services, including log information, device information, and usage data."
    },
    {
      title: "Data Usage",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Cling AI and our users. We also use this information to offer you tailored content and to communicate with you about our services."
    },
    {
      title: "Data Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website and providing our services."
    },
    {
      title: "Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us."
    },
    {
      title: "Cookies",
      content: "We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "Third-Party Services",
      content: "Our service may contain links to third-party websites or services that are not owned or controlled by Cling AI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services."
    },
    {
      title: "Intellectual Property",
      content: "The service and its original content, features, and functionality are and will remain the exclusive property of Cling AI and its licensors. The service is protected by copyright, trademark, and other laws."
    },
    {
      title: "User-Generated Content",
      content: "By posting content to our service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service. You retain any and all of your rights to any content you submit, post, or display on or through the service."
    },
    {
      title: "Prohibited Uses",
      content: "You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service: in any way that violates any applicable federal, state, local, or international law or regulation; to transmit, or procure the sending of, any advertising or promotional material; to impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Cling AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service."
    },
    {
      title: "Indemnification",
      content: "You agree to defend, indemnify, and hold harmless Cling AI and its licensees and service providers from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the service."
    },
    {
      title: "Severability",
      content: "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."
    },
    {
      title: "Entire Agreement",
      content: "These Terms constitute the entire agreement between you and Cling AI regarding the use of the service, superseding any prior agreements between you and Cling AI relating to your use of the service."
    }
  ];

  const filteredTerms = termsAndConditions.filter(term =>
    term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    term.content.toLowerCase().includes(searchQuery.toLowerCase())
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
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Docs</Button>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About ClingAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Information related to our terms of service, policies, intellectual property, and compliance.
            </p>
          </div>

          {/* Company Information */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                <CardTitle>Company Information</CardTitle>
              </div>
              <CardDescription>
                Learn more about ClingAI and our mission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Company Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Company Name:</span>
                      <span className="text-muted-foreground">{companyInfo.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">CEO:</span>
                      <span className="text-muted-foreground">{companyInfo.ceo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Founded:</span>
                      <span className="text-muted-foreground">{companyInfo.founded}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Email:</span>
                      <span className="text-muted-foreground">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Phone:</span>
                      <span className="text-muted-foreground">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Address:</span>
                      <span className="text-muted-foreground">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Mission</h4>
                  <p className="text-muted-foreground">{companyInfo.mission}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Vision</h4>
                  <p className="text-muted-foreground">{companyInfo.vision}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{companyInfo.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs for Different Sections */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Terms of Service */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle>Terms of Service</CardTitle>
                    </div>
                    <CardDescription>
                      Our service terms and conditions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      By using ClingAI, you agree to our terms of service which govern your use of our AI-powered code generation platform.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Acceptable use of our AI services</li>
                      <li>• User responsibilities and obligations</li>
                      <li>• Service limitations and disclaimers</li>
                      <li>• Termination and account suspension policies</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Privacy Policy */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <CardTitle>Privacy Policy</CardTitle>
                    </div>
                    <CardDescription>
                      How we handle your data and privacy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We are committed to protecting your privacy and ensuring the security of your personal information.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Data collection and usage practices</li>
                      <li>• Information sharing and disclosure</li>
                      <li>• Data security measures</li>
                      <li>• Your rights and choices</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Intellectual Property */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Copyright className="h-5 w-5 text-primary" />
                      <CardTitle>Intellectual Property</CardTitle>
                    </div>
                    <CardDescription>
                      Rights and ownership of content and technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Understanding intellectual property rights and ownership of generated content and platform technology.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ownership of generated code and content</li>
                      <li>• Platform technology and trademarks</li>
                      <li>• User-generated content rights</li>
                      <li>• Licensing and usage permissions</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Compliance */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-primary" />
                      <CardTitle>Compliance</CardTitle>
                    </div>
                    <CardDescription>
                      Regulatory and legal compliance standards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our commitment to meeting regulatory requirements and maintaining legal compliance standards.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Data protection regulations (GDPR, CCPA)</li>
                      <li>• Industry-specific compliance standards</li>
                      <li>• Security certifications and audits</li>
                      <li>• Legal reporting and disclosure obligations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="terms" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Terms and Conditions</CardTitle>
                  </div>
                  <CardDescription>
                    Complete terms and conditions for using ClingAI services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search terms and conditions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Terms Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    {filteredTerms.map((term, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <span className="font-medium">{term.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {term.content}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {filteredTerms.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No terms found matching your search.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <CardTitle>Privacy Policy</CardTitle>
                  </div>
                  <CardDescription>
                    How we collect, use, and protect your information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Information We Collect</h3>
                      <p className="text-muted-foreground mb-4">
                        We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Account information (name, email, password)</li>
                        <li>• Usage data and analytics</li>
                        <li>• Communication preferences</li>
                        <li>• Technical information about your device</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">How We Use Your Information</h3>
                      <p className="text-muted-foreground mb-4">
                        We use the information we collect to provide, maintain, and improve our services.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Provide and maintain our services</li>
                        <li>• Improve and personalize user experience</li>
                        <li>• Communicate with you about updates and features</li>
                        <li>• Ensure security and prevent fraud</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Data Security</h3>
                      <p className="text-muted-foreground mb-4">
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Encryption of data in transit and at rest</li>
                        <li>• Regular security audits and assessments</li>
                        <li>• Access controls and authentication</li>
                        <li>• Incident response and monitoring</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Your Rights</h3>
                      <p className="text-muted-foreground mb-4">
                        You have certain rights regarding your personal information, including the right to access, correct, or delete your data.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Access your personal information</li>
                        <li>• Correct inaccurate data</li>
                        <li>• Request deletion of your data</li>
                        <li>• Opt-out of marketing communications</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <CardTitle>Compliance & Legal</CardTitle>
                  </div>
                  <CardDescription>
                    Our commitment to regulatory compliance and legal standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Data Protection</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• GDPR (General Data Protection Regulation)</li>
                        <li>• CCPA (California Consumer Privacy Act)</li>
                        <li>• PIPEDA (Personal Information Protection)</li>
                        <li>• LGPD (Brazilian Data Protection Law)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Security Standards</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• SOC 2 Type II Certification</li>
                        <li>• ISO 27001 Information Security</li>
                        <li>• PCI DSS Compliance</li>
                        <li>• Regular Security Audits</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Industry Compliance</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• HIPAA (Healthcare Data Protection)</li>
                        <li>• SOX (Sarbanes-Oxley Act)</li>
                        <li>• FERPA (Educational Privacy)</li>
                        <li>• COPPA (Children's Privacy)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Legal Framework</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Terms of Service</li>
                        <li>• Privacy Policy</li>
                        <li>• Data Processing Agreements</li>
                        <li>• Service Level Agreements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                For questions about our policies and compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm text-muted-foreground">
                    For questions about our terms, policies, or compliance standards, please contact our legal team at clingai.business@gmail.com
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Updates and Changes</h4>
                  <p className="text-sm text-muted-foreground">
                    We may update these policies periodically. Users will be notified of significant changes through our platform or email communications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About; 