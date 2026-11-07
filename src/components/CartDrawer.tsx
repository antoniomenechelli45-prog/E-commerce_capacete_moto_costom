import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * appliedDiscount;
  const total = subtotal - discountAmount;
  const freeShippingThreshold = 800;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'CUSTOM10' || code === 'ATELIER10') {
      setAppliedDiscount(0.1);
      setCouponError('');
    } else if (code === 'VINTAGE15') {
      setAppliedDiscount(0.15);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido. Tente "CUSTOM10"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] text-stone-900 shadow-2xl flex flex-col justify-between border-l border-stone-200">
          
          {/* Drawer Header */}
          <div className="p-6 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C82020]"></span>
              <span className="font-display text-xl font-bold uppercase tracking-wider text-stone-900">
                SUA SACOLA DE COMPRAS
              </span>
              <span className="text-xs font-mono text-stone-500">({items.reduce((acc, i) => acc + i.quantity, 0)})</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Strip */}
          <div className="bg-[#121212] text-white px-6 py-2.5 text-xs font-mono">
            {remainingForFreeShipping > 0 ? (
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span>Faltam R$ {remainingForFreeShipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} para Frete Grátis</span>
                  <span>{Math.round((total / freeShippingThreshold) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C82020] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (total / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>PARABÉNS! VOCÊ GANHOU FRETE GRÁTIS EXPRESS</span>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-stone-400 mb-4">
                  <X className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900 uppercase">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs text-stone-600 mt-1 max-w-xs">
                  Escolha um dos nossos capacetes artesanais para sentir a verdadeira sensação da estrada.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-3 bg-[#121212] text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-[#C82020] transition-colors rounded-xs"
                >
                  EXPLORAR CAPACETES
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border border-stone-200 rounded-xs flex gap-4 shadow-xs"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-[#F5F2EB] p-1.5 rounded-xs shrink-0 flex items-center justify-center">
                    <img
                      src={item.product.primaryImage}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-base font-bold text-stone-900 uppercase leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-[#C82020] transition-colors p-1"
                          title="Remover produto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-stone-500 mt-0.5">
                        <span>Tam: <strong className="text-stone-800">{item.size}</strong></span>
                        <span>·</span>
                        <span className="truncate max-w-[100px]">{item.color}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-100">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-stone-200 bg-stone-50 rounded-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1.5 text-stone-600 hover:text-stone-950 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-mono text-xs font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1.5 text-stone-600 hover:text-stone-950 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-mono text-sm font-bold text-stone-900 tabular-nums">
                        R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotal, Coupon, and Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Cupom (ex: CUSTOM10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-200 text-xs text-stone-900 rounded-xs uppercase font-mono focus:outline-none focus:border-[#C82020]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#121212] hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-wider rounded-xs"
                >
                  Aplicar
                </button>
              </form>
              {couponError && <p className="text-[11px] text-[#C82020] font-mono">{couponError}</p>}
              {appliedDiscount > 0 && (
                <p className="text-[11px] text-emerald-600 font-mono font-semibold">
                  ✓ Desconto de {appliedDiscount * 100}% aplicado com sucesso!
                </p>
              )}

              {/* Subtotal calculations */}
              <div className="space-y-1.5 text-xs font-mono pt-2 border-t border-stone-100">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Desconto ({appliedDiscount * 100}%)</span>
                    <span className="tabular-nums">- R$ {discountAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>Frete</span>
                  <span className="text-emerald-600 font-bold uppercase">Grátis</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200 font-mono">
                  <span>Total</span>
                  <span className="tabular-nums">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="text-[10px] text-stone-500 text-right">
                  ou até 10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 px-6 bg-[#C82020] hover:bg-[#B31919] text-white font-display text-lg font-bold uppercase tracking-wider transition-colors rounded-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <span>FINALIZAR PEDIDO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center text-[10px] text-stone-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
                <span>Compra 100% Segura · Embalagem Reforçada de Madeira</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
