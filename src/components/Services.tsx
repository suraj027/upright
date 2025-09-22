import { motion } from "framer-motion";
import { TrendingUp, Shield, Calculator, PieChart, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Investments",
      description: "Comprehensive mutual fund advisory services with expert portfolio management and strategic asset allocation.",
      features: [
        "SIP Planning & Management",
        "Portfolio Diversification",
        "Risk Assessment",
        "Performance Monitoring",
        "Goal-based Investing",
        "Tax-efficient Strategies"
      ],
      color: "from-primary to-primary-light"
    },
    {
      icon: Shield,
      title: "General Insurance Services", 
      description: "Complete insurance solutions to protect you and your family from life's uncertainties with comprehensive coverage.",
      features: [
        "Life Insurance Planning",
        "Health Insurance Policies",
        "Motor Insurance",
        "Home Insurance",
        "Travel Insurance",
        "Policy Review & Claims"
      ],
      color: "from-success to-success-light"
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
      description: "Decades of combined experience with proven track record in financial markets."
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
    <section id="services" className="py-20 section-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to help you achieve your investment goals 
            and secure your family's future with expert guidance and professional management.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="card-professional p-8 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-center text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  className="btn-outline w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Upright Investor Services?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, regulatory compliance, and client-first approach makes us 
              the trusted choice for your financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-professional p-6 text-center group hover:shadow-large"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-primary mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl text-primary-foreground"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Investment Journey?</h3>
          <p className="mb-6 opacity-90">
            Get personalized investment advice from our experienced team. 
            Schedule a consultation today and take the first step towards financial success.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;