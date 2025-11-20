import React, { useState, useEffect } from 'react';
import { Menu, X, WashingMachine } from 'lucide-react';

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
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-brand-600 p-2 rounded-xl text-white group-hover:bg-brand-500 transition-colors">
                <WashingMachine size={28} />
              </div>
              <span className={`font-display font-bold text-2xl ${isScrolled || isOpen ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                Lava<span className="text-brand-600 font-extrabold">Limpio</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#ubicacion"
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-brand-600 text-white hover:bg-brand-700' 
                  : 'bg-white text-brand-900 hover:bg-brand-50'
              }`}
            >
              Cómo llegar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled || isOpen ? 'text-slate-900' : 'text-white'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-600 hover:text-brand-600"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#ubicacion"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-brand-200"
          >
            Ir a la Lavandería
          </a>
        </div>
      </div>
    </nav>
  );
};