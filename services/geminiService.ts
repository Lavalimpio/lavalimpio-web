import { GoogleGenAI, Type } from "@google/genai";
import { StainResponse } from '../types';

const SYSTEM_INSTRUCTION = `
Eres el "Asistente Experto de LavaLimpio", una inteligencia artificial especializada en cuidado textil y eliminación de manchas.
Tu objetivo es ayudar a los clientes de la lavandería a tratar manchas difíciles antes de meter la ropa en la lavadora.

Reglas:
1. Sé conciso. Los pasos deben ser accionables rápidamente.
2. Recomienda productos comunes (vinagre, bicarbonato, jabón neutro) o pre-tratamiento.
3. Mantén un tono profesional pero amable.
4. Idioma: Español.
`;

export const getStainAdvice = async (stainType: string): Promise<StainResponse> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `¿Cómo quito una mancha de ${stainType}?`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: {
              type: Type.STRING,
              description: "Un resumen breve y empático de 1 frase."
            },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              },
              description: "Lista de pasos accionables."
            }
          },
          required: ["advice", "steps"],
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as StainResponse;

  } catch (error) {
    console.error("Error fetching stain advice:", error);
    return {
      advice: "Lo siento, no pude conectar con la base de datos de limpieza en este momento.",
      steps: ["Consulta al personal si está disponible", "Intenta lavar con agua fría primero si tienes dudas"]
    };
  }
};