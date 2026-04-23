import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sofía Ramírez",
      rating: 5,
      quote: "El Aguachile Verde es espectacular, nivel de picante perfecto. La atención te hace sentir en casa y el ambiente al atardecer es inmejorable.",
    },
    {
      name: "Carlos Mendoza",
      rating: 5,
      quote: "Descubrimos este lugar por accidente y se ha vuelto nuestra parada obligatoria. Los mariscos son fresquísimos, definitivamente el mejor pulpo zarandeado de la zona.",
    },
    {
      name: "Elena Valdez",
      rating: 4,
      quote: "Un concepto muy original. Cenar en un vagón restaurado con la brisa del mar es una experiencia única. Recomendadas las margaritas de tamarindo.",
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">
            Experiencias
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Voces del <span className="text-primary italic">Vagón</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="bg-background border-border/50 h-full relative group hover:border-primary/50 transition-colors duration-300">
                <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Quote size={40} />
                </div>
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        size={16} 
                        className={j < testimonial.rating ? "text-primary fill-primary" : "text-muted fill-muted"} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow font-serif italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="font-bold text-foreground tracking-wide">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
