import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-0 bg-white flex flex-col-reverse lg:flex-row h-auto lg:h-[600px]">
      
      {/* Info Side */}
      <div className="flex-1 bg-neutral-900 text-white p-10 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto lg:mx-0">
          <h2 className="text-3xl font-display font-bold mb-6 text-brand-50">
            LavaLimpio Vallecas
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Situados estratégicamente en el <strong className="text-white">Ensanche de Vallecas</strong>, damos servicio a toda la zona de <span className="text-neutral-300">Villa de Vallecas</span>. Nos encontramos a pocos minutos del <span className="text-neutral-300">C.C. La Gavia</span> y cerca del Metro Valdecarros.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5 text-brand-500 border border-white/10">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Dirección</h3>
                <address className="not-italic text-neutral-300 leading-relaxed">
                  Calle de Eduardo Chillida, 223, Local 1<br />
                  Villa de Vallecas, 28051 Madrid
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5 text-brand-500 border border-white/10">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Horario Apertura</h3>
                <p className="text-neutral-300">
                  Lunes a Domingo<br />
                  07:00 - 23:00 (Abierto 365 días)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-white/5 text-brand-500 border border-white/10">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Contacto</h3>
                <p className="text-neutral-300 mb-1">+34 658 63 27 02</p>
                <a href="mailto:madrid@lavalimpio.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                  madrid@lavalimpio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Side */}
      <div className="flex-1 relative h-[400px] lg:h-auto bg-neutral-200">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Lavandería Ensanche de Vallecas"
          src="https://maps.google.com/maps?q=C.+de+Eduardo+Chillida,+223,+Villa+de+Vallecas,+28051+Madrid+(LavaLimpio)&hl=es&z=17&output=embed"
          className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
        ></iframe>
        
        {/* Overlay message */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-xs font-semibold text-neutral-600 pointer-events-none hidden sm:block border border-neutral-200">
          <div className="flex items-center gap-2">
            <Navigation size={14} className="text-brand-600" />
            Fácil aparcamiento en Calle Eduardo Chillida
          </div>
        </div>
      </div>
    </section>
  );
};