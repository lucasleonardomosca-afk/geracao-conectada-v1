
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import SmartImage from './SmartImage';

interface HeroProps {
    onCtaClick: () => void;
    onSecondaryCtaClick: () => void;
}

const LogoSymbolHero = () => (
  <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-10 animate-fade-in-up">
    {/* Smartphone */}
    <rect x="30" y="22" width="20" height="32" rx="8" fill="#0F172A" />
    {/* Arco de Apoio - Verde Guardião */}
    <path 
      d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
      stroke="#059669" 
      strokeWidth="8" 
      strokeLinecap="round" 
    />
    {/* Silhueta Humana */}
    <circle cx="32" cy="6" r="6" fill="#0F172A" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="relative w-full pt-64 pb-48 px-8 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        <div className="lg:w-6/12">
          {/* Logo Principal em destaque */}
          <LogoSymbolHero />
          
          <div className="inline-flex items-center text-emerald-600 font-black text-sm uppercase tracking-[0.4em] mb-12 bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100">
             Acolhimento e Tecnologia
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1.0] mb-12 text-slate-900 tracking-tighter">
            Aprenda a usar <br/> o seu celular <br/>
            <span className="text-emerald-700 italic">no seu ritmo.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed mb-16 font-medium max-w-2xl">
            Simplicidade absoluta para quem não quer perder tempo com termos técnicos. Um guia humano para sua jornada digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <button 
              onClick={onCtaClick}
              className="h-[96px] px-16 bg-emerald-700 text-white text-2xl font-black rounded-3xl hover:bg-emerald-800 transition-all flex items-center justify-center shadow-[0_20px_50px_rgba(5,150,105,0.3)] active:scale-[0.98]"
            >
              Ver cursos gratuitos
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="h-[96px] px-16 bg-white border-4 border-slate-200 text-slate-900 text-2xl font-black rounded-3xl hover:bg-slate-50 transition-all flex items-center justify-center active:scale-[0.98]"
            >
               Experimentar Aula Grátis
            </button>
          </div>
        </div>

        <div className="lg:w-6/12 w-full flex flex-col items-center gap-6">
          <p className="text-xl font-black text-slate-400 uppercase tracking-widest text-center">Independência e Segurança:</p>
          
          <div className="relative w-full max-w-[600px] aspect-[4/5] flex items-center justify-center">
            {/* Elemento de fundo para profundidade */}
            <div className="absolute inset-0 bg-emerald-100/50 rounded-[100px] border border-emerald-200 rotate-3 scale-95 opacity-50"></div>
            
            <div className="relative z-20 w-full h-full rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white bg-slate-100 flex items-center justify-center">
               <SmartImage 
                 src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80" 
                 alt="Senhora idosa sorridente e confiante usando um smartphone." 
                 className="w-full h-full object-cover"
                 icon="👵"
               />
               
               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-10 rounded-[40px] shadow-2xl border border-slate-100">
                  <p className="text-2xl text-slate-900 font-bold italic leading-tight">
                    "Finalmente aprendi a falar com meus netos por vídeo!"
                  </p>
                  <p className="text-sm font-black text-emerald-600 mt-4 uppercase tracking-widest">— Dona Maria, 72 anos</p>
               </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Perfil de aluno" />
                    </div>
                ))}
             </div>
             <p className="text-lg font-black text-slate-500 uppercase tracking-tight">+ de 500 alunos hoje</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
