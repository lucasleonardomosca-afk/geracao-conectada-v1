
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#2C2A26]/30 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l-4 border-emerald-100 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-slate-50">
          <h2 className="text-2xl font-black text-slate-900">Seu Carrinho ({items.length})</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-red-500 transition-colors"
            aria-label="Fechar carrinho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="text-6xl opacity-20">🛒</div>
              <p className="font-bold text-2xl text-slate-400 italic">O carrinho está vazio.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-6 animate-fade-in-up border-b-2 border-slate-50 pb-6">
                <div className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-slate-200">
                  <img 
                    src={item.imageUrl} 
                    alt={`Imagem ilustrativa sobre o item ${item.name}, usada para ajudar no entendimento.`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                        <span className="text-xl font-bold text-emerald-700">R$ {item.price}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-lg font-black text-red-500 hover:text-red-700 self-start underline underline-offset-4 transition-colors"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t-4 border-slate-50 bg-slate-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold uppercase tracking-widest text-slate-500">Total</span>
            <span className="text-3xl font-black text-slate-900">R$ {total}</span>
          </div>
          <button 
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full h-[72px] bg-emerald-700 text-white uppercase tracking-widest text-xl font-black rounded-2xl shadow-lg hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            FINALIZAR CURSO
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
