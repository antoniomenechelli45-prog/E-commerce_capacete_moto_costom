import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { ProductCategory } from '../types';

interface CategoriesProps {
  onSelectCategory: (cat: ProductCategory) => void;
  activeCategory: ProductCategory;
}

export const Categories: React.FC<CategoriesProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#C82020]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C82020] uppercase font-display">
                ESTILOS DE PILOTAGEM
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#141414]">
              CATEGORIAS DE CAPACETES
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-body">
            Cada silhueta foi calibrada para a postura exata da sua motocicleta — do recuo ereto de uma chopper ao avanço inclinado de uma café racer.
          </p>
        </div>

        {/* Categories Grid (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`group relative bg-white border cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#C82020] ring-2 ring-[#C82020]/20'
                    : 'border-stone-200 hover:border-stone-400'
                }`}
              >
                {/* Category Header Label */}
                <div className="p-5 pb-0 flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono tracking-widest text-[#C82020] uppercase">
                    {cat.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {cat.count}
                  </span>
                </div>

                {/* Product/Category Image */}
                <div className="relative py-8 px-4 flex items-center justify-center bg-radial from-stone-100 to-transparent">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                  />
                </div>

                {/* Bottom details */}
                <div className="p-5 pt-0 bg-white border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-stone-900 group-hover:text-[#C82020] transition-colors">
                      {cat.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#121212] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C82020]"></div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
