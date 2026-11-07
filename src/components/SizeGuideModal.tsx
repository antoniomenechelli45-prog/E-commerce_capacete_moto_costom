import React from 'react';
import { X, Ruler, CheckCircle2, ShieldAlert } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeTable = [
    { size: 'XS', cm: '53 - 54 cm', inches: '20.8" - 21.2"', fit: 'Perfil Slim / Cabeça Pequena' },
    { size: 'S', cm: '55 - 56 cm', inches: '21.6" - 22.0"', fit: 'Ajuste Firme Padrão' },
    { size: 'M', cm: '57 - 58 cm', inches: '22.4" - 22.8"', fit: 'Tamanho Mais Popular no Brasil' },
    { size: 'L', cm: '59 - 60 cm', inches: '23.2" - 23.6"', fit: 'Estrutura Média-Grande' },
    { size: 'XL', cm: '61 - 62 cm', inches: '24.0" - 24.4"', fit: 'Estrutura Ampla' },
    { size: 'XXL', cm: '63 - 64 cm', inches: '24.8" - 25.2"', fit: 'Casco Extra Amplo' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white text-stone-900 w-full max-w-2xl border border-stone-200 shadow-2xl rounded-xs overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#121212] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#C82020]" />
            <h3 className="font-display text-xl font-bold uppercase tracking-wider">
              GUIA DE MEDIDAS & TABELA DE TAMANHOS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* How to Measure Instructions */}
          <div className="bg-[#FAF8F5] p-5 border border-stone-200 rounded-xs space-y-3">
            <h4 className="font-display text-lg font-bold uppercase tracking-tight text-stone-900">
              COMO MEDIR SUA CABEÇA CORRETAMENTE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-stone-600">
              <div className="space-y-1">
                <span className="font-bold text-[#C82020] text-sm">PASSO 01</span>
                <p>Use uma fita métrica maleável ou um barbante que possa ser medido em seguida com uma régua.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#C82020] text-sm">PASSO 02</span>
                <p>Passe a fita horizontalmente em torno da cabeça, aproximadamente 2 cm acima das sobrancelhas e orelhas.</p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-[#C82020] text-sm">PASSO 03</span>
                <p>Mantenha a fita justa, mas sem apertar em excesso. Se ficar entre dois números, escolha o tamanho menor.</p>
              </div>
            </div>
          </div>

          {/* Size Chart Table */}
          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-tight text-stone-900 mb-2">
              TABELA DE CORRESPONDÊNCIA ATELIER MOTO
            </h4>
            <div className="overflow-x-auto border border-stone-200 rounded-xs">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#121212] text-white">
                  <tr>
                    <th className="p-3">Tamanho</th>
                    <th className="p-3">Circunferência (cm)</th>
                    <th className="p-3">Polegadas</th>
                    <th className="p-3">Indicação de Caimento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {sizeTable.map((row) => (
                    <tr key={row.size} className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900 bg-stone-50">{row.size}</td>
                      <td className="p-3 font-semibold text-[#C82020]">{row.cm}</td>
                      <td className="p-3 text-stone-500">{row.inches}</td>
                      <td className="p-3 text-stone-600">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fit Guarantee Policy */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs flex items-start gap-3 text-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-900 font-semibold block">
                GARANTIA DE AJUSTE PERFEITO
              </strong>
              <p className="text-emerald-800 text-[11px] mt-0.5">
                O capacete deve ficar bem justo no início; a forração interna em couro e espuma com memória se molda à anatomia do seu crânio nos primeiros 5 a 10 dias de uso. Caso não sirva perfeitamente, a primeira troca de tamanho é totalmente gratuita.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#121212] hover:bg-[#C82020] text-white font-display text-sm font-bold uppercase tracking-wider transition-colors rounded-xs"
            >
              ENTENDI, VOLTAR AO CAPACETE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
