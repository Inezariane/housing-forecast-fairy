
import { Link } from "react-router-dom";
import { Home, Mail, Phone, ExternalLink, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Logo and Description */}
        <div className="md:col-span-4 space-y-4">
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all duration-300">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight">
              HomeValue<span className="text-primary">AI</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            HomeValueAI uses advanced machine learning to provide accurate house price predictions 
            based on location, size, features, and market trends.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-2 md:col-start-6">
          <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                Price History
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-foreground mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-muted-foreground text-sm">
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@homevalueai.com</span>
            </li>
            <li className="flex items-center text-muted-foreground text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center text-muted-foreground text-sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              <a 
                href="https://homevalueai.com" 
                className="hover:text-foreground transition-colors duration-200"
              >
                www.homevalueai.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border mt-12 pt-6 max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} HomeValueAI. All rights reserved.
        </p>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/80 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
