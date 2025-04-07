
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#006847" />
                <path d="M12 20C12 14.5 16.5 10 22 10C27.5 10 32 14.5 32 20C32 25.5 27.5 30 22 30C19.3 30 16.9 28.9 15.1 27.1L12 30V20Z" fill="white" />
              </svg>
              <span className="font-bold text-xl">NóminaMX</span>
            </div>
            <p className="text-gray-400 mb-6">
              La herramienta #1 para procesar nómina de empresas mexicanas a través de WhatsApp.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Producto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Características</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guías de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integraciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Actualizaciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Clientes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Prensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">WhatsApp Directo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              &copy; {new Date().getFullYear()} NóminaMX. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-400">Términos de Servicio</a>
              <a href="#" className="hover:text-gray-400">Política de Privacidad</a>
              <a href="#" className="hover:text-gray-400">Aviso de Cookies</a>
              <a href="#" className="hover:text-gray-400">Seguridad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
