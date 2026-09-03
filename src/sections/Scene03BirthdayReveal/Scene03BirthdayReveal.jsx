import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleStar, DoodleSparkle, DoodleArrow } from '../../components/common/HandcraftedGraphics';

export const Scene03BirthdayReveal = ({ onContinue }) => {
  useEffect(() => {
    soundEngine.playSparkle();

    // Lanzar partículas artesanales personalizadas (estrellas y papeles en paleta cálida)
    const count = 200;
    const defaults = {
      origin: { y: 0.6 },
      colors: ['#FF6B6B', '#F8B195', '#E9B872', '#A88BBA', '#A2D2BF']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center select-none overflow-hidden">
      {/* Elementos flotantes de fiesta artesanal */}
      <div className="absolute top-10 left-6 animate-float">
        <DoodleStar size={36} color="#FF6B6B" />
      </div>
      <div className="absolute top-16 right-8 animate-float" style={{ animationDelay: '1s' }}>
        <DoodleStar size={32} color="#E9B872" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <DoodleSparkle size={30} color="#A88BBA" />
      </div>

      <div className="max-w-xl w-full z-10 flex flex-col items-center gap-5">
        {/* Super título */}
        <span className="hand-badge text-sm sm:text-base tracking-widest px-4 py-1.5 shadow-sm">
          {birthdayConfig.reveal.superTitle}
        </span>

        {/* Gran Título */}
        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#2A2525] tracking-tight leading-none mt-2">
          {birthdayConfig.reveal.mainTitle}
        </h1>

        {/* Nombre de Kimberly destacado */}
        <div className="relative inline-block mt-2">
          <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-[#FF6B6B] tracking-wide drop-shadow-sm">
            {birthdayConfig.reveal.nameHighlight}
          </span>
          {/* Subrayado orgánico hecho a mano */}
          <svg className="w-full h-5 mt-1" viewBox="0 0 200 12" fill="none">
            <path
              d="M3 8 C50 2, 150 2, 197 8 M20 10 C80 5, 140 5, 180 10"
              stroke="#E9B872"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtítulo */}
        <p className="font-body text-lg sm:text-xl text-[#685E5E] max-w-md mt-4">
          {birthdayConfig.reveal.subtitle}
        </p>

        {/* Flecha y llamada a la acción */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <DoodleArrow className="animate-bounce" />
          <button
            onClick={() => {
              soundEngine.playPop();
              if (onContinue) onContinue();
            }}
            className="btn-handcrafted text-xl px-8 py-3.5 shadow-md"
          >
            Explorar lo que sigue 👇
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scene03BirthdayReveal;
