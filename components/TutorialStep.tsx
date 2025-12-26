
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';
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
        case 4: return 'camera';
        default: return null;
    }
  };

  const visualType = getVisualType();
  const bgColor = highContrast ? 'bg-black' : 'bg-[#F8FAFC]';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-900';
  const mainBtnColor = highContrast ? 'bg-yellow-300 text-black' : 'bg-emerald-800 text-white';
  const secBtnBorder = highContrast ? 'border-yellow-300 text-yellow-300' : 'border-slate-300 text-slate-600 bg-white';
  const footerBtnColor = highContrast ? 'text-yellow-300 border-yellow-300' : 'text-emerald-900 border-slate-200 bg-white';

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col ${bgColor} ${textColor} overflow-hidden select-none`}>
      
      {persistentMessage && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
          <div className="bg-emerald-800 text-white p-12 rounded-[50px] shadow-2xl text-center text-4xl font-black border-8 border-white animate-fade-in-up">
            {persistentMessage}
          </div>
        </div>
      )}

      {/* Cabeçalho */}
      <header className={`flex items-center justify-between p-6 border-b-8 shrink-0 ${highContrast ? 'border-yellow-300' : 'border-slate-100 bg-white'}`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-2xl shadow-sm ${highContrast ? 'bg-yellow-300 text-black' : 'bg-emerald-700 text-white'}`}>G</div>
          <span className="text-2xl font-black uppercase tracking-tighter">{BRAND_NAME}</span>
        </div>
        <div className={`text-xl font-black px-6 py-2 rounded-2xl border-4 ${highContrast ? 'border-yellow-300' : 'border-emerald-700 text-emerald-800 bg-emerald-50'}`}>
          PASSO {currentStep} de {totalSteps}
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-8 overflow-y-auto">
        
        {/* 1. APOIO VISUAL SIMPLES */}
        {visualType && (
            <div className="shrink-0 animate-fade-in-up">
                <div className="text-center mb-4 uppercase tracking-[0.2em] font-black text-slate-400 text-sm">
                   Veja este desenho:
                </div>
                <DidacticVisual type={visualType as any} />
            </div>
        )}

        <div className="flex-1 flex flex-col max-w-2xl space-y-6">
            {/* 2. TEXTO CURTO EXPLICANDO O VISUAL */}
            <div className={`p-6 rounded-[32px] border-4 ${highContrast ? 'border-yellow-300' : 'bg-emerald-50 border-emerald-100'}`}>
                <h3 className="text-xl font-black uppercase tracking-widest mb-2 opacity-60">O que você vê:</h3>
                <p className="text-2xl font-bold leading-relaxed">{visualDescription}</p>
            </div>

            {/* 3. FRASE DIZENDO O QUE FAZER */}
            <div className={`p-6 rounded-[32px] border-4 ${highContrast ? 'border-yellow-300' : 'bg-blue-50 border-blue-100'}`}>
                <h3 className="text-xl font-black uppercase tracking-widest mb-2 opacity-60">O que fazer:</h3>
                <p className="text-2xl font-black leading-relaxed">{instruction}</p>
            </div>

            {/* 4. PERGUNTA DE CONFIRMAÇÃO */}
            <div className={`p-8 rounded-[40px] border-4 shadow-xl ${highContrast ? 'border-yellow-300' : 'bg-white border-slate-200'}`}>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-8 text-center">
                   {question}
                </h2>
                
                <div className="grid grid-cols-1 gap-4 w-full">
                    <button 
                    onClick={handleMainAction}
                    className={`h-[90px] w-full rounded-[30px] text-3xl font-black shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 ${mainBtnColor}`}
                    >
                    <span>✅</span> {mainActionLabel}
                    </button>
                    
                    <button 
                    onClick={onSecondaryAction}
                    className={`h-[80px] w-full rounded-[28px] text-2xl font-bold border-4 active:scale-95 transition-all flex items-center justify-center gap-4 ${secBtnBorder}`}
                    >
                    <span>❓</span> {secondaryActionLabel}
                    </button>
                </div>
            </div>
        </div>
      </main>

      {/* Rodapé de Navegação */}
      <footer className={`grid grid-cols-3 gap-0 border-t-8 shrink-0 ${highContrast ? 'border-yellow-300' : 'border-slate-100'}`}>
        <button 
          onClick={onHelp}
          className={`flex flex-col items-center justify-center py-6 font-black text-lg border-r-4 ${footerBtnColor} active:bg-slate-50 transition-colors`}
        >
          <div className="text-3xl mb-1">👤</div>
          PEDIR AJUDA
        </button>
        
        <button 
          onClick={onRepeat}
          className={`flex flex-col items-center justify-center py-6 font-black text-lg border-r-4 ${footerBtnColor} active:bg-slate-50 transition-colors`}
        >
          <div className="text-3xl mb-1">🔄</div>
          REPETIR
        </button>
        
        <button 
          onClick={onBack}
          className={`flex flex-col items-center justify-center py-6 font-black text-lg ${footerBtnColor} active:bg-slate-50 transition-colors`}
        >
          <div className="text-3xl mb-1">⬅️</div>
          VOLTAR
        </button>
      </footer>
    </div>
  );
};

export default TutorialStep;
