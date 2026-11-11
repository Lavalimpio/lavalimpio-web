import React from 'react';
import { Truck, Shirt, Building2, UtensilsCrossed, Phone, ArrowRight, School } from 'lucide-react';

export const BusinessSection: React.FC = () => {
  return (
    <section id="empresas" className="py-24 bg-[#002f43] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004A68]/30 transform skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009291]/20 border border-[#009291]/40 text-[#7dd6d2] text-sm font-bold mb-6">
              <Building2 size={16} className="text-[#009291]" />
              <span>Servicio B2B para Profesionales</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6 leading-tight text-[#F5F3EF]">
              Soluciones de Lavandería <br/>
              <span className="text-[#009291]">para tu Negocio</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              Sabemos que la imagen de tu negocio depende de una lencería impecable. Ofrecemos servicio integral de recogida, lavado, secado y planchado industrial para empresas en Vallecas y Madrid.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#004A68] border border-[#3F8383]/40 rounded-xl text-[#009291]">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F3EF]">Recogida y Entrega</h4>
                  <p className="text-sm text-slate-300">Nos ocupamos de la logística puerta a puerta.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#004A68] border border-[#3F8383]/40 rounded-xl text-[#009291]">
                  <Shirt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F3EF]">Lavado + Planchado</h4>
                  <p className="text-sm text-slate-300">Acabado perfecto listo para usar.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:madrid@lavalimpio.com?subject=Presupuesto%20Empresa" 
                className="inline-flex items-center justify-center gap-2 bg-[#009291] hover:bg-[#007b7b] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#009291]/25 hover:-translate-y-0.5"
              >
                Solicitar Presupuesto
                <ArrowRight size={20} />
              </a>
              <a 
                href="tel:+34614312278" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F3EF] px-8 py-4 rounded-xl font-bold transition-all"
              >
                <Phone size={20} />
                Llamar (614 312 278)
              </a>
            </div>
          </div>

          {/* Cards Side */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-[#00384f]/80 backdrop-blur p-6 rounded-2xl border border-[#3F8383]/30 hover:border-[#009291] transition-all group shadow-lg">
                  <div className="w-10 h-10 bg-[#004A68] rounded-xl flex items-center justify-center mb-4 text-[#009291] group-hover:bg-[#009291] group-hover:text-white transition-all">
                    <Building2 size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#F5F3EF] mb-2">Hoteles y Hostales</h3>
                  <p className="text-sm text-slate-300">Sábanas, toallas y edredones con máxima higiene.</p>
                </div>
                <div className="bg-[#00384f]/80 backdrop-blur p-6 rounded-2xl border border-[#3F8383]/30 hover:border-[#009291] transition-all group shadow-lg">
                  <div className="w-10 h-10 bg-[#004A68] rounded-xl flex items-center justify-center mb-4 text-[#009291] group-hover:bg-[#009291] group-hover:text-white transition-all">
                    <UtensilsCrossed size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#F5F3EF] mb-2">Restaurantes</h3>
                  <p className="text-sm text-slate-300">Mantelería impecable y uniformes sin manchas.</p>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-[#00384f]/80 backdrop-blur p-6 rounded-2xl border border-[#3F8383]/30 hover:border-[#009291] transition-all group shadow-lg">
                  <div className="w-10 h-10 bg-[#004A68] rounded-xl flex items-center justify-center mb-4 text-[#009291] group-hover:bg-[#009291] group-hover:text-white transition-all">
                    <Shirt size={20} />
                  </div>
                  <h3 className="font-bold text-lg text-[#F5F3EF] mb-2">Residencias</h3>
                  <p className="text-sm text-slate-300">Cuidado delicado para ropa personal y de cama.</p>
                </div>
                 <div className="bg-[#00384f]/80 backdrop-blur p-6 rounded-2xl border border-[#3F8383]/30 hover:border-[#009291] transition-all group shadow-lg">
                   <div className="w-10 h-10 bg-[#004A68] rounded-xl flex items-center justify-center mb-4 text-[#009291] group-hover:bg-[#009291] group-hover:text-white transition-all">
                    <School size={20} />
                   </div>
                   <h3 className="font-bold text-lg text-[#F5F3EF] mb-2">Colegios</h3>
                   <p className="text-sm text-slate-300">Uniformes escolares y deportivos listos para clase.</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}