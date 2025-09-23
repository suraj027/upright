import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary p-3 rounded-lg">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Upright Investor Services LLP</h3>
                <p className="text-sm text-gray-400">Your Partner in Financial Growth</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Professional investment and financial advisory services with over two decades of expertise. 
              Committed to helping you achieve your financial goals with integrity and precision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">508 Vihav Supremus, Gotri Main Road, Vadodara 390021</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919879565591" className="text-sm hover:text-primary transition-colors">
                  +91 98795 65591
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:uprightmutual@gmail.com" className="text-sm hover:text-primary transition-colors">
                  uprightmutual@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-xs text-gray-400">
                <strong>AMFI Registered Distributor</strong><br />
                ARN-184156 | Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Insurance is the subject matter of solicitation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-400">
          © {currentYear} Upright Investor Services LLP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;