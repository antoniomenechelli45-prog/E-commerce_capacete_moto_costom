import React from 'react';
import { ArrowRight, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { HERO_BIKER_IMAGE, HELMET_FULLFACE_BLACK } from '../data/products';
import { Product } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onSelectProduct: (product: Product) => void;
  featuredProduct: Product;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onSelectProduct,
  featuredProduct,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-stone-200">
      {/* Decorative fine racing lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#121212]">
        <div className="h-full w-24 bg-[#C82020]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Editorial Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-10">
            {/* Top kicker */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#C82020]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C82020] uppercase font-display">
                EDITION 2026 · CUSTOM MOTORCYCLES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-[#141414] leading-[0.95] text-balance">
              FORJADOS PARA A ESTRADA ABERTA.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-body max-w-xl">
              Capacetes premium de alta performance inspirados nas máquinas clássicas
              <span className="font-semibold text-stone-900"> Chopper, Cruiser e Café Racer</span>. Cascos em fibra tri-composta moldados à mão com interiores em couro nobre.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121212] text-white font-display text-lg font-bold tracking-wider uppercase hover:bg-[#C82020] transition-colors rounded-xs shadow-md"
              >
                <span>EXPLORAR COLEÇÃO</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onSelectProduct(featuredProduct)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-stone-300 hover:border-stone-900 bg-white/80 hover:bg-white text-stone-900 font-display text-lg font-semibold tracking-wider uppercase transition-colors rounded-xs"
              >
                <span>VER VANGUARD BLACK</span>
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/90 text-stone-600">
              <div>
                <div className="font-display text-2xl font-extrabold text-[#141414] tracking-tight">ECE 22.06</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Homologação Dupla</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#141414] tracking-tight">1.290g</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Tri-Composto Leve</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#C82020] tracking-tight">VITALÍCIA</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Garantia no Casco</div>
              </div>
            </div>
          </div>

          {/* Right / Visual Showcase: Action Motorcycle backdrop + Hero Helmet protagonist (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-stone-900 group">
              {/* Cinematic Action Photography: Rider on Custom Chopper */}
              <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden">
                <img
                  src={HERO_BIKER_IMAGE}
                  alt="Motociclista pilotando moto custom chopper na estrada costeira"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle dark gradient overlay to ensure contrast and vintage tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                
                {/* Location marker stamp */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-mono tracking-widest border border-white/10 uppercase">
                  <Compass className="w-3.5 h-3.5 text-[#C82020]" />
                  <span>HIGHWAY ONE · PACIFIC COAST RUN</span>
                </div>

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-xs">
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                    FILOSOFIA ATELIER MOTO
                  </span>
                  <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                    Projetado para resistir aos ventos mais implacáveis com o silêncio e a elegância de uma obra de arte.
                  </p>
                </div>
              </div>

              {/* Spotlight Product Card Floating over the corner */}
              <div 
                onClick={() => onSelectProduct(featuredProduct)}
                className="absolute -bottom-4 right-4 sm:right-6 bg-white p-3 sm:p-4 rounded-sm shadow-2xl border border-stone-200/90 max-w-[240px] sm:max-w-[280px] cursor-pointer hover:border-[#C82020] transition-all transform hover:-translate-y-1"
              >
                <div className="relative bg-[#F5F2EB] p-2 rounded-xs flex items-center justify-center overflow-hidden">
                  <img
                    src={HELMET_FULLFACE_BLACK}
                    alt="Capacete Vanguard Vintage Black"
                    referrerPolicy="no-referrer"
                    className="w-28 sm:w-36 h-28 sm:h-36 object-contain drop-shadow-xl"
                  />
                  <span className="absolute top-2 right-2 bg-[#C82020] text-white text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
                    DESTAQUE
                  </span>
                </div>
                <div className="mt-2 text-left">
                  <div className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">
                    EDIÇÃO LIMITADA
                  </div>
                  <div className="font-display text-base font-bold text-stone-900 tracking-tight leading-tight mt-0.5">
                    {featuredProduct.name}
                  </div>
                  <div className="flex items-center justify-between mt-1 pt-1 border-t border-stone-100">
                    <span className="text-xs font-bold text-stone-900 font-mono">
                      R$ {featuredProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-[10px] font-bold text-[#C82020] tracking-wider uppercase group-hover:underline">
                      VER DETALHES →
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
