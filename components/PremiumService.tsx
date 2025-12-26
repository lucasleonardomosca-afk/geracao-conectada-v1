
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import SmartImage from './SmartImage';

const PremiumService: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden no-print">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
            <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full font-bold uppercase tracking-widest text-sm mb-6">
                Serviço Premium
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Faz-Tudo Digital para Idosos</h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Evangelização técnica especializada com suporte humano. Tenha alguém de confiança para resolver seus problemas digitais.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                    Imagine ter um "neto de aluguel" paciente e especialista? Nós instalamos aplicativos, organizamos seu celular e ajudamos com tudo o que você precisar.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="text-3xl">📱</span>
                        <span className="text-xl font-bold">Celular e Tablet</span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="text-3xl">💻</span>
                        <span className="text-xl font-bold">Computador e Notebook</span>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col gap-4">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest text-center">Nossa ajuda em ação:</p>
                <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-3xl rotate-3 opacity-20"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700 z-10 w-full aspect-[4/3] bg-slate-800 flex items-center justify-center">
                        <SmartImage 
                            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800" 
                            alt="Suporte técnico especializado para idosos." 
                            className="w-full h-full object-cover"
                            icon="💡"
                        />
                    </div>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Tire suas dúvidas com quem entende e respeita seu tempo.</p>
            </div>
         </div>

         <div className="text-center">
             <button className="h-[64px] min-w-[320px] bg-green-500 hover:bg-green-400 text-slate-900 text-2xl font-black rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-3 mx-auto">
                 🤝 Conhecer o Faz-Tudo Digital
             </button>
         </div>
      </div>
    </section>
  );
};

export default PremiumService;
