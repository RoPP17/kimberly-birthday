import React, { useState, useRef } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape } from '../../components/common/HandcraftedGraphics';

export const SceneVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  const videoConfig = birthdayConfig.video;

  const handlePlay = () => {
    soundEngine.playPop();
    // Pausar música de fondo para escuchar el video con claridad
    soundEngine.stopBgm();
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setHasError(true);
      });
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    // Reanudar música de fondo al terminar
    soundEngine.startBgm();
  };

  return (
    <section className="w-full py-4 select-none">
      <div className="relative">
        {/* Washi tape decorativo centrado con holgura */}
        <WashiTape
          color="coral"
          className="-top-3.5 left-1/2 -translate-x-1/2 z-20"
          style={{ transform: 'translateX(-50%) rotate(1deg)' }}
        />

        {/* Tarjeta contenedora con estética artesanal y cero interfaces feas */}
        <div className="bg-[#FFFFFF] p-3 sm:p-4 rounded-2xl border border-[#2A2525]/15 shadow-xl relative hand-border-soft overflow-hidden">
          
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#1E1B1B] flex items-center justify-center">
            {!hasError ? (
              <video
                ref={videoRef}
                src={videoConfig.src}
                playsInline
                controls={isPlaying}
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover"
                onError={() => {
                  // Si no encuentra animacion-nombre.mp4, intentar fallback
                  if (videoRef.current && videoRef.current.src !== videoConfig.fallbackSrc) {
                    videoRef.current.src = videoConfig.fallbackSrc;
                  } else {
                    setHasError(true);
                  }
                }}
              />
            ) : null}

            {/* Carátula / Botón de reproducción minimalista cuando no se está reproduciendo */}
            {(!isPlaying || hasError) && (
              <div
                onClick={handlePlay}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center cursor-pointer group transition-all"
              >
                {/* Botón de Play estético */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 translate-x-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span className="text-white/95 font-body text-xs sm:text-sm font-semibold mt-3 tracking-wide drop-shadow-md">
                  Toca para ver el video ▶
                </span>

                {hasError && (
                  <span className="text-xs font-body text-white/60 mt-1 max-w-xs text-center px-4">
                    (Coloca tu animación en public/assets/video/animacion-nombre.mp4)
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Pie del video sutil */}
          {videoConfig.caption && (
            <div className="mt-2.5 text-center">
              <p className="font-hand text-lg sm:text-xl font-bold text-[#685E5E]">
                {videoConfig.caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SceneVideo;
