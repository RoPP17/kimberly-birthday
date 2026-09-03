import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { useEasterEggs } from '../../components/effects/InteractiveEasterEggs';

export const Scene02ComicVideo = ({ onComplete }) => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(true);
  const panels = birthdayConfig.comic.panels;
  const { triggerEasterEgg } = useEasterEggs();

  // Reproducir efectos sonoros según la viñeta actual
  useEffect(() => {
    const p = panels[currentPanel];
    if (!p) return;

    if (p.doodle === 'bite_fail' || p.doodle === 'brackets_warning') {
      soundEngine.playBite();
    } else if (p.doodle === 'knife' || p.doodle === 'cut_finger') {
      soundEngine.playSlice();
    } else if (p.doodle === 'lemon_scream') {
      soundEngine.playLemonSizzle();
      soundEngine.playCartoonScream();
    } else if (p.doodle === 'sweet_shift') {
      soundEngine.playSparkle();
    }
  }, [currentPanel]);

  // Avance automático con temporizador dinámico
  useEffect(() => {
    if (!isPlayingAuto) return;
    if (currentPanel >= panels.length - 1) return;

    const durations = [3000, 2600, 2600, 2800, 2600, 2400, 2600, 3400, 2400, 4200];
    const delay = durations[currentPanel] || 2800;

    const timer = setTimeout(() => {
      setCurrentPanel(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentPanel, isPlayingAuto]);

  const handleNext = () => {
    setIsPlayingAuto(false);
    soundEngine.playPop();
    if (currentPanel < panels.length - 1) {
      setCurrentPanel(prev => prev + 1);
    } else {
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    setIsPlayingAuto(false);
    soundEngine.playPop();
    if (currentPanel > 0) {
      setCurrentPanel(prev => prev - 1);
    }
  };

  const panel = panels[currentPanel];

  // ==========================================
  // ILUSTRACIONES COMPACTAS Y DINÁMICAS
  // ==========================================
  const renderDoodle = (type) => {
    switch (type) {
      case 'thinking':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto">
            <circle cx="75" cy="90" r="32" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="67" cy="82" r="3.5" fill="#2A2525" />
            <circle cx="85" cy="82" r="3.5" fill="#2A2525" />
            <path d="M68 102 C74 110, 86 110, 92 102" stroke="#2A2525" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="108" cy="52" r="5" fill="#F8B195" />
            <circle cx="120" cy="40" r="8" fill="#F8B195" />
            <ellipse cx="132" cy="28" rx="22" ry="14" fill="#FFF" stroke="#2A2525" strokeWidth="2" />
            <text x="132" y="32" textAnchor="middle" fontSize="10" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡KIM! 🎂
            </text>
          </svg>
        );

      case 'apple':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-float">
            <path
              d="M80 40 C65 15, 35 30, 40 70 C44 105, 68 135, 80 135 C92 135, 116 105, 120 70 C125 30, 95 15, 80 40 Z"
              fill="#FF6B6B"
              stroke="#2A2525"
              strokeWidth="2.8"
            />
            <path d="M54 52 C50 60, 50 78, 53 86" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M80 40 Q84 24 92 16" stroke="#684A2A" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M86 24 Q104 16 108 28 Q92 34 86 24 Z" fill="#A2D2BF" stroke="#2A2525" strokeWidth="1.5" />
          </svg>
        );

      case 'bite_fail':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-shake">
            <circle cx="60" cy="80" r="35" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <ellipse cx="52" cy="68" rx="5" ry="7" fill="#FFF" stroke="#2A2525" strokeWidth="2" />
            <circle cx="52" cy="68" r="2.5" fill="#2A2525" />
            <ellipse cx="70" cy="68" rx="5" ry="7" fill="#FFF" stroke="#2A2525" strokeWidth="2" />
            <circle cx="70" cy="68" r="2.5" fill="#2A2525" />
            <path d="M48 92 Q60 112 80 96" stroke="#2A2525" strokeWidth="2.5" fill="#E6D3C4" />
            <rect x="54" y="94" width="4" height="4" fill="#A0A0A0" stroke="#2A2525" strokeWidth="0.8" />
            <rect x="61" y="96" width="4" height="4" fill="#A0A0A0" stroke="#2A2525" strokeWidth="0.8" />
            <rect x="68" y="94" width="4" height="4" fill="#A0A0A0" stroke="#2A2525" strokeWidth="0.8" />
            <line x1="51" y1="96" x2="74" y2="96" stroke="#555" strokeWidth="1.2" />
            <path d="M100 80 L116 68 M100 88 L120 88 M100 96 L116 108" stroke="#E9B872" strokeWidth="2.5" strokeLinecap="round" />
            <text x="124" y="92" fontSize="11" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡CLINK!
            </text>
          </svg>
        );

      case 'brackets_warning':
        return (
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto flex flex-col items-center justify-center p-2 bg-[#FFF3F3] border-2 border-dashed border-[#FF6B6B] rounded-xl cursor-pointer hover:scale-105 transition-transform"
            onClick={() => triggerEasterEgg('egg-bracket', birthdayConfig.easterEggs[1].message)}
            title="Toca para advertencia odontológica"
          >
            <span className="text-2xl sm:text-3xl animate-bounce">🦷 🚫 🍏</span>
            <span className="font-hand font-bold text-xs sm:text-sm text-[#FF6B6B] mt-1 text-center leading-tight">
              ALERTA BRACKETS
            </span>
          </div>
        );

      case 'knife':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto">
            <g transform="rotate(-30 80 80)">
              <rect x="25" y="72" width="36" height="14" rx="3" fill="#684A2A" stroke="#2A2525" strokeWidth="2" />
              <path d="M60 70 L130 70 C142 70 146 88 130 92 L60 92 Z" fill="#D9E2EC" stroke="#2A2525" strokeWidth="2.5" />
              <line x1="70" y1="76" x2="125" y2="76" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <path d="M96 32 L112 24 M120 48 L136 44" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'cut_finger':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-shake">
            <rect x="60" y="55" width="30" height="70" rx="15" fill="#F8B195" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M67 60 Q75 56 83 60 L83 70 L67 70 Z" fill="#FFF" stroke="#2A2525" strokeWidth="1.2" />
            <line x1="64" y1="84" x2="86" y2="92" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="95" cy="95" r="4.5" fill="#FF6B6B" className="animate-ping" />
            <circle cx="95" cy="95" r="4" fill="#FF6B6B" />
            <text x="105" y="80" fontSize="16" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡AUCH!
            </text>
          </svg>
        );

      case 'lemon_fall':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-float">
            <ellipse cx="80" cy="55" rx="34" ry="27" fill="#FEE08B" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="80" cy="55" r="22" fill="#FFF59D" stroke="#E9B872" strokeWidth="1.2" />
            <path d="M80 35 L80 75 M60 55 L100 55 M66 41 L94 69 M66 69 L94 41" stroke="#E9B872" strokeWidth="1.5" />
            <circle cx="78" cy="98" r="3.5" fill="#FEE08B" />
            <circle cx="82" cy="118" r="4" fill="#FEE08B" />
          </svg>
        );

      case 'lemon_scream':
        return (
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto flex flex-col items-center justify-center p-2 bg-[#FFE8E8] border-3 border-[#FF6B6B] rounded-full animate-shake cursor-pointer"
            onClick={() => triggerEasterEgg('egg-lemon', birthdayConfig.easterEggs[2].message)}
            title="Toca el limón"
          >
            <span className="text-4xl animate-pulse">🔥🍋😱</span>
            <span className="font-display font-black text-xs sm:text-sm text-[#FF6B6B] mt-1">
              ¡ARDOR 1000%!
            </span>
          </div>
        );

      case 'exhausted':
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto">
            <circle cx="80" cy="80" r="35" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M62 70 L72 80 M72 70 L62 80" stroke="#2A2525" strokeWidth="2" strokeLinecap="round" />
            <path d="M88 70 L98 80 M98 70 L88 80" stroke="#2A2525" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="80" cy="98" rx="11" ry="5" fill="#F8B195" stroke="#2A2525" strokeWidth="1.5" />
            <ellipse cx="80" cy="46" rx="16" ry="8" fill="#A2D2BF" stroke="#2A2525" strokeWidth="1.5" />
          </svg>
        );

      case 'sweet_shift':
      default:
        return (
          <svg viewBox="0 0 160 160" className="w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-float">
            <ellipse cx="80" cy="95" rx="52" ry="24" fill="#FFFFFF" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M60 84 Q72 72 84 84 Z" fill="#FF6B6B" stroke="#2A2525" strokeWidth="1.5" />
            <path d="M80 86 Q92 76 104 88 Z" fill="#FF6B6B" stroke="#2A2525" strokeWidth="1.5" />
            <text x="80" y="50" textAnchor="middle" fontSize="24">
              ✨🍎✨
            </text>
          </svg>
        );
    }
  };

  return (
    <section className="w-full py-6 px-3 flex flex-col items-center justify-center select-none">
      <div className="w-full max-w-md bg-[#FFFFFF] rounded-2xl border-2 border-[#2A2525]/15 shadow-xl p-5 relative hand-border">
        {/* Barra de progreso interactiva estilo Stories / Reels */}
        <div className="flex gap-1.5 mb-3">
          {panels.map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setIsPlayingAuto(false);
                soundEngine.playPop();
                setCurrentPanel(idx);
              }}
              className="flex-1 h-1.5 rounded-full cursor-pointer transition-all duration-300"
              style={{
                backgroundColor:
                  idx === currentPanel
                    ? '#FF6B6B'
                    : idx < currentPanel
                    ? '#E9B872'
                    : 'rgba(42, 37, 37, 0.12)'
              }}
              title={`Ir a escena ${idx + 1}`}
            />
          ))}
        </div>

        {/* Encabezado compacto */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-hand font-bold text-xs text-[#FF6B6B] bg-[#FFF0F0] px-2.5 py-0.5 rounded-full border border-[#FF6B6B]/30">
            {birthdayConfig.comic.badge}
          </span>
          <span className="font-hand text-xs text-[#8C8282]">
            {currentPanel + 1} de {panels.length}
          </span>
        </div>

        {/* Zona táctil para cambiar panel (Izquierda = Atrás, Derecha = Siguiente) */}
        <div className="relative my-2 py-1 flex items-center justify-center">
          {/* Zona tap izquierda */}
          <div
            onClick={handlePrev}
            className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
            title="Toca para retroceder"
          />
          {/* Zona tap derecha */}
          <div
            onClick={handleNext}
            className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
            title="Toca para avanzar"
          />

          {renderDoodle(panel.doodle)}
        </div>

        {/* Bocadillo de diálogo */}
        <div className="bg-[#FAF7F2] p-2.5 rounded-xl border border-dashed border-[#E9B872] my-2 text-center">
          <p className="font-hand text-lg sm:text-xl font-bold text-[#FF6B6B] leading-snug">
            {panel.thought}
          </p>
        </div>

        {/* Narración descriptiva concisa */}
        <p className="font-body text-xs sm:text-sm text-[#2A2525] text-center min-h-[40px] px-2 flex items-center justify-center leading-tight">
          {panel.caption}
        </p>

        {/* Controles de navegación */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#2A2525]/10 gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPanel === 0}
            className="btn-handcrafted btn-secondary text-xs sm:text-sm py-1.5 px-3 disabled:opacity-25"
          >
            ← Atrás
          </button>

          <button
            onClick={() => setIsPlayingAuto(!isPlayingAuto)}
            className="font-hand text-xs text-[#685E5E] hover:text-[#FF6B6B]"
          >
            {isPlayingAuto ? '⏸ Pausar' : '▶ Auto'}
          </button>

          {currentPanel < panels.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn-handcrafted text-xs sm:text-sm py-1.5 px-3"
            >
              Siguiente →
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="btn-handcrafted text-xs sm:text-sm py-1.5 px-3 animate-bounce"
            >
              {birthdayConfig.comic.nextButton}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Scene02ComicVideo;
