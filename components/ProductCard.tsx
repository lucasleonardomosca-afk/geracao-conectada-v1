
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Course } from '../types';
import SmartImage from './SmartImage';

interface ProductCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ course, onClick }) => {
  const getBadgeStyle = () => {
    switch (course.accessType) {
        case 'Com Professor':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'Patrocinado':
            return 'bg-amber-50 text-amber-800 border-amber-200';
        default:
            return 'bg-emerald-50 text-emerald-800 border-emerald-100';
    }
  };

  const getBadgeLabel = () => {
    if (course.accessType === 'Com Professor') return '👥 Com Professor';
    if (course.accessType === 'Patrocinado') return `🤝 ${course.sponsorName || 'Patrocinado'}`;
    return '📖 Acesso Livre';
  };

  return (
    <button 
      className="w-full flex flex-col text-left bg-white rounded-[56px] overflow-hidden border-2 border-slate-100 transition-all hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 active:scale-[0.98] group p-4" 
      onClick={() => onClick(course)}
    >
      <div className="flex justify-between items-center px-8 pt-4 mb-4">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Tema da Aula</p>
        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getBadgeStyle()}`}>
            {getBadgeLabel()}
        </span>
      </div>

      <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
        <SmartImage 
          src={course.imageUrl} 
          alt={`Imagem do curso: ${course.name}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-6 right-6">
           <span className="bg-white/95 backdrop-blur-sm text-slate-900 px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg">
             {course.level}
           </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-[32px] md:text-4xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight group-hover:text-emerald-800 transition-colors">
          {course.name}
        </h3>
        <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed font-medium flex-1">
          {course.description}
        </p>
        
        <div className="h-[84px] w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-black rounded-[28px] text-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all shadow-sm">
            Ver detalhes
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
