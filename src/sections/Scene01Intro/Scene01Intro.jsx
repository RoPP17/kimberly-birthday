import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleSparkle } from '../../components/common/HandcraftedGraphics';

export const Scene01Intro = ({ onStart }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Progresión de ritmo intencional para crear intriga
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 2400);
    const t3 = setTimeout(() => setStep(3), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleOpen = () => {
    soundEngine.playPop();
    soundEngine.startBgm();
    if (onStart) onStart();
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen min-h-[100dvh] px-6 text-center select-none"
      style={{
        background: 'radial-gradient(circle at 50% 40%, #FFFDF9 0%, #FAF7F2 100%)'
      }}
    >
      {/* Elementos flotantes sutiles */}
      <div className="absolute top-12 left-8 opacity-40 animate-float">
        <DoodleSparkle size={32} color="#F8B195" />
      </div>
      <div className="absolute bottom-16 right-10 opacity-40 animate-float" style={{ animationDelay: '1.5s' }}>
        <DoodleSparkle size={26} color="#A88BBA" />
      </div>

      <div className="max-w-md w-full flex flex-col items-center gap-6 z-10">
        {/* Paso 1: Saludo inicial */}
        <h1
          className={`font-display text-4xl sm:text-5xl font-bold text-[#2A2525] tracking-tight transition-all duration-700 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {birthdayConfig.intro.greeting}
        </h1>

        {/* Paso 2: Pausa dramática */}
        <p
          className={`font-body text-base sm:text-lg text-[#685E5E] transition-all duration-700 delay-100 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {birthdayConfig.intro.pauseText}
        </p>

        {/* Paso 3: Revelación del gancho */}
        <p
          className={`font-display italic text-xl sm:text-2xl text-[#FF6B6B] font-semibold max-w-sm transition-all duration-700 ${
            step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {birthdayConfig.intro.hookText}
        </p>

        {/* Botón de inicio */}
        <div
          className={`mt-4 flex flex-col items-center gap-2 transition-all duration-700 ${
            step >= 3 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
          }`}
        >
          <button
            onClick={handleOpen}
            className="btn-handcrafted text-base sm:text-lg px-8 py-3.5 shadow-lg active:scale-95"
          >
            {birthdayConfig.intro.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scene01Intro;
