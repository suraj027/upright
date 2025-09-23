import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "508 Vihav Supremus, Gotri Main Road, Vadodara 390021, Gujarat, India",
      action: "Get Directions",
      actionLink: "https://maps.google.com/?q=508+Vihav+Supremus+Gotri+Main+Road+Vadodara+390021"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 98795 65591",
      action: "Call Now",
      actionLink: "tel:+919879565591"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "uprightmutual@gmail.com",
      action: "Send Email",
      actionLink: "mailto:uprightmutual@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9am - 6pm\nSat: 9am - 2pm",
      action: "Schedule Meeting",
      actionLink: "#contact"
    }
  ];

  const services = [
    "Mutual Fund Advisory",
    "SIP Planning",
    "Insurance Services",
    "Portfolio Review",
    "Financial Planning",
    "General Inquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll be in touch shortly.",
        action: <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center"><Check size={16} /></div>,
      });

      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your investment journey? Contact our expert team for personalized 
            financial advice and comprehensive investment solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-600 text-sm whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary h-auto p-0"
                          asChild
                        >
                          <a 
                            href={info.actionLink}
                            target={info.actionLink.startsWith('http') || info.actionLink.startsWith('tel') || info.actionLink.startsWith('mailto') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          >
                            {info.action}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-green-500 text-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="h-8 w-8 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Quick WhatsApp Connect</h4>
                      <p className="text-sm opacity-90 mb-3">Get an instant response to your queries.</p>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-green-600 hover:bg-gray-100"
                        asChild
                      >
                        <a 
                          href="https://wa.me/919879565591?text=Hello%2C%20I%20am%20interested%20in%20your%20investment%20services"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input required name="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} />
                    <Input required name="phone" type="tel" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <Input required name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleInputChange} />
                  <Select name="service" onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea required name="message" placeholder="Your Message *" rows={5} value={formData.message} onChange={handleInputChange} />
                  <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                    {isSubmitting ? (
                      <>
                        <motion.div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <Card className="overflow-hidden shadow-lg">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.119617172855!2d73.14494931542877!3d22.31142394898084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8a35f6c90e5%3A0x3ac999e54a4346b!2sVihav%20Supremus!5e0!3m2!1sen!2sin!4v1662545338388!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;