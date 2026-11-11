import React from 'react';
import { Check, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Precios Claros
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#004A68] mb-4">
            Tarifas Transparentes
          </h2>
          <p className="text-slate-600">
            Todo incluido: lavado, detergente profesional, suavizante y oxígeno activo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                service.popular 
                  ? 'bg-white shadow-2xl shadow-[#004A68]/15 border-2 border-[#009291] transform lg:-translate-y-4 z-10' 
                  : 'bg-white shadow-lg shadow-[#004A68]/5 border border-[#3F8383]/20 hover:border-[#009291]'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#009291] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md shadow-[#009291]/30 flex items-center gap-1.5">
                  <Zap size={14} className="fill-current text-white" /> Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#004A68] mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-extrabold text-[#004A68]">{service.price}</span>
                  <span className="text-slate-500 text-sm">/ ciclo</span>
                </div>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="w-full h-px bg-slate-100 mb-6"></div>

              <ul className="space-y-4 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#e0eff0] text-[#009291] flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};