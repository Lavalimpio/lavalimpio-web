import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Precios', href: '#precios' },
    { name: 'Empresas', href: '#empresas' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-[#F5F3EF]/95 backdrop-blur-md shadow-sm border-b border-[#004A68]/10 py-3.5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center group py-0.5">
              <img 
                src={isScrolled || isOpen ? "/logo.svg" : "/logo-white.svg"} 
                alt="LavaLimpio Vallecas" 
                className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105 drop-shadow-sm" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-[#004A68]/85 hover:text-[#009291]' 
                    : 'text-white/90 hover:text-[#7dd6d2]'
                }`}
              >
                {link.name}
              </a>
            ))}

            <a 
              href="https://wa.me/34614312278?text=Hola%20LavaLimpio,%20tengo%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-md bg-[#009291] hover:bg-[#007b7b] text-white inline-flex items-center gap-2 shadow-[#009291]/25"
            >
              <MessageCircle size={17} className="fill-current" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled || isOpen ? 'text-[#004A68]' : 'text-white'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#F5F3EF] border-t border-[#004A68]/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-[#004A68] hover:text-[#009291] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/34614312278?text=Hola%20LavaLimpio,%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#009291] hover:bg-[#007b7b] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#009291]/20 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={19} className="fill-current" />
            Escribir por WhatsApp
          </a>
          <a 
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#009291] hover:bg-[#007b7b] text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-[#009291]/20 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Formulario Web
          </a>
          <a 
            href="#ubicacion"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-white border border-[#004A68]/20 text-[#004A68] hover:bg-slate-50 px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <MapPin size={18} className="text-[#009291]" />
            Ver Ubicación
          </a>
        </div>
      </div>
    </nav>
  );
};