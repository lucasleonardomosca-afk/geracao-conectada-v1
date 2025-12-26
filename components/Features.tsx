
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
         <div className="text-center mb-24">
            <span className="text-emerald-600 font-black text-sm uppercase tracking-[0.4em] mb-6 block">Nosso Impacto</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Feito para o seu tempo</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { emoji: '👴', title: 'Autonomia Real', desc: 'Cuide das suas finanças e aplicativos de banco sem precisar pedir ajuda.' },
              { emoji: '👵', title: 'União Familiar', desc: 'Mande fotos, vídeos e faça chamadas de vídeo com toda a sua família.' },
              { emoji: '💡', title: 'Segurança Total', desc: 'Ensinamos a identificar golpes e manter seus dados sempre protegidos.' }
            ].map((card, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[56px] border-4 border-transparent flex flex-col items-center text-center transition-all hover:border-emerald-100 hover:bg-white hover:shadow-2xl group">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl shadow-sm mb-10 group-hover:scale-110 transition-transform">{card.emoji}</div>
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
