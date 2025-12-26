/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PLAYLIST_ITEMS } from '../constants';

const Journal: React.FC = () => {
  return (
    <section id="community" className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Community Callout */}
        <div className="bg-[#25D366]/10 rounded-3xl p-8 md:p-16 text-center mb-24 border border-[#25D366]/20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Grupo no WhatsApp</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10">
                Entre na nossa comunidade exclusiva. Lá não tem "pergunta boba", todo mundo se ajuda e temos moderadores para garantir o respeito.
            </p>
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg transition-colors flex items-center gap-3 mx-auto">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                ENTRAR NO GRUPO
            </button>
        </div>

        {/* Playlists */}
        <div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Para Ouvir e Relaxar</h2>
                <p className="text-lg text-slate-600">Conteúdos em áudio para você ouvir enquanto faz outras coisas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PLAYLIST_ITEMS.map((item) => (
                    <div key={item.id} className="group cursor-pointer flex flex-col text-left bg-slate-50 rounded-2xl p-4 hover:bg-slate-100 transition-colors">
                        <div className="w-full aspect-square overflow-hidden mb-6 rounded-xl relative shadow-md">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-green-500 rounded-full p-4 text-white shadow-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">{item.type}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.subtitle}</p>
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
