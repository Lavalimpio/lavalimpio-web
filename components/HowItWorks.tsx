import React from 'react';
import { ShoppingBag, CreditCard, PlayCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: ShoppingBag,
      title: "1. Carga tu ropa",
      desc: "Elige una lavadora (14kg o 18kg) según el volumen de tu colada. Cierra bien la puerta."
    },
    {
      icon: CreditCard,
      title: "2. Realiza el pago",
      desc: "Dirígete a la central de pago. Aceptamos efectivo, tarjeta y pago móvil. Selecciona tu número de máquina."
    },
    {
      icon: PlayCircle,
      title: "3. Pulsa Start",
      desc: "Vuelve a tu máquina y pulsa Iniciar. El detergente y suavizante se añaden automáticamente."
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
            Tu colada lista en 3 pasos
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Sistema autoservicio fácil, rápido e intuitivo. Sin necesidad de traer productos de casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-neutral-200 via-brand-200 to-neutral-200 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-neutral-100 flex items-center justify-center mb-6 shadow-lg group-hover:border-brand-200 group-hover:shadow-brand-100 transition-all duration-300">
                <step.icon size={32} className="text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-600 px-4 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};