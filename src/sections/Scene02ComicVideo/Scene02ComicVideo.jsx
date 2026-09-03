import React, { useState, useEffect, useRef } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';

export const Scene02ComicVideo = ({ onComplete }) => {
  const [currentBeat, setCurrentBeat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [beatProgress, setBeatProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const beats = birthdayConfig.comic.beats;
  const current = beats[currentBeat];
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Reproducir efectos sonoros sincronizados con el beat
  useEffect(() => {
    if (!current) return;
    if (current.sound === 'bite') {
      soundEngine.playBite();
    } else if (current.sound === 'slice') {
      soundEngine.playSlice();
    } else if (current.sound === 'scream') {
      soundEngine.playLemonSizzle();
      soundEngine.playCartoonScream();
    } else if (current.sound === 'sparkle') {
      soundEngine.playSparkle();
    }
  }, [currentBeat]);

  // Manejo del temporizador con progreso suave
  useEffect(() => {
    if (!isPlaying || isFinished) return;

    const duration = current.timeMs || 4000;
    const intervalMs = 40;
    const step = (intervalMs / duration) * 100;

    setBeatProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setBeatProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current);
          return 100;
        }
        return prev + step;
      });
    }, intervalMs);

    timerRef.current = setTimeout(() => {
      if (currentBeat < beats.length - 1) {
        setCurrentBeat(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setIsFinished(true);
      }
    }, duration);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressIntervalRef.current);
    };
  }, [currentBeat, isPlaying, isFinished]);

  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const handlePrev = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressIntervalRef.current);
    soundEngine.playPop();
    setIsPlaying(false);
    if (currentBeat > 0) {
      setCurrentBeat(prev => prev - 1);
      setBeatProgress(0);
    }
  };

  const handleNext = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressIntervalRef.current);
    soundEngine.playPop();
    setIsPlaying(false);
    if (currentBeat < beats.length - 1) {
      setCurrentBeat(prev => prev + 1);
      setBeatProgress(0);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressIntervalRef.current);
    soundEngine.playPop();
    setCurrentBeat(0);
    setBeatProgress(0);
    setIsFinished(false);
    setIsPlaying(true);
  };

  // ==========================================
  // ESCENOGRAFÍA VECTORIAL CINEMATOGRÁFICA
  // ==========================================
  const renderVisual = (doodle) => {
    switch (doodle) {
      case 'thinking':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <circle cx="85" cy="115" r="38" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="75" cy="108" r="3.5" fill="#2A2525" />
            <circle cx="95" cy="108" r="3.5" fill="#2A2525" />
            <path d="M76 130 Q85 138 94 130" stroke="#2A2525" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <circle cx="125" cy="70" r="5" fill="#F8B195" />
            <circle cx="138" cy="55" r="8" fill="#F8B195" />
            <ellipse cx="152" cy="38" rx="28" ry="18" fill="#FFF" stroke="#2A2525" strokeWidth="2" />
            <text x="152" y="42" textAnchor="middle" fontSize="11" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡Kimberly! 🎂
            </text>
          </svg>
        );

      case 'apple':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto animate-float">
            <path
              d="M100 50 C80 20, 45 40, 50 85 C55 130, 85 165, 100 165 C115 165, 145 130, 150 85 C155 40, 120 20, 100 50 Z"
              fill="#FF6B6B"
              stroke="#2A2525"
              strokeWidth="3"
            />
            <path d="M68 65 C62 75, 62 95, 66 105" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M100 50 Q105 30 115 20" stroke="#684A2A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M108 30 Q130 20 135 35 Q115 42 108 30 Z" fill="#A2D2BF" stroke="#2A2525" strokeWidth="2" />
          </svg>
        );

      case 'bite_approach':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <g transform="translate(-15, 0)">
              <circle cx="70" cy="100" r="40" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
              <circle cx="62" cy="90" r="3.5" fill="#2A2525" />
              <circle cx="82" cy="90" r="3.5" fill="#2A2525" />
              <ellipse cx="90" cy="115" rx="14" ry="18" fill="#2A2525" />
            </g>
            <g transform="translate(45, 0)">
              <path
                d="M100 65 C85 45, 60 55, 65 90 C70 125, 90 150, 100 150 C110 150, 130 125, 135 90 C140 55, 115 45, 100 65 Z"
                fill="#FF6B6B"
                stroke="#2A2525"
                strokeWidth="2.5"
              />
            </g>
          </svg>
        );

      case 'brackets_alert':
        return (
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto flex flex-col items-center justify-center p-3 bg-[#FFF3F3] border-3 border-dashed border-[#FF6B6B] rounded-2xl animate-shake">
            <span className="text-4xl sm:text-5xl animate-bounce">🦷 🚫 🍏</span>
            <span className="font-display font-black text-sm text-[#FF6B6B] mt-2 text-center tracking-wide">
              ¡ALERTA ODONTOLÓGICA!
            </span>
            <span className="font-body text-xs text-[#685E5E] text-center mt-1">
              "Mordisco a manzana entera estrictamente prohibido"
            </span>
          </div>
        );

      case 'knife':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <g transform="rotate(-25 100 100)">
              <rect x="35" y="90" width="42" height="18" rx="3" fill="#684A2A" stroke="#2A2525" strokeWidth="2.5" />
              <path d="M78 88 L165 88 C178 88 182 108 165 114 L78 114 Z" fill="#D9E2EC" stroke="#2A2525" strokeWidth="2.5" />
              <line x1="88" y1="95" x2="158" y2="95" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'cut_finger':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto animate-shake">
            <rect x="80" y="65" width="40" height="90" rx="20" fill="#F8B195" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M88 72 Q98 68 108 72 L108 84 L88 84 Z" fill="#FFF" stroke="#2A2525" strokeWidth="1.5" />
            <line x1="86" y1="105" x2="114" y2="115" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="125" cy="120" r="6" fill="#FF6B6B" className="animate-ping" />
            <circle cx="125" cy="120" r="5" fill="#FF6B6B" />
            <text x="135" y="95" fontSize="20" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡AUUCH!
            </text>
          </svg>
        );

      case 'lemon_fall':
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto animate-float">
            <ellipse cx="100" cy="70" rx="42" ry="34" fill="#FEE08B" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="100" cy="70" r="28" fill="#FFF59D" stroke="#E9B872" strokeWidth="1.5" />
            <path d="M100 45 L100 95 M75 70 L125 70 M82 52 L118 88 M82 88 L118 52" stroke="#E9B872" strokeWidth="1.8" />
            <circle cx="98" cy="125" r="4" fill="#FEE08B" />
            <circle cx="102" cy="150" r="5" fill="#FEE08B" />
          </svg>
        );

      case 'lemon_scream':
        return (
          <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto flex flex-col items-center justify-center p-3 bg-[#FFE8E8] border-4 border-[#FF6B6B] rounded-full animate-shake">
            <span className="text-5xl sm:text-6xl animate-pulse">🔥🍋😱🔥</span>
            <span className="font-display font-black text-sm sm:text-base text-[#FF6B6B] mt-2">
              ¡ARDOR 1000%!
            </span>
          </div>
        );

      case 'blackout':
        return (
          <div className="w-full h-40 sm:h-48 flex items-center justify-center">
            <div className="w-3 h-3 bg-[#2A2525]/30 rounded-full animate-ping" />
          </div>
        );

      case 'punchline':
        return (
          <div className="w-full h-44 sm:h-52 flex flex-col items-center justify-center p-4">
            <span className="text-4xl animate-float mb-2">🍎✨</span>
            <p className="font-display italic text-2xl sm:text-3xl text-[#FF6B6B] font-bold text-center leading-snug drop-shadow-sm">
              «{current.text}»
            </p>
          </div>
        );

      case 'sigh':
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <circle cx="100" cy="100" r="44" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M78 88 L90 100 M90 88 L78 100" stroke="#2A2525" strokeWidth="2" strokeLinecap="round" />
            <path d="M110 88 L122 100 M122 88 L110 100" stroke="#2A2525" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="100" cy="122" rx="14" ry="6" fill="#F8B195" stroke="#2A2525" strokeWidth="1.8" />
            <ellipse cx="100" cy="58" rx="20" ry="10" fill="#A2D2BF" stroke="#2A2525" strokeWidth="1.8" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto py-8 px-4 select-none">
      {/* Contenedor del teatro del cortometraje */}
      <div className="w-full bg-[#FFFFFF] rounded-2xl border-2 border-[#2A2525]/15 shadow-2xl p-6 sm:p-8 relative hand-border-soft overflow-hidden">
        
        {/* Barra de progreso superior segmentada (11 beats) */}
        <div className="flex gap-1.5 mb-4">
          {beats.map((beat, idx) => {
            const isPast = idx < currentBeat;
            const isCurrent = idx === currentBeat;
            return (
              <div
                key={beat.id}
                className="flex-1 h-1.5 rounded-full bg-[#2A2525]/10 overflow-hidden relative"
              >
                <div
                  className="h-full bg-[#FF6B6B] transition-all duration-75"
                  style={{
                    width: isPast ? '100%' : isCurrent ? `${beatProgress}%` : '0%'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Badge del cortometraje */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-body text-xs font-bold text-[#FF6B6B] uppercase tracking-wider bg-[#FFF0F0] px-3 py-1 rounded-full border border-[#FF6B6B]/25">
            {birthdayConfig.comic.badge}
          </span>
          <span className="font-body text-xs text-[#8C8282] font-semibold">
            {currentBeat + 1} de {beats.length}
          </span>
        </div>

        {/* Escenario visual central */}
        <div className="min-h-[200px] flex items-center justify-center my-2">
          {renderVisual(current.doodle)}
        </div>

        {/* Bocadillo de pensamiento o remate (si no es blackout ni punchline) */}
        {current.speech && current.doodle !== 'punchline' && (
          <div className="bg-[#FAF7F2] p-3 rounded-xl border border-dashed border-[#E9B872] my-3 text-center">
            <p className="font-hand text-xl sm:text-2xl font-bold text-[#FF6B6B] leading-snug">
              {current.speech}
            </p>
          </div>
        )}

        {/* Narración descriptiva (si no es punchline ni blackout) */}
        {current.doodle !== 'punchline' && (
          <p className="font-body text-sm sm:text-base text-[#2A2525] text-center min-h-[48px] px-2 flex items-center justify-center leading-relaxed">
            {current.text}
          </p>
        )}

        {/* Controles de reproducción cinemática */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2A2525]/10">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={handleRestart}
              className="px-2.5 py-1.5 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] rounded-md hover:bg-[#FAF4EF] transition-colors"
              title="Reiniciar cortometraje"
            >
              ⏮ Reiniciar
            </button>
            <button
              onClick={handlePrev}
              disabled={currentBeat === 0}
              className="px-2.5 py-1.5 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] disabled:opacity-25 rounded-md hover:bg-[#FAF4EF] transition-colors"
            >
              ◀ Atrás
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-3 py-1.5 text-xs font-body font-bold text-[#FF6B6B] bg-[#FFF0F0] rounded-md border border-[#FF6B6B]/25 hover:bg-[#FFE8E8] transition-colors"
            >
              {isPlaying ? '⏸ Pausa' : '▶ Play'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentBeat >= beats.length - 1}
              className="px-2.5 py-1.5 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] disabled:opacity-25 rounded-md hover:bg-[#FAF4EF] transition-colors"
            >
              Adelantar ▶
            </button>
          </div>

          {/* Botón de continuación: Solo aparece al terminar o en el suspiro final */}
          {(currentBeat >= beats.length - 2 || isFinished) && (
            <button
              onClick={onComplete}
              className="btn-handcrafted text-sm sm:text-base py-2 px-5 animate-bounce shadow-md"
            >
              {birthdayConfig.comic.continueButton}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Scene02ComicVideo;
