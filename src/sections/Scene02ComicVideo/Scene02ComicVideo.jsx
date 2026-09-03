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

  // Reproducir efectos sonoros sincronizados con la acción
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

  // Manejo de avance suave
  useEffect(() => {
    if (!isPlaying || isFinished) return;

    const duration = current.timeMs || 3500;
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
  // DIBUJOS 100% VECTORIALES ARTESANALES (CERO EMOJIS)
  // ==========================================
  const renderVisual = (doodle) => {
    switch (doodle) {
      case 'thinking':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            <circle cx="85" cy="115" r="36" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="76" cy="108" r="3.5" fill="#2A2525" />
            <circle cx="94" cy="108" r="3.5" fill="#2A2525" />
            <path d="M78 128 Q85 132 92 128" stroke="#2A2525" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <ellipse cx="68" cy="116" rx="5" ry="3" fill="#F8B195" opacity="0.6" />
            <ellipse cx="102" cy="116" rx="5" ry="3" fill="#F8B195" opacity="0.6" />
            <circle cx="120" cy="72" r="5" fill="#E9B872" />
            <circle cx="132" cy="58" r="7" fill="#E9B872" />
            <rect x="110" y="24" width="76" height="28" rx="14" fill="#FFFFFF" stroke="#2A2525" strokeWidth="2" />
            <text x="148" y="42" textAnchor="middle" fontSize="11" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡Kimberly! ✨
            </text>
          </svg>
        );

      case 'apple':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto animate-float">
            <path
              d="M100 52 C80 22, 45 42, 50 88 C55 132, 85 165, 100 165 C115 165, 145 132, 150 88 C155 42, 120 22, 100 52 Z"
              fill="#FF6B6B"
              stroke="#2A2525"
              strokeWidth="2.8"
            />
            <path d="M68 68 C62 78, 62 98, 66 108" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M100 52 Q105 32 114 22" stroke="#684A2A" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M106 32 Q128 22 134 36 Q114 44 106 32 Z" fill="#A2D2BF" stroke="#2A2525" strokeWidth="2" />
          </svg>
        );

      case 'bite_approach':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            <g transform="translate(-15, 0)">
              <circle cx="70" cy="100" r="38" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
              <circle cx="62" cy="90" r="3" fill="#2A2525" />
              <circle cx="78" cy="90" r="3" fill="#2A2525" />
              <path d="M72 104 Q88 108 85 125 Q70 120 72 104 Z" fill="#2A2525" stroke="#2A2525" strokeWidth="1.5" />
            </g>
            <g transform="translate(40, 0)">
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
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto animate-shake">
            <path
              d="M70 50 C55 50, 48 80, 52 115 C56 145, 65 170, 78 170 C88 170, 92 145, 100 145 C108 145, 112 170, 122 170 C135 170, 144 145, 148 115 C152 80, 145 50, 130 50 C118 50, 110 65, 100 65 C90 65, 82 50, 70 50 Z"
              fill="#FFFFFF"
              stroke="#2A2525"
              strokeWidth="2.8"
            />
            <path d="M50 105 L150 105" stroke="#8C8282" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="68" y="98" width="14" height="14" rx="2" fill="#D9E2EC" stroke="#2A2525" strokeWidth="1.5" />
            <rect x="93" y="98" width="14" height="14" rx="2" fill="#D9E2EC" stroke="#2A2525" strokeWidth="1.5" />
            <rect x="118" y="98" width="14" height="14" rx="2" fill="#D9E2EC" stroke="#2A2525" strokeWidth="1.5" />
            <circle cx="100" cy="105" r="45" stroke="#FF6B6B" strokeWidth="4" fill="none" opacity="0.85" />
            <line x1="68" y1="73" x2="132" y2="137" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );

      case 'knife':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            <g transform="rotate(-20 100 90)">
              <rect x="30" y="85" width="45" height="18" rx="4" fill="#684A2A" stroke="#2A2525" strokeWidth="2.5" />
              <path d="M75 83 L165 83 C178 83 182 105 165 112 L75 112 Z" fill="#D9E2EC" stroke="#2A2525" strokeWidth="2.5" />
              <line x1="85" y1="90" x2="155" y2="90" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </g>
            <ellipse cx="140" cy="145" rx="22" ry="14" fill="#FF8E8E" stroke="#2A2525" strokeWidth="2" />
          </svg>
        );

      case 'cut_finger':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto animate-shake">
            <rect x="80" y="65" width="40" height="90" rx="20" fill="#F8B195" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M88 72 Q98 68 108 72 L108 84 L88 84 Z" fill="#FFF" stroke="#2A2525" strokeWidth="1.5" />
            <line x1="86" y1="105" x2="114" y2="115" stroke="#FF6B6B" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="125" cy="118" r="5" fill="#FF6B6B" />
            <text x="135" y="95" fontSize="22" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡AUUCH!
            </text>
          </svg>
        );

      case 'lemon_fall':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto animate-float">
            <ellipse cx="100" cy="70" rx="42" ry="34" fill="#FEE08B" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="100" cy="70" r="28" fill="#FFF59D" stroke="#E9B872" strokeWidth="1.5" />
            <path d="M100 45 L100 95 M75 70 L125 70 M82 52 L118 88 M82 88 L118 52" stroke="#E9B872" strokeWidth="2" strokeLinecap="round" />
            <circle cx="98" cy="122" r="4.5" fill="#FEE08B" stroke="#E9B872" strokeWidth="1" />
            <circle cx="102" cy="148" r="5" fill="#FEE08B" stroke="#E9B872" strokeWidth="1" />
          </svg>
        );

      case 'lemon_scream':
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto animate-shake">
            <circle cx="100" cy="105" r="44" fill="#FFF0F0" stroke="#FF6B6B" strokeWidth="3" />
            <path d="M80 92 L94 106 M94 92 L80 106" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
            <path d="M106 92 L120 106 M120 92 L106 106" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="100" cy="126" rx="16" ry="12" fill="#FF6B6B" />
            <path d="M48 95 Q38 85 45 75 Q35 65 48 55" stroke="#FF6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M152 95 Q162 85 155 75 Q165 65 152 55" stroke="#FF6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="100" y="42" textAnchor="middle" fontSize="15" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡ARDOR TOTAL!
            </text>
          </svg>
        );

      case 'punchline':
        return (
          <div className="w-full min-h-[160px] flex flex-col items-center justify-center p-2">
            <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-2 animate-float">
              <path
                d="M40 22 C32 10, 18 18, 20 36 C22 54, 34 68, 40 68 C46 68, 58 54, 60 36 C62 18, 48 10, 40 22 Z"
                fill="#FF6B6B"
                stroke="#2A2525"
                strokeWidth="2"
              />
              <path d="M40 22 Q42 14 46 10" stroke="#684A2A" strokeWidth="2" strokeLinecap="round" fill="none" />
              <rect x="30" y="38" width="20" height="8" rx="2" fill="#FFFFFF" stroke="#2A2525" strokeWidth="1.2" transform="rotate(-15 40 42)" />
            </svg>
            <p className="font-display italic text-2xl sm:text-3xl text-[#FF6B6B] font-bold text-center leading-snug drop-shadow-sm">
              «{current.text}»
            </p>
          </div>
        );

      case 'sigh':
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-36 h-36 sm:w-44 sm:h-44 mx-auto">
            <circle cx="100" cy="100" r="40" fill="#FFFDF9" stroke="#2A2525" strokeWidth="2.5" />
            <path d="M82 96 Q90 102 98 96" stroke="#2A2525" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M102 96 Q110 102 118 96" stroke="#2A2525" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M92 116 Q100 122 108 116" stroke="#2A2525" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M125 125 Q135 120 145 125 Q150 132 142 136 Q132 136 125 125 Z" fill="#E9F2F9" stroke="#2A2525" strokeWidth="1.5" />
            <text x="100" y="45" textAnchor="middle" fontSize="22" fontFamily="Fraunces" fontStyle="italic" fontWeight="bold" fill="#685E5E">
              Uf.
            </text>
          </svg>
        );
    }
  };

  return (
    <section className="w-full py-2 select-none">
      <div className="w-full bg-[#FFFFFF] rounded-2xl border border-[#2A2525]/15 shadow-xl p-6 sm:p-8 relative hand-border-soft overflow-hidden min-h-[500px] sm:min-h-[560px] flex flex-col justify-between">
        
        {/* Barra de progreso segmentada */}
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

        {/* Badge e indicador */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-body text-xs font-bold text-[#FF6B6B] uppercase tracking-wider bg-[#FFF0F0] px-3 py-1 rounded-full border border-[#FF6B6B]/20">
            {birthdayConfig.comic.badge}
          </span>
          <span className="font-body text-xs text-[#8C8282] font-semibold">
            {currentBeat + 1} / {beats.length}
          </span>
        </div>

        {/* Escenario del dibujo con amplia holgura vertical */}
        <div className="min-h-[220px] sm:min-h-[260px] flex items-center justify-center my-6 sm:my-8 flex-1">
          {renderVisual(current.doodle)}
        </div>

        {/* Narración limpia inferior con mayor separación del dibujo */}
        {current.doodle !== 'punchline' && (
          <p className="font-body text-base sm:text-lg text-[#2A2525] text-center min-h-[60px] px-3 my-4 flex items-center justify-center leading-relaxed">
            {current.text}
          </p>
        )}

        {/* Controles de reproducción */}
        <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#2A2525]/10">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleRestart}
              className="px-2 py-1 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] rounded hover:bg-[#FAF4EF]"
              title="Reiniciar"
            >
              ⏮
            </button>
            <button
              onClick={handlePrev}
              disabled={currentBeat === 0}
              className="px-2.5 py-1 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] disabled:opacity-20 rounded hover:bg-[#FAF4EF]"
            >
              ◀
            </button>
            <button
              onClick={handleTogglePlay}
              className="px-3 py-1 text-xs font-body font-bold text-[#FF6B6B] bg-[#FFF0F0] rounded-full border border-[#FF6B6B]/25 hover:bg-[#FFE8E8]"
            >
              {isPlaying ? 'Pausa' : 'Play'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentBeat >= beats.length - 1}
              className="px-2.5 py-1 text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] disabled:opacity-20 rounded hover:bg-[#FAF4EF]"
            >
              ▶
            </button>
          </div>

          {/* Botón de continuación: Solo aparece al terminar o en los beats finales */}
          {(currentBeat >= beats.length - 2 || isFinished) && (
            <button
              onClick={onComplete}
              className="btn-handcrafted text-sm py-2 px-5 animate-bounce shadow-md"
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
