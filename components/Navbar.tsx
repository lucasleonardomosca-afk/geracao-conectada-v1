
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onToggleFont: () => void;
  onToggleContrast: () => void;
  highContrast: boolean;
  fontSizeLevel: number;
}

const LogoSymbol = ({ highContrast }: { highContrast: boolean }) => {
  const smartphoneColor = highContrast ? "#FFFF00" : "#0F172A"; // Grafite Sólido
  const arcColor = highContrast ? "#FFFF00" : "#059669"; // Verde Guardião
  const headColor = highContrast ? "#000000" : "#0F172A";
  const strokeColor = highContrast ? "#000000" : "white";

  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-105 duration-300 drop-shadow-sm">
      {/* Smartphone */}
      <rect x="30" y="24" width="20" height="32" rx="8" fill={smartphoneColor} stroke={highContrast ? "none" : strokeColor} strokeWidth="1" />
      {/* Arco de Apoio - Traço orgânico e contínuo */}
      <path 
        d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
        stroke={arcColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Silhueta Humana - Cabeça minimalista */}
      <circle cx="32" cy="6" r="6" fill={headColor} stroke={highContrast ? arcColor : "none"} strokeWidth="1" />
    </svg>
  );
};

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onToggleFont, onToggleContrast, highContrast }) => {
  const bgColor = highContrast ? 'bg-black border-b-4 border-yellow-300' : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm';
  const textColor = highContrast ? 'text-yellow-300' : 'text-[#0F172A]'; // Grafite Sólido
  
  const btnClassBase = `h-[64px] px-10 rounded-2xl font-black text-xl transition-all active:scale-95 flex items-center justify-center gap-4 border-2`;
  
  const btnFontClass = highContrast 
    ? `${btnClassBase} border-yellow-300 bg-black text-yellow-300` 
    : `${btnClassBase} border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-[#059669] hover:text-[#059669]`;
    
  const btnColorClass = highContrast 
    ? `${btnClassBase} border-yellow-300 bg-black text-yellow-300` 
    : `${btnClassBase} border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-[#059669] hover:text-[#059669]`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 ${bgColor} ${textColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <a 
          href="#" 
          onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, ''); 
          }}
          className="flex items-center gap-6 no-underline group"
        >
          <LogoSymbol highContrast={highContrast} />
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-[900] tracking-tighter uppercase leading-none font-inter">{BRAND_NAME}</span>
            <span className="text-[11px] font-[800] tracking-[0.4em] text-[#059669] mt-1">ENSINO COM PACIÊNCIA</span>
          </div>
        </a>
        
        <div className="flex flex-wrap justify-center items-center gap-6">
          <button onClick={onToggleFont} className={btnFontClass}>
            <span className="text-2xl">🔍</span> Texto maior
          </button>
          <button onClick={onToggleContrast} className={btnColorClass}>
            <span className="text-2xl">🎨</span> Mudar cores
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
