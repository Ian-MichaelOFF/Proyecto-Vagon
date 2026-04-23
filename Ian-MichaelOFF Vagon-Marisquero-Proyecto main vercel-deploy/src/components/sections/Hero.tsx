import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/image_1776927436899.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60"></div>
        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block text-primary uppercase tracking-[0.2em] font-semibold text-sm md:text-base mb-4"
          >
            Mariscos frescos, ambiente único
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-foreground"
          >
            El sabor del mar en <span className="text-primary italic">cada bocado</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 font-semibold"
              onClick={() => scrollTo("reservas")}
            >
              Reserva tu mesa
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 font-semibold bg-transparent border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
              onClick={() => scrollTo("menu")}
            >
              Ver menú
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("nosotros")}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Descubrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
