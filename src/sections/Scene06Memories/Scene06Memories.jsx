import React, { useState } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { DoodleStar, DoodleSparkle, HandDrawnPin, StampPostmark } from '../../components/common/HandcraftedGraphics';
import { useEasterEggs } from '../../components/effects/InteractiveEasterEggs';

export const Scene06Memories = () => {
  const [activeMemory, setActiveMemory] = useState(null);
  const memories = birthdayConfig.memories;
  const { triggerEasterEgg } = useEasterEggs();

  const handleToggle = (id) => {
    soundEngine.playPop();
    setActiveMemory(activeMemory === id ? null : id);
  };

  const renderMemoryIcon = (type) => {
    switch (type) {
      case 'chat':
        return <span className="text-3xl">☕💬</span>;
      case 'sparkle':
        return <span className="text-3xl">✨🧠</span>;
      case 'laugh':
        return <span className="text-3xl">😂💥</span>;
      case 'star':
      default:
        return <span className="text-3xl">⭐❤️</span>;
    }
  };

  return (
    <section className="w-full py-8 px-4 select-none">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="hand-badge text-xs sm:text-sm">CÁPSULAS DE MEMORIA</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2A2525] mt-2">
            Cosas que no se me olvidan
          </h2>
          <p className="font-body text-sm sm:text-base text-[#685E5E] mt-1">
            Pequeños detalles que hacen que seas tú.
          </p>
        </div>

        {/* Lista de cápsulas de recuerdos estilo fichas de cartulina */}
        <div className="space-y-5">
          {memories.map((mem, index) => {
            const isExpanded = activeMemory === mem.id;
            return (
              <div
                key={mem.id}
                onClick={() => handleToggle(mem.id)}
                className={`bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer relative shadow-sm hover:shadow-md ${
                  isExpanded
                    ? 'border-[#FF6B6B] bg-[#FFFDFC]'
                    : 'border-[#2A2525]/10 hover:border-[#E9B872]'
                }`}
                style={{
                  transform: `rotate(${(index % 2 === 0 ? -0.8 : 0.8)}deg)`
                }}
              >
                {/* Pin decorativo en la primera memoria */}
                {index === 0 && (
                  <div className="absolute -top-3.5 left-6">
                    <HandDrawnPin color="#FF6B6B" />
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#2A2525]/10 flex items-center justify-center shrink-0">
                    {renderMemoryIcon(mem.icon)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2A2525]">
                        {mem.title}
                      </h3>
                      <span className="font-hand text-sm px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#FF6B6B] font-bold border border-[#FF6B6B]/20 shrink-0">
                        {mem.tag}
                      </span>
                    </div>

                    <p className="font-body text-base text-[#685E5E] mt-2 leading-relaxed">
                      {mem.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sello postal interactivo secreto al final de la sección */}
        <div className="mt-10 flex justify-center">
          <StampPostmark
            onClick={() => triggerEasterEgg('egg-stamp', birthdayConfig.easterEggs[3].message)}
          />
        </div>
      </div>
    </section>
  );
};

export default Scene06Memories;
