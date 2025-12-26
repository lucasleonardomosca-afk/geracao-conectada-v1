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
    <section className="relative w-full pt-64 pb-48 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        {/* Left Side: Massive, Stable Typography */}
        <div className="lg:w-6/12">
          <div className="inline-flex items-center text-slate-400 font-bold text-sm uppercase tracking-[0.3em] mb-12">
             Ensino com Paciência
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1.0] mb-12 text-slate-900 tracking-tighter">
            Aprenda a usar <br/> o seu celular <br/>
            <span className="text-emerald-700">com clareza.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-500 leading-relaxed mb-16 font-medium max-w-2xl">
            Simplicidade absoluta para quem não quer perder tempo com termos técnicos. No seu ritmo, com total segurança.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <button 
              onClick={onCtaClick}
              className="h-[96px] px-16 bg-slate-900 text-white text-2xl font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center shadow-2xl active:scale-[0.98]"
            >
              Ver cursos disponíveis
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="h-[96px] px-16 bg-white border-2 border-slate-200 text-slate-900 text-2xl font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center active:scale-[0.98]"
            >
               Guia gratuito em PDF
            </button>
          </div>
        </div>

        {/* Right Side: Brazilian Senior High-Fidelity Image */}
        <div className="lg:w-6/12 w-full flex justify-center">
          <div className="relative w-full max-w-[600px] aspect-[4/5] flex items-center justify-center">
            {/* Background stability element */}
            <div className="absolute inset-0 bg-slate-50 rounded-[100px] border border-slate-100 rotate-3 scale-95 opacity-50"></div>
            
            {/* Main Premium Visual */}
            <div className="relative z-20 w-full h-full rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-4 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1590038767624-dac5740a997b?w=1200&q=80" 
                 alt="Idoso brasileiro confiante e feliz usando um smartphone em um ambiente acolhedor e moderno." 
                 className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Floating Testimony Card for Contextual Depth */}
               <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md p-10 rounded-[48px] shadow-2xl border border-slate-100 animate-fade-in-up">
                  <div className="flex items-center gap-6 mb-4">
                     <span className="text-4xl">🐢</span>
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">No seu ritmo.</h3>
                  </div>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                    "Finalmente alguém que explica devagar e com respeito."
                  </p>
               </div>
            </div>

            {/* Subtle supporting elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;