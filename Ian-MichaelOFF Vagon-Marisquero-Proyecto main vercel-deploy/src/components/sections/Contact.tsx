import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="ubicacion" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">
            Visítanos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Ubicación y <span className="text-primary italic">Contacto</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <MapPin />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Dirección</h3>
                <p className="text-muted-foreground">
                  Av. del Mar 1234, Malecón<br />
                  Mazatlán, Sinaloa, CP 82000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Clock />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Horarios</h3>
                <p className="text-muted-foreground">
                  Martes a Jueves: 12:00 PM - 9:00 PM<br />
                  Viernes a Domingo: 12:00 PM - 11:00 PM<br />
                  Lunes: Cerrado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Phone />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Teléfono</h3>
                <p className="text-muted-foreground">
                  Reservaciones: +52 (669) 123 4567<br />
                  Eventos: +52 (669) 987 6543
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Mail />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Correo</h3>
                <p className="text-muted-foreground">
                  hola@vagonmarisquero.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-[500px] rounded-xl overflow-hidden border-2 border-border relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14666.9748684724!2d-106.4255!3d23.2166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzAwLjAiTiAxMDbCsDI1JzMxLjgiVw!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale-[0.5] contrast-[0.9] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
            {/* Overlay to ensure dark mode feel initially */}
            <div className="absolute inset-0 bg-background/10 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
