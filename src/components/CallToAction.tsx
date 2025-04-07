
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simplifica tu nómina hoy mismo</h2>
            <p className="text-lg mb-0 text-white/90">
              Regístrate y comienza a procesar tu nómina directamente desde WhatsApp. 
              Los primeros 30 días son completamente gratis.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Comenzar Prueba Gratuita
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Agendar Demostración
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
