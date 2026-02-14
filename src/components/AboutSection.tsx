import { MapPin, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: MapPin, label: "Philippines", sub: "Location" },
  { icon: Clock, label: "Full-time", sub: "Availability" },
  { icon: DollarSign, label: "$15–25/hr", sub: "Rate" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-subtle -z-10" />
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">
            Passionate about helping businesses <span className="text-gradient">grow</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-card rounded-3xl overflow-hidden shadow-card"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_DTtaFkmSkM?rel=0&modestbranding=1"
              title="Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground leading-relaxed text-lg">
              I'm an aspiring Sales & Marketing Virtual Assistant based in the Philippines. Drawing from the comprehensive <strong>Sales & Marketing VA Guide 2026</strong>, I've built a foundation in CRM administration, email marketing, lead generation, social media management, and branding support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to provide reliable, detail-oriented virtual assistance that helps small businesses and entrepreneurs scale their marketing efforts without the overhead of a full-time hire.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center shadow-card hover:shadow-glow transition-all duration-300">
                  <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <p className="font-bold text-sm font-heading">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
