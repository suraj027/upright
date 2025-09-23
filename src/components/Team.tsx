import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen, LinkedinIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import drHiteshImage from "@/assets/dr-hitesh-patel.jpeg";
import kishoreImage from "@/assets/kishore-gidwani.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Hitesh K. Patel",
      role: "Value Investor & Mentor",
      image: drHiteshImage,
      description: "With over two decades of successful investing experience, Dr. Patel transitioned from a medical career to become a renowned value investor, inspired by Warren Buffett and Peter Lynch.",
      achievements: [
        "20+ years of successful value investing",
        "Renowned value investing mentor",
        "Featured in The Economic Times",
        "Active mentor on ValuePickr platform",
      ],
      expertise: ["Value Investing", "Fundamental Analysis", "Long-term Wealth Creation", "Investment Mentoring"],
      links: [
        {
          title: "ValuePickr Mentor Profile",
          url: "https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071",
          icon: ExternalLink
        },
        {
          title: "Economic Times Feature",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms",
          icon: ExternalLink
        }
      ]
    },
    {
      name: "Kishore Gidwani",
      role: "Mutual Fund Industry Veteran & Author",
      image: kishoreImage,
      description: "A seasoned financial professional with over three decades in the Indian mutual fund industry, including roles as AVP and Regional Head at HDFC Asset Management.",
      achievements: [
        "30+ years in the mutual fund industry",
        "17 years at HDFC Asset Management",
        "Author of a mutual fund guidebook",
        "Early advocate of SIP investments",
      ],
      expertise: ["Mutual Fund Advisory", "SIP Planning", "Financial Literacy", "Investor Education"],
      links: [
        {
          title: "LinkedIn Profile",
          url: "https://in.linkedin.com/in/kishore-gidwani-15095436",
          icon: LinkedinIcon
        },
        {
          title: "Book: Know Your Mutual Fund",
          url: "#publications",
          icon: BookOpen
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
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
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals who guide Upright Investor Services with decades 
            of combined expertise in investments and financial planning.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <motion.div 
                className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="overflow-hidden shadow-2xl">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </motion.div>

              {/* Content */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5">
                  <h3 className="text-3xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-xl text-accent font-semibold">{member.role}</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center">
                          <Award className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {member.links.map((link) => (
                    <Button
                      key={link.title}
                      variant="outline"
                      className="w-full justify-center"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target={link.url.startsWith('http') ? "_blank" : "_self"}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <link.icon className="h-4 w-4 mr-2" />
                        {link.title}
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20 p-10 bg-gray-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Experience the Difference of Expert Guidance
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team's combined decades of experience ensures you receive the highest quality financial advice.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;