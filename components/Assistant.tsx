
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

    if (trimmedInput.length < 15) {
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
    <div className="fixed bottom-12 right-12 z-[60] flex flex-col items-end no-print">
      {isOpen && (
        <div className="bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] w-[90vw] sm:w-[480px] h-[650px] mb-8 flex flex-col overflow-hidden border border-slate-100 animate-fade-in-up">
          <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl">💬</div>
               <span className="font-black text-2xl tracking-tight">Ajudante Digital</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/50 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Fechar
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-6 rounded-[24px] text-xl font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-100 text-slate-900 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-slate-100 p-6 rounded-[24px] rounded-bl-none italic text-slate-400 text-xl font-medium animate-pulse">
                   Preparando explicação simples...
                 </div>
               </div>
            )}
          </div>

          <div className="p-8 bg-white border-t border-slate-100">
            <div className="flex flex-col gap-6">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Qual sua dúvida hoje?" 
                className="w-full bg-slate-100 border border-slate-100 rounded-2xl px-8 py-5 text-xl outline-none focus:bg-white focus:border-slate-900 transition-all font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="h-[72px] w-full bg-slate-900 text-white font-bold text-xl rounded-2xl shadow-xl hover:bg-black disabled:opacity-30 transition-all flex items-center justify-center gap-3"
              >
                Enviar pergunta
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-700 text-white flex items-center gap-6 px-10 py-6 rounded-full shadow-[0_20px_50px_rgba(4,120,87,0.3)] hover:bg-emerald-800 active:scale-95 transition-all border-4 border-white"
      >
        <span className="text-xl font-black uppercase tracking-widest">{isOpen ? 'Fechar ajuda' : 'Precisa de ajuda?'}</span>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-black">?</span>
        </div>
      </button>
    </div>
  );
};

export default Assistant;
