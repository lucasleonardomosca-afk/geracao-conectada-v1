
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PLAYLIST_ITEMS } from '../constants';
import { PlaylistItem } from '../types';
import SmartImage from './SmartImage';

const JournalCard: React.FC<{ item: PlaylistItem }> = ({ item }) => {
  return (
    <div className="group cursor-pointer flex flex-col text-left bg-white rounded-[48px] p-8 hover:bg-slate-50 transition-all border border-slate-100 hover:border-emerald-200">
        <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-6">Ilustração do tema:</p>

        <div className="w-full aspect-square overflow-hidden mb-8 rounded-[40px] relative shadow-lg bg-slate-50 flex items-center justify-center">
            <SmartImage 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                icon="🎧"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center text-slate-900 text-4xl shadow-2xl">
                    ▶
                </div>
            </div>
        </div>

        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-6 italic">Material de apoio: {item.title}</p>

        <div className="flex flex-col flex-1 px-4">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 mb-4">{item.type}</span>
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{item.title}</h3>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">{item.subtitle}</p>
        </div>
    </div>
  );
};

const Journal: React.FC = () => {
  return (
    <section id="community" className="bg-white py-32 px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-emerald-50/50 rounded-[64px] p-12 md:p-24 text-center mb-32 border border-emerald-100">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-8 block">Nossa Comunidade</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight">Grupo no WhatsApp</h2>
            <p className="text-2xl text-slate-600 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Entre na nossa comunidade exclusiva. Lá não tem "pergunta boba", todo mundo se ajuda com carinho e paciência.
            </p>
            <button className="h-[96px] px-16 bg-[#25D366] hover:bg-[#128C7E] text-white text-3xl font-bold rounded-2xl shadow-2xl transition-all active:scale-95 flex items-center gap-6 mx-auto">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Entrar no grupo
            </button>
        </div>

        <div>
            <div className="mb-20">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Para Ouvir e Relaxar</h2>
                <p className="text-2xl text-slate-500 font-medium max-w-2xl">Conteúdos em áudio para você ouvir enquanto faz outras coisas do seu dia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {PLAYLIST_ITEMS.map((item) => (
                    <JournalCard key={item.id} item={item} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
