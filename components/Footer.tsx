import React from 'react';
import { Facebook, Instagram, Twitter, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001e2c] text-[#F5F3EF]/80 py-12 border-t border-[#003c54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="mb-2 md:mb-0">
            <img 
              src="/logo-white.svg" 
              alt="LavaLimpio Vallecas" 
              className="h-9 w-auto mb-3 opacity-95" 
            />
            <p className="text-sm text-[#F5F3EF]/70 max-w-sm mb-2">
              Tu lavandería autoservicio de confianza en Ensanche de Vallecas.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#F5F3EF]/80">
              <a href="tel:+34614312278" className="inline-flex items-center gap-1.5 hover:text-[#009291] transition-colors">
                <Phone size={14} className="text-[#009291]" />
                +34 614 312 278
              </a>
              <span className="inline-flex items-center gap-1.5 text-[#F5F3EF]/60">
                <MapPin size={14} className="text-[#009291]" />
                Calle de Eduardo Chillida 223, Local 1
              </span>
            </div>
          </div>

          <div className="flex space-x-5">
            <a href="#" className="p-2 rounded-lg bg-white/5 text-[#F5F3EF]/70 hover:text-[#009291] hover:bg-white/10 transition-all" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-[#F5F3EF]/70 hover:text-[#009291] hover:bg-white/10 transition-all" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-[#F5F3EF]/70 hover:text-[#009291] hover:bg-white/10 transition-all" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#003c54] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#F5F3EF]/60">
          <p>&copy; {new Date().getFullYear()} LavaLimpio Vallecas. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#7dd6d2] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#7dd6d2] transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};