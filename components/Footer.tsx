
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
  <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Smartphone */}
    <rect x="30" y="24" width="20" height="32" rx="8" fill="#0F172A" />
    {/* Arco de Apoio */}
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

const SocialButton = ({ name, iconPath }: { name: string; iconPath: string }) => (
  <button className="flex flex-col items-center gap-4 group">
    {/* Container Seguro - Verde Alento de fundo conforme regra */}
    <div 
      className={`w-24 h-24 rounded-[32px] bg-[#ECFDF5] flex items-center justify-center shadow-md transition-all group-hover:scale-105 group-hover:bg-[#D1FAE5] active:scale-95 text-[#059669] border border-[#D1FAE5]`}
    >
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d={iconPath} />
      </svg>
    </div>
    <span className="text-sm font-black text-[#0F172A] uppercase tracking-widest">{name}</span>
  </button>
);

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const icons = {
    whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  };

  return (
    <footer className="bg-white pt-40 pb-20 px-8 border-t-[12px] border-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-6 mb-12 group">
            <LogoSymbolFooter />
            <div className="flex flex-col">
                <h4 className="text-3xl font-[900] text-[#0F172A] uppercase tracking-tighter leading-none font-inter">{BRAND_NAME}</h4>
                <span className="text-[11px] font-[800] text-[#059669] uppercase tracking-[0.4em] mt-1">Símbolo de Autonomia</span>
            </div>
          </div>
          <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-sm">
            Toda a calma do mundo para você aprender a usar a tecnologia do seu jeito, com total segurança.
          </p>
          
          <div className="flex flex-col gap-10">
             <span className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Nossas Redes Sociais</span>
             <div className="flex flex-wrap gap-12">
                <SocialButton name="Instagram" iconPath={icons.instagram} />
                <SocialButton name="Facebook" iconPath={icons.facebook} />
                <SocialButton name="WhatsApp" iconPath={icons.whatsapp} />
             </div>
          </div>
        </div>

        <div>
          <h4 className="font-black text-slate-300 mb-12 text-xs uppercase tracking-[0.4em]">Explorar</h4>
          <ul className="space-y-10 text-[#0F172A] text-2xl font-black">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#059669] transition-colors flex items-center gap-3 group">
              <span className="group-hover:translate-x-1 transition-transform">→</span> Como funciona</a>
            </li>
            <li><a href="#courses" onClick={(e) => onLinkClick(e, 'courses')} className="hover:text-[#059669] transition-colors flex items-center gap-3 group">
              <span className="group-hover:translate-x-1 transition-transform">→</span> Nossos Cursos</a>
            </li>
            <li><a href="#partners" onClick={(e) => onLinkClick(e, 'partners')} className="hover:text-[#059669] transition-colors flex items-center gap-3 group">
              <span className="group-hover:translate-x-1 transition-transform">→</span> Área de Parceiros</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-slate-300 mb-12 text-xs uppercase tracking-[0.4em]">Fale Conosco</h4>
          <p className="text-xl text-[#0F172A] mb-8 font-black">contato@geracaoconectada.com</p>
          <div className="p-10 rounded-[48px] bg-[#F8FAFC] border-2 border-slate-100 italic text-slate-400 font-bold text-xl leading-relaxed shadow-inner">
            "Sempre prontos para te ouvir <br/> com toda a paciência e respeito."
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-16 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-black">
        <p>© 2025 Geração Conectada. Feito com amor para a melhor idade.</p>
        <div className="flex gap-12 mt-8 md:mt-0 uppercase tracking-widest">
            <a href="#" className="hover:text-[#0F172A] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[#0F172A] transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
