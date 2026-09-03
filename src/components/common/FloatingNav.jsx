import React, { useState, useEffect } from 'react';
import soundEngine from '../../audio/soundEngine';

export const FloatingNav = ({ isVisible = true }) => {
  const [activeSection, setActiveSection] = useState('scene-comic');

  const navItems = [
    { id: 'scene-comic', label: 'Historia', icon: '🎬' },
    { id: 'scene-reveal', label: 'Festejo', icon: '🎉' },
    { id: 'scene-message', label: 'Mensaje', icon: '💌' },
    { id: 'scene-photos', label: 'Fotos', icon: '📸' },
    { id: 'scene-memories', label: 'Recuerdos', icon: '💭' },
    { id: 'scene-wish', label: 'Deseo', icon: '🌟' },
    { id: 'scene-letter', label: 'Carta', icon: '✉️' }
  ];

  const handleScrollTo = (id) => {
    soundEngine.playPop();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Navegación entre escenas"
      style={{
        position: 'fixed',
        bottom: 'calc(env(safe-area-inset-bottom, 12px) + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 990
      }}
      className="bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2A2525]/15 shadow-lg flex items-center gap-1 sm:gap-2 max-w-[94vw] overflow-x-auto scrollbar-none"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScrollTo(item.id)}
          className="group relative flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-body font-semibold text-[#685E5E] hover:text-[#2A2525] hover:bg-[#FAF4EF] active:scale-95 transition-all whitespace-nowrap"
          title={item.label}
        >
          <span className="text-sm">{item.icon}</span>
          <span className="hidden sm:inline">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
