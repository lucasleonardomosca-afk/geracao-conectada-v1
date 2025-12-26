/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Course } from '../types';

interface ProductCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ course, onClick }) => {
  return (
    <button 
      className="w-full flex flex-col text-left bg-white rounded-[56px] overflow-hidden border-2 border-slate-100 transition-all hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 active:scale-[0.98] group" 
      onClick={() => onClick(course)}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
        <img 
          src={course.imageUrl} 
          alt={`Imagem do curso: ${course.name}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-6 right-6">
           <span className="bg-white/95 backdrop-blur-sm text-slate-900 px-6 py-2 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg">
             {course.level}
           </span>
        </div>
      </div>
      
      <div className="p-12 flex flex-col flex-1">
        <h3 className="text-[32px] md:text-4xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight group-hover:text-emerald-800 transition-colors">
          {course.name}
        </h3>
        <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed font-medium flex-1">
          {course.description}
        </p>
        
        <div className="h-[84px] w-full bg-slate-50 border-2 border-slate-200 text-slate-900 font-black rounded-[28px] text-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all shadow-sm">
            Ver detalhes do curso
        </div>
      </div>
    </button>
  );
};

export default ProductCard;