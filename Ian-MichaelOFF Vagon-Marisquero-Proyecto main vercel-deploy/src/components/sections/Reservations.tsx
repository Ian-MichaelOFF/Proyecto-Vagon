import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Reservations() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Reserva confirmada!", {
        description: "Te hemos enviado un correo con los detalles. ¡Te esperamos en El Vagón!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="reservas" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden shadow-2xl border border-border grid grid-cols-1 lg:grid-cols-2">
          
          {/* Form Side */}
          <div className="p-8 md:p-12 order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Asegura tu lugar
              </h2>
              <p className="text-muted-foreground">
                Reserva tu mesa con anticipación. Para eventos especiales, contáctanos directamente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" required placeholder="Ej. Ana García" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" required placeholder="(669) 123 4567" className="bg-background" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Input id="date" type="date" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Hora</Label>
                  <Input id="time" type="time" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Personas</Label>
                  <Input id="guests" type="number" min="1" max="20" required placeholder="2" className="bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas especiales (opcional)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="¿Alguna alergia o celebración especial?" 
                  className="bg-background resize-none" 
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                {isSubmitting ? "Procesando..." : "Confirmar Reservación"}
              </Button>
            </form>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2 h-64 lg:h-auto hidden md:block">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Mesa lista en El Vagón Marisquero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-background/30 backdrop-blur-sm p-8 text-center">
              <div className="border border-primary/50 p-8 bg-background/80 rounded-lg">
                <p className="font-serif text-xl font-bold mb-2">Horario de Servicio</p>
                <p className="text-muted-foreground text-sm mb-1">Martes a Domingo</p>
                <p className="text-primary font-bold">12:00 PM - 10:00 PM</p>
                <p className="text-muted-foreground text-xs mt-4 italic">Lunes cerrado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
