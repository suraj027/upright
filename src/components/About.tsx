import { motion } from "framer-motion";
import { Target, Eye, Award, Building } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
import { useHighZoom } from "@/hooks/use-high-zoom";

const About = () => {
  const isHighZoom = useHighZoom();

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
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-background transition-colors">
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
            About Upright Investor Services
          </h2>
          <p
            className={`${
              isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"
            } text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2`}
          >
            Founded on the principles of integrity, expertise, and long-term value creation, 
            we are your trusted partners in financial growth and security.
          </p>
        </motion.div>

        <div
          className={`grid items-center ${
            isHighZoom
              ? "gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2"
              : "gap-10 sm:gap-12 md:gap-16 md:grid-cols-2"
          }`}
        >
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
              <h3
                className={`${
                  isHighZoom ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                } font-bold text-primary mb-3 sm:mb-4`}
              >
                Excellence in Financial Advisory
              </h3>
              <p className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} text-muted-foreground leading-relaxed`}>
                At Upright Investor Services LLP, we combine decades of investment experience 
                with a deep commitment to our clients' financial success. Our approach is 
                built on the foundation of <strong>simple, uncluttered, and no-nonsense investing</strong> 
                principles that focus on long-term wealth creation.
              </p>
              <p className={`${isHighZoom ? "text-sm sm:text-base" : "text-base sm:text-lg"} text-muted-foreground leading-relaxed`}>
                From our headquarters at Vihav Supremus, Gotri Main Road, Vadodara, we serve 
                investors with a comprehensive range of financial services, including mutual 
                fund investments and general insurance solutions.
              </p>

              {/* Company Details */}
              <div className="bg-muted/60 dark:bg-muted/20 border border-border/60 dark:border-border/40 rounded-lg p-4 sm:p-6 mt-5 sm:mt-6 transition-colors">
                <h4 className="font-semibold text-primary mb-4 text-lg">Company Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">AMFI Registration:</span>
                    <span className="font-bold text-foreground">ARN-184156</span>
                  </div>
                  <hr/>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Location:</span>
                    <span className="font-bold text-foreground">Vadodara, Gujarat</span>
                  </div>
                  <hr/>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-medium">Services:</span>
                    <span className="font-bold text-foreground">Mutual Funds & Insurance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div
          className={`mt-14 sm:mt-20 md:mt-24 grid ${
            isHighZoom
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8"
          }`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card text-card-foreground rounded-xl shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-primary/15 text-primary w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h4 className="font-semibold text-base sm:text-lg text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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