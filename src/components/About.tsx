import { motion } from "framer-motion";
import { Target, Eye, Award, Building } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide reliable and upright financial guidance, helping our valued investors achieve their financial goals through expert advice and personalized service."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To be a reliable and upright financial guide for our valued investors, building long-term wealth through disciplined investment strategies."
    },
    {
      icon: Award,
      title: "AMFI Registered",
      description: "Licensed distributor with ARN-184156, ensuring compliance with regulatory standards and ethical investment practices."
    },
    {
      icon: Building,
      title: "Established Presence",
      description: "Located in the heart of Vadodara, Gujarat, serving investors across the region with comprehensive financial solutions."
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            About Upright Investor Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of integrity, expertise, and long-term value creation, 
            we are your trusted partners in financial growth and security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="prose prose-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Excellence in Financial Advisory
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Upright Investor Services LLP, we combine decades of investment experience 
                  with a deep commitment to our clients' financial success. Our approach is 
                  built on the foundation of <strong>simple, uncluttered, and no-nonsense investing</strong> 
                  principles that focus on long-term wealth creation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From our headquarters at Vihav Supremus, Gotri Main Road, Vadodara, we serve 
                  investors with a comprehensive range of financial services, including mutual 
                  fund investments and general insurance solutions.
                </p>
              </div>

              {/* Company Details */}
              <div className="card-professional p-6">
                <h4 className="font-semibold text-primary mb-4">Company Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AMFI Registration:</span>
                    <span className="font-medium">ARN-184156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Vadodara, Gujarat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Services:</span>
                    <span className="font-medium">Mutual Funds & Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img 
                src={officeBuilding} 
                alt="Upright Investor Services Office"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-professional p-6 text-center group hover:shadow-large"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-primary mb-3">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;