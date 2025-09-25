import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users, Briefcase, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHighZoom } from "@/hooks/use-high-zoom";

const Hero = () => {
  const isHighZoom = useHighZoom();

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
      id="home"
      className={`min-h-screen flex items-start lg:items-center justify-center relative overflow-hidden bg-background transition-colors ${
        isHighZoom ? "pt-44 pb-12" : "pt-36"
      }`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className={`mx-auto text-center ${isHighZoom ? "max-w-3xl" : "max-w-4xl"}`}>
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
                isHighZoom ? "text-3xl sm:text-4xl md:text-5xl" : "text-4xl md:text-6xl"
              } font-bold mb-6 text-foreground leading-tight tracking-tight`}
            >
              When you come to{" "}
              <span className="text-primary">Upright</span>,<br />
              you've got it{" "}
              <span className="text-primary">Right!</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`${
                isHighZoom ? "text-lg mb-8" : "text-xl mb-10"
              } text-muted-foreground max-w-3xl mx-auto leading-relaxed`}
            >
              Professional investment and financial advisory services with over two decades of expertise. 
              Your trusted partner for <strong>Mutual Funds</strong> and <strong>General Insurance</strong> solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`flex flex-col sm:flex-row justify-center ${
                isHighZoom ? "gap-3 mb-12" : "gap-4 mb-16"
              }`}
            >
              <Button 
                onClick={() => scrollToSection("#services")}
                className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                  isHighZoom ? "px-6 py-5 text-base" : "px-8 py-6 text-lg"
                }`}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className={`border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all duration-300 ${
                  isHighZoom ? "px-6 py-5 text-base" : "px-8 py-6 text-lg"
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
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            }
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.secondary}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div
                  className={`bg-muted/60 dark:bg-muted/20 rounded-xl border border-border/40 dark:border-border/30 h-full flex flex-col items-center justify-center transition-colors ${
                  isHighZoom ? "p-5" : "p-4"
                }`}
                >
                  <feature.icon className={`text-primary mx-auto mb-3 ${isHighZoom ? "h-7 w-7" : "h-8 w-8"}`} />
                  <div className={`font-bold text-foreground ${isHighZoom ? "text-lg" : "text-xl"}`}>{feature.primary}</div>
                  <div className={`text-muted-foreground ${isHighZoom ? "text-sm" : "text-sm"}`}>{feature.secondary}</div>
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