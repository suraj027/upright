import { motion } from "framer-motion";
import { TrendingUp, Shield, Calculator, PieChart, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
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
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to help you achieve your investment goals 
            and secure your family's future with expert guidance.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full mt-8"
                    size="lg"
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Us?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence, regulatory compliance, and a client-first approach makes us 
              the trusted choice for your financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">
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
          className="text-center mt-20 p-10 bg-gradient-to-r from-primary to-blue-600 rounded-2xl text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Get personalized investment advice from our experienced team. 
            Schedule a consultation today and take the first step towards financial success.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;