import React, { useState } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Ruler, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Maximize2, 
  Minus, 
  Plus, 
  ArrowLeft,
  Share2,
  PackageCheck
} from 'lucide-react';
import { Product, ProductSize, ProductColor } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  relatedProducts: Product[];
  onOpenSizeGuide: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onAddToCart,
  onBack,
  onSelectProduct,
  relatedProducts,
  onOpenSizeGuide,
}) => {
  // Selected state
  const defaultSize = product.sizes.find(s => s.available)?.size || 'M';
  const defaultColor = product.colors[0]?.name || 'Padrão';

  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeAngleIndex, setActiveAngleIndex] = useState<number>(0);
  const [visorMode, setVisorMode] = useState<'clear' | 'smoke' | 'amber'>('clear');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [activeAccordion, setActiveAccordion] = useState<'specs' | 'shipping' | 'warranty' | null>('specs');
  const [cepInput, setCepInput] = useState('');
  const [cepCalculated, setCepCalculated] = useState(false);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const activeImage = product.gallery[activeAngleIndex]?.image || product.primaryImage;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2000);
  };

  const handleCalculateCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.trim().length >= 8) {
      setCepCalculated(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-stone-500 font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-stone-800 hover:text-[#C82020] font-semibold tracking-wider uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>TODOS OS CAPACETES</span>
            </button>
            <span>/</span>
            <span className="uppercase text-stone-400">{product.categoryLabel}</span>
            <span>/</span>
            <span className="uppercase text-stone-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-stone-400">REF: {product.code}</span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href,
                  }).catch(() => {});
                }
              }}
              className="hover:text-stone-900 transition-colors flex items-center gap-1"
              title="Compartilhar"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>COMPARTILHAR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 2-Column Split Section (EXACT Layout requested: Left White, Right Black/Graphite) */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl border-y sm:border border-stone-200 overflow-hidden bg-white">
          
          {/* ========================================================
              LEFT COLUMN: WHITE BACKGROUND (O protagonista visual)
              Fotografia grande e realista do capacete + miniaturas de ângulos
              ======================================================== */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
            
            {/* Top Bar inside Left Column */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C82020]"></span>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-stone-600">
                  CASCO ARTESANAL · NUMERADO
                </span>
              </div>
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex items-center gap-1.5 text-xs font-mono text-stone-600 hover:text-stone-900 transition-colors p-1"
                title="Ampliar imagem do capacete"
              >
                <Maximize2 className="w-4 h-4 text-stone-500" />
                <span className="hidden sm:inline">{isZoomed ? 'ZOOM ATIVO (1.5X)' : 'AMPLIAR DETALHES'}</span>
              </button>
            </div>

            {/* Main Stage: Giant Helmet Protagonist */}
            <div className="relative my-8 flex items-center justify-center min-h-[360px] sm:min-h-[460px] overflow-hidden group">
              {/* Subtle ambient lighting plate */}
              <div className="absolute inset-0 bg-radial from-stone-100/80 via-transparent to-transparent rounded-full filter blur-xl" />

              <div className="relative z-10 transition-transform duration-500 ease-out flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={`${product.name} - ${product.gallery[activeAngleIndex]?.label || 'Vista do capacete'}`}
                  referrerPolicy="no-referrer"
                  className={`max-h-[380px] sm:max-h-[460px] w-auto object-contain transition-transform duration-500 drop-shadow-2xl ${
                    isZoomed ? 'scale-135 cursor-zoom-out' : 'scale-100 group-hover:scale-103 cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              {/* Visor Tint Selector Overlay */}
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md border border-stone-200 p-1.5 rounded-xs flex flex-col gap-1 z-20 shadow-sm">
                <span className="text-[9px] font-mono font-bold text-stone-500 px-1 uppercase tracking-wider text-center">
                  Viseira
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setVisorMode('clear')}
                    className={`px-2 py-1 text-[10px] font-mono rounded-xs border transition-colors ${
                      visorMode === 'clear'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    Cristal
                  </button>
                  <button
                    onClick={() => setVisorMode('smoke')}
                    className={`px-2 py-1 text-[10px] font-mono rounded-xs border transition-colors ${
                      visorMode === 'smoke'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    Fumê
                  </button>
                  <button
                    onClick={() => setVisorMode('amber')}
                    className={`px-2 py-1 text-[10px] font-mono rounded-xs border transition-colors ${
                      visorMode === 'amber'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    Âmbar
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Gallery Thumbnails */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                  GALERIA DE ÂNGULOS & ACABAMENTOS ({product.gallery.length} FOTOS)
                </span>
                <span className="text-xs font-mono text-stone-700 font-semibold">
                  {product.gallery[activeAngleIndex]?.label}
                </span>
              </div>

              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {product.gallery.map((angle, idx) => (
                  <button
                    key={angle.id}
                    onClick={() => setActiveAngleIndex(idx)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 p-2 bg-[#F9F8F6] border-2 rounded-xs flex items-center justify-center shrink-0 transition-all duration-200 ${
                      activeAngleIndex === idx
                        ? 'border-[#C82020] shadow-md bg-white'
                        : 'border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100'
                    }`}
                    title={angle.label}
                  >
                    <img
                      src={angle.image}
                      alt={angle.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                    {activeAngleIndex === idx && (
                      <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#C82020]"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Trust markers under the helmet image */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-stone-100 text-center">
                <div className="p-2 bg-stone-50 rounded-xs">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Segurança</div>
                  <div className="text-xs font-bold text-stone-900 mt-0.5">ECE 22.06 & DOT</div>
                </div>
                <div className="p-2 bg-stone-50 rounded-xs">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Estrutura</div>
                  <div className="text-xs font-bold text-stone-900 mt-0.5">Fibra Tri-Composta</div>
                </div>
                <div className="p-2 bg-stone-50 rounded-xs">
                  <div className="text-[10px] font-mono text-stone-500 uppercase">Fecho de Pista</div>
                  <div className="text-xs font-bold text-stone-900 mt-0.5">Duplo D em Inox</div>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: BLACK / GRAPHITE BACKGROUND
              Nome do produto, preço, avaliações, descrição, tamanhos,
              quantidade e botão de adicionar ao carrinho
              ======================================================== */}
          <div className="lg:col-span-5 bg-[#121212] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Category & Badge Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#C82020] uppercase">
                    {product.categoryLabel}
                  </span>
                  <span className="text-stone-600">·</span>
                  <span className="text-[11px] font-mono text-stone-400">
                    ED. LIMITADA
                  </span>
                </div>
                {product.badge && (
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 text-stone-200 px-2 py-0.5 border border-white/15">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <div>
                <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
                  {product.name}
                </h1>
                <p className="text-sm text-stone-400 mt-2 font-body font-light">
                  {product.subtitle}
                </p>
              </div>

              {/* Reviews & Social Proof */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C82020] text-[#C82020]"
                    />
                  ))}
                </div>
                <span className="text-sm font-mono font-bold text-white">
                  {product.rating.toFixed(2)}
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-xs text-stone-400 hover:text-white transition-colors cursor-pointer underline">
                  {product.reviewsCount} avaliações de motociclistas
                </span>
              </div>

              {/* Pricing Presentation */}
              <div className="space-y-1 bg-[#1A1A1A] p-4 rounded-xs border border-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  {product.originalPrice && (
                    <span className="font-mono text-sm text-stone-500 line-through tabular-nums">
                      R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-300">
                  <span>ou em até <strong>10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')}</strong> sem juros</span>
                  <span className="text-stone-500">|</span>
                  <span className="text-[#C82020] font-bold">5% OFF no PIX (R$ {(product.price * 0.95).toFixed(2).replace('.', ',')})</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-300 leading-relaxed font-body font-light">
                {product.description}
              </p>

              {/* Color Swatches */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-400 uppercase tracking-wider">
                    Cor do Acabamento: <span className="text-white font-semibold">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`group relative p-0.5 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-[#C82020] scale-110'
                          : 'border-transparent hover:border-stone-500'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="block w-7 h-7 rounded-full shadow-inner border border-white/20"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector with Guide */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-stone-400 uppercase tracking-wider">
                    Selecione o Tamanho: <span className="text-white font-bold">{selectedSize}</span>
                  </span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="flex items-center gap-1.5 text-xs text-[#C82020] hover:text-white transition-colors underline uppercase tracking-wider"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Guia de Medidas</span>
                  </button>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.size}
                      disabled={!s.available}
                      onClick={() => setSelectedSize(s.size)}
                      className={`relative py-3 flex flex-col items-center justify-center border font-mono text-sm transition-all rounded-xs ${
                        !s.available
                          ? 'border-white/5 bg-white/5 text-stone-600 cursor-not-allowed line-through'
                          : selectedSize === s.size
                          ? 'border-[#C82020] bg-[#C82020] text-white font-bold shadow-lg'
                          : 'border-white/20 bg-[#1A1A1A] text-stone-200 hover:border-white/50 hover:bg-[#222222]'
                      }`}
                    >
                      <span>{s.size}</span>
                      <span className="text-[9px] opacity-75 mt-0.5">
                        {s.circumference.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Add to Cart Button */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-4">
                  {/* Quantity stepper */}
                  <div className="flex items-center border border-white/20 bg-[#1A1A1A] rounded-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-stone-400 hover:text-white transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-mono font-bold text-white text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-stone-400 hover:text-white transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Primary Add to Cart Button */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-4 px-6 font-display text-lg font-bold uppercase tracking-wider transition-all duration-200 rounded-xs flex items-center justify-center gap-3 shadow-xl ${
                      isAddedFeedback
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#C82020] hover:bg-[#B31919] text-white active:scale-[0.99]'
                    }`}
                  >
                    {isAddedFeedback ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>ADICIONADO À SACOLA!</span>
                      </>
                    ) : (
                      <>
                        <span>ADICIONAR À SACOLA</span>
                        <span className="font-mono text-sm opacity-90">·</span>
                        <span className="font-mono text-sm tabular-nums">
                          R$ {(product.price * quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant Buy button */}
                <button
                  onClick={() => {
                    handleAdd();
                  }}
                  className="w-full py-3 px-6 bg-white hover:bg-stone-100 text-stone-900 font-display text-base font-bold uppercase tracking-wider transition-colors rounded-xs"
                >
                  COMPRAR COM 1-CLIQUE (PIX / CARTÃO)
                </button>
              </div>

              {/* CEP / Frete Estimator */}
              <div className="pt-4 border-t border-white/10">
                <form onSubmit={handleCalculateCep} className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#C82020]" />
                      <span>SIMULAR FRETE E PRAZO</span>
                    </span>
                    <span>Envio Seguro com Seguro Total</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="00000-000"
                      maxLength={9}
                      value={cepInput}
                      onChange={(e) => setCepInput(e.target.value)}
                      className="flex-1 bg-[#1A1A1A] border border-white/20 px-3 py-2 text-sm text-white placeholder-stone-500 rounded-xs font-mono focus:border-[#C82020] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded-xs border border-white/20 transition-colors"
                    >
                      Calcular
                    </button>
                  </div>
                </form>

                {cepCalculated && (
                  <div className="mt-3 p-3 bg-white/5 border border-white/10 rounded-xs text-xs space-y-1.5 font-mono">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span>✓ SEDEX EXPRESS (SEGURO TOTAL)</span>
                      <span>GRÁTIS</span>
                    </div>
                    <div className="text-stone-400 text-[11px]">
                      Previsão de entrega: 2 a 4 dias úteis após a fabricação artesanal.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordions for Specifications and Details */}
              <div className="pt-4 border-t border-white/10 divide-y divide-white/10 text-xs">
                {/* Specs Accordion */}
                <div>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'specs' ? null : 'specs')}
                    className="w-full py-3 flex items-center justify-between text-stone-200 hover:text-white font-mono uppercase tracking-wider"
                  >
                    <span className="font-semibold">Especificações Técnicas Completas</span>
                    {activeAccordion === 'specs' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'specs' && (
                    <div className="pb-4 space-y-2 text-stone-400 font-mono text-[11px] leading-relaxed">
                      <div><strong className="text-stone-300">Casco:</strong> {product.specs.shell}</div>
                      <div><strong className="text-stone-300">Forração:</strong> {product.specs.liner}</div>
                      <div><strong className="text-stone-300">Fecho:</strong> {product.specs.closure}</div>
                      <div><strong className="text-stone-300">Peso:</strong> {product.specs.weight}</div>
                      <div><strong className="text-stone-300">Certificações:</strong> {product.specs.certification}</div>
                      <div><strong className="text-stone-300">Viseira:</strong> {product.specs.visor}</div>
                    </div>
                  )}
                </div>

                {/* Packaging and Warranty */}
                <div>
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'warranty' ? null : 'warranty')}
                    className="w-full py-3 flex items-center justify-between text-stone-200 hover:text-white font-mono uppercase tracking-wider"
                  >
                    <span className="font-semibold">Caixa de Madeira Artesanal & Garantia</span>
                    {activeAccordion === 'warranty' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === 'warranty' && (
                    <div className="pb-4 space-y-2 text-stone-400 font-body text-xs">
                      <p>
                        Todo capacete Atelier Moto acompanha caixa de madeira de pinus tratada com gravação pirogravada, sacola de viagem em lona encerada impermeável e chaveiro comemorativo numerado.
                      </p>
                      <p className="text-stone-300 font-medium">
                        Garantia vitalícia no casco contra defeitos de laminação e fabricação. Primeira troca de tamanho gratuita dentro de 30 dias.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-t border-stone-200 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-0.5 bg-[#C82020]"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#C82020] uppercase font-display">
                  DEPOIMENTOS REAIS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-stone-900">
                O QUE DIZEM OS PILOTOS
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-stone-600">
              <span>98% RECOMENDARIAM A UM AMIGO</span>
              <span>·</span>
              <span>NOTA MÉDIA 4.95 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 border border-stone-200 rounded-xs shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C82020] text-[#C82020]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-stone-400">{rev.date}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-stone-900 uppercase">
                  "{rev.title}"
                </h4>
                <p className="text-sm text-stone-600 font-body leading-relaxed">
                  {rev.comment}
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="font-semibold text-stone-900">{rev.author}</span>
                  <span className="text-[#C82020]">{rev.motorcycle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Recommendation Slider */}
      <div className="bg-[#F5F2EB] py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C82020] uppercase font-display">
              VOCÊ TAMBÉM PODE GOSTAR
            </span>
            <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-stone-900 mt-1">
              OUTROS MODELOS DA GARAGEM
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-stone-200 p-5 rounded-xs cursor-pointer group hover:border-stone-400 hover:shadow-lg transition-all"
              >
                <div className="bg-[#FAF8F5] p-4 flex items-center justify-center min-h-[220px]">
                  <img
                    src={item.primaryImage}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-44 h-44 object-contain transition-transform group-hover:scale-105 drop-shadow-md"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-[10px] font-mono uppercase text-stone-500">
                    {item.categoryLabel}
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase text-stone-900 group-hover:text-[#C82020] transition-colors">
                    {item.name}
                  </h4>
                  <div className="font-mono text-sm font-bold text-stone-900 mt-1">
                    R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
