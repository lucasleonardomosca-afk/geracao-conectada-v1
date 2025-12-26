
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import SmartImage from './SmartImage';

interface DidacticVisualProps {
  type: 'whatsapp' | 'audio' | 'location' | 'camera' | 'typing';
  imageSrc?: string;
}

const DidacticVisual: React.FC<DidacticVisualProps> = ({ type, imageSrc }) => {
  const phoneContainer = "w-full max-w-[360px] aspect-[9/18] bg-[#0F172A] rounded-[64px] p-5 border-4 border-slate-800 relative shadow-2xl mx-auto mb-8";
  const screenContainer = "w-full h-full bg-white rounded-[52px] overflow-hidden flex flex-col relative";

  const ActionIndicator = ({ top, left, label }: { top: string, left: string, label: string }) => (
    <div className="absolute z-30 flex flex-col items-center" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-[8px] border-[#059669] bg-[#059669]/20 flex items-center justify-center animate-pulse">
          <div className="w-10 h-10 bg-[#059669] rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>
      <div className="mt-6 bg-[#0F172A] text-white text-lg font-black px-10 py-4 rounded-full shadow-2xl uppercase tracking-[0.2em] border-2 border-white whitespace-nowrap">
        {label}
      </div>
    </div>
  );

  // Se houver uma imagem específica de suporte visual
  if (imageSrc) {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer}>
            <div className="w-full h-full flex flex-col">
                <div className="h-16 bg-[#F8FAFC] border-b-2 border-slate-100"></div>
                <div className="flex-1 bg-slate-50 flex items-center justify-center overflow-hidden">
                    <SmartImage src={imageSrc} alt="Suporte visual didático" className="w-full h-full object-cover" />
                </div>
                <div className="h-24 bg-white border-t-2 border-slate-100 flex items-center justify-center p-4">
                    <div className="h-12 w-32 bg-slate-100 rounded-full"></div>
                </div>
            </div>
            <ActionIndicator top="50%" left="50%" label="Ver imagem" />
        </div>
      </div>
    );
  }

  if (type === 'whatsapp') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer}>
          <div className="bg-[#075E54] h-28 w-full flex items-center px-8 gap-5 shrink-0">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-4xl">👤</div>
            <div className="flex flex-col gap-2">
                <div className="h-6 w-44 bg-white/40 rounded-full"></div>
                <div className="h-4 w-28 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1 p-8 space-y-10 bg-[#E5DDD5]">
            <div className="bg-white p-6 rounded-3xl rounded-tl-none shadow-md max-w-[90%] border-2 border-slate-50">
               <p className="text-2xl font-black text-[#0F172A] leading-tight">Você vem para o almoço?</p>
            </div>
            <div className="bg-[#DCF8C6] p-6 rounded-3xl rounded-tr-none shadow-md max-w-[90%] ml-auto border-2 border-emerald-100">
               <p className="text-2xl font-black text-[#0F172A] leading-tight">Sim! Já estou saindo.</p>
            </div>
          </div>

          <div className="p-8 bg-white border-t-[6px] border-[#F8FAFC] flex items-center gap-5">
            <div className="flex-1 h-16 bg-[#F8FAFC] rounded-full border-2 border-slate-100 px-8 flex items-center">
               <span className="text-slate-400 text-xl font-black">Escrever...</span>
            </div>
            <div className="w-16 h-16 bg-[#128C7E] rounded-full flex items-center justify-center text-white text-4xl shadow-xl border-2 border-white">
               🎤
            </div>
          </div>
          
          <ActionIndicator top="86%" left="82%" label="Aperte aqui" />
        </div>
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer + " bg-[#F8FAFC]"}>
          <div className="bg-[#075E54] h-20 w-full"></div>
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
            <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center border-[12px] border-[#059669] shadow-2xl mb-14">
               <span className="text-[100px]">🎤</span>
            </div>
            
            <div className="bg-white px-12 py-8 rounded-[40px] border-4 border-[#ECFDF5] mb-10 shadow-md">
                <p className="text-3xl font-black text-[#059669] mb-1 uppercase tracking-widest">GRAVANDO</p>
                <p className="text-2xl font-black text-slate-400 tracking-tighter">00:15</p>
            </div>

            <p className="text-2xl font-bold text-slate-600 leading-snug">
                Sua voz está sendo <br/> guardada com calma.
            </p>
          </div>
          
          <div className="p-10 bg-white border-t-8 border-[#F8FAFC]">
             <div className="h-24 w-full bg-[#128C7E] rounded-[32px] flex items-center justify-center text-white font-black text-2xl uppercase tracking-[0.2em] shadow-xl border-2 border-white">
                ENVIAR ÁUDIO
             </div>
          </div>
          
          <ActionIndicator top="82%" left="50%" label="Tocar no botão" />
        </div>
      </div>
    );
  }

  if (type === 'location') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer}>
          <div className="h-24 bg-white w-full flex items-center px-10 border-b-4 border-slate-50">
              <span className="text-xl font-black text-slate-400 uppercase tracking-[0.4em]">Seu Mapa</span>
          </div>
          <div className="flex-1 bg-[#ECFDF5]/50 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-24 h-24 bg-[#059669] rounded-full border-[10px] border-white shadow-2xl flex items-center justify-center animate-bounce">
                    <span className="text-white text-5xl">📍</span>
                </div>
             </div>
          </div>
          <div className="h-44 bg-white border-t-8 border-[#F8FAFC] p-10 flex flex-col justify-center">
             <div className="h-24 w-full bg-[#0F172A] rounded-[32px] flex items-center justify-center text-white font-black text-2xl uppercase tracking-[0.2em] shadow-2xl border-2 border-slate-700">
                ENVIAR LOCAL
             </div>
          </div>
          <ActionIndicator top="78%" left="50%" label="Clique aqui" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-24 bg-[#F8FAFC] rounded-[64px] border-8 border-white flex flex-col items-center justify-center text-center shadow-inner">
        <div className="text-[120px] mb-10 drop-shadow-lg">📱</div>
        <h4 className="text-4xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter">Exemplo Visual</h4>
        <p className="text-3xl font-bold text-slate-500 leading-tight">Isto mostra exatamente <br/> onde você deve apertar com calma.</p>
    </div>
  );
};

export default DidacticVisual;
