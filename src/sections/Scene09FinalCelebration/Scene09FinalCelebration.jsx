import React from 'react';
import confetti from 'canvas-confetti';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleStar, DoodleSparkle } from '../../components/common/HandcraftedGraphics';
import { useEasterEggs } from '../../components/effects/InteractiveEasterEggs';

export const Scene09FinalCelebration = ({ onReplay }) => {
  const content = birthdayConfig.finalMessage;
  const { triggerEasterEgg } = useEasterEggs();

  const handleFinalBurst = () => {
    soundEngine.playSparkle();

    // Lanzamiento festivo prolongado
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF6B6B', '#F8B195', '#E9B872', '#A2D2BF', '#A88BBA']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF6B6B', '#F8B195', '#E9B872', '#A2D2BF', '#A88BBA']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section className="w-full py-10 px-4 text-center select-none relative overflow-hidden">
      {/* Estrella secreta interactiva */}
      <div className="absolute top-8 right-12 animate-float">
        <DoodleStar
          size={38}
          color="#FF6B6B"
          onClick={() => triggerEasterEgg('egg-star', birthdayConfig.easterEggs[0].message)}
        />
      </div>

      <div className="max-w-xl mx-auto space-y-8 z-10 relative">
        <span className="hand-badge text-xs sm:text-sm">
          {content.badge}
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2A2525]">
          {content.title}
        </h2>

        {/* Cita reflexiva */}
        <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#2A2525]/10 shadow-lg relative hand-border">
          <p className="font-display italic text-xl sm:text-2xl text-[#FF6B6B] leading-snug">
            {content.quote}
          </p>
          <p className="font-body text-base sm:text-lg text-[#685E5E] mt-4 leading-relaxed">
            {content.closingNote}
          </p>
          <p className="font-hand text-3xl sm:text-4xl font-bold text-[#2A2525] mt-6">
            {content.signOff}
          </p>
        </div>

        {/* Botones de acción final */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleFinalBurst}
            className="btn-handcrafted text-lg py-3 px-8 shadow-lg hover:scale-105"
          >
            ¡Celebrar una vez más! 🎉
          </button>

          {onReplay && (
            <button
              onClick={onReplay}
              className="btn-handcrafted btn-secondary text-base py-2.5 px-6"
            >
              {content.replayButton}
            </button>
          )}
        </div>

        {/* Crédito discreto y cariñoso */}
        <div className="pt-12 text-xs font-hand text-[#8C8282] tracking-wider">
          {content.soundCredits}
        </div>
      </div>
    </section>
  );
};

export default Scene09FinalCelebration;
