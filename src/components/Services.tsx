import { motion } from "framer-motion";
import { TrendingUp, Shield, Calculator, PieChart, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHighZoom } from "@/hooks/use-high-zoom";

const Services = () => {
  const isHighZoom = useHighZoom();

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
      id="services"
      className={`bg-muted/40 dark:bg-background transition-colors ${isHighZoom ? "py-12 sm:py-16 md:py-20" : "py-16 sm:py-20 md:py-24"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2
            className={`${
              isHighZoom ? "text-2xl sm:text-3xl md:text-4xl" : "text-3xl sm:text-4xl md:text-5xl"
            } font-bold mb-3 sm:mb-4 text-foreground px-2`}
          >
            Our Services
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

        {/* Main Services */}
        <div
          className={`grid ${
            isHighZoom
              ? "grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16"
              : "grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20"
          }`}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pb-3 sm:pb-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className={isHighZoom ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6 sm:h-7 sm:w-7"} />
                  </div>
                  <CardTitle className={`${isHighZoom ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} font-bold text-foreground`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} text-muted-foreground mb-4 sm:mb-6`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className={`${isHighZoom ? "h-4 w-4" : "h-4 w-4 sm:h-5 sm:w-5"} text-green-500 mr-2 sm:mr-3 flex-shrink-0`} />
                        <span className={`${isHighZoom ? "text-xs sm:text-sm" : "text-sm sm:text-base"} text-foreground`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full mt-6 sm:mt-8"
                    size={isHighZoom ? "default" : "lg"}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
            <h3 className={`${isHighZoom ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} font-bold text-foreground mb-2 sm:mb-3`}>
              Why Choose Us?
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
                className={`bg-card text-card-foreground rounded-lg shadow-md text-center ${
                  isHighZoom ? "p-4 sm:p-5" : "p-5 sm:p-6"
                }`}
              >
                <div className="bg-primary/15 text-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className={isHighZoom ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6 sm:h-8 sm:w-8"} />
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
          className={`text-center bg-gradient-to-r from-primary to-blue-600 rounded-xl sm:rounded-2xl text-white shadow-xl ${
            isHighZoom ? "mt-12 sm:mt-16 p-6 sm:p-8" : "mt-14 sm:mt-20 p-8 sm:p-10"
          }`}
        >
          <h3 className={`${isHighZoom ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"} font-bold mb-3 sm:mb-4 px-2`}>
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