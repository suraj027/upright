import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Star, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      type: "Book",
      title: "Know Your Mutual Fund: Top 101 Uncommon and Common Questions on Mutual Funds",
      author: "Kishore Gidwani",
      year: "2021",
      description: "A comprehensive practical guide for retail investors demystifying mutual fund investing. This book addresses the most common and uncommon questions that investors have about mutual funds, making complex concepts accessible to everyone.",
      highlights: [
        "101 Essential Q&A on Mutual Funds",
        "Practical guide for retail investors", 
        "Demystifies complex investment concepts",
        "Written by industry veteran with 30+ years experience"
      ],
      link: "#",
      linkText: "Available on Amazon",
      icon: BookOpen,
      color: "from-primary to-primary-light"
    },
    {
      type: "Featured Article",
      title: "Gujju Doctor Turns Value Investor After Reading Buffett, Lynch; Makes a Killing",
      author: "The Economic Times",
      year: "Featured Article",
      description: "An in-depth feature on Dr. Hitesh K. Patel's remarkable journey from medicine to becoming a successful value investor. The article highlights his transformation and investment philosophy inspired by Warren Buffett and Peter Lynch.",
      highlights: [
        "Featured in India's leading financial newspaper",
        "Chronicles inspiring career transformation",
        "Showcases value investing success story",
        "Highlights Buffett-Lynch inspired approach"
      ],
      link: "https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms",
      linkText: "Read Article",
      icon: ExternalLink,
      color: "from-accent to-accent-light"
    },
    {
      type: "Mentorship",
      title: "ValuePickr Community Mentor",
      author: "Dr. Hitesh K. Patel",
      year: "Ongoing",
      description: "Active mentorship on ValuePickr, India's premier value investing community. Dr. Patel shares his investment insights, analysis, and guidance with thousands of investors, focusing on simple, uncluttered investing principles.",
      highlights: [
        "Mentor to thousands of investors",
        "Simple, no-nonsense investing approach",
        "Regular investment insights and analysis",
        "Focus on long-term wealth creation"
      ],
      link: "https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071",
      linkText: "View Profile",
      icon: User,
      color: "from-success to-success-light"
    }
  ];

  return (
    <section id="publications" className="py-20 section-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
            Publications & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team's expertise is recognized through published works, media features, 
            and active thought leadership in the investment and financial advisory community.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="space-y-12">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Visual Element */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-3' : ''} lg:col-span-1`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${publication.color} rounded-2xl p-8 text-white shadow-large hover:shadow-xl transition-all duration-300`}>
                      <div className="text-center">
                        <publication.icon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium mb-2">
                          {publication.type}
                        </div>
                        <div className="text-2xl font-bold mb-2">{publication.year}</div>
                        <div className="text-sm opacity-90">By {publication.author}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="card-professional p-8"
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.year}</span>
                        <span>•</span>
                        <User className="h-4 w-4" />
                        <span>{publication.author}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{publication.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {publication.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-primary mb-4">Key Highlights</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {publication.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlight}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * highlightIndex }}
                            className="flex items-center text-muted-foreground"
                          >
                            <Star className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className="btn-primary group"
                      asChild
                    >
                      <a 
                        href={publication.link} 
                        target={publication.link.startsWith('http') ? "_blank" : "_self"}
                        rel={publication.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <publication.icon className="h-4 w-4 mr-2" />
                        {publication.linkText}
                        {publication.link.startsWith('http') && (
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        )}
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-gradient-primary rounded-2xl text-primary-foreground"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Thought Leadership in Finance</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Our commitment to financial education and investor awareness is reflected through 
              published works, media recognition, and active community mentorship. 
              We believe in sharing knowledge to empower informed investment decisions.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-3"
            >
              Connect with Our Experts
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;