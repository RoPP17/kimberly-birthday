import React, { createContext, useContext, useState } from 'react';
import soundEngine from '../../audio/soundEngine';

const EasterEggContext = createContext({
  triggerEasterEgg: () => {},
  unlockedCount: 0
});

export const useEasterEggs = () => useContext(EasterEggContext);

export const EasterEggProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [unlocked, setUnlocked] = useState(new Set());

  const triggerEasterEgg = (id, message) => {
    soundEngine.playSparkle();
    setToastMessage(message);
    setUnlocked(prev => new Set(prev).add(id));

    setTimeout(() => {
      setToastMessage(null);
    }, 4200);
  };

  return (
    <EasterEggContext.Provider value={{ triggerEasterEgg, unlockedCount: unlocked.size }}>
      {children}

      {/* Toast estilo Post-it manuscrito */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: 'calc(env(safe-area-inset-bottom, 20px) + 24px)',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1.5deg)',
            zIndex: 1000,
            maxWidth: '90vw',
            width: '360px'
          }}
          className="bg-[#FFF9D2] border-2 border-[#EAD27B] text-[#2A2525] p-3.5 rounded-lg shadow-xl animate-bounce"
        >
          <div className="washi-tape washi-tape-mustard -top-3 left-8" style={{ width: '60px', height: '16px' }} />
          <div className="flex items-start gap-2.5">
            <span className="text-xl">✨</span>
            <p className="font-hand text-base sm:text-lg font-bold leading-tight">
              {toastMessage}
            </p>
          </div>
        </div>
      )}
    </EasterEggContext.Provider>
  );
};
