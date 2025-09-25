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
    <section id="publications" className="py-24 bg-gray-50">
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
            Publications & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team's expertise is recognized through published works, media features, 
            and active thought leadership in the investment community.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <pub.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">{pub.type}</p>
                      <CardTitle className="text-xl font-bold text-gray-800">{pub.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">"{pub.subtitle}" by {pub.author}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {pub.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pub.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-auto"
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
          className="mt-20 text-center p-10 bg-gradient-to-r from-primary to-blue-600 rounded-2xl text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Thought Leadership in Finance</h3>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Our commitment to financial education is reflected through published works, media recognition, and community mentorship.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            Connect with Our Experts
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;