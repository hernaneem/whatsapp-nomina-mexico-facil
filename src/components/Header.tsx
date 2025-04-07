
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#006847" />
            <path d="M12 20C12 14.5 16.5 10 22 10C27.5 10 32 14.5 32 20C32 25.5 27.5 30 22 30C19.3 30 16.9 28.9 15.1 27.1L12 30V20Z" fill="white" />
          </svg>
          <span className="font-bold text-xl">NóminaMX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-gray-700 hover:text-primary font-medium">Características</a>
          <a href="#howItWorks" className="text-gray-700 hover:text-primary font-medium">Cómo Funciona</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonios</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="font-medium">Iniciar Sesión</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">Registrarse</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-2 pb-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#howItWorks" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cómo Funciona
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full">Iniciar Sesión</Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">Registrarse</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
