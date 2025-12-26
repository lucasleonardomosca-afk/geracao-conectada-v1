/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { COURSES } from '../constants';
import { Course } from '../types';
import ProductCard from './ProductCard';

const levels = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

interface ProductGridProps {
  onProductClick: (course: Course) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeLevel, setActiveLevel] = useState('Todos');

  const filteredCourses = useMemo(() => {
    if (activeLevel === 'Todos') return COURSES;
    return COURSES.filter(c => c.level === activeLevel);
  }, [activeLevel]);

  return (
    <section id="courses" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <span className="text-green-700 font-bold uppercase tracking-widest">Passo a Passo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Escolha o que quer aprender</h2>
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {levels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`text-lg px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium ${
                  activeLevel === lvl 
                    ? 'bg-slate-800 text-white border-slate-800' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <ProductCard key={course.id} course={course} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
