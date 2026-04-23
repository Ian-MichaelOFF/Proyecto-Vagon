import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Inicio", href: "hero" },
    { name: "Nosotros", href: "nosotros" },
    { name: "Menú", href: "menu" },
    { name: "Galería", href: "galeria" },
    { name: "Reservas", href: "reservas" },
    { name: "Ubicación", href: "ubicacion" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-border/50 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          El Vagón <span className="text-foreground">Marisquero</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("reservas")}
            className="font-semibold"
          >
            Reserva tu mesa
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("reservas")}
            className="w-full mt-2"
            size="lg"
          >
            Reserva tu mesa
          </Button>
        </div>
      )}
    </header>
  );
}
