import { Facebook, Instagram, Twitter } from "lucide-react";
import cuceiLogo from "@assets/image_1776926529011.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-bold tracking-tight text-primary mb-4">
              El Vagón <span className="text-foreground">Marisquero</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Mariscos frescos, ambiente único. El sabor del mar en cada bocado, servido en un vagón frente a la costa.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Nuestro Menú</a></li>
              <li><a href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">Galería</a></li>
              <li><a href="#reservas" className="text-muted-foreground hover:text-primary transition-colors">Reservaciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Av. del Mar 1234</li>
              <li>Mazatlán, Sinaloa</li>
              <li>+52 (669) 123 4567</li>
              <li>hola@vagonmarisquero.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
          <img
            src={cuceiLogo}
            alt="CUCEI"
            className="h-20 w-auto shrink-0"
          />
          <div className="flex-1 text-center md:text-left leading-relaxed">
            <p className="text-foreground font-medium">Ian Michael Castellanos Zuñiga</p>
            <p>Código 220122358</p>
            <p>Periodo 2026A</p>
            <p>Desarrollo de Aplicaciones Web en la Nube y Móviles</p>
            <p>Maestro Zeus Emanuel Gutierrez Cobian</p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} El Vagón Marisquero. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
