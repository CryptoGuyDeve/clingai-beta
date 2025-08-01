import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code2,
  Shield,
  FileText,
  Scale
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "Cling AI",
    ceo: "FaizuRrehman",
    email: "clingai.business@gmail.com",
    phone: "+92 326 0502484",
    address: "Lahore, Pakistan",
    website: "https://www.clingai.space"
  };

  const quickLinks = [
    { name: "Home", path: "/", icon: Brain },
    { name: "About Us", path: "/about", icon: FileText },
    { name: "Features", path: "/features", icon: Code2 },
    { name: "Pricing", path: "/pricing", icon: Scale },
    { name: "Documentation", path: "/docs", icon: FileText },
    { name: "Privacy Policy", path: "/about", icon: Shield },
  ];

  const legalLinks = [
    { name: "Terms of Service", path: "/about" },
    { name: "Privacy Policy", path: "/about" },
    { name: "Cookie Policy", path: "/about" },
    { name: "GDPR Compliance", path: "/about" },
    { name: "Data Protection", path: "/about" },
    { name: "Legal Notice", path: "/about" },
  ];

  const supportLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Contact Support", path: "/help" },
    { name: "API Documentation", path: "/docs" },
    { name: "Status Page", path: "/status" },
    { name: "Bug Report", path: "/help" },
    { name: "Feature Request", path: "/help" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/CryptoGuyDeve/clingai-beta", icon: Github },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Email", url: `mailto:${companyInfo.email}`, icon: Mail },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ClingAI</span>
              <Badge variant="secondary">Beta</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Cutting-edge AI-powered code generation and development assistance platform.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Stay updated:</span>
              <Button variant="outline" size="sm">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>© {currentYear} {companyInfo.name}. All rights reserved.</span>
              <span>•</span>
              <span>CEO: {companyInfo.ceo}</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                Visit Website
                <ExternalLink className="h-3 w-3" />
              </a>
              <span>•</span>
              <span>Made with ❤️ in Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 