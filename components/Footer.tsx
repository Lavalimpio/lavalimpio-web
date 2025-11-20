import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{APP_NAME}</h3>
            <p className="text-sm text-slate-400">
              La colada del futuro en el corazón del Ensanche de Vallecas.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-brand-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-brand-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-brand-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} LavaLimpio Vallecas. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};