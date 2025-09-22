import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen, TrendingUp, User, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import drHiteshImage from "@/assets/dr-hitesh-patel.jpg";
import kishoreImage from "@/assets/kishore-gidwani.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Hitesh K. Patel",
      role: "Value Investor & Mentor",
      image: drHiteshImage,
      description: "Over two decades of successful investing experience. Transitioned from being a medical doctor to a renowned value investor, deeply inspired by Warren Buffett and Peter Lynch.",
      achievements: [
        "20+ years successful investing experience",
        "Renowned value investing mentor",
        "Featured in The Economic Times",
        "Active mentor on ValuePickr platform",
        "Advocate of simple, no-nonsense investing"
      ],
      expertise: ["Value Investing", "Fundamental Analysis", "Long-term Wealth Creation", "Investment Mentoring"],
      links: [
        {
          title: "ValuePickr Mentor Profile",
          url: "https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071",
          icon: TrendingUp
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
      description: "A seasoned financial services professional with over three decades of experience in the Indian mutual fund industry. Former Associate Vice President and Regional Head at HDFC Asset Management.",
      achievements: [
        "30+ years in mutual fund industry",
        "17 years at HDFC Asset Management",
        "14 years at UTI Mutual Fund",
        "Author of mutual fund guidebook",
        "Early advocate of SIP investments"
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
    <section id="team" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            Our Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals who guide Upright Investor Services with decades 
            of combined expertise in investments, financial planning, and wealth management.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="relative">
                    <div className="card-professional p-2">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-96 object-cover rounded-xl"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-accent font-semibold text-sm"
                    >
                      Expert
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-primary mb-2">{member.name}</h3>
                      <p className="text-xl text-accent font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {member.description}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-primary mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * achievementIndex }}
                            className="flex items-center text-muted-foreground"
                          >
                            <Award className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      {member.links.map((link) => (
                        <Button
                          key={link.title}
                          variant="outline"
                          className="w-full justify-start group hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a 
                            href={link.url} 
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            <link.icon className="h-4 w-4 mr-3" />
                            {link.title}
                            {link.url.startsWith('http') && (
                              <ExternalLink className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                            )}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Experience the Difference of Expert Guidance
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team's combined decades of experience in value investing and mutual fund management 
            ensures you receive the highest quality financial advice and investment strategies.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;