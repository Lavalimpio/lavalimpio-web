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
    description: "Dosificación automática de detergente hipoalergénico, suavizante y oxígeno líquido en cada ciclo."
  },
  {
    icon: Wifi,
    title: "Zona Wi-Fi Gratis",
    description: "Disfruta de conexión de alta velocidad mientras esperas cómodamente en nuestras instalaciones."
  },
  {
    icon: ShieldCheck,
    title: "Máxima Higiene con Oxígeno Líquido",
    description: "Desinfección profunda de amplio espectro: el oxígeno líquido elimina el 99,9% de bacterias, ácaros y malos olores, desinfectando tejidos y tambor sin dañar la ropa ni irritar la piel."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wash-14',
    title: "Lavadora 14kg",
    description: "Perfecta para la colada semanal con desinfección profunda por oxígeno líquido.",
    price: "Desde 4€",
    capacity: "14kg",
    features: ["Detergente ecológico incluido", "Suavizante profesional incluido", "Oxígeno líquido desinfectante", "Ciclo rápido de 30 min"],
    popular: true
  },
  {
    id: 'wash-18',
    title: "Lavadora 18kg",
    description: "Gran capacidad. Especial para edredones King Size, mantas pesadas y cortinas.",
    price: "Desde 6€",
    capacity: "18kg",
    features: ["Detergente ecológico incluido", "Suavizante profesional incluido", "Oxígeno líquido desinfectante", "Máxima capacidad 18kg"]
  },
  {
    id: 'dry-18',
    title: "Secadora 18kg",
    description: "Secado industrial rápido con tambor bidireccional anti-arrugas.",
    price: "Desde 3€",
    capacity: "18kg",
    features: ["15 minutos por ciclo", "Efecto anti-arrugas", "Regulación de temperatura", "Capacidad extra grande"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Tengo que llevar mi propio detergente?",
    answer: "No es necesario. Nuestras máquinas dosifican automáticamente detergente ecológico, suavizante y oxígeno líquido desinfectante de alta calidad profesional en cada ciclo, todo incluido en el precio."
  },
  {
    question: "¿Puedo lavar edredones grandes?",
    answer: "Sí, disponemos de una lavadora especial de 18kg diseñada específicamente para edredones grandes, mantas pesadas y cortinas."
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer: "Aceptamos tarjetas de crédito y débito, monedas de 1€ y pago móvil mediante app."
  },
  {
    question: "¿Cuál es el horario?",
    answer: "Abrimos todos los días del año, incluidos festivos, de 07:00 a 23:00 ininterrumpidamente."
  }
];