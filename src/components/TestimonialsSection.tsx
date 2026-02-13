import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Jane D.", role: "Startup Founder", text: "Christian was thorough, responsive, and genuinely eager to help. He tackled our CRM cleanup with impressive attention to detail." },
  { name: "Mark S.", role: "E-commerce Owner", text: "Great communication and a proactive approach. Christian delivered our social media calendar ahead of schedule." },
  { name: "Lisa R.", role: "Marketing Manager", text: "Reliable and quick to learn. I'd recommend Christian for any team looking for dedicated VA support." },
];

const TestimonialsSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle -z-10" />
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Feedback</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">Testimonials</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <Card className="h-full glass shadow-card hover:shadow-glow transition-all duration-300 border-transparent relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm font-heading">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm font-heading">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
