
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface DidacticVisualProps {
  type: 'whatsapp' | 'audio' | 'location' | 'camera' | 'typing';
}

const DidacticVisual: React.FC<DidacticVisualProps> = ({ type }) => {
  const phoneContainer = "w-full max-w-[320px] aspect-[9/18] bg-slate-900 rounded-[56px] p-3 border-4 border-slate-800 relative shadow-2xl mx-auto mb-8";
  const screenContainer = "w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col relative";

  const ActionIndicator = ({ top, left, label }: { top: string, left: string, label: string }) => (
    <div className="absolute z-30 flex flex-col items-center" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-emerald-500 bg-emerald-500/10 flex items-center justify-center">
          <div className="w-6 h-6 bg-emerald-600 rounded-full"></div>
        </div>
      </div>
      <div className="mt-4 bg-slate-900 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  if (type === 'whatsapp') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer}>
          <div className="bg-[#075E54] h-20 w-full flex items-center px-6 gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">👤</div>
            <div className="flex flex-col gap-1">
                <div className="h-4 w-32 bg-white/40 rounded-full"></div>
                <div className="h-3 w-20 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1 p-5 space-y-6 bg-[#E5DDD5]">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-slate-200">
               <p className="text-xl font-bold text-slate-800 leading-tight">Você vem para o almoço?</p>
            </div>
            <div className="bg-[#DCF8C6] p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] ml-auto border border-emerald-100">
               <p className="text-xl font-bold text-slate-900 leading-tight">Sim! Já estou saindo.</p>
            </div>
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
            <div className="flex-1 h-12 bg-slate-50 rounded-full border border-slate-200 px-6 flex items-center">
               <span className="text-slate-400 text-lg font-bold">Escrever...</span>
            </div>
            <div className="w-12 h-12 bg-[#128C7E] rounded-full flex items-center justify-center text-white text-2xl shadow-md">
               🎤
            </div>
          </div>
          
          <ActionIndicator top="90%" left="82%" label="Aperte aqui" />
        </div>
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer + " bg-slate-50"}>
          <div className="bg-[#075E54] h-16 w-full"></div>
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-emerald-600 shadow-xl mb-10">
               <span className="text-6xl">🎤</span>
            </div>
            
            <div className="bg-white px-8 py-4 rounded-3xl border-2 border-emerald-100 mb-8 shadow-sm">
                <p className="text-2xl font-black text-emerald-800">GRAVANDO...</p>
                <p className="text-xl font-bold text-slate-400">0:15</p>
            </div>

            <p className="text-xl font-medium text-slate-500">
                Sua voz está sendo <br/> guardada agora.
            </p>
          </div>
          
          <div className="p-6 bg-white border-t border-slate-100">
             <div className="h-16 w-full bg-[#128C7E] rounded-2xl flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest shadow-md">
                ENVIAR
             </div>
          </div>
          
          <ActionIndicator top="85%" left="50%" label="Toque para enviar" />
        </div>
      </div>
    );
  }

  if (type === 'location') {
    return (
      <div className={phoneContainer}>
        <div className={screenContainer}>
          <div className="h-16 bg-white w-full flex items-center px-6 border-b border-slate-100">
              <span className="text-lg font-bold text-slate-400 uppercase tracking-widest">Mapa</span>
          </div>
          <div className="flex-1 bg-slate-100 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-emerald-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📍</span>
                </div>
             </div>
          </div>
          <div className="h-32 bg-white border-t-2 border-slate-50 p-6 flex flex-col justify-center">
             <div className="h-16 w-full bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold text-lg uppercase tracking-widest shadow-xl">
                ENVIAR LOCALIZAÇÃO
             </div>
          </div>
          <ActionIndicator top="82%" left="50%" label="Enviar" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-16 bg-slate-50 rounded-[48px] border-2 border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="text-7xl mb-6">📱</div>
        <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-widest">Simulação</h4>
        <p className="text-xl font-medium text-slate-400">Exemplo visual para ajudar.</p>
    </div>
  );
};

export default DidacticVisual;
