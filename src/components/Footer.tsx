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
    <footer className="bg-slate-900 text-slate-100 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-primary p-2 sm:p-3 rounded-lg flex-shrink-0">
                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold">Upright Investor Services LLP</h3>
                <p className="text-xs sm:text-sm text-slate-400">Your Partner in Financial Growth</p>
              </div>
            </div>
            <p className="text-slate-300 mb-5 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              Professional investment and financial advisory services with over two decades of expertise. 
              Committed to helping you achieve your financial goals with integrity and precision.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">508 Vihav Supremus, Gotri Main Road, Vadodara 390021</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <a href="tel:+919879565591" className="text-xs sm:text-sm hover:text-primary transition-colors">
                  +91 98795 65591
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <a href="mailto:uprightmutual@gmail.com" className="text-xs sm:text-sm hover:text-primary transition-colors break-all">
                  uprightmutual@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs sm:text-sm text-slate-300 hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Connect With Us</h4>
            <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors" aria-label="LinkedIn"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors" aria-label="Twitter"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
            </div>
            <div className="bg-slate-800/60 p-3 sm:p-4 rounded-lg">
              <p className="text-xs text-slate-400">
                <strong>AMFI Registered Distributor</strong><br />
                ARN-184156 | Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. Insurance is the subject matter of solicitation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-xs sm:text-sm text-slate-400">
          © {currentYear} Upright Investor Services LLP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;