import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, QrCode, CreditCard, FileText, ArrowRight, Copy, Check } from 'lucide-react';
import { CartItem, OrderConfirmation } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form states
  const [name, setName] = useState('Rodrigo Alcantara');
  const [email, setEmail] = useState('rodrigo.custom@gmail.com');
  const [phone, setPhone] = useState('(11) 98844-2211');
  const [cpf, setCpf] = useState('321.654.987-00');
  const [cep, setCep] = useState('01310-100');
  const [address, setAddress] = useState('Avenida Paulista, 1578 - Apto 82');
  const [city, setCity] = useState('São Paulo');
  const [state, setState] = useState('SP');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [installments, setInstallments] = useState('1');

  // Confirmation result
  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmation | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const pixDiscount = paymentMethod === 'pix' ? subtotal * 0.05 : 0;
  const total = subtotal - pixDiscount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: OrderConfirmation = {
      orderNumber: `ATM-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: name,
      email: email,
      items: [...items],
      total: total,
      discount: pixDiscount,
      paymentMethod: paymentMethod === 'pix' ? 'PIX Instantâneo' : paymentMethod === 'card' ? 'Cartão de Crédito' : 'Boleto',
      shippingAddress: `${address}, ${city} - ${state}, CEP ${cep}`,
      estimatedDelivery: '3 a 5 dias úteis via Sedex Especial',
    };

    setConfirmedOrder(newOrder);
    setStep('success');
    onOrderSuccess(newOrder);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136d54d78e9-0da4-470b-990f-38a6c43ef9e452040000530398654052365.505802BR5912ATELIER MOTO6009SAO PAULO62070503***6304E8A2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF8F5] text-stone-900 w-full max-w-4xl border border-stone-200 shadow-2xl rounded-xs overflow-hidden my-8">
        
        {/* Top Header */}
        <div className="bg-[#121212] text-white p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-0.5 bg-[#C82020]"></span>
            <span className="font-display text-xl font-bold uppercase tracking-wider text-white">
              {step === 'form' ? 'FINALIZAÇÃO DO PEDIDO · ATELIER MOTO' : 'PEDIDO CONFIRMADO COM SUCESSO'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Customer & Delivery Information (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Personal Data */}
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                  <span className="text-[#C82020]">01.</span> DADOS DO MOTOCICLISTA
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="block text-stone-600 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">CPF (Nota Fiscal)</label>
                    <input
                      type="text"
                      required
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">E-mail para Rastreio</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">WhatsApp / Telefone</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                  <span className="text-[#C82020]">02.</span> ENDEREÇO DE ENTREGA
                </h3>
                <div className="space-y-3 text-xs font-mono">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-stone-600 mb-1">CEP</label>
                      <input
                        type="text"
                        required
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-stone-600 mb-1">Cidade / UF</label>
                      <input
                        type="text"
                        required
                        value={`${city} - ${state}`}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Logradouro, Número e Complemento</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-2.5 rounded-xs text-stone-900 focus:border-[#C82020] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                  <span className="text-[#C82020]">03.</span> MÉTODO DE PAGAMENTO
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 border rounded-xs flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-mono ${
                      paymentMethod === 'pix'
                        ? 'border-[#C82020] bg-white ring-2 ring-[#C82020]/20 text-[#C82020] font-bold'
                        : 'border-stone-300 bg-white/70 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>PIX (-5% OFF)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 border rounded-xs flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-mono ${
                      paymentMethod === 'card'
                        ? 'border-[#C82020] bg-white ring-2 ring-[#C82020]/20 text-[#C82020] font-bold'
                        : 'border-stone-300 bg-white/70 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>CARTÃO DE CRÉDITO</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`p-3 border rounded-xs flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-mono ${
                      paymentMethod === 'boleto'
                        ? 'border-[#C82020] bg-white ring-2 ring-[#C82020]/20 text-[#C82020] font-bold'
                        : 'border-stone-300 bg-white/70 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    <span>BOLETO BANCÁRIO</span>
                  </button>
                </div>

                {paymentMethod === 'pix' && (
                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xs text-xs space-y-2">
                    <div className="flex items-center justify-between text-emerald-800 font-bold font-mono">
                      <span>✓ DESCONTO EXCLUSIVO DE 5% NO PIX</span>
                      <span className="text-sm">Economia de R$ {pixDiscount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Aprovação imediata e envio prioritário para a oficina de inspeção final.
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="mt-4 p-4 bg-white border border-stone-200 rounded-xs text-xs font-mono space-y-3">
                    <div>
                      <label className="block text-stone-600 mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 p-2 rounded-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-stone-600 mb-1">Validade</label>
                        <input type="text" placeholder="MM/AA" defaultValue="12/29" className="w-full bg-stone-50 border border-stone-300 p-2 rounded-xs" />
                      </div>
                      <div>
                        <label className="block text-stone-600 mb-1">CVV</label>
                        <input type="text" placeholder="123" defaultValue="892" className="w-full bg-stone-50 border border-stone-300 p-2 rounded-xs" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-stone-600 mb-1">Parcelamento</label>
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 p-2 rounded-xs"
                      >
                        <option value="1">1x de R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (à vista)</option>
                        <option value="3">3x de R$ {(total / 3).toFixed(2).replace('.', ',')} sem juros</option>
                        <option value="6">6x de R$ {(total / 6).toFixed(2).replace('.', ',')} sem juros</option>
                        <option value="10">10x de R$ {(total / 10).toFixed(2).replace('.', ',')} sem juros</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Order Summary (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 border border-stone-200 rounded-xs flex flex-col justify-between h-fit space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-3">
                  RESUMO DA ENCOMENDA
                </h3>

                <div className="divide-y divide-stone-100 max-h-56 overflow-y-auto my-3">
                  {items.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.primaryImage}
                          alt={item.product.name}
                          className="w-10 h-10 object-contain bg-stone-50 p-1 rounded-xs"
                        />
                        <div>
                          <div className="font-bold text-stone-900">{item.product.name}</div>
                          <div className="text-[10px] text-stone-500">Tam: {item.size} · Qtd: {item.quantity}</div>
                        </div>
                      </div>
                      <div className="font-bold text-stone-900">
                        R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs font-mono pt-4 border-t border-stone-200">
                  <div className="flex justify-between text-stone-600">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  {pixDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Desconto PIX (-5%)</span>
                      <span>- R$ {pixDiscount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-600">
                    <span>Frete Sedex com Seguro</span>
                    <span className="text-emerald-600 font-bold">GRÁTIS</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-stone-900 pt-3 border-t border-stone-200">
                    <span>Total a Pagar</span>
                    <span className="font-mono text-lg text-[#C82020]">
                      R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#C82020] hover:bg-[#B31919] text-white font-display text-lg font-bold uppercase tracking-wider transition-colors rounded-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>CONFIRMAR COMPRA</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-[10px] text-stone-500 text-center font-mono">
                  Garantia vitalícia no casco · Primeira troca grátis em 30 dias
                </p>
              </div>

            </div>

          </form>
        ) : (
          /* Order Confirmation Success State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C82020] uppercase">
                PEDIDO CONFIRMADO COM SUCESSO
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase text-stone-900">
                BEM-VINDO AO CLUBE.
              </h2>
              <p className="text-sm text-stone-600 font-body">
                Obrigado, <strong className="text-stone-900">{confirmedOrder?.customerName}</strong>. Seu capacete artesanal já está em fila de preparação na oficina Atelier Moto.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="max-w-lg mx-auto bg-white p-6 border border-stone-200 rounded-xs text-left text-xs font-mono space-y-3 shadow-md">
              <div className="flex justify-between pb-3 border-b border-stone-200">
                <span className="text-stone-500">Número do Pedido:</span>
                <span className="font-bold text-stone-900">{confirmedOrder?.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Forma de Pagamento:</span>
                <span className="font-semibold text-stone-900">{confirmedOrder?.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Valor Total:</span>
                <span className="font-bold text-emerald-600 text-sm">
                  R$ {confirmedOrder?.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Endereço de Envio:</span>
                <span className="text-stone-900 text-right max-w-xs">{confirmedOrder?.shippingAddress}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-100">
                <span className="text-stone-500">Previsão de Entrega:</span>
                <span className="font-bold text-stone-900">{confirmedOrder?.estimatedDelivery}</span>
              </div>

              {/* PIX copy code if PIX selected */}
              {paymentMethod === 'pix' && (
                <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-xs space-y-2">
                  <div className="text-[11px] font-bold text-stone-700">Chave Copia e Cola PIX:</div>
                  <div className="flex gap-2">
                    <input
                      readOnly
                      value="00020126580014br.gov.bcb.pix0136d54d78e9-0da4-470b-990f-38a6c43ef9e4520400005303986"
                      className="flex-1 bg-white border border-stone-200 px-2 py-1 text-[10px] text-stone-500 rounded-xs font-mono"
                    />
                    <button
                      onClick={copyPixCode}
                      className="px-3 py-1 bg-[#121212] text-white hover:bg-[#C82020] text-[10px] rounded-xs font-mono uppercase transition-colors flex items-center gap-1"
                    >
                      {copiedPix ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#121212] hover:bg-[#C82020] text-white font-display text-base font-bold uppercase tracking-wider transition-colors rounded-xs"
            >
              CONTINUAR NAVEGANDO NA LOJA
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
