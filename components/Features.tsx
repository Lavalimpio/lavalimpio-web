import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Cuidado y Eficiencia
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#004A68] mb-4">
            ¿Por qué elegir LavaLimpio?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Hemos reinventado la experiencia de lavandería autoservicio en Vallecas pensando en tu comodidad y en el cuidado de tus prendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white border border-[#3F8383]/15 hover:border-[#009291] hover:shadow-xl hover:shadow-[#004A68]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e0eff0] text-[#004A68] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#004A68] group-hover:text-white transition-all duration-300 shadow-sm">
                <feature.icon size={28} strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-[#004A68] mb-3 group-hover:text-[#009291] transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};