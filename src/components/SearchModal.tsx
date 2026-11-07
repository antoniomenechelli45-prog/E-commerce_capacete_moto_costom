import React, { useState } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? products
    : products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-start justify-center p-4 sm:pt-20">
      <div className="relative bg-[#FAF8F5] text-stone-900 w-full max-w-2xl border border-stone-200 shadow-2xl rounded-xs overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 bg-white border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por modelo, estilo ou material (ex: Vanguard, Carbon, Café Racer)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-stone-900 placeholder-stone-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-stone-500">
              Nenhum capacete encontrado para "{query}".
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-3 bg-white border border-stone-200 hover:border-[#C82020] rounded-xs flex items-center justify-between gap-4 cursor-pointer group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-stone-50 p-1 rounded-xs shrink-0 flex items-center justify-center">
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-500">
                      {product.categoryLabel}
                    </span>
                    <h4 className="font-display text-base font-bold text-stone-900 uppercase group-hover:text-[#C82020] transition-colors">
                      {product.name}
                    </h4>
                    <span className="font-mono text-xs font-bold text-stone-900">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-stone-500">
                    <Star className="w-3 h-3 fill-[#C82020] text-[#C82020]" />
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C82020] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
