import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Mutual Fund Advisory",
    "SIP Planning",
    "Insurance Services", 
    "Portfolio Review",
    "Financial Planning",
    "Investment Consultation"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Upright Investor Services LLP</h3>
                <p className="text-sm opacity-80">When you come to Upright, you've got it Right!</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional investment and financial advisory services with over two decades of expertise. 
              Your trusted partner for Mutual Funds and General Insurance solutions, 
              committed to helping you achieve your financial goals.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">508 Vihav Supremus, Gotri Main Road, Vadodara 390021</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919879565591" className="text-sm hover:text-accent transition-colors">
                  +91 98795 65591
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:uprightmutual@gmail.com" className="text-sm hover:text-accent transition-colors">
                  uprightmutual@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-primary-foreground/10 p-4 rounded-lg">
              <p className="text-sm">
                <strong>AMFI Registered Distributor</strong><br />
                ARN-184156 | Mutual Fund investments are subject to market risks.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Upright Investor Services LLP. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-primary-foreground/60">
              <div className="text-center md:text-left">
                <p>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
                <p className="mt-1">Insurance is the subject matter of solicitation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs">
            <a 
              href="https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <span>Dr. Hitesh Patel - ValuePickr Mentor</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <a 
              href="https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <span>Featured in Economic Times</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;