import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Clock, MapPin, Mail, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: 'general',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setStatus('submitting');
    // Simulate web contact form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        motivo: 'general',
        mensaje: '',
      });
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 bg-[#F5F3EF] border-t border-[#004A68]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Atención al Cliente
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#004A68] mb-4">
            Formulario de Contacto Web
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            ¿Tienes alguna consulta sobre nuestras lavadoras, tarifas o servicio a empresas? Escríbenos y te responderemos con rapidez.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#3F8383]/20 shadow-lg shadow-[#004A68]/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-[#004A68] mb-4 flex items-center gap-2.5">
                  <MessageSquare size={22} className="text-[#009291]" />
                  Estamos para ayudarte
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Puedes enviarnos tus preguntas sobre cómo utilizar las máquinas, lavado de edredones o solicitar presupuestos para tu negocio a través de este formulario web.
                </p>

                <div className="space-y-5 pt-6 border-t border-slate-100 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={19} className="text-[#009291] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-[#004A68] font-semibold">Horario de apertura</strong>
                      <span className="text-slate-600">De 07:00 a 23:00 (Abierto los 365 días)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={19} className="text-[#009291] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-[#004A68] font-semibold">Ubicación física</strong>
                      <span className="text-slate-600">Calle de Eduardo Chillida 223, Local 1, Ensanche de Vallecas</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={19} className="text-[#009291] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-[#004A68] font-semibold">Correo directo</strong>
                      <a href="mailto:madrid@lavalimpio.com" className="text-[#009291] hover:underline font-medium">
                        madrid@lavalimpio.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3F8383] block mb-2">
                  ¿Prefieres respuesta inmediata?
                </span>
                <a
                  href="https://wa.me/34614312278?text=Hola%20LavaLimpio,%20tengo%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#009291] hover:text-[#004A68] transition-colors"
                >
                  <MessageCircle size={18} className="fill-current text-[#009291]" />
                  Escríbenos directamente por WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#3F8383]/20 shadow-xl shadow-[#004A68]/5">
              {status === 'success' ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 bg-[#e0eff0] text-[#009291] rounded-full mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#004A68]">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Hemos recibido tu consulta correctamente. Nuestro equipo la revisará y te responderá por email o teléfono lo antes posible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 bg-[#009291] hover:bg-[#007b7b] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-[#004A68] mb-2">
                        Nombre y apellidos *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009291] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#004A68] mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009291] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-[#004A68] mb-2">
                        Teléfono (opcional)
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. 614 312 278"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009291] focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivo" className="block text-xs font-bold uppercase tracking-wider text-[#004A68] mb-2">
                        Motivo de consulta
                      </label>
                      <select
                        id="motivo"
                        value={formData.motivo}
                        onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009291] focus:border-transparent text-sm bg-slate-50/50"
                      >
                        <option value="general">Información general / Preguntas</option>
                        <option value="edredones">Lavado de edredones o mantas</option>
                        <option value="empresas">Presupuesto para empresas (B2B)</option>
                        <option value="incidencias">Incidencia u objetos olvidados</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-[#004A68] mb-2">
                      Mensaje o consulta *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Escribe aquí tu consulta detallada..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#009291] focus:border-transparent text-sm bg-slate-50/50 resize-y"
                    ></textarea>
                  </div>

                  <p className="text-xs text-slate-500">
                    * Tus datos se usarán exclusivamente para responder a tu consulta según nuestra política de privacidad.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#009291] hover:bg-[#007b7b] disabled:opacity-70 text-white py-4 px-8 rounded-xl font-bold transition-all shadow-lg shadow-[#009291]/25 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Enviar consulta web</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
