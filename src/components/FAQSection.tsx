import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does a Sales & Marketing VA do?",
    a: "I handle tasks like lead research, CRM management, social media scheduling, email campaigns, and basic graphic design — essentially the day-to-day marketing and sales support that frees you to focus on strategy and growth.",
  },
  {
    q: "What are your working hours and time zone?",
    a: "I'm based in the Philippines (GMT+8) and available full-time. I'm flexible with scheduling and can overlap with US, UK, or Australian business hours as needed.",
  },
  {
    q: "What tools and platforms do you use?",
    a: "I'm proficient in HubSpot, Mailchimp, Canva, Trello, Google Workspace, Slack, Zoom, LinkedIn Sales Navigator, Apollo, and WordPress, among others.",
  },
  {
    q: "How do we communicate and track progress?",
    a: "I provide regular updates via your preferred channel — Slack, email, or project management tools like Trello or Asana. I'm a strong believer in over-communicating to keep everything transparent.",
  },
  {
    q: "What is your rate?",
    a: "My rate ranges from $15–$25/hr depending on the scope and complexity of the work. I'm open to hourly, part-time, or full-time arrangements.",
  },
  {
    q: "Can I start with a trial period?",
    a: "Absolutely! I'm happy to start with a short trial project or a one-week engagement so you can evaluate my work before committing to a longer-term arrangement.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Common questions about working with me as your virtual assistant.
      </p>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
