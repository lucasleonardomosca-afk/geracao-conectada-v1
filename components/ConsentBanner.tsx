/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

// ✅ [LGPD:Art.7] Componente de Consentimento Explícito
const ConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ✅ [LGPD] Verificar se o consentimento já foi dado
    const consent = localStorage.getItem('gc_lgpd_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // ✅ [LGPD] Armazenar prova de consentimento
    localStorage.setItem('gc_lgpd_consent', 'true');
    localStorage.setItem('gc_lgpd_timestamp', new Date().toISOString());
    setVisible(false);
  };

  const handleReject = () => {
    // ✅ [LGPD] Respeitar a decisão de não rastreamento (apenas cookies essenciais)
    localStorage.setItem('gc_lgpd_consent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-emerald-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-6 md:p-8 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Sua privacidade é importante</h3>
          <p className="text-slate-600 text-sm md:text-base">
            Utilizamos cookies para melhorar sua experiência na <strong>Geração Conectada</strong> e garantir que o site funcione direitinho. 
            Respeitamos seus dados conforme a LGPD.
            <a href="#" className="underline text-emerald-600 ml-1 hover:text-emerald-800">Política de Privacidade</a>.
          </p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
           <button 
             onClick={handleReject}
             className="flex-1 md:flex-none px-6 py-3 border-2 border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-50 transition-colors"
           >
             Apenas Essenciais
           </button>
           <button 
             onClick={handleAccept}
             className="flex-1 md:flex-none px-8 py-3 bg-emerald-600 rounded-xl text-white font-bold hover:bg-emerald-700 shadow-md transition-colors"
           >
             Aceitar Tudo
           </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
