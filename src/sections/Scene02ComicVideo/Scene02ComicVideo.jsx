import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleStar, DoodleArrow } from '../../components/common/HandcraftedGraphics';
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

  // Avance automático con opción de control manual
  useEffect(() => {
    if (!isPlayingAuto) return;
    if (currentPanel >= panels.length - 1) return;

    // Tiempos específicos por viñeta para ritmo cómico
    const durations = [3200, 2800, 2800, 3200, 2900, 2600, 2800, 3800, 2500, 4500];
    const delay = durations[currentPanel] || 3200;

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
  // ILUSTRACIONES VECTORIALES HECHAS A MANO
  // ==========================================
  const renderDoodle = (type) => {
    switch (type) {
      case 'thinking':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto">
            {/* Personaje pensando */}
            <circle cx="90" cy="110" r="40" fill="#FFFDF9" stroke="#2A2525" strokeWidth="3" />
            <circle cx="80" cy="100" r="4" fill="#2A2525" />
            <circle cx="102" cy="100" r="4" fill="#2A2525" />
            <path d="M80 125 C88 135, 102 135, 110 125" stroke="#2A2525" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M60 135 L50 170 M120 135 L130 170" stroke="#2A2525" strokeWidth="3" strokeLinecap="round" />
            {/* Nube de pensamiento */}
            <circle cx="130" cy="65" r="7" fill="#F8B195" />
            <circle cx="145" cy="50" r="11" fill="#F8B195" />
            <ellipse cx="160" cy="35" rx="28" ry="18" fill="#FFF" stroke="#2A2525" strokeWidth="2.5" />
            <text x="160" y="38" textAnchor="middle" fontSize="12" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡KIMBERLY! 🎂
            </text>
          </svg>
        );

      case 'apple':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto animate-float">
            {/* Manzana roja apetitosa */}
            <path
              d="M100 50 C80 20, 45 40, 50 85 C55 130, 85 165, 100 165 C115 165, 145 130, 150 85 C155 40, 120 20, 100 50 Z"
              fill="#FF6B6B"
              stroke="#2A2525"
              strokeWidth="3.5"
            />
            {/* Brillo en la manzana */}
            <path d="M68 65 C62 75, 62 95, 66 105" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Tallo y hoja verde */}
            <path d="M100 50 Q105 30 115 20" stroke="#684A2A" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M108 30 Q130 20 135 35 Q115 42 108 30 Z" fill="#A2D2BF" stroke="#2A2525" strokeWidth="2" />
          </svg>
        );

      case 'bite_fail':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto animate-shake">
            {/* Cara abriendo la boca hacia la manzana */}
            <circle cx="75" cy="100" r="45" fill="#FFFDF9" stroke="#2A2525" strokeWidth="3" />
            {/* Ojos muy abiertos con sorpresa */}
            <ellipse cx="65" cy="85" rx="7" ry="9" fill="#FFF" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="65" cy="85" r="3" fill="#2A2525" />
            <ellipse cx="88" cy="85" rx="7" ry="9" fill="#FFF" stroke="#2A2525" strokeWidth="2.5" />
            <circle cx="88" cy="85" r="3" fill="#2A2525" />
            {/* Boca con brackets metálicos dibujados */}
            <path d="M60 115 Q75 140 100 120" stroke="#2A2525" strokeWidth="3" fill="#E6D3C4" />
            {/* Dientes y brackets */}
            <rect x="68" y="118" width="5" height="5" fill="#A0A0A0" stroke="#2A2525" strokeWidth="1" />
            <rect x="76" y="120" width="5" height="5" fill="#A0A0A0" stroke="#2A2525" strokeWidth="1" />
            <rect x="84" y="118" width="5" height="5" fill="#A0A0A0" stroke="#2A2525" strokeWidth="1" />
            <line x1="64" y1="121" x2="92" y2="121" stroke="#555" strokeWidth="1.5" />
            {/* Clink efecto */}
            <path d="M125 100 L145 85 M125 110 L150 110 M125 120 L145 135" stroke="#E9B872" strokeWidth="3" strokeLinecap="round" />
            <text x="155" y="115" fontSize="14" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡CLINK!
            </text>
          </svg>
        );

      case 'brackets_warning':
        return (
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto flex flex-col items-center justify-center p-3 bg-[#FFF3F3] border-3 border-dashed border-[#FF6B6B] rounded-2xl cursor-pointer hover:scale-105 transition-transform"
            onClick={() => triggerEasterEgg('egg-bracket', birthdayConfig.easterEggs[1].message)}
            title="Toca para advertencia odontológica"
          >
            <span className="text-4xl animate-bounce">🦷 🚫 🍏</span>
            <span className="font-hand font-bold text-lg text-[#FF6B6B] mt-2">
              ALERTA ODONTOLÓGICA
            </span>
            <span className="font-body text-xs text-[#685E5E] text-center mt-1">
              "Queda estrictamente prohibido morder manzanas enteras con brackets"
            </span>
          </div>
        );

      case 'knife':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto">
            {/* Cuchillo enorme de chef */}
            <g transform="rotate(-30 100 100)">
              <rect x="30" y="90" width="45" height="18" rx="4" fill="#684A2A" stroke="#2A2525" strokeWidth="2.5" />
              <path d="M75 88 L160 88 C175 88 180 110 160 115 L75 115 Z" fill="#D9E2EC" stroke="#2A2525" strokeWidth="3" />
              <line x1="85" y1="95" x2="155" y2="95" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* Líneas de acción */}
            <path d="M120 40 L140 30 M150 60 L170 55" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      case 'cut_finger':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto animate-shake">
            {/* Dedo índice con corte y lágrima cómica */}
            <rect x="75" y="70" width="38" height="90" rx="19" fill="#F8B195" stroke="#2A2525" strokeWidth="3" />
            {/* Uña */}
            <path d="M84 75 Q94 70 104 75 L104 88 L84 88 Z" fill="#FFF" stroke="#2A2525" strokeWidth="1.5" />
            {/* Corte */}
            <line x1="80" y1="105" x2="108" y2="115" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
            {/* Gotita cómica */}
            <circle cx="118" cy="120" r="6" fill="#FF6B6B" className="animate-ping" />
            <circle cx="118" cy="120" r="5" fill="#FF6B6B" />
            <text x="130" y="100" fontSize="20" fontFamily="Caveat" fontWeight="bold" fill="#FF6B6B">
              ¡AUUCH!
            </text>
          </svg>
        );

      case 'lemon_fall':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto animate-float">
            {/* Limón cortado a la mitad cayendo */}
            <ellipse cx="100" cy="70" rx="42" ry="34" fill="#FEE08B" stroke="#2A2525" strokeWidth="3" />
            <circle cx="100" cy="70" r="28" fill="#FFF59D" stroke="#E9B872" strokeWidth="1.5" />
            {/* Gajos de limón */}
            <path d="M100 45 L100 95 M75 70 L125 70 M82 52 L118 88 M82 88 L118 52" stroke="#E9B872" strokeWidth="2" />
            {/* Gotas cayendo hacia abajo */}
            <circle cx="98" cy="125" r="4" fill="#FEE08B" />
            <circle cx="102" cy="150" r="5" fill="#FEE08B" />
            <path d="M90 120 L85 135 M110 120 L115 135" stroke="#E9B872" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'lemon_scream':
        return (
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto flex flex-col items-center justify-center p-3 bg-[#FFE8E8] border-4 border-[#FF6B6B] rounded-full animate-shake cursor-pointer"
            onClick={() => triggerEasterEgg('egg-lemon', birthdayConfig.easterEggs[2].message)}
            title="Toca el limón de ardor máximo"
          >
            <span className="text-6xl animate-pulse">🔥🍋😱🔥</span>
            <span className="font-display font-black text-xl text-[#FF6B6B] mt-2 tracking-wider">
              ¡ARDOR 1000%!
            </span>
          </div>
        );

      case 'exhausted':
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto">
            {/* Personaje con bolsa de hielo y vendas */}
            <circle cx="100" cy="100" r="44" fill="#FFFDF9" stroke="#2A2525" strokeWidth="3" />
            {/* Ojos en cruz (muerto de risa / cansado) */}
            <path d="M78 88 L90 100 M90 88 L78 100" stroke="#2A2525" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M110 88 L122 100 M122 88 L110 100" stroke="#2A2525" strokeWidth="2.5" strokeLinecap="round" />
            {/* Boca exhausta */}
            <ellipse cx="100" cy="122" rx="14" ry="6" fill="#F8B195" stroke="#2A2525" strokeWidth="2" />
            {/* Bolsa de hielo en la cabeza */}
            <ellipse cx="100" cy="58" rx="20" ry="10" fill="#A2D2BF" stroke="#2A2525" strokeWidth="2" />
            <circle cx="100" cy="46" r="4" fill="#685E5E" />
          </svg>
        );

      case 'sweet_shift':
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56 mx-auto animate-float">
            {/* Plato bonito con rodajas de manzana y sonrisa */}
            <ellipse cx="100" cy="120" rx="65" ry="30" fill="#FFFFFF" stroke="#2A2525" strokeWidth="3" />
            {/* Rodajitas cortadas perfectamente */}
            <path d="M75 105 Q90 90 105 105 Z" fill="#FF6B6B" stroke="#2A2525" strokeWidth="2" />
            <path d="M100 108 Q115 95 130 110 Z" fill="#FF6B6B" stroke="#2A2525" strokeWidth="2" />
            {/* Pequeñas estrellas de ternura */}
            <circle cx="55" cy="65" r="3" fill="#E9B872" />
            <circle cx="145" cy="65" r="4" fill="#E9B872" />
            <text x="100" y="60" textAnchor="middle" fontSize="30">
              ✨🍎✨
            </text>
          </svg>
        );
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 select-none">
      <div className="max-w-lg w-full bg-[#FFFFFF] rounded-2xl border-2 border-[#2A2525]/15 shadow-2xl p-6 sm:p-8 relative hand-border">
        {/* Cinta washi tape en la esquina superior del cómic */}
        <div className="washi-tape washi-tape-mustard -top-3 left-10" />
        <div className="washi-tape washi-tape-mint -bottom-3 right-10" />

        {/* Badge de humor */}
        <div className="flex items-center justify-between mb-4">
          <span className="hand-badge text-xs sm:text-sm">
            {birthdayConfig.comic.badge}
          </span>
          <span className="font-hand text-base font-bold text-[#8C8282]">
            {currentPanel + 1} / {panels.length}
          </span>
        </div>

        {/* Ilustración central del cómic */}
        <div className="my-3 min-h-[220px] flex items-center justify-center">
          {renderDoodle(panel.doodle)}
        </div>

        {/* Globo de pensamiento / Diálogo cómico */}
        <div className="bg-[#FAF7F2] p-4 rounded-xl border border-dashed border-[#E9B872] my-4 text-center relative">
          <p className="font-hand text-xl sm:text-2xl font-bold text-[#FF6B6B]">
            {panel.thought}
          </p>
        </div>

        {/* Narración / Texto descriptivo */}
        <p className="font-body text-base sm:text-lg text-[#2A2525] text-center min-h-[56px]">
          {panel.caption}
        </p>

        {/* Controles de navegación cómica */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2A2525]/10 gap-3">
          <button
            onClick={handlePrev}
            disabled={currentPanel === 0}
            className="btn-handcrafted btn-secondary text-base py-2 px-4 disabled:opacity-30 disabled:pointer-events-none"
          >
            ← Atrás
          </button>

          {/* Botón de pausa/reanudar autoplay */}
          <button
            onClick={() => setIsPlayingAuto(!isPlayingAuto)}
            className="font-hand text-sm text-[#685E5E] underline hover:text-[#FF6B6B]"
          >
            {isPlayingAuto ? 'Pausar avance' : 'Avance auto'}
          </button>

          {currentPanel < panels.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn-handcrafted text-base py-2 px-5"
            >
              Siguiente →
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="btn-handcrafted text-lg py-2.5 px-6 animate-bounce"
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
