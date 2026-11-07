import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Shield, ArrowLeft } from 'lucide-react';
import { ProductCategory } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  currentView: 'home' | 'product';
  onBackToHome: () => void;
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeCategory,
  onSelectCategory,
  currentView,
  onBackToHome,
  onSearchClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; cat: ProductCategory }[] = [
    { label: 'TODOS', cat: 'all' },
    { label: 'FULL-FACE', cat: 'full-face' },
    { label: 'OPEN-FACE 3/4', cat: 'open-face' },
    { label: 'CAFÉ RACER', cat: 'cafe-racer' },
    { label: 'CUSTOM & CHOPPER', cat: 'custom-cruiser' },
  ];

  return (
    <>
      {/* Top slim announcement bar */}
      <div className="bg-[#121212] text-[#F3EFE6] text-xs py-2 px-4 border-b border-white/10 tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C82020]"></span>
            <span className="font-medium text-stone-300">FEITO À MÃO SOB ENCOMENDA</span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="hidden sm:inline text-stone-400">HOMOLOGAÇÃO ECE 22.06 & DOT FMVSS 218</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span className="hidden md:inline">FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 800</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="text-stone-300 font-semibold">BR / BRL (R$)</span>
          </div>
        </div>
      </div>

      {/* Main Header with Centered Logo as requested */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Left Zone: Back button (if product view) OR Primary Navigation Links */}
            <div className="flex items-center gap-6">
              {currentView === 'product' ? (
                <button
                  onClick={onBackToHome}
                  className="group flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-700 hover:text-[#C82020] transition-colors py-2"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>VOLTAR AO CATÁLOGO</span>
                </button>
              ) : (
                <nav className="hidden lg:flex items-center gap-6">
                  {navItems.slice(0, 3).map((item) => (
                    <button
                      key={item.cat}
                      onClick={() => onSelectCategory(item.cat)}
                      className={`text-xs font-semibold tracking-widest uppercase transition-colors relative py-1 ${
                        activeCategory === item.cat
                          ? 'text-[#C82020]'
                          : 'text-stone-700 hover:text-stone-900'
                      }`}
                    >
                      {item.label}
                      {activeCategory === item.cat && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C82020]"></span>
                      )}
                    </button>
                  ))}
                </nav>
              )}

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-stone-800 hover:text-[#C82020] transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center Zone: Centered Logo with Vintage Custom Identity */}
            <div className="flex flex-col items-center cursor-pointer select-none" onClick={onBackToHome}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-0.5 bg-[#C82020]"></span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.22em] text-[#141414] uppercase">
                  ATELIER MOTO
                </span>
                <span className="w-2.5 h-0.5 bg-[#C82020]"></span>
              </div>
              <span className="text-[9px] font-semibold tracking-[0.35em] text-stone-500 uppercase -mt-1">
                CUSTOM & VINTAGE HELMETS · EST. 2018
              </span>
            </div>

            {/* Right Zone: Secondary Nav Links (desktop) & Search + Cart Bag */}
            <div className="flex items-center gap-4 sm:gap-6">
              {currentView === 'home' && (
                <nav className="hidden lg:flex items-center gap-6 mr-2">
                  {navItems.slice(3).map((item) => (
                    <button
                      key={item.cat}
                      onClick={() => onSelectCategory(item.cat)}
                      className={`text-xs font-semibold tracking-widest uppercase transition-colors relative py-1 ${
                        activeCategory === item.cat
                          ? 'text-[#C82020]'
                          : 'text-stone-700 hover:text-stone-900'
                      }`}
                    >
                      {item.label}
                      {activeCategory === item.cat && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C82020]"></span>
                      )}
                    </button>
                  ))}
                </nav>
              )}

              {/* Search button */}
              <button
                onClick={onSearchClick}
                className="p-2 text-stone-700 hover:text-stone-900 transition-colors"
                title="Buscar modelos"
                aria-label="Buscar capacetes"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-3 py-2 bg-[#121212] text-[#FBF9F5] hover:bg-[#C82020] transition-colors rounded-sm group"
                aria-label={`Carrinho com ${cartCount} itens`}
              >
                <ShoppingBag className="w-4 h-4 text-stone-200 group-hover:text-white transition-colors" />
                <span className="hidden sm:inline text-xs font-semibold tracking-widest uppercase">
                  SACOLA
                </span>
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold font-mono bg-white text-[#121212] rounded-full">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#FBF9F5] p-6 shadow-2xl flex flex-col justify-between z-10 border-r border-stone-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-wider text-stone-900">
                    ATELIER MOTO
                  </span>
                  <span className="text-[10px] tracking-widest text-stone-500 uppercase">
                    CUSTOM & VINTAGE
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-600 hover:text-stone-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                <span className="text-[11px] font-semibold tracking-widest text-[#C82020] uppercase">
                  Categorias
                </span>
                {navItems.map((item) => (
                  <button
                    key={item.cat}
                    onClick={() => {
                      onSelectCategory(item.cat);
                      onBackToHome();
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-base font-semibold tracking-wider uppercase py-2 transition-colors ${
                      activeCategory === item.cat
                        ? 'text-[#C82020] font-bold'
                        : 'text-stone-800 hover:text-stone-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Shield className="w-4 h-4 text-[#C82020]" />
                <span>Garantia Vitalícia no Casco</span>
              </div>
              <p className="text-xs text-stone-500">
                Atelier Custom São Paulo & Curitiba
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
