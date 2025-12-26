
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="bg-emerald-50/50">
      
      {/* Introdução Humana */}
      <div className="py-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Ensinar com calma é o nosso <span className="text-emerald-700">propósito.</span>
          </h2>
          <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-8">
            A Geração Conectada nasceu da vontade de ver nossos pais e avós navegando na internet com a mesma facilidade que nós.
          </p>
          <p className="text-xl text-slate-600 leading-relaxed">
            Sabemos que a tecnologia corre rápido, mas o aprendizado precisa de tempo. Por isso, criamos um método que respeita o seu ritmo, com letras grandes, vídeos claros e paciência infinita.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
            alt="Imagem ilustrativa sobre o aprendizado digital entre gerações, usada para ajudar no entendimento." 
            className="w-full rounded-[40px] shadow-2xl border-8 border-white object-cover h-[500px]"
          />
        </div>
      </div>

      {/* Pilares da Geração Conectada */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="relative h-[400px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=1200" 
             alt="Imagem ilustrativa sobre o uso seguro do celular por mãos idosas, usada para ajudar no entendimento." 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-emerald-700 text-white">
           <span className="text-lg font-bold uppercase tracking-[0.2em] text-emerald-200 mb-6">Segurança em Primeiro Lugar</span>
           <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
             Navegue sem medo <br/> de cair em golpes.
           </h3>
           <p className="text-xl font-medium leading-relaxed mb-12 max-w-md opacity-90">
             Não ensinamos apenas a clicar. Ensinamos a desconfiar do que é falso e a proteger seu dinheiro e seus dados.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;