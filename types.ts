import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  capacity: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StainResponse {
  advice: string;
  steps: string[];
}