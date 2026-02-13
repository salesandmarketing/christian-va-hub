import { Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/christian-espinosa", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/christian.espinosa", label: "Facebook" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-lg font-bold font-heading text-gradient">
          Christian Espinosa
        </a>
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="h-9 w-9 rounded-lg bg-gradient-subtle flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Christian Espinosa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
