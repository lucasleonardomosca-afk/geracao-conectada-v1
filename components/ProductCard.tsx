
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
      className="w-full flex flex-col text-left bg-white rounded-[40px] overflow-hidden border-4 border-slate-200 shadow-xl hover:border-emerald-700 transition-all active:scale-[0.98] group" 
      onClick={() => onClick(course)}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden border-b-4 border-slate-100">
        <img 
          src={course.imageUrl} 
          alt={`Imagem ilustrativa sobre o curso ${course.name}, usada para ajudar no entendimento.`} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-6 left-6">
            <span className="bg-white text-emerald-900 px-6 py-2 rounded-2xl text-xl font-black shadow-lg border-4 border-emerald-700">
                {course.level}
            </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-emerald-800">{course.name}</h3>
        <p className="text-xl font-bold text-emerald-700 mb-6 uppercase tracking-wider">{course.tagline}</p>
        <p className="text-2xl text-slate-700 mb-8 leading-relaxed font-bold flex-1">{course.description}</p>
        
        <div className="h-[72px] w-full bg-emerald-700 text-white font-black rounded-2xl text-2xl shadow-lg flex items-center justify-center gap-4">
            <span>📘</span> QUERO APRENDER AGORA
        </div>
      </div>
    </button>
  );
};

export default ProductCard;