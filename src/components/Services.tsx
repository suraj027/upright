import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Shield, Calculator, PieChart, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHighZoom } from "@/hooks/use-high-zoom";

const Services = () => {
  const isHighZoom = useHighZoom();
  const sectionRef = useRef(null);
  const stackSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isStackInView, setIsStackInView] = useState(false);

  useEffect(() => {
    const stackSection = stackSectionRef.current;
    if (!stackSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStackInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(stackSection);

    const handleScroll = () => {
      if (!isStackInView || !stackSection) return;

      requestAnimationFrame(() => {
        const rect = stackSection.getBoundingClientRect();
        const sectionHeight = stackSection.offsetHeight;
        const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isStackInView]);

  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Investments",
      description: "Comprehensive mutual fund advisory with expert portfolio management and strategic asset allocation.",
      features: [
        "SIP Planning & Management",
        "Portfolio Diversification",
        "Risk Assessment",
        "Performance Monitoring",
        "Goal-based Investing",
        "Tax-efficient Strategies"
      ],
    },
    {
      icon: Shield,
      title: "General Insurance Services", 
      description: "Complete insurance solutions to protect you and your family from life's uncertainties.",
      features: [
        "Life Insurance Planning",
        "Health Insurance Policies",
        "Motor Insurance",
        "Home Insurance",
        "Travel Insurance",
        "Policy Review & Claims"
      ],
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "AMFI Registered",
      description: "Licensed and regulated distributor (ARN-184156) ensuring compliance and ethical practices."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Decades of combined experience with a proven track record in financial markets."
    },
    {
      icon: Calculator,
      title: "Personalized Approach",
      description: "Tailored investment strategies based on your unique financial goals and risk profile."
    },
    {
      icon: PieChart,
      title: "Comprehensive Planning",
      description: "Holistic financial planning covering investments, insurance, and wealth management."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative overflow-hidden ${isHighZoom ? "py-12 sm:py-16 md:py-20" : "py-16 sm:py-20 md:py-24"}`}
      style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            className={`${
              isHighZoom ? "text-2xl sm:text-3xl md:text-4xl" : "text-3xl sm:text-4xl md:text-5xl"
            } font-display font-bold mb-3 sm:mb-4 text-foreground px-2`}
          >
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p
            className={`${
              isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"
            } text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2`}
          >
            Comprehensive financial solutions designed to help you achieve your investment goals 
            and secure your family's future with expert guidance.
          </p>
        </motion.div>

        {/* Card Stack Animation Section */}
        <div 
          ref={stackSectionRef}
          className="relative"
          style={{ height: '300vh' }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl mx-auto px-4" style={{ height: '70vh', maxHeight: '700px' }}>
              {services.map((service, index) => {
                const cardProgress = index === 0 ? scrollProgress * 3 : (scrollProgress - 0.33 * index) * 3;
                const isActive = cardProgress >= 0 && cardProgress <= 1;
                const translateY = isActive ? (1 - cardProgress) * 100 : cardProgress < 0 ? 100 : 0;
                const scale = isActive ? 0.9 + (cardProgress * 0.1) : cardProgress > 1 ? 1 : 0.9;
                const opacity = isActive ? cardProgress : cardProgress > 1 ? 1 : 0;

                return (
                  <div
                    key={service.title}
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                      transform: `translateY(${translateY}%) scale(${scale})`,
                      opacity: opacity,
                      zIndex: 10 + index * 10,
                      transition: 'transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s ease',
                      willChange: 'transform, opacity',
                      pointerEvents: cardProgress >= 0.8 ? 'auto' : 'none',
                    }}
                  >
                    <div className="relative h-full w-full">
                      {/* Background with gradient overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background/40"
                        style={{
                          backgroundImage: index === 0 
                            ? 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1))' 
                            : 'linear-gradient(135deg, hsl(var(--primary) / 0.25), hsl(var(--muted) / 0.3))',
                          backgroundBlendMode: 'overlay'
                        }}
                      />
                      
                      {/* Glass card content */}
                      <div className="relative h-full glass-strong backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit mb-6">
                          <service.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium text-foreground">Premium Service</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className={`${isHighZoom ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl md:text-5xl"} font-display font-bold mb-4 sm:mb-6 text-foreground`}>
                            {service.title}
                          </h3>
                          <p className={`${isHighZoom ? "text-base sm:text-lg" : "text-lg sm:text-xl md:text-2xl"} text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed`}>
                            {service.description}
                          </p>
                          
                          {/* Features grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex gap-4">
                          <Button 
                            onClick={scrollToContact}
                            className="bg-gradient-primary hover:opacity-90 transition-opacity"
                            size={isHighZoom ? "default" : "lg"}
                          >
                            Get Started
                          </Button>
                          <Button 
                            onClick={scrollToContact}
                            variant="outline"
                            className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
                            size={isHighZoom ? "default" : "lg"}
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
              <h3 className={`${isHighZoom ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} font-display font-bold text-foreground mb-2 sm:mb-3`}>
                Why <span className="bg-gradient-primary bg-clip-text text-transparent">Choose Us?</span>
              </h3>
            <p className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} text-muted-foreground max-w-2xl mx-auto`}>
              Our commitment to excellence, regulatory compliance, and a client-first approach makes us 
              the trusted choice for your financial journey.
            </p>
          </div>

          <div
            className={`grid ${
              isHighZoom
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
            }`}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`glass hover:glass-strong rounded-lg shadow-soft hover:shadow-accent text-center transition-all duration-300 ${
                  isHighZoom ? "p-4 sm:p-5" : "p-5 sm:p-6"
                }`}
              >
                <div className="bg-gradient-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-accent">
                  <item.icon className={`${isHighZoom ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6 sm:h-8 sm:w-8"} text-white`} />
                </div>
                <h4 className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} font-semibold text-foreground mb-2`}>
                  {item.title}
                </h4>
                <p className={`${isHighZoom ? "text-xs sm:text-sm" : "text-sm sm:text-base"} text-muted-foreground`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className={`text-center bg-gradient-primary rounded-xl sm:rounded-2xl text-white shadow-accent ${
            isHighZoom ? "mt-12 sm:mt-16 p-6 sm:p-8" : "mt-14 sm:mt-20 p-8 sm:p-10"
          }`}
        >
          <h3 className={`${isHighZoom ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} font-display font-bold mb-3 sm:mb-4 px-2`}>
            Ready to Start Your Investment Journey?
          </h3>
          <p className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2`}>
            Get personalized investment advice from our experienced team. 
            Schedule a consultation today and take the first step towards financial success.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            size={isHighZoom ? "default" : "lg"}
            className="font-semibold w-full sm:w-auto"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;