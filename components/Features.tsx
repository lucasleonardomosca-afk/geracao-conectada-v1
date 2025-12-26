/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      {/* Target Audience Cards */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Para quem é a Geração Conectada?</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                    👴
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Aposentado Moderno</h3>
                <p className="text-slate-600">
                    Você quer cuidar do seu dinheiro, usar aplicativos de banco e investimentos sem depender dos filhos para tudo.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                    👵
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Vovó Conectada</h3>
                <p className="text-slate-600">
                    Seu objetivo é fazer chamadas de vídeo com os netos, receber fotos da família e participar do grupo do WhatsApp.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-3xl">
                    🧶
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Mente Ativa</h3>
                <p className="text-slate-600">
                    Você quer aprender coisas novas, jogar jogos de memória, ler notícias e manter a cabeça sempre funcionando bem.
                </p>
            </div>
         </div>
      </div>

      {/* How it Works - Steps */}
      <div className="bg-[#FFFBEB] py-20 border-y border-yellow-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Como funciona nosso método?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-600 mb-6 shadow-sm">1</div>
                    <h4 className="text-lg font-bold mb-2">Escolha o Tema</h4>
                    <p className="text-slate-700">Selecione o que quer aprender hoje (ex: WhatsApp, Uber, Fotos).</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-600 mb-6 shadow-sm">2</div>
                    <h4 className="text-lg font-bold mb-2">Assista o Vídeo</h4>
                    <p className="text-slate-700">Aulas curtas, de 5 minutos, explicando botão por botão.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-600 mb-6 shadow-sm">3</div>
                    <h4 className="text-lg font-bold mb-2">Pratique Junto</h4>
                    <p className="text-slate-700">Faça no seu celular enquanto assiste, sem pressa nenhuma.</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white border-4 border-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-yellow-600 mb-6 shadow-sm">4</div>
                    <h4 className="text-lg font-bold mb-2">Tire Dúvidas</h4>
                    <p className="text-slate-700">Enroscou? Pergunte no nosso WhatsApp ou para a Assistente Virtual.</p>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Features;
