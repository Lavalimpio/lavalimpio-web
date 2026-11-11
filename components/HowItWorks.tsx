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
    <section className="py-20 bg-white border-b border-[#004A68]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Fácil y Rápido
          </div>
          <h2 className="text-3xl font-display font-bold text-[#004A68] mb-4">
            Tu colada lista en 3 pasos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sistema autoservicio fácil, rápido e intuitivo. Sin necesidad de traer productos de casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#004A68]/20 via-[#009291] to-[#004A68]/20 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[#F5F3EF] border-4 border-white flex items-center justify-center mb-6 shadow-lg shadow-[#004A68]/10 group-hover:border-[#009291] group-hover:shadow-[#009291]/20 transition-all duration-300">
                <step.icon size={32} className="text-[#004A68] group-hover:text-[#009291] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#004A68] mb-3">{step.title}</h3>
              <p className="text-slate-600 px-4 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Real Facilities Showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#004A68]/10 group">
            <img 
              src="/lavalimpio-maquinas.jpg" 
              alt="Lavadoras industriales LavaLimpio" 
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/90 via-[#002f43]/30 to-transparent flex items-end p-5">
              <span className="text-[#F5F3EF] font-semibold text-sm">
                Lavadoras y secadoras de 14kg y 18kg con desinfección por oxígeno líquido
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#004A68]/10 group">
            <img 
              src="/lavalimpio-pagos.jpg" 
              alt="Central de pago contactless y efectivo" 
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/90 via-[#002f43]/30 to-transparent flex items-end p-5">
              <span className="text-[#F5F3EF] font-semibold text-sm">
                Central de pago rápida: Tarjeta bancaria, móvil o monedas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};