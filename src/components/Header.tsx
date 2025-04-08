
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/48c51d9b-ee2f-4b1d-92b4-fda6c12d2489.png" 
            alt="NOWA Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="font-medium">Iniciar Sesión</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">Registrarse</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
