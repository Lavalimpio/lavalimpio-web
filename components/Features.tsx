import React from 'react';
import { 
  Droplets, 
  Wind, 
  Wifi, 
  Package, 
  Utensils, 
  Building2, 
  PawPrint, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  const photoServices = [
    {
      title: "Lockers InPost y Amazon Locker",
      category: "Paquetería y Envíos",
      badge: "InPost & Amazon Locker",
      description: "Recoge y envía tus compras online con total comodidad en nuestros casilleros inteligentes InPost y Amazon Locker ('ax') mientras se lava tu ropa.",
      image: "/lavalimpio-lockers.jpg",
      icon: Package
    },
    {
      title: "Máquina de Vending con Alimentación",
      category: "Snacks & Bebidas",
      badge: "Alimentación y Refrescos",
      description: "Disfruta de una pausa agradable con nuestra máquina expendedora equipada con patatas, chocolatinas, aperitivos dulces, salados y refrescos fríos.",
      image: "/lavalimpio-vending.jpg",
      icon: Utensils
    },
    {
      title: "Dog Friendly (¡Perretes bienvenidos!)",
      category: "Espacio Pet Friendly",
      badge: "🐶 Aceptamos Mascotas",
      description: "Sabemos que tu perrete es parte de la familia. En LavaLimpio aceptamos perretes educados y con correa para que te acompañen durante tu visita.",
      image: "/lavalimpio-perros.jpg",
      secondaryImage: "/lavalimpio-perros-fachada.jpg",
      icon: PawPrint
    }
  ];

  const standardServices = [
    {
      title: "Lavado Profesional con Oxígeno Líquido",
      badge: "14kg y 18kg",
      description: "Lavadoras industriales Fagor de alta capacidad. Dosificación automática de detergente ecológico, suavizante y oxígeno desinfectante en cada lavado.",
      icon: Droplets,
      linkText: "Ver precios de lavado",
      linkHref: "#precios"
    },
    {
      title: "Secado Rápido en 20 Minutos",
      badge: "Ciclos de 20 min",
      description: "Secadoras industriales de 18kg con control térmico y rotación bidireccional anti-arrugas para prendas y edredones listos para usar.",
      icon: Wind,
      linkText: "Ver tarifas de secado",
      linkHref: "#precios"
    },
    {
      title: "Zona Wi-Fi Gratis de Alta Velocidad",
      badge: "Conexión Libre",
      description: "Navega por internet, trabaja o disfruta de tus series favoritas con nuestra red Wi-Fi de alta velocidad en una cómoda zona de espera.",
      icon: Wifi
    },
    {
      title: "Servicios para Empresas (B2B)",
      badge: "Hostelería y Negocios",
      description: "Soluciones de lavandería para restaurantes, hoteles, residencias y colegios con servicio de recogida, entrega y facturación profesional.",
      icon: Building2,
      linkText: "Soluciones para empresas",
      linkHref: "#empresas"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            <Sparkles size={14} className="text-[#009291]" />
            <span>Servicios e Instalaciones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#004A68] mb-4">
            Mucho más que una lavandería
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            En LavaLimpio Vallecas cuentas con todos los servicios para tu colada, recogida de compras online, snacks para la espera y un espacio cómodo donde tu perrete también es bienvenido.
          </p>
        </div>

        {/* Featured Photo Services Grid (Lockers, Vending, Dog Friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {photoServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden border border-[#004A68]/10 shadow-lg shadow-[#004A68]/5 hover:shadow-2xl hover:shadow-[#004A68]/15 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Photo Header */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/80 via-transparent to-black/20"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#004A68] shadow-sm flex items-center gap-1.5 border border-[#004A68]/10">
                  <service.icon size={14} className="text-[#009291]" />
                  <span>{service.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#009291] block mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#004A68] mb-3 group-hover:text-[#009291] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core & Complementary Services Grid (Lavado, Secado 20 min, Wi-Fi, Empresas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardServices.map((service, index) => (
            <div 
              key={index} 
              className="p-7 rounded-2xl bg-white border border-[#3F8383]/15 hover:border-[#009291] hover:shadow-xl hover:shadow-[#004A68]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#e0eff0] text-[#004A68] flex items-center justify-center group-hover:bg-[#009291] group-hover:text-white transition-all duration-300 shadow-sm p-3">
                    <service.icon size={26} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F5F3EF] text-[#004A68] border border-[#004A68]/10">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#004A68] mb-2.5 group-hover:text-[#009291] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
              </div>

              {service.linkHref && (
                <a 
                  href={service.linkHref} 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009291] hover:text-[#007b7b] transition-colors pt-2 group-hover:translate-x-1 duration-200"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};