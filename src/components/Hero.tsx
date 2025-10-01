import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, Briefcase, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHighZoom } from "@/hooks/use-high-zoom";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const isHighZoom = useHighZoom();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: TrendingUp, primary: "20+", secondary: "Years Experience" },
    { icon: Users, primary: "1000+", secondary: "Happy Investors" },
    { icon: Shield, primary: "ARN-184156", secondary: "AMFI Registered" },
    { icon: Briefcase, primary: "Wealth Growth", secondary: "Strategic Investment" },
    { icon: HeartHandshake, primary: "Secure Future", secondary: "Insurance Planning" },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`min-h-screen flex items-start lg:items-center justify-center relative overflow-hidden parallax-container ${
        isHighZoom ? "pt-44 pb-12 px-4" : "pt-36 px-4"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
      }}
    >
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero opacity-50"
        style={{ y }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className={`mx-auto text-center ${isHighZoom ? "max-w-3xl" : "max-w-5xl"}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`${
                isHighZoom ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              } font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight tracking-tight px-2`}
            >
              When you come to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Upright</span>,<br className="hidden sm:block" />
              you've got it{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Right!</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`${
                isHighZoom ? "text-base sm:text-lg mb-6 sm:mb-8" : "text-lg sm:text-xl mb-8 sm:mb-10"
              } text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2`}
            >
              Professional investment and financial advisory services with over two decades of expertise. 
              Your trusted partner for <strong>Mutual Funds</strong> and <strong>General Insurance</strong> solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`flex flex-col sm:flex-row justify-center items-center ${
                isHighZoom ? "gap-3 mb-10 sm:mb-12" : "gap-3 sm:gap-4 mb-12 sm:mb-16"
              } px-2`}
            >
              <Button 
                onClick={() => scrollToSection("#services")}
                className={`w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-lg shadow-accent hover:shadow-large transform hover:-translate-y-1 transition-all duration-300 ${
                  isHighZoom ? "px-6 py-5 text-base" : "px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                }`}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#contact")}
                className={`w-full sm:w-auto glass hover:glass-strong border-primary/20 text-foreground hover:text-primary font-semibold rounded-lg transition-all duration-300 ${
                  isHighZoom ? "px-6 py-5 text-base" : "px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                }`}
              >
                Get Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={
              isHighZoom
                ? "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5"
                : "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
            }
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.secondary}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div
                  className={`glass hover:glass-strong rounded-xl shadow-soft hover:shadow-accent h-full flex flex-col items-center justify-center transition-all duration-300 ${
                  isHighZoom ? "p-4 sm:p-5" : "p-3 sm:p-4"
                }`}
                >
                  <feature.icon className={`text-primary mx-auto mb-2 sm:mb-3 ${isHighZoom ? "h-6 sm:h-7 w-6 sm:w-7" : "h-7 sm:h-8 w-7 sm:w-8"}`} />
                  <div className={`font-bold text-foreground ${isHighZoom ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>{feature.primary}</div>
                  <div className={`text-muted-foreground ${isHighZoom ? "text-xs sm:text-sm" : "text-xs sm:text-sm"}`}>{feature.secondary}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;