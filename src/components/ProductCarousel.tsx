import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product, ProductCategory } from '../types';

interface ProductCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  activeCategory,
  onSelectCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const categories: { label: string; cat: ProductCategory }[] = [
    { label: 'Todos os Capacetes', cat: 'all' },
    { label: 'Full-Face Vintage', cat: 'full-face' },
    { label: 'Open-Face 3/4', cat: 'open-face' },
    { label: 'Café Racer', cat: 'cafe-racer' },
    { label: 'Custom & Chopper', cat: 'custom-cruiser' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="colecao-capacetes" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#C82020]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C82020] uppercase font-display">
                GALERIA PRINCIPAL
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#141414]">
              COLEÇÃO DE CAPACETES
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-stone-300 hover:border-stone-900 bg-white hover:bg-[#121212] hover:text-white transition-colors rounded-xs shadow-xs"
              aria-label="Rolar produtos para esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-stone-300 hover:border-stone-900 bg-white hover:bg-[#121212] hover:text-white transition-colors rounded-xs shadow-xs"
              aria-label="Rolar produtos para direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-stone-200">
          {categories.map((c) => (
            <button
              key={c.cat}
              onClick={() => onSelectCategory(c.cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all rounded-xs ${
                activeCategory === c.cat
                  ? 'bg-[#121212] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory focus:outline-none"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[290px] sm:w-[340px] shrink-0 snap-start bg-white border border-stone-200/90 rounded-xs flex flex-col justify-between group hover:border-stone-400 hover:shadow-xl transition-all duration-300"
            >
              {/* Product Card Top: Image & Badge */}
              <div className="relative p-6 bg-[#F8F6F1] flex items-center justify-center min-h-[280px] overflow-hidden cursor-pointer"
                   onClick={() => onSelectProduct(product)}>
                {/* Subtle Radial Gradient */}
                <div className="absolute inset-0 bg-radial from-white/90 via-transparent to-transparent opacity-80" />
                
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-56 h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-106 drop-shadow-lg"
                />

                {/* Badge text (unboxed) */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C82020]"></span>
                    <span className="text-[10px] font-bold font-mono tracking-widest text-[#C82020] uppercase">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick view icon trigger */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="absolute bottom-3 right-3 z-10 p-2.5 bg-white/95 hover:bg-[#121212] text-stone-800 hover:text-white rounded-xs shadow-md transition-colors opacity-90 sm:opacity-0 group-hover:opacity-100"
                  title="Ver detalhes do capacete"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Category & Rating (Unboxed clean metadata) */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-mono uppercase tracking-wider text-[11px] text-stone-600">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-stone-800 font-mono text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-[#C82020] text-[#C82020]" />
                      <span className="font-bold">{product.rating.toFixed(1)}</span>
                      <span className="text-stone-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-display text-2xl font-bold uppercase tracking-tight text-stone-900 group-hover:text-[#C82020] transition-colors cursor-pointer leading-tight line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                    {product.subtitle}
                  </p>
                </div>

                {/* Price and Action Button */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-lg font-bold text-stone-900 tabular-nums">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] text-stone-500">
                      em até 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const defaultSize = product.sizes.find(s => s.available)?.size || 'M';
                      const defaultColor = product.colors[0]?.name || 'Padrão';
                      onAddToCart(product, defaultSize, defaultColor);
                    }}
                    className="flex items-center gap-2 px-3.5 py-2.5 bg-[#121212] hover:bg-[#C82020] text-white text-xs font-bold tracking-wider uppercase transition-colors rounded-xs shadow-xs"
                    title="Adicionar à sacola de compras"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>COMPRAR</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
