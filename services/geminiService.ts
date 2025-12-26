
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";

const getSystemInstruction = () => {
  return `Você é um assistente de apoio educacional para pessoas acima de 60 anos.

REGRAS DE RESPOSTA OBRIGATÓRIAS:
- NUNCA use as seguintes palavras: "Configurações", "Permissões", "Autenticação", "Sincronizar", "Conta" (no sentido de account).
- NUNCA use as seguintes palavras: "Erro", "Falha", "Incorreto".
- USE SEMPRE estas substituições:
    * Ajustes (em vez de Configurações)
    * Autorizar (em vez de Permissões)
    * Entrar (em vez de Autenticação)
    * Atualizar (em vez de Sincronizar)
    * Seu cadastro (em vez de Conta)
    * "Vamos tentar de outro jeito." (em vez de Erro, Falha ou Incorreto)

- MENSAGENS ACOLHEDORAS:
    * Se o usuário avançar ou aprender algo: "Muito bem. Você está indo no seu ritmo."
    * Se o usuário quiser repetir ou revisar: "Repetir faz parte do aprendizado. Está tudo certo."

- Responda apenas à dúvida do usuário de forma muito simples.
- Use linguagem do dia a dia, como se estivesse conversando com um avô ou avó.
- Responda em no máximo 4 frases curtas.
- Mantenha um tom calmo, respeitoso e sem pressa.
- Não dê muitas instruções de uma vez só.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Vamos tentar de outro jeito. Por favor, tente novamente em instantes.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.1,
      },
    });

    const text = response.text;

    if (!text || text.trim().length === 0) {
        return "Posso explicar de um jeito mais simples.";
    }

    return text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Vamos tentar de outro jeito. Pode tentar me perguntar de novo?";
  }
};
