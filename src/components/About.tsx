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
    <section id="about" className="py-24 bg-white">
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
            About Upright Investor Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of integrity, expertise, and long-term value creation, 
            we are your trusted partners in financial growth and security.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={officeBuilding} 
                alt="Upright Investor Services Office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Excellence in Financial Advisory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Upright Investor Services LLP, we combine decades of investment experience 
                with a deep commitment to our clients' financial success. Our approach is 
                built on the foundation of <strong>simple, uncluttered, and no-nonsense investing</strong> 
                principles that focus on long-term wealth creation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our headquarters at Vihav Supremus, Gotri Main Road, Vadodara, we serve 
                investors with a comprehensive range of financial services, including mutual 
                fund investments and general insurance solutions.
              </p>

              {/* Company Details */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-primary mb-4 text-lg">Company Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">AMFI Registration:</span>
                    <span className="font-bold text-gray-700">ARN-184156</span>
                  </div>
                  <hr/>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Location:</span>
                    <span className="font-bold text-gray-700">Vadodara, Gujarat</span>
                  </div>
                  <hr/>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Services:</span>
                    <span className="font-bold text-gray-700">Mutual Funds & Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <feature.icon className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;