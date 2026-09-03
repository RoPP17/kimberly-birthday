import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleSparkle } from '../../components/common/HandcraftedGraphics';

export const Scene07SurpriseCupcake = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isBlown, setIsBlown] = useState(false);
  const surprise = birthdayConfig.surprise;

  const handleReveal = () => {
    soundEngine.playPop();
    setIsRevealed(true);
  };

  const handleBlowCandle = () => {
    if (isBlown) return;
    soundEngine.playBlowCandle();
    setIsBlown(true);

    setTimeout(() => {
      soundEngine.playSparkle();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FF6B6B', '#F8B195', '#E9B872', '#A2D2BF']
      });
    }, 300);
  };

  return (
    <section className="w-full py-8 px-4 flex justify-center select-none">
      <div className="max-w-lg w-full bg-[#FFFFFF] p-8 sm:p-10 rounded-2xl border-2 border-dashed border-[#E9B872] text-center shadow-lg relative hand-border">
        {!isRevealed ? (
          <div className="py-4 space-y-4">
            <span className="text-4xl animate-bounce inline-block">🎁</span>
            <p className="font-display text-xl sm:text-2xl font-bold text-[#2A2525]">
              {surprise.promptQuestion}
            </p>
            <button
              onClick={handleReveal}
              className="btn-handcrafted text-lg py-2.5 px-6"
            >
              {surprise.buttonText}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2A2525]">
              {isBlown ? surprise.wishGrantedTitle : surprise.revealedTitle}
            </h3>

            {/* Ilustración interactiva de Cupcake con vela */}
            <div
              onClick={handleBlowCandle}
              className="w-44 h-44 sm:w-52 sm:h-52 mx-auto relative cursor-pointer group flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              title={isBlown ? '¡Vela apagada!' : 'Toca la llama para apagar la vela'}
            >
              <svg viewBox="0 0 160 160" className="w-full h-full">
                {/* Plato */}
                <ellipse cx="80" cy="140" rx="60" ry="12" fill="#E8DFD8" />

                {/* Base del cupcake */}
                <path d="M45 95 L55 135 L105 135 L115 95 Z" fill="#D98A6C" stroke="#2A2525" strokeWidth="2.5" />
                <line x1="60" y1="95" x2="65" y2="135" stroke="#BF7254" strokeWidth="1.5" />
                <line x1="80" y1="95" x2="80" y2="135" stroke="#BF7254" strokeWidth="1.5" />
                <line x1="100" y1="95" x2="95" y2="135" stroke="#BF7254" strokeWidth="1.5" />

                {/* Frosting / Crema */}
                <path
                  d="M40 95 C35 75, 60 70, 70 75 C75 60, 95 60, 100 75 C115 70, 125 80, 120 95 Z"
                  fill="#FFF4E6"
                  stroke="#2A2525"
                  strokeWidth="2.5"
                />
                {/* Chispitas de colores */}
                <circle cx="65" cy="85" r="2.5" fill="#FF6B6B" />
                <circle cx="80" cy="78" r="2.5" fill="#A88BBA" />
                <circle cx="95" cy="85" r="2.5" fill="#A2D2BF" />

                {/* Vela */}
                <rect x="76" y="45" width="8" height="30" fill="#E9B872" stroke="#2A2525" strokeWidth="1.5" />
                <line x1="80" y1="38" x2="80" y2="45" stroke="#2A2525" strokeWidth="2" />

                {/* Llama o Humo */}
                {!isBlown ? (
                  <g className="flame-anim">
                    <ellipse cx="80" cy="28" rx="7" ry="11" fill="#FF8E8E" />
                    <ellipse cx="80" cy="30" rx="4" ry="7" fill="#FFF59D" />
                  </g>
                ) : (
                  /* Humo suave subiendo */
                  <g className="opacity-75">
                    <path
                      d="M80 35 C75 25, 85 20, 78 12 M80 32 C85 24, 76 18, 83 8"
                      stroke="#8C8282"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                )}
              </svg>
            </div>

            {/* Texto dinámico según el estado de la vela */}
            {!isBlown ? (
              <p className="font-hand text-xl text-[#FF6B6B] font-bold animate-pulse">
                {surprise.instruction}
              </p>
            ) : (
              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#FF6B6B]/20">
                <p className="font-body text-base text-[#2A2525] leading-relaxed">
                  {surprise.wishGrantedText}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Scene07SurpriseCupcake;
