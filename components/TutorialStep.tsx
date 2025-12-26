
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';

interface TutorialStepProps {
  currentStep: number;
  totalSteps: number;
  question: string;
  explanation?: string;
  alternativeExplanation?: string;
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
  explanation,
  alternativeExplanation = "Posso explicar de um jeito ainda mais simples se você quiser.",
  mainActionLabel,
  secondaryActionLabel,
  onMainAction,
  onSecondaryAction,
  onHelp,
  onRepeat,
  onBack,
  highContrast
}) => {
  const [showAlternative, setShowAlternative] = useState(false);
  const [persistentMessage, setPersistentMessage] = useState<string | null>(null);

  const handleMainAction = () => {
    setPersistentMessage("Muito bem. Você está indo no seu ritmo.");
    setTimeout(() => {
        setPersistentMessage(null);
        onMainAction();
    }, 1500);
  };

  const handleRepeatAction = () => {
    setPersistentMessage("Repetir faz parte do aprendizado. Está tudo certo.");
    setShowAlternative(false);
    onRepeat();
    setTimeout(() => setPersistentMessage(null), 2000);
  };

  const toggleAlternative = () => {
    setShowAlternative(!showAlternative);
  };

  const bgColor = highContrast ? 'bg-black' : 'bg-white';
  const textColor = highContrast ? 'text-yellow-300' : 'text-slate-900';
  const subTextColor = highContrast ? 'text-yellow-200/80' : 'text-slate-700';
  const mainBtnColor = highContrast ? 'bg-yellow-300 text-black' : 'bg-emerald-800 text-white';
  const secBtnBorder = highContrast ? 'border-yellow-300 text-yellow-300' : 'border-slate-400 text-slate-800';
  const footerBtnColor = highContrast ? 'text-yellow-300 border-yellow-300' : 'text-emerald-900 border-slate-200';

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col ${bgColor} ${textColor} p-0 overflow-hidden select-none`}>
      
      {/* MENSAGEM DE APOIO PERSISTENTE (Substitui o toast rápido) */}
      {persistentMessage && (
        <div className="absolute inset-0 z-[130] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <div className="bg-emerald-800 text-white p-10 rounded-[40px] shadow-2xl text-center text-3xl font-black border-8 border-white max-w-lg animate-fade-in-up">
            {persistentMessage}
          </div>
        </div>
      )}

      {/* TOPO: Identificação e Progresso */}
      <header className={`flex flex-col items-center justify-center pt-8 pb-4 px-6 border-b-8 ${highContrast ? 'border-yellow-300' : 'border-slate-100'}`}>
        <div className="flex items-center gap-4 mb-2">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-3xl shadow-md ${highContrast ? 'bg-yellow-300 text-black' : 'bg-emerald-800 text-white'}`}>
            G
          </div>
          <span className="text-3xl font-black uppercase tracking-tight">{BRAND_NAME}</span>
        </div>
        <div className={`text-2xl font-black px-8 py-2 rounded-full border-4 mt-2 ${highContrast ? 'border-yellow-300' : 'border-emerald-800 text-emerald-900 bg-emerald-50'}`}>
          PASSO {currentStep} DE {totalSteps}
        </div>
      </header>

      {/* CENTRO: Conteúdo Educativo (Nada escondido, área visual limpa) */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-8 py-2">
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
          {question}
        </h2>
        
        <div className="bg-slate-50 p-6 rounded-[32px] border-4 border-slate-100 max-w-3xl w-full">
            <p className={`text-2xl md:text-3xl font-bold leading-relaxed ${subTextColor}`}>
              {showAlternative ? alternativeExplanation : explanation}
            </p>
            
            <button 
                onClick={toggleAlternative}
                className="mt-6 text-emerald-800 font-black text-xl underline underline-offset-8 decoration-4 hover:text-emerald-600"
            >
                {showAlternative ? "↩️ Voltar para a explicação normal" : "🤔 Não entendi? Explicar de outro jeito"}
            </button>
        </div>
      </main>

      {/* AÇÃO: Botões de 80px de altura para máxima precisão motora */}
      <div className="px-6 space-y-4 mb-8 w-full max-w-3xl mx-auto">
        <button 
          onClick={handleMainAction}
          className={`h-[80px] w-full rounded-[28px] text-3xl font-black shadow-2xl active:scale-95 transition-transform flex items-center justify-center gap-4 ${mainBtnColor}`}
        >
          <span>✅</span> {mainActionLabel}
        </button>
        
        <button 
          onClick={onSecondaryAction}
          className={`h-[72px] w-full rounded-[24px] text-2xl font-bold border-8 bg-transparent active:scale-95 transition-transform flex items-center justify-center gap-4 ${secBtnBorder}`}
        >
          <span>❓</span> {secondaryActionLabel}
        </button>
      </div>

      {/* BASE: Apoio Humano e Navegação (Áreas de clique generosas) */}
      <footer className={`grid grid-cols-3 gap-0 border-t-8 ${highContrast ? 'border-yellow-300' : 'border-slate-100'}`}>
        <button 
          onClick={onHelp}
          className={`flex flex-col items-center justify-center py-8 font-black text-xl border-r-4 ${footerBtnColor} active:bg-slate-100`}
        >
          <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center border-current mb-2 text-2xl">👤</div>
          PEDIR AJUDA <br/> <span className="text-sm">DE UMA PESSOA</span>
        </button>
        
        <button 
          onClick={handleRepeatAction}
          className={`flex flex-col items-center justify-center py-8 font-black text-xl border-r-4 ${footerBtnColor} active:bg-slate-100`}
        >
          <div className="w-12 h-12 mb-2">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          REPETIR <br/> <span className="text-sm">ESTE PASSO</span>
        </button>
        
        <button 
          onClick={onBack}
          className={`flex flex-col items-center justify-center py-8 font-black text-xl ${footerBtnColor} active:bg-slate-100`}
        >
          <div className="w-12 h-12 mb-2">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </div>
          VOLTAR <br/> <span className="text-sm">PARA O INÍCIO</span>
        </button>
      </footer>
    </div>
  );
};

export default TutorialStep;
