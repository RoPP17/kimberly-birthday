import React, { useState, useEffect } from 'react';
import soundEngine from '../../audio/soundEngine';

export const FloatingAudioControl = () => {
  const [muted, setMuted] = useState(soundEngine.isMuted);
  const [isPlaying, setIsPlaying] = useState(soundEngine.isPlayingBgm);

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe(state => {
      setMuted(state.isMuted);
      setIsPlaying(state.isPlayingBgm);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    soundEngine.playPop();
    soundEngine.toggleMute();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 'calc(env(safe-area-inset-top, 16px) + 14px)',
        right: '18px',
        zIndex: 999
      }}
    >
      <button
        onClick={handleToggle}
        aria-label={muted ? 'Activar música y sonidos' : 'Silenciar sonido'}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#2A2525]/15 shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          boxShadow: isPlaying && !muted
            ? '0 0 0 4px rgba(255, 107, 107, 0.2), 0 4px 14px rgba(0,0,0,0.1)'
            : '0 4px 12px rgba(0,0,0,0.08)'
        }}
      >
        <span
          className={`text-lg transition-transform duration-300 ${isPlaying && !muted ? 'animate-bounce text-[#FF6B6B]' : 'text-[#685E5E]'}`}
        >
          {muted ? '🔇' : '♫'}
        </span>

        {/* Pequeño pulso sonoro visual */}
        {isPlaying && !muted && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B6B] rounded-full animate-ping opacity-75" />
        )}

        {/* Tooltip flotante */}
        <span className="absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#2A2525] text-[#FFFFFF] text-xs font-hand opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
          {muted ? 'Sonido silenciado' : 'Música activa'}
        </span>
      </button>
    </div>
  );
};

export default FloatingAudioControl;
