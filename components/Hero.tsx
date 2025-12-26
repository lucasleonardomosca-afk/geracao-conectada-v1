
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
    onSecondaryCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="relative w-full pt-40 pb-20 px-6 bg-emerald-50/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-slate-900 tracking-tight">
            Aprenda a usar o seu celular <span className="text-emerald-700">com calma.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-12 font-medium">
            Tire suas dúvidas, fale com a família e use o banco com total segurança. Nós ensinamos passo a passo.
          </p>
          
          <div className="flex flex-col gap-6 w-full">
            <button 
              onClick={onCtaClick}
              className="h-[64px] w-full bg-emerald-600 text-white text-2xl font-black rounded-2xl shadow-xl hover:bg-emerald-700 active:translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              📚 Quero ver os cursos
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="h-[64px] w-full bg-white border-4 border-emerald-600 text-emerald-800 text-2xl font-black rounded-2xl hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center gap-3"
            >
               📖 Ver guia grátis em PDF
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
            <img 
                src="https://images.unsplash.com/photo-1616059639535-6497f14b62d3?auto=format&fit=crop&q=80&w=1000" 
                alt="Pessoa sorrindo usando celular" 
                className="w-full rounded-[40px] shadow-2xl border-8 border-white object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border-2 border-emerald-100 max-w-sm">
                <p className="text-xl font-bold text-emerald-900 leading-snug">
                  "Finalmente alguém que explica devagar e sem termos difíceis!"
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;