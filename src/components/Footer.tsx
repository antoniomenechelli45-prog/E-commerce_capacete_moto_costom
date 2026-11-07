import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowRight, MapPin, Phone, Instagram, Youtube, Check } from 'lucide-react';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenSizeGuide }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0D0D0E] text-stone-300 border-t border-stone-800">
      
      {/* Top Value Proposition Grid */}
      <div className="border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C82020] mt-1.5 shrink-0"></span>
              <div>
                <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
                  GARANTIA VITALÍCIA
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Proteção perpétua no casco contra defeitos estruturais e laminação.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C82020] mt-1.5 shrink-0"></span>
              <div>
                <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
                  1ª TROCA 100% GRÁTIS
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Não acertou o tamanho? Trocamos sem nenhum custo adicional em até 30 dias.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C82020] mt-1.5 shrink-0"></span>
              <div>
                <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
                  HOMOLOGAÇÃO DUPLA
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Aprovados nos testes de impacto internacionais ECE 22.06 e DOT FMVSS 218.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C82020] mt-1.5 shrink-0"></span>
              <div>
                <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
                  ENVIO SEGURO EXPRESS
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Embalagem caixa de madeira reforçada com seguro total contra extravios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Heritage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Manifesto & Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-0.5 bg-[#C82020]"></span>
              <span className="font-display text-2xl font-bold tracking-[0.2em] text-white uppercase">
                ATELIER MOTO
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-body">
              Oficina especializada na construção e personalização de capacetes para os entusiastas da cultura custom, cruiser, chopper e café racer. Criados para quem compreende que uma motocicleta não é apenas um veículo, mas uma extensão da própria alma.
            </p>
            <div className="pt-2 text-xs font-mono text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C82020]" />
                <span>Oficina Principal: Vila Madalena, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C82020]" />
                <span>Atendimento Concierge: +55 (11) 98844-2211</span>
              </div>
            </div>
          </div>

          {/* Navigation & Collections (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              COLEÇÕES
            </h5>
            <ul className="space-y-2 text-xs font-mono text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('full-face')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Full-Face Vintage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('open-face')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Open-Face 3/4 Retro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('cafe-racer')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Café Racer Speed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('custom-cruiser')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Custom & Chopper
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              PILOTO & SUPORTE
            </h5>
            <ul className="space-y-2 text-xs font-mono text-stone-400">
              <li>
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Guia de Medidas
                </button>
              </li>
              <li><a href="#garantia" className="hover:text-white hover:underline transition-colors">Termos de Garantia</a></li>
              <li><a href="#cuidados" className="hover:text-white hover:underline transition-colors">Cuidados com o Couro</a></li>
              <li><a href="#envio" className="hover:text-white hover:underline transition-colors">Rastreamento</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Newsletter / Custom Club (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              CLUBE DOS CAVALHEIROS DO ASFALTO
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed font-body">
              Inscreva-se para receber convites para nossos passeios de fim de semana, avisos antecipados de tiragens numeradas e lançamentos exclusivos.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-[#1A1A1A] border border-stone-800 px-3 py-2 text-xs text-white placeholder-stone-500 rounded-xs font-mono focus:outline-none focus:border-[#C82020]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C82020] hover:bg-[#B31919] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
                >
                  Entrar
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Cadastrado com sucesso! Verifique sua caixa de entrada.</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Strip: Certifications, Payment & Copyright */}
        <div className="pt-12 mt-12 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-300 font-semibold">HOMOLOGAÇÕES OFICIAIS:</span>
            <span>ECE 22.06</span>
            <span>·</span>
            <span>DOT FMVSS No. 218</span>
            <span>·</span>
            <span>NBR 7471 INMETRO</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-stone-400">PAGAMENTO 100% SEGURO:</span>
            <span className="text-stone-300">PIX (-5%)</span>
            <span>·</span>
            <span className="text-stone-300">CARTÃO ATÉ 10X</span>
            <span>·</span>
            <span className="text-stone-300">BOLETO</span>
          </div>
        </div>

        <div className="mt-8 text-center text-[11px] font-mono text-stone-600">
          © {new Date().getFullYear()} ATELIER MOTO DO BRASIL LTDA. TODOS OS DIREITOS RESERVADOS. PROJETADO PARA A ESTRADA ABERTA.
        </div>

      </div>
    </footer>
  );
};
