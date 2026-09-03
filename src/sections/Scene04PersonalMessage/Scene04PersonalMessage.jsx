import React from 'react';
import birthdayConfig from '../../config/birthday';
import { WashiTape, HandDrawnPin } from '../../components/common/HandcraftedGraphics';

export const Scene04PersonalMessage = () => {
  const content = birthdayConfig.personalMessage;

  return (
    <section className="relative w-full py-8 px-4 flex justify-center select-none">
      <div className="max-w-2xl w-full relative">
        {/* Washi tape y pin decorativo */}
        <WashiTape color="lavender" className="-top-3.5 left-8 z-20" style={{ transform: 'rotate(-2deg)' }} />
        <div className="absolute -top-4 right-8 z-20">
          <HandDrawnPin color="#FF6B6B" />
        </div>

        {/* Tarjeta estilo hoja de papel artesanal con amplia holgura superior */}
        <div className="bg-[#FFFFFF] paper-sheet pt-8 px-6 pb-6 sm:pt-10 sm:px-10 sm:pb-10 rounded-2xl border border-[#2A2525]/10 shadow-xl relative hand-border-soft">
          
          {/* Repetición de Feliz Cumpleaños en 5 líneas de texto */}
          <div className="space-y-1 mb-6 text-center sm:text-left border-b border-dashed border-[#2A2525]/10 pb-4">
            {content.headlineRepetitions?.map((rep, idx) => (
              <h2
                key={idx}
                className="font-display font-black text-2xl sm:text-3xl tracking-tight"
                style={{
                  color: idx % 2 === 0 ? '#FF6B6B' : '#E9B872',
                  opacity: 0.85 + idx * 0.03
                }}
              >
                {rep}
              </h2>
            ))}
          </div>

          {/* Texto profundo y personal */}
          <div className="space-y-4 text-[#2A2525] font-body text-base sm:text-lg leading-relaxed">
            {content.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="relative pl-1">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Firma cálida al pie */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#E9B872] flex items-center justify-between">
            <span className="font-hand text-xl font-bold text-[#FF6B6B]">
              {content.signOff}
            </span>
            <span className="font-hand text-lg text-[#685E5E]">
              {birthdayConfig.celebrationYear}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene04PersonalMessage;
