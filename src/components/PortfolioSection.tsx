import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Lead Magnet Checklist",
    desc: "Designed a downloadable \"10-Step Lead Generation Checklist\" for small business owners, outlining proven strategies from prospecting to qualification.",
    tools: ["Canva", "Google Docs", "HubSpot"],
    link: "https://lead-gen-checklist.netlify.app/",
  },
  {
    title: "Mock Branding Audit Report",
    desc: "Conducted a full brand consistency audit across social media, website, and email for a hypothetical e-commerce brand, with actionable recommendations.",
    tools: ["Google Slides", "Canva", "Notion"],
    link: "https://trendwear-brand-audit.netlify.app/",
  },
  {
    title: "Sample Email Campaign",
    desc: "Created a 5-email welcome sequence for a SaaS product launch, including subject lines, copy, and A/B testing strategy.",
    tools: ["Mailchimp", "Canva", "Google Docs"],
    link: "https://sample-email-campaign.netlify.app/#",
  },
  {
    title: "Social Media Content Calendar",
    desc: "Built a 30-day content calendar with post ideas, hashtag strategy, and optimal posting times for a fitness brand.",
    tools: ["Trello", "Canva", "Google Sheets"],
    link: "https://peakpulse-30day-content-calendar.netlify.app/",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm uppercase tracking-widest">My Work</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">Portfolio</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Hypothetical projects showcasing the skills and strategies I've learned.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="h-full group glass shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-transparent overflow-hidden">
                <div className="h-1.5 bg-gradient-primary" />
                <CardHeader>
                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs rounded-lg border-primary/20 text-muted-foreground">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
