import { Clock, Droplets, Wifi, ShieldCheck } from 'lucide-react';
import { Feature, ServiceItem, FaqItem } from './types';

export const APP_NAME = "LavaLimpio";

export const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "Ciclos Rápidos",
    description: "Lavado y secado completo en menos de 45 minutos. Ahorra tiempo para lo que importa."
  },
  {
    icon: Droplets,
    title: "Detergente Ecológico",
    description: "Incluido automáticamente en cada lavado. Hipoalergénico y respetuoso con el medio ambiente."
  },
  {
    icon: Wifi,
    title: "Zona Wi-Fi Gratis",
    description: "Disfruta de conexión de alta velocidad mientras esperas cómodamente en nuestras instalaciones."
  },
  {
    icon: ShieldCheck,
    title: "Máxima Higiene",
    description: "Desinfección automática del tambor tras cada uso. Tu ropa siempre en un entorno seguro."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wash-14',
    title: "Lavadora 14kg",
    description: "Perfecta para la colada semanal. ¡Aprovecha nuestras ofertas de mañana!",
    price: "Desde 3€",
    capacity: "14kg",
    features: ["Detergente incluido", "Suavizante incluido", "Ofertas de mañana", "Económica"],
    popular: true
  },
  {
    id: 'wash-18',
    title: "Lavadora 18kg",
    description: "Gigante. Ideal para edredones King Size. ¡Ofertas de mañana disponibles!",
    price: "Desde 5€",
    capacity: "18kg",
    features: ["Detergente incluido", "Suavizante incluido", "Ofertas de mañana", "Máxima capacidad"]
  },
  {
    id: 'dry-18',
    title: "Secadora 18kg",
    description: "Secado profesional de gran capacidad con tarifas reducidas por la mañana.",
    price: "Desde 3€",
    capacity: "18kg",
    features: ["15 minutos por ciclo", "Ofertas de mañana", "Anti-arrugas", "Gran volumen"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Tengo que llevar mi propio detergente?",
    answer: "No es necesario. Nuestras máquinas dosifican automáticamente detergente, suavizante y oxígeno activo de alta calidad profesional en cada ciclo, incluido en el precio."
  },
  {
    question: "¿Puedo lavar edredones grandes?",
    answer: "Sí, disponemos de una lavadora especial de 18kg diseñada específicamente para edredones grandes, mantas pesadas y cortinas."
  },
  {
    question: "¿Aceptáis pago con tarjeta?",
    answer: "Sí, nuestra central de pago acepta monedas, billetes, tarjetas de crédito/débito y pago móvil (Google Pay / Apple Pay)."
  },
  {
    question: "¿Cuál es el horario?",
    answer: "Abrimos todos los días del año, incluidos festivos, de 07:00 a 23:00 ininterrumpidamente."
  }
];