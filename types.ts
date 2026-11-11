import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: string;
  capacity: string;
  duration?: string;
  idealFor?: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'precios' | 'maquinas' | 'lockers' | 'pagos';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'general' | 'maquinas' | 'pagos' | 'lockers' | 'espacio';
  image: string;
  description: string;
  tag: string;
}

export interface LaundryCalculatorOption {
  id: string;
  label: string;
  description: string;
  recommendedMachine: string;
  capacity: string;
  washTime: string;
  dryTime: string;
  estimatedPrice: string;
  tips: string;
}