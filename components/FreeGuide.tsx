
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const FreeGuide: React.FC = () => {
  return (
    <section id="free-guide" className="py-48 bg-slate-50 no-print">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-start gap-32">
        <div className="lg:w-1/2">
           <span className="text-xs font-black text-slate-300 uppercase tracking-[0.35em] mb-12 block">Apoio Didático Gratuito</span>
           <h2 className="text-7xl font-black text-slate-900 mb-12 leading-[1.1] tracking-tight">
               O Livrinho <br/> do Celular.
           </h2>
           <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-xl">
               Um manual impresso com letras grandes para você consultar sempre que tiver dúvida. Enviamos direto no seu WhatsApp ou E-mail.
           </p>
           <div className="space-y-8">
               {[
                 { label: 'Letras grandes e fáceis', emoji: '🔍' },
                 { label: 'Dicas contra golpes', emoji: '🛡️' },
                 { label: 'Dicionário de termos', emoji: '📖' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-6 text-2xl font-bold text-slate-800">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm">{item.emoji}</div>
                    {item.label}
                 </div>
               ))}
           </div>
        </div>
        
        <div className="lg:w-1/2 bg-white p-16 rounded-[64px] border border-slate-100 w-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
            <h3 className="text-4xl font-black mb-12 text-slate-900 tracking-tight">Receber agora</h3>
            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert('Enviado com sucesso!'); }}>
                <div className="space-y-4">
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Seu Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-6 text-xl focus:bg-white focus:border-slate-900 outline-none transition-all font-medium" 
                      placeholder="Ex: Maria de Oliveira" 
                    />
                </div>
                <div className="space-y-4">
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">E-mail ou WhatsApp</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-6 text-xl focus:bg-white focus:border-slate-900 outline-none transition-all font-medium" 
                      placeholder="maria@email.com" 
                    />
                </div>
                <button type="submit" className="h-[96px] w-full bg-slate-900 text-white font-bold text-2xl rounded-2xl hover:bg-black transition-all shadow-xl active:scale-[0.98]">
                    Enviar para o meu celular
                </button>
            </form>
            <p className="mt-8 text-center text-slate-300 font-medium">Não mandamos propaganda chata. Seus dados estão bem guardados.</p>
        </div>
      </div>
    </section>
  );
};

export default FreeGuide;
