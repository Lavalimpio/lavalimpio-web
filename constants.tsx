import { Droplets, Wind, Wifi, Package, Utensils, Building2, PawPrint } from 'lucide-react';
import { Feature, ServiceItem, FaqItem } from './types';

export const APP_NAME = "LavaLimpio";

export const FEATURES: Feature[] = [
  {
    icon: Droplets,
    title: "Lavado Profesional",
    description: "Lavadoras industriales Fagor de 14kg y 18kg. Incluyen automáticamente detergente ecológico, suavizante y desinfección profunda por oxígeno líquido activo en cada ciclo.",
    badge: "14kg y 18kg"
  },
  {
    icon: Wind,
    title: "Secado Rápido",
    description: "Secadoras de alta capacidad de 18kg con ciclos de 20 minutos, rotación bidireccional y efecto anti-arrugas para dejar tus prendas y edredones listos para doblar.",
    badge: "20 min por ciclo"
  },
  {
    icon: Package,
    title: "Lockers InPost y Amazon",
    description: "Punto de recogida y devolución de paquetería InPost y Amazon Locker 'ax'. Recoge o envía tus paquetes cómodamente mientras realizas tu colada.",
    badge: "InPost & Amazon Locker",
    image: "/lavalimpio-lockers.jpg"
  },
  {
    icon: Utensils,
    title: "Vending con Alimentación",
    description: "Máquina expendedora con snacks dulces y salados, patatas, chocolatinas y bebidas frías para que disfrutes de un tentempié mientras esperas tu ropa.",
    badge: "Snacks & Bebidas",
    image: "/lavalimpio-vending.jpg"
  },
  {
    icon: PawPrint,
    title: "Dog Friendly (¡Perretes bienvenidos!)",
    description: "Aceptamos perretes bien educados y con correa en nuestra lavandería. Tu mejor amigo peludo no tiene que quedarse en la calle esperándote.",
    badge: "100% Pet Friendly",
    image: "/lavalimpio-perros.jpg"
  },
  {
    icon: Wifi,
    title: "Zona Wi-Fi Gratis",
    description: "Conexión a internet de alta velocidad totalmente gratuita en todo el local para teletrabajar, ver series o navegar mientras se lava tu ropa.",
    badge: "Alta Velocidad"
  },
  {
    icon: Building2,
    title: "Servicios para Empresas",
    description: "Soluciones B2B a medida para hostelería, restaurantes, hoteles, apartamentos turísticos, colegios y residencias con recogida, entrega y facturación profesional.",
    badge: "Soluciones B2B",
    link: "#empresas"
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
    features: ["20 minutos por ciclo", "Efecto anti-arrugas", "Regulación de temperatura", "Capacidad extra grande"]
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
    question: "¿Cuánto dura el ciclo de secado?",
    answer: "El ciclo de secado en nuestras secadoras de 18kg dura 20 minutos por ciclo, con tambor bidireccional y control de temperatura para cuidar los tejidos y evitar arrugas."
  },
  {
    question: "¿Aceptáis perretes o mascotas?",
    answer: "¡Sí, por supuesto! Somos una lavandería Dog Friendly. Aceptamos perretes que se porten bien y vengan atados con su correa mientras haces tu colada."
  },
  {
    question: "¿Qué otros servicios tenéis además de lavar y secar?",
    answer: "Disponemos de punto de paquetería con Lockers de InPost y Amazon Locker 'ax', máquina de vending con snacks y bebidas frías, Wi-Fi gratis de alta velocidad y servicios de lavandería para empresas."
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer: "Aceptamos tarjetas de crédito y débito, monedas de 1€ y pago móvil mediante app."
  },
  {
    question: "¿Cuál es el horario y a qué hora es el último lavado?",
    answer: "Abrimos los 365 días del año de 07:00 a 23:00 ininterrumpidamente. Dado que el local tiene cierre automático a las 23:00, el último ciclo de lavado o secado debe iniciarse a las 22:20 como máximo para que dé tiempo a completarlo antes del cierre."
  }
];