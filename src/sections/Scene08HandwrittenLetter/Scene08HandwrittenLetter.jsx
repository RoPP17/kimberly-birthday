import React, { useState } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape, HandDrawnPin, StampPostmark } from '../../components/common/HandcraftedGraphics';

export const Scene08HandwrittenLetter = ({ onLetterOpenStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [touchStartX, setTouchStartX] = useState(null);

  const letter = birthdayConfig.letter;
  const pages = letter.pages;

  const handleOpenEnvelope = () => {
    soundEngine.playPop();
    setIsOpen(true);
    if (onLetterOpenStateChange) onLetterOpenStateChange(true);
  };

  const handleCloseEnvelope = () => {
    soundEngine.playPop();
    setIsOpen(false);
    if (onLetterOpenStateChange) onLetterOpenStateChange(false);
  };

  const handleNextPage = () => {
    soundEngine.playPop();
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const handlePrevPage = () => {
    soundEngine.playPop();
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Gestos táctiles de deslizamiento
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextPage();
      else handlePrevPage();
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center justify-center select-none">
      <div className="max-w-xl w-full text-center mb-8">
        <span className="hand-badge text-xs sm:text-sm">
          {letter.badge}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2A2525] mt-2">
          {letter.envelopeTitle}
        </h2>
        <p className="font-body text-sm sm:text-base text-[#685E5E] max-w-md mx-auto mt-2">
          {letter.envelopeSubtitle}
        </p>
      </div>

      {/* ==========================================
          SOBRE FÍSICO INTERACTIVO
          ========================================== */}
      {!isOpen ? (
        <div
          onClick={handleOpenEnvelope}
          className="relative max-w-sm w-full mx-auto cursor-pointer group transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{ perspective: '1000px' }}
        >
          {/* Cuerpo del sobre en relieve artesanal */}
          <div className="bg-[#EFE6DC] w-full aspect-[4/3] rounded-xl border-2 border-[#D9CEBF] shadow-2xl p-4 flex flex-col items-center justify-between relative overflow-hidden">
            {/* Solapa superior cerrada */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#E6DACD] border-b border-[#D0C2B0] transition-transform duration-500 origin-top"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
              }}
            />

            {/* Sello de lacre central con inicial "K" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#C83E4D] border-3 border-[#A62B3A] shadow-lg flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <span className="font-display text-2xl font-bold text-[#FFFFFF] drop-shadow-sm">
                {letter.sealInitial}
              </span>
            </div>

            {/* Dirección manuscrita en el sobre */}
            <div className="mt-auto z-0 text-center pb-2">
              <span className="font-hand text-xl sm:text-2xl font-bold text-[#685E5E]">
                Para: Kimberly ✨
              </span>
            </div>
          </div>

          {/* Botón flotante para abrir */}
          <div className="mt-6 flex justify-center">
            <button className="btn-handcrafted text-lg py-2.5 px-6 shadow-md">
              {letter.buttonOpen}
            </button>
          </div>
        </div>
      ) : (
        /* ==========================================
           VISOR DE CARTA DESPLEGADA
           ========================================== */
        <div
          className="relative max-w-2xl w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Tarjeta de papel físico con textura */}
          <div className="bg-[#FFFDF9] paper-sheet p-6 sm:p-10 rounded-2xl border-2 border-[#E9B872]/40 shadow-2xl relative hand-border-soft">
            {/* Washi tape superior */}
            <WashiTape color="mustard" className="-top-3 left-10" />
            <WashiTape color="peach" className="-top-3 right-10" />

            {/* Indicador de página y botón cerrar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-dashed border-[#2A2525]/15">
              <span className="font-hand text-base sm:text-lg text-[#685E5E]">
                Página {currentPage + 1} de {pages.length}
              </span>
              <button
                onClick={handleCloseEnvelope}
                className="font-hand text-sm sm:text-base px-3 py-1 rounded-full bg-[#FAF4EF] hover:bg-[#FF6B6B] hover:text-white transition-colors text-[#2A2525] border border-[#2A2525]/15"
              >
                Cerrar carta ✕
              </button>
            </div>

            {/* Contenido de la página actual */}
            <div className="min-h-[420px] flex items-center justify-center">
              {/* Si existe imagen escaneada real, la muestra */}
              {!imageErrors[pages[currentPage].id] ? (
                <img
                  src={pages[currentPage].image}
                  alt={pages[currentPage].altText}
                  onError={() => handleImageError(pages[currentPage].id)}
                  className="max-h-[65vh] w-auto object-contain rounded shadow-sm"
                />
              ) : (
                /* Fallback artesanal con tipografía manuscrita mientras el usuario sube las fotos de la carta */
                <div className="w-full text-left space-y-4 font-hand text-xl sm:text-2xl text-[#2A2525] p-2 leading-relaxed">
                  {letter.fallbackLetterText.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  <div className="mt-6 pt-4 border-t border-dashed border-[#E9B872] text-xs font-body text-[#8C8282]">
                    (Nota: Puedes subir los escaneos de tu carta a <code>/public/assets/letter/carta-01.jpg</code> para ver las imágenes reales directamente).
                  </div>
                </div>
              )}
            </div>

            {/* Controles de paginación si hay más de 1 página */}
            {pages.length > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-dashed border-[#2A2525]/15">
                <button
                  onClick={handlePrevPage}
                  className="btn-handcrafted btn-secondary text-base py-1.5 px-4"
                >
                  ← Página anterior
                </button>
                <div className="flex gap-2">
                  {pages.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentPage === idx ? 'bg-[#FF6B6B] w-6' : 'bg-[#D9CEBF]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  className="btn-handcrafted text-base py-1.5 px-4"
                >
                  Siguiente →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Scene08HandwrittenLetter;
