import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Star, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      type: "Book",
      title: "Know Your Mutual Fund",
      subtitle: "Top 101 Uncommon and Common Questions",
      author: "Kishore Gidwani",
      description: "A comprehensive guide for retail investors, demystifying mutual funds with answers to 101 essential questions.",
      highlights: [
        "101 essential Q&As",
        "Practical guide for retail investors", 
        "Demystifies complex concepts",
        "By an industry veteran",
      ],
      link: "#",
      linkText: "Learn More",
      icon: BookOpen,
    },
    {
      type: "Featured Article",
      title: "The Economic Times",
      subtitle: "Gujju Doctor Turns Value Investor",
      author: "Dr. Hitesh K. Patel",
      description: "An in-depth feature on Dr. Patel's journey from medicine to a successful value investor, inspired by Buffett and Lynch.",
      highlights: [
        "Featured in a leading financial newspaper",
        "Inspiring career transformation story",
        "Showcases value investing success",
        "Highlights a disciplined approach",
      ],
      link: "https://economictimes.indiatimes.com/markets/stocks/news/gujju-doctor-turns-value-investor-after-reading-buffett-lynch-makes-a-killing/articleshow/62334723.cms",
      linkText: "Read Article",
      icon: ExternalLink,
    },
    {
      type: "Mentorship",
      title: "ValuePickr Community",
      subtitle: "Mentor Profile",
      author: "Dr. Hitesh K. Patel",
      description: "Active mentorship on ValuePickr, where Dr. Patel shares insights and guidance with thousands of investors.",
      highlights: [
        "Mentor to thousands of investors",
        "Simple, no-nonsense investing approach",
        "Regular investment insights",
        "Focus on long-term wealth creation",
      ],
      link: "https://forum.valuepickr.com/t/hitesh-patel-our-simple-uncluttered-no-nonsense-mentor/33071",
      linkText: "View Profile",
      icon: User,
    }
  ];

  return (
    <section id="publications" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)",
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4 text-foreground px-2">
            Publications & <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Our team's expertise is recognized through published works, media features, 
            and active thought leadership in the investment community.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col glass hover:glass-strong shadow-soft hover:shadow-accent transition-all duration-300 border-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-2">
                    <div className="bg-gradient-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-accent">
                      <pub.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-primary">{pub.type}</p>
                      <CardTitle className="text-lg sm:text-xl font-display font-bold text-foreground">{pub.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground italic">"{pub.subtitle}" by {pub.author}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm flex-grow">
                    {pub.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {pub.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start text-xs sm:text-sm">
                        <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-auto text-sm"
                    asChild
                  >
                    <a 
                      href={pub.link} 
                      target={pub.link.startsWith('http') ? "_blank" : "_self"}
                      rel={pub.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {pub.linkText}
                      {pub.link.startsWith('http') && <ExternalLink className="h-4 w-4 ml-2" />}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center p-6 sm:p-8 md:p-10 bg-gradient-primary rounded-xl sm:rounded-2xl text-white shadow-accent"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 px-2">Thought Leadership in Finance</h3>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
            Our commitment to financial education is reflected through published works, media recognition, and community mentorship.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            variant="secondary"
            size="lg"
            className="font-semibold w-full sm:w-auto"
          >
            Connect with Our Experts
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;