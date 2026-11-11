import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with balanced natural brand overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-lavalimpio.jpg" 
          alt="Instalaciones reales de LavaLimpio en Ensanche de Vallecas" 
          className="w-full h-full object-cover object-center brightness-[0.94] contrast-[1.02]"
        />
        {/* Balanced brand gradient on the left to keep text crisp while showing the store */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f43]/75 via-[#004A68]/45 to-transparent"></div>
        {/* Delicate brand tint wash */}
        <div className="absolute inset-0 bg-[#009291]/6 mix-blend-overlay"></div>
        {/* Subtle top gradient for navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#001e2c]/35 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-[#F5F3EF] leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
            Lavandería Autoservicio <br/>
            <span className="text-[#009291]">en el Ensanche de Vallecas</span>
          </h1>
          
          <p className="text-lg text-[#F5F3EF]/90 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms] drop-shadow-md">
            Tu colada perfecta en un espacio limpio, moderno y acogedor. Máquinas de alta capacidad (14kg y 18kg) con detergente ecológico incluido. Calidad profesional en Calle Eduardo Chillida 223.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:600ms]">
            <a 
              href="#ubicacion" 
              className="inline-flex items-center justify-center gap-2 bg-[#009291] hover:bg-[#007b7b] text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-[#009291]/30 transform hover:-translate-y-1"
            >
              <MapPin size={20} />
              Ver Ubicación
            </a>
            <a 
              href="#precios" 
              className="inline-flex items-center justify-center gap-2 bg-[#F5F3EF]/10 hover:bg-[#F5F3EF]/20 backdrop-blur-md text-[#F5F3EF] border border-[#F5F3EF]/30 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Ver Precios
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle decorative ambient blobs */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#009291]/12 rounded-full blur-3xl animate-blob filter mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 -right-12 w-56 h-56 bg-[#3F8383]/10 rounded-full blur-2xl animate-blob filter pointer-events-none [animation-delay:4s]"></div>
    </section>
  );
};