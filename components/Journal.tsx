
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PLAYLIST_ITEMS } from '../constants';

const Journal: React.FC = () => {
  return (
    <section id="community" className="bg-white py-32 px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Community Callout */}
        <div className="bg-emerald-50/50 rounded-[64px] p-12 md:p-24 text-center mb-32 border border-emerald-100">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-8 block">Nossa Comunidade</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight">Grupo no WhatsApp</h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Entre na nossa comunidade exclusiva. Lá não tem "pergunta boba", todo mundo se ajuda com carinho e paciência.
            </p>
            <button className="h-[96px] px-16 bg-[#25D366] hover:bg-[#128C7E] text-white text-3xl font-bold rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center gap-6 mx-auto">
                <span>🟢</span>
                Entrar no grupo
            </button>
        </div>

        {/* Playlists */}
        <div>
            <div className="mb-20">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Para Ouvir e Relaxar</h2>
                <p className="text-2xl text-slate-500 font-medium max-w-2xl">Conteúdos em áudio para você ouvir enquanto faz outras coisas do seu dia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {PLAYLIST_ITEMS.map((item) => (
                    <div key={item.id} className="group cursor-pointer flex flex-col text-left bg-white rounded-[48px] p-8 hover:bg-slate-50 transition-all border border-slate-100 hover:border-emerald-200">
                        <div className="w-full aspect-square overflow-hidden mb-10 rounded-[40px] relative shadow-lg">
                            <img 
                                src={item.image} 
                                alt={`Imagem ilustrativa sobre o conteúdo ${item.title}, usada para ajudar no entendimento.`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center text-slate-900 text-4xl shadow-2xl">
                                    ▶
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 px-4">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4">{item.type}</span>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{item.title}</h3>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
