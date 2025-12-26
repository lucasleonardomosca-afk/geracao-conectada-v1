
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import SmartImage from './SmartImage';

const About: React.FC = () => {
  return (
    <section id="about-us" className="bg-emerald-50/50">
      
      <div className="py-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-[3.5rem] font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Ensinar com calma é o nosso <span className="text-emerald-700">propósito.</span>
          </h2>
          <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-8">
            A Geração Conectada nasceu da vontade de ver nossos pais e avós navegando na internet com a mesma facilidade que nós.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Sabemos que a tecnologia corre rápido, mas o aprendizado precisa de tempo. Por isso, criamos um método que respeita o seu ritmo.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest text-center">Nossa forma de ensinar:</p>
          
          <div className="w-full bg-white rounded-[48px] shadow-2xl border-8 border-white overflow-hidden h-[500px] flex items-center justify-center">
            <SmartImage 
              src="https://images.unsplash.com/photo-1554178286-db408559feea?auto=format&fit=crop&q=80&w=1200" 
              alt="Jovem explicando pacientemente como usar um smartphone para um idoso." 
              className="w-full h-full object-cover"
              icon="🤝"
            />
          </div>

          <p className="text-sm font-bold text-emerald-700 uppercase tracking-widest text-center italic">Um neto ensinando com paciência infinita.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="relative h-[400px] lg:h-auto bg-slate-200 flex flex-col items-center justify-center p-8">
           <p className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Segurança digital na prática:</p>
           
           <div className="w-full h-full max-h-[400px] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center bg-white border-4 border-white">
             <SmartImage 
               src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1200" 
               alt="Uso seguro do celular." 
               className="w-full h-full object-cover"
               icon="🛡️"
             />
           </div>

           <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-4">Proteção para seus dados e seu celular.</p>
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-emerald-700 text-white">
           <span className="text-sm font-black uppercase tracking-[0.3em] text-emerald-200 mb-6">Segurança em Primeiro Lugar</span>
           <h3 className="text-4xl md:text-[3.2rem] font-black mb-8 leading-[1.1] tracking-tight">
             Navegue sem medo <br/> de cair em golpes.
           </h3>
           <p className="text-2xl font-medium leading-relaxed mb-12 max-w-md opacity-90">
             Não ensinamos apenas a clicar. Ensinamos a desconfiar do que é falso e a proteger seu dinheiro.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
