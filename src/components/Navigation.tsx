import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHighZoom } from "@/hooks/use-high-zoom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const forceMobile = useHighZoom(1.23);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      let current = "Home";
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= 100) {
          current = item.name;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!forceMobile && window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  }, [forceMobile]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start("scrolled");
    } else {
      controls.start("top");
    }
  }, [isScrolled, controls]);

  const navVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      borderColor: "rgba(226, 232, 240, 0)",
      boxShadow: "0 0 0 0 rgba(0,0,0,0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(8px)",
      borderColor: "rgba(226, 232, 240, 0.4)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      variants={navVariants}
      initial="top"
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <div className="font-black text-2xl text-primary">UIG</div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-primary">Upright Investor</h1>
              <p className="text-xs text-muted-foreground">Services LLP</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className={`${forceMobile ? "hidden" : "hidden lg:flex"} items-center space-x-2 bg-white/50 backdrop-blur-sm p-2 rounded-full border border-gray-200/80 absolute left-1/2 -translate-x-1/2`}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeLink === item.name ? "default" : "ghost"}
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`transition-all duration-200 rounded-full ${
                  activeLink === item.name
                    ? "shadow-md"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className={forceMobile ? "block" : "block lg:hidden"}>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          id="mobile-nav"
          className={`${forceMobile ? "" : "lg:hidden"} absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={activeLink === item.name ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;