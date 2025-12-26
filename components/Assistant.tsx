
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const LogoSymbolAssistant = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="24" width="20" height="32" rx="8" fill="#F8FAFC" />
    <path 
      d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
      stroke="#059669" 
      strokeWidth="8" 
      strokeLinecap="round" 
    />
    <circle cx="32" cy="6" r="6" fill="#F8FAFC" />
  </svg>
);

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
        <div className="bg-white rounded-[48px] shadow-[0_40px_120px_rgba(0,0,0,0.15)] w-[95vw] sm:w-[520px] h-[700px] mb-8 flex flex-col overflow-hidden border-[12px] border-[#F8FAFC] animate-fade-in-up">
          <div className="bg-[#0F172A] p-8 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
               <LogoSymbolAssistant />
               <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tighter">Ajudante Digital</span>
                  <span className="text-[10px] font-bold text-[#059669] uppercase tracking-[0.3em]">Sempre ao seu lado</span>
               </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F8FAFC]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-6 rounded-[32px] text-xl font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#059669] text-white rounded-br-none' 
                      : 'bg-white border border-slate-100 text-[#0F172A] rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start items-center gap-4">
                 <div className="animate-bounce">
                    <LogoSymbolAssistant />
                 </div>
                 {/* Feedback Ouro Suave para indicar processamento calmo e seguro */}
                 <div className="bg-white border-2 border-[#FBBF24] p-6 rounded-[32px] rounded-bl-none italic text-slate-500 text-lg font-medium shadow-sm flex items-center gap-3">
                   <span className="text-[#FBBF24] font-black">★</span> Pensando com calma...
                 </div>
               </div>
            )}
          </div>

          <div className="p-8 bg-white border-t-8 border-[#F8FAFC]">
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Qual sua dúvida hoje?" 
                className="w-full bg-[#F8FAFC] border-2 border-slate-100 rounded-[28px] px-8 py-6 text-xl outline-none focus:bg-white focus:border-[#059669] transition-all font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="h-[80px] w-full bg-[#0F172A] text-white font-black text-xl rounded-[28px] shadow-lg hover:bg-black disabled:opacity-30 transition-all flex items-center justify-center gap-3"
              >
                🚀 Enviar pergunta
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#059669] text-white flex items-center gap-6 px-10 py-6 rounded-full shadow-2xl hover:bg-[#065F46] active:scale-95 transition-all border-[8px] border-white group"
      >
        <span className="text-xl font-black uppercase tracking-widest">{isOpen ? 'Fechar ajuda' : 'Precisa de ajuda?'}</span>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
            <span className="text-[#059669] text-2xl font-black">?</span>
        </div>
      </button>
    </div>
  );
};

export default Assistant;
