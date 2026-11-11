import React from 'react';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-0 bg-white flex flex-col-reverse lg:flex-row h-auto lg:h-[600px]">
      
      {/* Info Side */}
      <div className="flex-1 bg-[#004A68] text-white p-10 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto lg:mx-0">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#7dd6d2] bg-white/10 rounded-full border border-white/10">
            Visítanos
          </div>
          <h2 className="text-3xl font-display font-bold mb-6 text-[#F5F3EF]">
            LavaLimpio Vallecas
          </h2>
          <p className="text-[#F5F3EF]/80 mb-8 leading-relaxed font-light">
            Situados estratégicamente en el <strong className="text-white font-semibold">Ensanche de Vallecas</strong>, damos servicio a toda la zona de <span className="text-white font-medium">Villa de Vallecas</span>. Nos encontramos a pocos minutos del <span className="text-white font-medium">C.C. La Gavia</span> y cerca del Metro Valdecarros.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#009291] border border-white/15 flex-shrink-0">
                <MapPin size={22} className="text-[#7dd6d2]" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1 text-[#F5F3EF]">Dirección</h3>
                <address className="not-italic text-[#F5F3EF]/80 text-sm leading-relaxed">
                  Calle de Eduardo Chillida, 223, Local 1<br />
                  Villa de Vallecas, 28051 Madrid
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#009291] border border-white/15 flex-shrink-0">
                <Clock size={22} className="text-[#7dd6d2]" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1 text-[#F5F3EF]">Horario Apertura</h3>
                <p className="text-[#F5F3EF]/80 text-sm">
                  Lunes a Domingo<br />
                  07:00 - 23:00 (Abierto 365 días al año)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-[#009291] border border-white/15 flex-shrink-0">
                <Phone size={22} className="text-[#7dd6d2]" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1 text-[#F5F3EF]">Teléfono y WhatsApp</h3>
                <p className="text-[#F5F3EF]/90 text-sm mb-1">
                  <a href="tel:+34614312278" className="hover:text-white transition-colors font-semibold">
                    +34 614 312 278
                  </a>
                </p>
                <a href="mailto:madrid@lavalimpio.com" className="text-[#7dd6d2] hover:text-white transition-colors text-sm font-medium">
                  madrid@lavalimpio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Side */}
      <div className="flex-1 relative h-[400px] lg:h-auto bg-[#F5F3EF]">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Lavandería Ensanche de Vallecas"
          src="https://maps.google.com/maps?q=C.+de+Eduardo+Chillida,+223,+Villa+de+Vallecas,+28051+Madrid+(LavaLimpio)&hl=es&z=17&output=embed"
          className="w-full h-full"
        ></iframe>
        
        {/* Overlay message */}
        <div className="absolute bottom-6 right-6 bg-[#F5F3EF]/95 backdrop-blur px-4 py-2.5 rounded-xl shadow-lg text-xs font-bold text-[#004A68] pointer-events-none hidden sm:block border border-[#004A68]/10">
          <div className="flex items-center gap-2">
            <Navigation size={14} className="text-[#009291]" />
            Fácil aparcamiento en Calle Eduardo Chillida
          </div>
        </div>
      </div>
    </section>
  );
};