/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import DidacticVisual from './DidacticVisual';

interface TutorialStepProps {
  currentStep: number;
  totalSteps: number;
  question: string;
  visualDescription: string;
  instruction: string;
  mainActionLabel: string;
  secondaryActionLabel: string;
  onMainAction: () => void;
  onSecondaryAction: () => void;
  onHelp: () => void;
  onRepeat: () => void;
  onBack: () => void;
  highContrast: boolean;
}

const LogoSymbolSimplified = ({ highContrast }: { highContrast: boolean }) => {
  const smartphoneColor = highContrast ? "#FFFF00" : "#0F172A";
  const arcColor = highContrast ? "#FFFF00" : "#059669";
  const headColor = highContrast ? "#000000" : "#0F172A";

  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
      <rect x="30" y="22" width="20" height="32" rx="8" fill={smartphoneColor} />
      <path 
        d="M42 56 C14 56 10 32 10 20 C10 10 20 6 30 6" 
        stroke={arcColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
      />
      <circle cx="32" cy="6" r="6" fill={headColor} />
    </svg>
  );
};

const TutorialStep: React.FC<TutorialStepProps> = ({
  currentStep,
  totalSteps,
  question,
  visualDescription,
  instruction,
  mainActionLabel,
  secondaryActionLabel,
  onMainAction,
  onSecondaryAction,
  onHelp,
  onRepeat,
  onBack,
  highContrast
}) => {
  const [persistentMessage, setPersistentMessage] = useState<string | null>(null);

  const handleMainAction = () => {
    setPersistentMessage("Muito bem! Vamos adiante.");
    setTimeout(() => {
        setPersistentMessage(null);
        onMainAction();
    }, 1200);
  };

  const getVisualType = () => {
    switch(currentStep) {
        case 1: return 'whatsapp';
        case 2: return 'audio';
        case 3: return 'location';
        default: return 'typing';
    }
  };

  const visualType = getVisualType();
  const bgColor = highContrast ? 'bg-black' : 'bg-[#F8FAFC]';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-900';
  const mainBtnColor = highContrast ? 'bg-yellow-300 text-black' : 'bg-[#059669] text-white shadow-[0_20px_50px_rgba(5,150,105,0.3)]';
  const secBtnBorder = highContrast ? 'border-yellow-300 text-yellow-300' : 'border-slate-300 text-slate-700 bg-white hover:border-emerald-600 shadow-sm';
  const footerBtnBase = `flex flex-col items-center justify-center py-8 font-black text-lg transition-all active:scale-95`;
  const helpBtnColor = highContrast ? 'bg-yellow-300 text-black' : 'bg-emerald-700 text-white shadow-xl';

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col ${bgColor} ${textColor} overflow-hidden select-none`}>
      
      {persistentMessage && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 backdrop-blur-xl p-6">
          <div className="bg-[#059669] text-white p-12 rounded-[50px] shadow-[0_0_80px_rgba(0,0,0,0.5)] text-center text-4xl font-black border-4 border-white animate-fade-in-up">
            <span className="block text-7xl mb-4">🏆</span>
            {persistentMessage}
          </div>
        </div>
      )}

      <header className={`flex items-center justify-between p-6 border-b-8 shrink-0 ${highContrast ? 'border-yellow-300' : 'border-slate-100 bg-white'}`}>
        <div className="flex items-center gap-5">
          <LogoSymbolSimplified highContrast={highContrast} />
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase tracking-widest text-[#059669]">MODO AULA</span>
            <span className="text-[10px] font-[800] text-slate-400 uppercase tracking-[0.4em] mt-1">ENSINO COM PACIÊNCIA</span>
          </div>
        </div>
        <div className={`text-xl font-black px-8 py-3 rounded-[24px] border-[4px] ${highContrast ? 'border-yellow-300' : 'border-[#059669] text-emerald-800 bg-emerald-50'}`}>
          LIÇÃO {currentStep} DE {totalSteps}
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 px-8 py-10 overflow-y-auto">
        {visualType && (
            <div className="shrink-0 animate-fade-in-up scale-100">
                <div className="text-center mb-6 uppercase tracking-[0.3em] font-black text-slate-300 text-xs">
                   Aprenda com este desenho:
                </div>
                <DidacticVisual type={visualType as any} />
            </div>
        )}

        <div className="flex-1 flex flex-col max-w-xl space-y-6">
            <div className={`p-8 rounded-[40px] border-[4px] shadow-sm ${highContrast ? 'border-yellow-300' : 'bg-emerald-50 border-emerald-100'}`}>
                <h3 className="text-lg font-black uppercase tracking-[0.3em] mb-3 text-[#059669]">O que acontece:</h3>
                <p className="text-2xl font-bold leading-snug text-emerald-900">{visualDescription}</p>
            </div>

            <div className={`p-10 rounded-[50px] border-[4px] shadow-xl ${highContrast ? 'border-yellow-300' : 'bg-white border-slate-100'}`}>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-10 text-center tracking-tight text-slate-900">
                   {question}
                </h2>
                
                <div className="grid grid-cols-1 gap-6 w-full">
                    <button 
                    onClick={handleMainAction}
                    className={`h-[110px] w-full rounded-[32px] text-3xl font-black active:scale-95 transition-all flex items-center justify-center gap-5 ${mainBtnColor}`}
                    >
                    <span>✅</span> {mainActionLabel}
                    </button>
                    
                    <button 
                    onClick={onSecondaryAction}
                    className={`h-[90px] w-full rounded-[28px] text-2xl font-black border-4 active:scale-95 transition-all flex items-center justify-center gap-5 ${secBtnBorder}`}
                    >
                    <span>❓</span> {secondaryActionLabel}
                    </button>
                </div>
            </div>
        </div>
      </main>

      <footer className={`grid grid-cols-3 gap-0 border-t-8 shrink-0 ${highContrast ? 'border-yellow-300' : 'border-slate-100 bg-white'}`}>
        <button 
          onClick={onHelp}
          className={`${footerBtnBase} border-r-2 ${helpBtnColor} flex-1`}
        >
          <div className="text-4xl mb-2">🤝</div>
          AJUDA HUMANA
        </button>
        
        <button 
          onClick={onRepeat}
          className={`${footerBtnBase} border-r-2 text-slate-600 hover:text-emerald-700 flex-1`}
        >
          <div className="text-4xl mb-2">🔄</div>
          REPETIR
        </button>
        
        <button 
          onClick={onBack}
          className={`${footerBtnBase} text-slate-600 hover:text-red-600 flex-1`}
        >
          <div className="text-4xl mb-2">⬅️</div>
          VOLTAR
        </button>
      </footer>
    </div>
  );
};

export default TutorialStep;