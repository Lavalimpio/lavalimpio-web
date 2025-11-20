import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Info } from 'lucide-react';
import { getStainAdvice } from '../services/geminiService';
import { StainResponse } from '../types';

export const StainAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StainResponse | null>(null);
  const [error, setError] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);
    setError(false);

    try {
      const data = await getStainAdvice(query);
      setResult(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = ['Vino tinto', 'Grasa de coche', 'Hierba', 'Café'];

  return (
    <section id="ia-assistant" className="py-20 bg-gradient-to-b from-white to-brand-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-700 rounded-full mb-4">
            <Sparkles size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Asistente de Manchas con IA
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            ¿No sabes cómo quitar esa mancha difícil antes de venir? Pregúntale a nuestra Inteligencia Artificial (Powered by Gemini).
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-brand-900/5 border border-slate-100 p-6 md:p-10">
          <form onSubmit={handleSearch} className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: Mancha de tomate en camisa blanca..."
              className="w-full pl-6 pr-14 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 focus:border-brand-500 focus:ring-0 focus:outline-none text-lg transition-colors placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-600 hover:bg-brand-500 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            </button>
          </form>

          {!result && !loading && (
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm text-slate-500 py-1">Prueba con:</span>
              {suggestions.map((s) => (
                <button 
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1 text-sm bg-slate-100 hover:bg-brand-100 text-slate-600 hover:text-brand-700 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {result && (
            <div className="animate-fade-in-up">
              <div className="bg-indigo-50 rounded-xl p-6 mb-6 border border-indigo-100">
                <h3 className="font-bold text-indigo-900 flex items-center gap-2 mb-2">
                  <Info size={18} /> Consejo Rápido
                </h3>
                <p className="text-indigo-800 text-lg">{result.advice}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Pasos recomendados:</h4>
                <div className="space-y-3">
                  {result.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500">
                  * La IA ofrece recomendaciones generales. Revisa siempre la etiqueta de la prenda.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};