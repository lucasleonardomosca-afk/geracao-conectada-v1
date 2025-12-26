
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-white pt-40 pb-20 px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
               <span className="text-white font-black text-2xl">G</span>
            </div>
            <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{BRAND_NAME}</h4>
          </div>
          <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-sm">
            Ensinamos tecnologia com respeito e clareza para a melhor idade.
          </p>
          
          <div className="flex flex-col gap-8">
             <span className="text-xs font-bold text-slate-300 uppercase tracking-[0.3em]">Redes sociais</span>
             <div className="flex flex-wrap gap-10">
                {['Instagram', 'Facebook', 'WhatsApp'].map(social => (
                  <button key={social} className="text-lg font-bold text-slate-900 hover:text-emerald-700 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-emerald-700">
                    {social}
                  </button>
                ))}
             </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-300 mb-10 text-xs uppercase tracking-[0.3em]">Navegação</h4>
          <ul className="space-y-8 text-slate-900 text-xl font-bold">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-emerald-700 transition-colors">Como funciona</a></li>
            <li><a href="#courses" onClick={(e) => onLinkClick(e, 'courses')} className="hover:text-emerald-700 transition-colors">Cursos</a></li>
            <li><a href="#partners" onClick={(e) => onLinkClick(e, 'partners')} className="hover:text-emerald-700 transition-colors">Empresas</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-300 mb-10 text-xs uppercase tracking-[0.3em]">Fale conosco</h4>
          <p className="text-xl text-slate-900 mb-8 font-bold">contato@geracaoconectada.com</p>
          <div className="p-8 rounded-[32px] border border-slate-100 italic text-slate-400 font-medium text-lg leading-relaxed">
            "Sempre prontos para te ouvir <br/> com toda a calma."
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-bold">
        <p>© 2025 Geração Conectada. Premium digital experience.</p>
        <div className="flex gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
