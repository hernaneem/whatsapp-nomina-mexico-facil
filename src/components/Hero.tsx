
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 px-4 md:py-20 overflow-hidden bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-900">Procesa tu nómina con </span>
            <span className="text-gradient">WhatsApp</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            La manera más sencilla de manejar la nómina en México. Calcula, genera y envía recibos de nómina directamente desde tu WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Comenzar Ahora
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Ver Demostración
            </Button>
          </div>
          
          <div className="pt-4 text-sm text-gray-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin contratos ni compromisos
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 float-animation">
            <div className="bg-white p-4 rounded-lg shadow-xl max-w-md mx-auto">
              <div className="bg-secondary/20 rounded-lg p-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">NOWA Bot</span>
                  <span className="text-xs text-gray-600">10:30 AM</span>
                </div>
                <p className="text-gray-800 mt-1">Hola Juan, tu nómina de Mayo está lista.</p>
                <div className="mt-2 bg-white rounded-md p-3 text-sm border border-gray-200">
                  <p className="font-medium">Recibo de Nómina - Mayo 2023</p>
                  <div className="mt-2 space-y-1">
                    <p><span className="font-medium">Empleado:</span> Juan Pérez</p>
                    <p><span className="font-medium">Sueldo Base:</span> $18,500.00 MXN</p>
                    <p><span className="font-medium">Impuestos:</span> $3,256.45 MXN</p>
                    <p><span className="font-medium">Total Neto:</span> $15,243.55 MXN</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 mt-1 border-t">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Escribe un mensaje..." 
                    className="w-full p-2 rounded-full bg-gray-100 text-sm"
                    readOnly
                  />
                </div>
                <button className="p-2 rounded-full bg-primary text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
