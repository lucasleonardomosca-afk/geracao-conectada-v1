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

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onToggleFont, onToggleContrast, highContrast }) => {
  const bgColor = highContrast ? 'bg-black border-b-4 border-yellow-300' : 'bg-white border-b border-slate-100';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-900';
  
  const btnClassBase = `h-[64px] px-10 rounded-2xl font-black text-xl transition-all active:scale-95 flex items-center justify-center gap-4 shadow-sm border-2`;
  
  const btnFontClass = highContrast 
    ? `${btnClassBase} border-yellow-300 bg-black text-yellow-300` 
    : `${btnClassBase} border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400`;
    
  const btnColorClass = highContrast 
    ? `${btnClassBase} border-yellow-300 bg-black text-yellow-300` 
    : `${btnClassBase} border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-6 ${bgColor} ${textColor} transition-colors duration-300 shadow-sm`}>
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
          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all shadow-md ${highContrast ? 'bg-yellow-300' : 'bg-slate-900 group-hover:bg-emerald-800'}`}>
              <span className={`font-black text-4xl ${highContrast ? 'text-black' : 'text-white'}`}>G</span>
          </div>
          <span className="text-3xl md:text-4xl font-black tracking-tight uppercase">{BRAND_NAME}</span>
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