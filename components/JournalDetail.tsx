
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] animate-fade-in-up">
       {/* Imagem de Capa do Artigo */}
       <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={`Imagem ilustrativa sobre o artigo ${article.title}, usada para ajudar no entendimento.`} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10 pb-32">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border-4 border-emerald-50">
             <div className="flex justify-between items-center mb-12 border-b-4 border-slate-50 pb-8">
                <button 
                  onClick={onBack}
                  className="group h-[56px] px-6 bg-slate-100 rounded-xl flex items-center gap-3 text-xl font-black text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Voltar
                </button>
                <span className="text-lg font-bold text-slate-400">{article.date}</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 leading-tight">
               {article.title}
             </h1>

             <div className="prose prose-emerald prose-2xl mx-auto font-medium leading-relaxed text-slate-700">
               {article.content}
             </div>
             
             <div className="mt-16 pt-12 border-t-4 border-slate-50 flex justify-center">
                 <span className="text-2xl font-black text-emerald-700 uppercase tracking-widest">Geração Conectada</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
