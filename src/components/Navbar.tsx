import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/christian-espinosa", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/christian.espinosa", label: "Facebook" },
];

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="text-xl font-bold font-heading text-gradient">
          Christian Espinosa
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary/5 transition-all"
            >
              {l.label}
            </a>
          ))}
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <Button asChild size="sm" className="ml-1 bg-gradient-primary hover:opacity-90 shadow-glow">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/50 px-4 pb-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 mt-3">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="h-9 w-9 rounded-lg bg-gradient-subtle flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="mt-2 w-full bg-gradient-primary">
            <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
