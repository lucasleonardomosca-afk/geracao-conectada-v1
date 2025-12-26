
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
    <footer className="bg-white pt-24 pb-12 px-6 border-t-8 border-emerald-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center shadow-sm">
               <span className="text-white font-black text-2xl">G</span>
            </div>
            <h4 className="text-2xl font-black text-emerald-800 uppercase tracking-tighter">{BRAND_NAME}</h4>
          </div>
          <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">
            Ensinando a tecnologia com paciência e segurança para quem já viveu as melhores histórias.
          </p>
          
          <div className="flex flex-col gap-6">
             <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Nossas Redes Sociais:</span>
             
             {/* GRADE DE ÍCONES SOCIAIS REAIS - SVG INLINE OBRIGATÓRIO */}
             <div className="flex flex-wrap gap-4">
                
                {/* WHATSAPP - ÍCONE REAL */}
                <button 
                  aria-label="Acessar nosso WhatsApp oficial"
                  className="flex flex-col items-center justify-center p-4 bg-white border-4 border-slate-100 rounded-[32px] hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all active:scale-95 group shadow-sm min-w-[100px]"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366"/>
                  </svg>
                  <span className="mt-3 font-black text-slate-800 text-sm uppercase tracking-wider">WhatsApp</span>
                </button>

                {/* INSTAGRAM - ÍCONE REAL */}
                <button 
                  aria-label="Acessar nosso perfil no Instagram"
                  className="flex flex-col items-center justify-center p-4 bg-white border-4 border-slate-100 rounded-[32px] hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all active:scale-95 group shadow-sm min-w-[100px]"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E1306C"/>
                  </svg>
                  <span className="mt-3 font-black text-slate-800 text-sm uppercase tracking-wider">Instagram</span>
                </button>

                {/* TIKTOK - ÍCONE REAL */}
                <button 
                  aria-label="Acessar nosso canal no TikTok"
                  className="flex flex-col items-center justify-center p-4 bg-white border-4 border-slate-100 rounded-[32px] hover:border-[#000000] hover:bg-slate-50 transition-all active:scale-95 group shadow-sm min-w-[100px]"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}>
                    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.232 1.248 6.313 6.313 0 00-1.32 8.52 6.321 6.321 0 005.152 2.827 6.321 6.321 0 006.321-6.321V8.669A8.203 8.203 0 0019.589 11h.001V7.556a4.778 4.778 0 010-.87z" fill="#000000"/>
                  </svg>
                  <span className="mt-3 font-black text-slate-800 text-sm uppercase tracking-wider">TikTok</span>
                </button>

                {/* FACEBOOK - ÍCONE REAL */}
                <button 
                  aria-label="Acessar nossa página no Facebook"
                  className="flex flex-col items-center justify-center p-4 bg-white border-4 border-slate-100 rounded-[32px] hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all active:scale-95 group shadow-sm min-w-[100px]"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}>
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                  </svg>
                  <span className="mt-3 font-black text-slate-800 text-sm uppercase tracking-wider">Facebook</span>
                </button>

             </div>
          </div>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-6 text-xl uppercase tracking-wider">Mapa do Site</h4>
          <ul className="space-y-4 text-slate-600 text-xl font-bold">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">Como Funciona</a></li>
            <li><a href="#courses" onClick={(e) => onLinkClick(e, 'courses')} className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">Nossos Cursos</a></li>
            <li><a href="#community" onClick={(e) => onLinkClick(e, 'community')} className="hover:text-emerald-700 transition-colors underline decoration-2 underline-offset-4">Comunidade</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black text-slate-900 mb-6 text-xl uppercase tracking-wider">Ajuda Direta</h4>
          <ul className="space-y-4 text-slate-600 text-xl font-bold">
            <li><a href="#" className="hover:text-emerald-700 transition-colors">Perguntas Comuns</a></li>
            <li><a href="#" className="hover:text-emerald-700 transition-colors text-emerald-600 font-black">Chamar no WhatsApp</a></li>
            <li><a href="#" onClick={(e) => onLinkClick(e, 'partners')} className="hover:text-emerald-700 transition-colors font-black">Empresas Parceiras</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-6 text-xl uppercase tracking-wider">Fale Conosco</h4>
          <p className="text-xl text-slate-600 mb-2 font-medium">contato@geracaoconectada.com</p>
          <p className="text-xl text-slate-600 mb-6 font-medium">São Paulo - SP</p>
          <div className="bg-emerald-50 p-6 rounded-3xl border-4 border-emerald-100">
              <p className="text-lg text-emerald-800 font-black leading-snug">
                  📌 Em breve: Aulas presenciais em centros de convivência.
              </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-12 border-t-4 border-slate-50 flex flex-col md:flex-row justify-between items-center text-lg text-slate-400 font-bold">
        <p>© 2025 Geração Conectada. Feito com carinho e paciência.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacidade</a>
            <a href="#" className="hover:text-slate-900">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
