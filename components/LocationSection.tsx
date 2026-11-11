import React from 'react';
import { MapPin, Clock, Navigation, Phone, ExternalLink, AlertCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Calle+de+Eduardo+Chillida,+223,+28051+Madrid";

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-[#F5F3EF] border-t border-[#004A68]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Ubicación en Ensanche de Vallecas
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#004A68] mb-4">
            Encuéntranos en Calle Eduardo Chillida, 223
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Situados estratégicamente en el Ensanche de Vallecas, a 4 minutos del Centro Comercial La Gavia y junto al Metro Valdecarros. Aparcamiento libre y cómodo en la misma puerta.
          </p>
        </div>

        {/* 3 Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Dirección */}
          <div className="bg-white p-7 rounded-2xl border border-[#004A68]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#004A68]/10 text-[#004A68] flex items-center justify-center mb-5">
                <MapPin size={24} className="text-[#004A68]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#004A68] mb-2">Dirección</h3>
              <address className="not-italic text-slate-600 text-sm leading-relaxed mb-4">
                <strong className="text-slate-800 font-semibold">Calle de Eduardo Chillida, 223, Local 1</strong><br />
                28051 Villa de Vallecas, Madrid<br />
                <span className="text-xs text-slate-500">Junto al Metro Valdecarros y C.C. La Gavia</span>
              </address>
            </div>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#009291] hover:text-[#007b7b] transition-colors pt-2"
            >
              Cómo llegar en Google Maps
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Card 2: Horario y Aviso de Cierre Automático */}
          <div className="bg-white p-7 rounded-2xl border border-[#004A68]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#009291]/15 text-[#009291] flex items-center justify-center mb-5">
                <Clock size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#004A68] mb-2">Horario Ininterrumpido</h3>
              <p className="text-slate-700 font-semibold text-sm mb-1">
                Lunes a Domingo: 07:00 a 23:00
              </p>
              <p className="text-slate-500 text-xs mb-4">
                Abierto 365 días al año, incluidos festivos
              </p>

              {/* Warning Notice Box */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-950">Cierre automático a las 23:00</strong>
                  El último ciclo debe iniciarse a las <strong>22:20</strong> para garantizar la finalización antes del cierre.
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Contacto y Acceso */}
          <div className="bg-white p-7 rounded-2xl border border-[#004A68]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#3F8383]/15 text-[#3F8383] flex items-center justify-center mb-5">
                <Phone size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-[#004A68] mb-2">Contacto Directo</h3>
              <div className="space-y-2 mb-4 text-sm text-slate-600">
                <p>
                  Teléfono / WhatsApp:{' '}
                  <a href="tel:+34614312278" className="font-bold text-[#004A68] hover:text-[#009291] transition-colors">
                    +34 614 312 278
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:madrid@lavalimpio.com" className="font-medium text-[#009291] hover:underline">
                    madrid@lavalimpio.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-[#e0eff0]/50 border border-[#3F8383]/20 rounded-xl p-2.5">
                <Navigation size={15} className="text-[#009291] flex-shrink-0" />
                <span>Fácil aparcamiento exterior gratuito en la puerta</span>
              </div>
            </div>
            <a 
              href="https://wa.me/34614312278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#009291] hover:text-[#007b7b] transition-colors pt-2"
            >
              Contactar por WhatsApp
              <ExternalLink size={16} />
            </a>
          </div>

        </div>

        {/* Expansive Panoramic Map */}
        <div className="relative w-full h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-xl shadow-[#004A68]/15 border-2 border-[#004A68]/15 bg-white">
          <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación LavaLimpio Ensanche de Vallecas"
            src="https://maps.google.com/maps?q=C.+de+Eduardo+Chillida,+223,+Villa+de+Vallecas,+28051+Madrid+(LavaLimpio)&hl=es&z=17&output=embed"
            className="w-full h-full"
          ></iframe>
          
          {/* Floating Top Left Pill */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#004A68]/15 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#004A68] text-white flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#7dd6d2]" />
              </div>
              <div>
                <p className="font-display font-bold text-[#004A68] text-sm leading-tight">LavaLimpio Vallecas</p>
                <p className="text-xs text-slate-500">C/ Eduardo Chillida, 223</p>
              </div>
            </div>
          </div>

          {/* Floating Bottom Action Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 bg-[#004A68]/95 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex flex-wrap items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#F5F3EF]">
              <Navigation size={16} className="text-[#7dd6d2]" />
              <span>Aparcamiento gratuito en la puerta · Metro Valdecarros</span>
            </div>
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#009291] hover:bg-[#007b7b] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md"
            >
              Cómo llegar
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};