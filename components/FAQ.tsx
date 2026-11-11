import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-wider uppercase text-[#3F8383] bg-[#e0eff0] rounded-full border border-[#3F8383]/20">
            Resolvemos tus Dudas
          </div>
          <h2 className="text-3xl font-display font-bold text-[#004A68]">Preguntas Frecuentes</h2>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#009291] bg-[#F5F3EF] shadow-md shadow-[#004A68]/5' 
                  : 'border-[#3F8383]/20 bg-white hover:border-[#3F8383]/40'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-[#004A68]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#009291] flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-[#3F8383] flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};