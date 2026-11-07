import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Compass, Shield } from 'lucide-react';
import { BIKER_GANG_IMAGE } from '../data/products';

export const CinematicStrip: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Cinematic Banner Background */}
      <div className="relative h-[340px] sm:h-[440px] lg:h-[500px] w-full">
        <img
          src={BIKER_GANG_IMAGE}
          alt="Comboio de motociclistas custom e cafe racer em estrada sinuosa ao entardecer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />

        {/* Cinematic Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />

        {/* Content Container */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-12">
          
          {/* Top metadata strip */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase font-mono">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#C82020] animate-pulse"></span>
              <span className="text-stone-300">MANIFESTO · THE OPEN ROAD RUN</span>
            </div>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/15 hover:border-[#C82020] transition-colors text-stone-300 hover:text-white"
            >
              {isPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#C82020]" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlaying ? 'SOM DO MOTOR ATIVADO' : 'ÁUDIO AMBIENTE V-TWIN'}</span>
            </button>
          </div>

          {/* Center / Main Quote & Manifesto */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#C82020]"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-[#C82020] uppercase font-display">
                ESPÍRITO INDOMÁVEL
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              NÃO SEGUIMOS TENDÊNCIAS. SEGUIMOS A ESTRADA.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-300 font-body leading-relaxed max-w-xl">
              Nenhum capacete Atelier Moto sai da oficina antes de ser aprovado nos testes mais rigorosos de impacto, aerodinâmica e encaixe acústico. Feito por pilotos, para pilotos.
            </p>
          </div>

          {/* Bottom details strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/20 text-xs font-mono text-stone-300">
            <div>
              <div className="text-stone-500 uppercase tracking-wider">Origem</div>
              <div className="text-white font-semibold mt-0.5">Fabricação Artesanal</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase tracking-wider">Resistência</div>
              <div className="text-white font-semibold mt-0.5">Fibras Aeroespaciais</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase tracking-wider">Acabamento</div>
              <div className="text-white font-semibold mt-0.5">Couro Natural Curtido</div>
            </div>
            <div>
              <div className="text-stone-500 uppercase tracking-wider">Testes</div>
              <div className="text-white font-semibold mt-0.5">Impacto Multidirecional</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
