
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
    {/* Smartphone - Sólido Graphite */}
    <rect x="30" y="22" width="20" height="32" rx="8" fill="#0F172A" />
    {/* Arco de Apoio - Verde Guardião */}
    <path 
      d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
      stroke="#059669" 
      strokeWidth="8" 
      strokeLinecap="round" 
    />
    {/* Silhueta Humana - Sólido Graphite */}
    <circle cx="32" cy="6" r="6" fill="#0F172A" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="relative w-full pt-64 pb-48 px-8 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        <div className="lg:w-6/12">
          <LogoSymbolHero />
          
          <div className="inline-flex items-center text-[#059669] font-black text-sm uppercase tracking-[0.4em] mb-12 bg-[#ECFDF5] px-6 py-2 rounded-full border border-[#D1FAE5]">
             Tecnologia com Acolhimento
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-[900] leading-[1.0] mb-12 text-[#0F172A] tracking-tighter font-inter uppercase">
            Aprenda a usar <br/> o seu celular <br/>
            <span className="text-[#059669] italic">no seu tempo.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed mb-16 font-medium max-w-2xl">
            Sem pressa e sem termos difíceis. Um jeito simples de se conectar com quem você ama, com total segurança.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <button 
              onClick={onCtaClick}
              className="h-[96px] px-16 bg-[#059669] text-white text-2xl font-black rounded-3xl hover:bg-[#065F46] transition-all flex items-center justify-center shadow-[0_20px_50px_rgba(5,150,105,0.3)] active:scale-[0.98] uppercase"
            >
              Ver cursos gratuitos
            </button>
            <button 
              onClick={onSecondaryCtaClick}
              className="h-[96px] px-16 bg-white border-4 border-slate-200 text-[#0F172A] text-2xl font-black rounded-3xl hover:bg-slate-50 transition-all flex items-center justify-center active:scale-[0.98] uppercase"
            >
               Experimentar Aula
            </button>
          </div>
        </div>

        <div className="lg:w-6/12 w-full flex flex-col items-center gap-6">
          <p className="text-xl font-black text-slate-300 uppercase tracking-widest text-center">Independência e Segurança:</p>
          
          <div className="relative w-full max-w-[600px] aspect-[4/5] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#ECFDF5] rounded-[100px] border border-[#D1FAE5] rotate-3 scale-95 opacity-50"></div>
            
            <div className="relative z-20 w-full h-full rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white bg-white flex items-center justify-center">
               <SmartImage 
                 src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80" 
                 alt="Senhora brasileira sorridente usando o celular com tranquilidade em sua sala." 
                 className="w-full h-full object-cover"
                 icon="👵"
               />
               
               <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-10 rounded-[40px] shadow-2xl border border-slate-100">
                  <p className="text-2xl text-[#0F172A] font-bold italic leading-tight">
                    "Finalmente aprendi a falar com meus netos por vídeo!"
                  </p>
                  <p className="text-sm font-black text-[#059669] mt-4 uppercase tracking-[0.3em]">— Dona Maria, 72 anos</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
