
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou seu ajudante digital. Pode escrever sua dúvida aqui embaixo, com calma.', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    const userMsg: ChatMessage = { role: 'user', text: trimmedInput, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    if (trimmedInput.length < 20) {
      const staticMsg: ChatMessage = { 
        role: 'model', 
        text: 'Por favor, escreva um pouco mais de detalhes para eu conseguir te ajudar melhor.', 
        timestamp: Date.now() 
      };
      setMessages(prev => [...prev, staticMsg]);
      return;
    }

    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        const errorMsg: ChatMessage = { 
          role: 'model', 
          text: 'Vamos tentar de outro jeito. Pode me perguntar novamente?', 
          timestamp: Date.now() 
        };
        setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-[90vw] sm:w-[450px] h-[600px] mb-6 flex flex-col overflow-hidden border-4 border-emerald-600">
          <div className="bg-emerald-600 p-6 flex justify-between items-center text-white">
            <span className="font-black text-2xl">Ajudante Digital</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-white text-emerald-800 font-bold px-4 py-2 rounded-xl text-lg active:scale-90"
            >
              SAIR
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[90%] p-5 rounded-2xl text-xl font-medium shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-200' 
                      : 'bg-white border-2 border-slate-200 text-slate-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl italic text-slate-500 text-xl font-bold">
                   Pensando na explicação...
                 </div>
               </div>
            )}
          </div>

          <div className="p-6 bg-white border-t-4 border-slate-100">
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escreva sua pergunta aqui..." 
                className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-6 py-4 text-xl outline-none focus:border-emerald-500 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="h-[64px] w-full bg-emerald-600 text-white font-black text-2xl rounded-2xl shadow-lg hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                🚀 Enviar minha dúvida
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 text-white flex items-center gap-4 px-8 py-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all border-4 border-white"
      >
        <span className="text-2xl font-black">{isOpen ? 'SAIR DA AJUDA' : 'PRECISA DE AJUDA?'}</span>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-700 text-2xl font-black">?</span>
        </div>
      </button>
    </div>
  );
};

export default Assistant;
