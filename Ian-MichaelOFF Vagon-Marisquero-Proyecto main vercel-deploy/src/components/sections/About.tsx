import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "+480", label: "Clientes satisfechos" },
    { value: "4.8", label: "Estrellas" },
    { value: "+10", label: "Años de experiencia" },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                alt="Chef preparando ceviche fresco" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-border/50 rounded-lg"></div>
            </div>
            
            {/* Floating accent image */}
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-lg overflow-hidden border-4 border-background shadow-2xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1626804475297-41609ea064eb?q=80&w=2070&auto=format&fit=crop" 
                alt="Ingredientes frescos" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              De las redes a <span className="text-primary italic">tu mesa</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
              <p>
                El Vagón Marisquero nació de una pasión simple: llevar los tesoros del mar directamente a la mesa en un ambiente que evoca la nostalgia de los viajes en tren por la costa. 
              </p>
              <p>
                Ubicados en un auténtico vagón restaurado, ofrecemos una experiencia donde la brisa marina y la luz de los faroles crean el escenario perfecto para disfrutar de mariscos frescos, preparados con recetas que honran la tradición culinaria mexicana.
              </p>
              <p>
                Seleccionamos nuestros ingredientes a diario de los pescadores locales, asegurando que cada ceviche, aguachile y plato fuerte capture la verdadera esencia del océano.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
