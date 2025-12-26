
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const LogoSymbolFooter = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
    <rect x="30" y="24" width="20" height="32" rx="8" fill="#0F172A" />
    <path 
      d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
      stroke="#059669" 
      strokeWidth="8" 
      strokeLinecap="round" 
    />
    <circle cx="32" cy="6" r="6" fill="#0F172A" />
  </svg>
);

const SocialButton = ({ label, iconPath }: { label: string; iconPath: string }) => (
  <button className="flex flex-col items-center gap-4 group w-32">
    {/* Container de toque amplo (96px+) e cor Verde Alento */}
    <div 
      className={`w-28 h-28 rounded-[36px] bg-[#ECFDF5] flex items-center justify-center shadow-md transition-all group-hover:scale-105 group-hover:bg-[#D1FAE5] active:scale-95 text-[#059669] border-2 border-[#D1FAE5]`}
    >
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d={iconPath} />
      </svg>
    </div>
    <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.2em] text-center h-8 flex items-center justify-center">{label}</span>
  </button>
);

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const paths = {
    whatsapp: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 7.5z",
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    instagram: "M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM17.5 6C17.78 6 18 6.22 18 6.5C18 6.78 17.78 7 17.5 7C17.22 7 17 6.78 17 6.5C17 6.22 17.22 6 17.5 6Z",
    tiktok: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
  };

  return (
    <footer className="bg-white pt-32 pb-16 px-8 border-t-[12px] border-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        
        <div className="md:col-span-2">
          {/* Logo Vertical Conforme Guia de Marca */}
          <div className="flex flex-col items-start mb-10 group">
            <LogoSymbolFooter />
            <div className="flex flex-col">
                <h4 className="text-4xl font-[900] text-[#0F172A] uppercase tracking-tighter leading-none font-inter">{BRAND_NAME}</h4>
                <span className="text-[11px] font-[800] text-[#059669] uppercase tracking-[0.4em] mt-1">ENSINO COM PACIÊNCIA</span>
            </div>
          </div>
          <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed max-w-sm">
            Toda a calma do mundo para você aprender a usar a tecnologia do seu jeito, com total segurança.
          </p>
          
          <div className="flex flex-col gap-6">
             <span className="text-xs font-black text-slate-300 uppercase tracking-[0.4em]">Siga e fale conosco</span>
             <div className="flex flex-wrap gap-8">
                <SocialButton label="Falar com ajuda" iconPath={paths.whatsapp} />
                <SocialButton label="Ver dicas" iconPath={paths.instagram} />
                <SocialButton label="Comunidade" iconPath={paths.facebook} />
                <SocialButton label="Vídeos curtos" iconPath={paths.tiktok} />
             </div>
          </div>
        </div>

        <div>
          <h4 className="font-black text-slate-300 mb-10 text-xs uppercase tracking-[0.4em]">Explorar</h4>
          <ul className="space-y-6 text-[#0F172A] text-xl font-black">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#059669] transition-colors">Como funciona</a></li>
            <li><a href="#courses" onClick={(e) => onLinkClick(e, 'courses')} className="hover:text-[#059669] transition-colors">Nossos Cursos</a></li>
            <li><a href="#partners" onClick={(e) => onLinkClick(e, 'partners')} className="hover:text-[#059669] transition-colors">Área de Parceiros</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-slate-300 mb-10 text-xs uppercase tracking-[0.4em]">Fale Conosco</h4>
          <p className="text-xl text-[#0F172A] mb-6 font-black">contato@geracaoconectada.com</p>
          <div className="p-8 rounded-[40px] bg-[#F8FAFC] border-2 border-slate-100 italic text-slate-400 font-bold text-lg leading-relaxed shadow-inner">
            "Sempre prontos para te ouvir <br/> com toda a paciência e respeito."
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-black">
        <p>© 2025 Geração Conectada. Feito com amor para a melhor idade.</p>
        <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-[#0F172A] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#0F172A] transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
