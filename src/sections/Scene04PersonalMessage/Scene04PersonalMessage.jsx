import React from 'react';
import birthdayConfig from '../../config/birthday';
import { WashiTape, HandDrawnPin, DoodleSparkle } from '../../components/common/HandcraftedGraphics';

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
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2A2525] mb-5">
            {content.title}
          </h2>

          <div className="space-y-4 text-[#2A2525] font-body text-base sm:text-lg leading-relaxed">
            {content.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="relative pl-1">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Firma o detalle cálido al pie */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#E9B872] flex items-center justify-between">
            <span className="font-hand text-xl font-bold text-[#FF6B6B]">
              Para ti, siempre ✨
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
