
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
         <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 tracking-tight">Feito para você</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { emoji: '👴', title: 'Aposentado Moderno', desc: 'Cuide das suas finanças e aplicativos de banco com total autonomia.' },
              { emoji: '👵', title: 'Vovó Conectada', desc: 'Chamadas de vídeo e compartilhamento de fotos com toda a família.' },
              { emoji: '🧠', title: 'Mente Ativa', desc: 'Notícias, jogos de memória e novos conhecimentos todos os dias.' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-slate-100 flex flex-col items-center text-center transition-all hover:border-emerald-200">
                  <div className="text-6xl mb-10">{card.emoji}</div>
                  <h3 className="text-2xl font-black mb-6 text-slate-900 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      {card.desc}
                  </p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Features;
