import React from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
          alt="Cliente feliz en LavaLimpio Vallecas" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient: Darker on left for text readability, fading to warm transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent"></div>
        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/90 border border-brand-500/50 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in-up shadow-lg shadow-brand-900/20">
            <Sparkles size={16} className="text-brand-200" />
            <span>¡Ofertas de mañana disponibles!</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 animate-fade-in-up [animation-delay:200ms] drop-shadow-lg">
            Lavandería Autoservicio <br/>
            <span className="text-brand-500">en el Ensanche de Vallecas</span>
          </h1>
          
          <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms] drop-shadow-md">
            Tu colada perfecta en un espacio limpio, moderno y acogedor. Máquinas de alta capacidad (14kg y 18kg) con detergente ecológico incluido. Calidad profesional en Calle Eduardo Chillida 223.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:600ms]">
            <a 
              href="#ubicacion" 
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-brand-500/25 transform hover:-translate-y-1"
            >
              <MapPin size={20} />
              Ver Ubicación
            </a>
            <a 
              href="#precios" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Ver Precios
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorational blobs */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-blob filter mix-blend-screen"></div>
    </section>
  );
};