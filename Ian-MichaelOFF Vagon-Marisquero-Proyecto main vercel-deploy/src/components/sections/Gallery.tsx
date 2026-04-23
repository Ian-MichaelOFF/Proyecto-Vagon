import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?q=80&w=2070&auto=format&fit=crop",
      alt: "Tostada de ceviche",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=2070&auto=format&fit=crop",
      alt: "Camarones frescos",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop",
      alt: "Platillo de mariscos",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop",
      alt: "Bebida preparada",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      alt: "Interior del restaurante",
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">
            Una Mirada
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Nuestra <span className="text-primary italic">Galería</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 max-w-6xl mx-auto">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors z-10 duration-300"></div>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 duration-300">
                <div className="bg-background/80 p-3 rounded-full backdrop-blur-sm border border-primary/30">
                  <ZoomIn className="text-primary w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0 flex justify-center items-center h-[90vh]">
          <DialogTitle className="sr-only">Image preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-[85vh] object-contain rounded-md"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-background/80 p-2 rounded-full backdrop-blur-sm text-foreground hover:text-primary transition-colors border border-border"
              >
                <X size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
