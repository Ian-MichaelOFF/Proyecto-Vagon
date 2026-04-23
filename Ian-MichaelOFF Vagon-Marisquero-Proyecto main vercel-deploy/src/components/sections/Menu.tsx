import { useState } from "react";
import { motion } from "framer-motion";
import { Fish, ChefHat, Wine, CakeSlice, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Menu() {
  const menuCategories = [
    {
      id: "entradas",
      label: "Entradas",
      icon: <Fish className="w-4 h-4 mr-2" />,
      items: [
        {
          name: "Aguachile Verde",
          description: "Camarón curtido en limón, pepino, cebolla morada, cilantro y chile serrano.",
          price: "240",
          featured: true
        },
        {
          name: "Tostadas de Ceviche",
          description: "Pesca del día con tomate, cebolla, pepino y toque de orégano (3 piezas).",
          price: "180"
        },
        {
          name: "Ostiones en su Concha",
          description: "Ostiones frescos traídos de la bahía, servidos en cama de hielo.",
          price: "220"
        },
        {
          name: "Tacos Gobernador",
          description: "Camarón con queso fundido, chile poblano en tortilla de maíz.",
          price: "260",
          featured: true
        }
      ]
    },
    {
      id: "fuertes",
      label: "Platos Fuertes",
      icon: <ChefHat className="w-4 h-4 mr-2" />,
      items: [
        {
          name: "Camarones Empanizados",
          description: "Crujientes camarones acompañados de ensalada y aderezo de la casa.",
          price: "320"
        },
        {
          name: "Burrito Mixto",
          description: "Camarón, pulpo, y marlin guisado, envuelto en tortilla de harina con queso.",
          price: "280"
        },
        {
          name: "Pulpo Zarandeado",
          description: "Tentáculos de pulpo marinados en salsa secreta, asados a las brasas.",
          price: "450",
          featured: true
        },
        {
          name: "Pescado Frito Entero",
          description: "Huachinango frito al momento, acompañado de arroz y frijoles.",
          price: "380"
        },
        {
          name: "Molcajete Marisquero",
          description: "Selección de mariscos bañados en salsa caliente, servidos burbujeando.",
          price: "520"
        }
      ]
    },
    {
      id: "bebidas",
      label: "Bebidas",
      icon: <Wine className="w-4 h-4 mr-2" />,
      items: [
        {
          name: "Michelada Clásica",
          description: "Cerveza escarchada con sal, limón y salsas negras.",
          price: "110"
        },
        {
          name: "Margarita de Tamarindo",
          description: "Tequila, licor de naranja, pulpa de tamarindo y escarcha de chile.",
          price: "160",
          featured: true
        },
        {
          name: "Clamato Preparado",
          description: "Jugo de tomate con almeja, apio, salsas y camarones.",
          price: "140"
        },
        {
          name: "Aguas Frescas",
          description: "Jamaica, Horchata o Limón con chía.",
          price: "60"
        }
      ]
    },
    {
      id: "postres",
      label: "Postres",
      icon: <CakeSlice className="w-4 h-4 mr-2" />,
      items: [
        {
          name: "Flan de Coco",
          description: "Flan casero horneado con coco rallado tostado.",
          price: "120"
        },
        {
          name: "Pastel de Elote",
          description: "Esponjoso pastel de maíz dulce servido tibio con helado de vainilla.",
          price: "140"
        },
        {
          name: "Nieve Artesanal",
          description: "Sabores de temporada: mango, limón o vainilla.",
          price: "90"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">
            Nuestra Especialidad
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Menú <span className="text-primary italic">Marisquero</span>
          </h2>
        </motion.div>

        <Tabs defaultValue="entradas" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 h-auto bg-transparent">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 border border-border data-[state=active]:border-primary transition-all rounded-md flex items-center justify-center font-medium"
              >
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              >
                {category.items.map((item, i) => (
                  <div key={i} className="flex flex-col border-b border-border/50 pb-6 last:border-0 last:pb-0 relative group">
                    {item.featured && (
                      <span className="absolute -top-3 -right-2 text-[10px] uppercase tracking-wider font-bold bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        Destacado
                      </span>
                    )}
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-4 border-b border-dashed border-border/60"></div>
                      <span className="text-lg font-bold text-primary font-sans">${item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pr-8 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 group" asChild>
            <a href="#menu">
              <Download className="w-4 h-4 mr-2 group-hover:text-primary" />
              Descargar menú PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
