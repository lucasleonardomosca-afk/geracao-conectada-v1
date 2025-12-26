
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F8FAFC] animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-lg font-bold text-slate-500 hover:text-slate-900 transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar para o começo
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100">
            <div className="text-center mb-12">
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-2 block">Área para Empresas</span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Empresas que ajudam</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Sua empresa quer ajudar os idosos a usar a internet? Junte-se a bancos e farmácias que já fazem parte da nossa rede.
                </p>
            </div>

            <form className="max-w-xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-slate-700 font-bold mb-2">Nome da Empresa</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-emerald-500 outline-none transition-colors" placeholder="Ex: Banco Central" />
                </div>

                <div>
                    <label className="block text-slate-700 font-bold mb-2">O que a empresa faz?</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-emerald-500 outline-none transition-colors">
                        <option>Escolha uma opção...</option>
                        <option>Banco ou Finanças</option>
                        <option>Saúde ou Farmácia</option>
                        <option>Tecnologia e Celular</option>
                        <option>Loja e Varejo</option>
                        <option>Outro</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-slate-700 font-bold mb-2">Nome de quem cuida disso</label>
                        <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-slate-700 font-bold mb-2">Telefone ou WhatsApp</label>
                        <input type="tel" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                </div>

                <div>
                    <label className="block text-slate-700 font-bold mb-2">Como querem ajudar?</label>
                    <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-emerald-500 outline-none transition-colors" placeholder="Desejamos dar descontos, pagar cursos..."></textarea>
                </div>

                <button className="w-full bg-slate-900 text-white font-bold text-xl py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                    ENVIAR MINHA IDEIA
                </button>

                <p className="text-center text-sm text-slate-500 mt-4">
                    Vamos te responder em até 2 dias.
                </p>
            </form>

            <div className="mt-16 pt-12 border-t border-slate-100">
                <p className="text-center text-slate-400 font-bold uppercase tracking-widest mb-8 text-sm">O que vem por aí</p>
                <div className="flex flex-wrap justify-center gap-4 text-slate-500 font-medium">
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">🏠 Casa Fácil (Logo logo)</span>
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">📍 Ajuda ao vivo (Em breve)</span>
                    <span className="px-4 py-2 bg-slate-50 rounded-lg">🆘 Ajuda urgente 24h</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
