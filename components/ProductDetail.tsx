
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Course } from '../types';
import PrintButton from './PrintButton';
import DidacticVisual from './DidacticVisual';

interface ProductDetailProps {
  course: Course;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ course, onBack }) => {
  // Mapeia curso para o visual correspondente
  const getCourseVisual = () => {
    if (course.name.toLowerCase().includes('whatsapp')) return 'whatsapp';
    if (course.name.toLowerCase().includes('fotos')) return 'button-guide';
    if (course.name.toLowerCase().includes('uber')) return 'location';
    return null;
  };

  const visualType = getCourseVisual();

  return (
    <div className="pt-32 min-h-screen bg-[#F8FAFC] animate-fade-in-up pb-20">
      <PrintButton />
      <div className="max-w-5xl mx-auto px-6">
        
        <button 
          onClick={onBack}
          className="no-print flex items-center gap-2 text-lg font-bold text-slate-500 hover:text-slate-900 transition-colors mb-8 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar para ver todos os cursos
        </button>

        <div className="bg-white rounded-[40px] shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto bg-slate-200">
                     <img 
                        src={course.imageUrl} 
                        alt={`Imagem ilustrativa sobre o curso ${course.name}, usada para ajudar no entendimento.`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                        <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-black border border-emerald-200 uppercase tracking-widest">{course.level}</span>
                        <span className="bg-slate-100 text-slate-800 px-4 py-1 rounded-full text-sm font-black border border-slate-200">{course.duration}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">{course.name}</h1>
                    <p className="text-2xl text-slate-600 mb-8 leading-relaxed font-medium">
                        {course.description}
                    </p>
                    <button className="no-print h-[80px] w-full bg-emerald-700 hover:bg-emerald-800 text-white text-2xl font-black rounded-3xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
                        📘 Começar Aula Grátis
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 border-t-8 border-slate-50">
                {/* Módulos Texto */}
                <div className="lg:col-span-2 p-8 md:p-12 bg-white">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                        <span className="bg-emerald-100 p-2 rounded-xl">📋</span> O que você vai aprender:
                    </h2>
                    <ul className="space-y-4">
                        {course.modules.map((mod, idx) => (
                            <li key={idx} className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 shadow-sm group">
                                <div className="w-12 h-12 rounded-full bg-white text-emerald-700 flex items-center justify-center font-black flex-shrink-0 border-4 border-emerald-100 text-2xl group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                                    {idx + 1}
                                </div>
                                <span className="text-2xl text-slate-800 font-black leading-tight">{mod}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Apoio Visual Lateral */}
                <div className="p-8 md:p-12 bg-slate-50 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-black text-emerald-800 mb-8 uppercase tracking-widest">Apoio Visual</h3>
                    {visualType ? (
                        <div className="scale-90">
                            <DidacticVisual type={visualType as any} />
                            <p className="mt-6 text-slate-500 font-bold italic">Simulação de como você <br/> verá no seu celular</p>
                        </div>
                    ) : (
                        <div className="w-full h-64 bg-slate-200 rounded-3xl border-4 border-dashed border-slate-300 flex items-center justify-center p-6">
                            <p className="text-slate-400 font-black text-xl">Desenho explicativo em breve!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
