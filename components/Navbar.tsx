
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
  const bgColor = highContrast ? 'bg-black border-b-4 border-yellow-300' : 'bg-white border-b-4 border-emerald-100 shadow-lg';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-900';
  const btnClass = `h-[60px] px-6 rounded-2xl border-4 font-black text-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
    highContrast ? 'border-yellow-300 bg-black text-yellow-300' : 'border-emerald-700 bg-emerald-50 text-emerald-800'
  }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <a 
          href="#" 
          onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, ''); 
          }}
          className="flex items-center gap-4 no-underline"
        >
          <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md ${highContrast ? 'bg-yellow-300' : 'bg-emerald-700'}`}>
              <span className={`font-black text-3xl ${highContrast ? 'text-black' : 'text-white'}`}>G</span>
          </div>
          <span className="text-3xl font-black tracking-tight">{BRAND_NAME}</span>
        </a>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button onClick={onToggleFont} className={btnClass}>
            <span>🔍</span> Aumentar Letra
          </button>
          <button onClick={onToggleContrast} className={btnClass}>
            <span>🎨</span> Mudar Cores
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
