
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#00796B" />
            <path d="M12 20C12 14.5 16.5 10 22 10C27.5 10 32 14.5 32 20C32 25.5 27.5 30 22 30C19.3 30 16.9 28.9 15.1 27.1L12 30V20Z" fill="white" />
          </svg>
          <span className="font-bold text-xl">NOWA</span>
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
