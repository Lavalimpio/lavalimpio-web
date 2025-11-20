import React from 'react';
import { Check, Zap } from 'lucide-react';
import { SERVICES } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
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
                  ? 'bg-white shadow-2xl shadow-brand-900/10 border-2 border-brand-500 transform lg:-translate-y-4 z-10' 
                  : 'bg-white shadow-lg border border-slate-100 hover:border-brand-200'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                  <Zap size={14} className="fill-current" /> Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-brand-600">{service.price}</span>
                  <span className="text-slate-500">/ ciclo</span>
                </div>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="w-full h-px bg-slate-100 mb-6"></div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
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