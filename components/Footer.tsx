/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-white pt-20 pb-12 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="md:col-span-1">
          <h4 className="text-2xl font-bold text-green-700 mb-6">{BRAND_NAME}</h4>
          <p className="text-slate-600 mb-6">
            Ajudando a melhor idade a navegar no mundo digital com segurança e independência.
          </p>
          <div className="flex gap-4">
             {/* Social Icons Placeholder */}
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors cursor-pointer">IG</div>
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors cursor-pointer">FB</div>
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-green-100 hover:text-green-600 transition-colors cursor-pointer">YT</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-lg">Mapa do Site</h4>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-green-600 transition-colors hover:underline">Como Funciona</a></li>
            <li><a href="#courses" onClick={(e) => onLinkClick(e, 'courses')} className="hover:text-green-600 transition-colors hover:underline">Nossos Cursos</a></li>
            <li><a href="#community" onClick={(e) => onLinkClick(e, 'community')} className="hover:text-green-600 transition-colors hover:underline">Comunidade</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-lg">Ajuda</h4>
          <ul className="space-y-4 text-slate-600 text-lg">
            <li><a href="#" className="hover:text-green-600 transition-colors hover:underline">Central de Dúvidas</a></li>
            <li><a href="#" className="hover:text-green-600 transition-colors hover:underline">Falar no WhatsApp</a></li>
            <li><a href="#" onClick={(e) => onLinkClick(e, 'partners')} className="hover:text-green-600 transition-colors hover:underline text-green-700 font-bold">Seja Parceiro</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-lg">Contato</h4>
          <p className="text-slate-600 mb-2">contato@geracaoconectada.net.br</p>
          <p className="text-slate-600 mb-6">São Paulo - SP</p>
          <p className="text-xs text-slate-400 bg-slate-50 p-2 rounded">
              Em breve: Atendimento presencial e consultoria para Casa Inteligente.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>© 2025 Geração Conectada. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacidade</a>
            <a href="#" className="hover:text-slate-900">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
