import React, { useState } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape } from '../../components/common/HandcraftedGraphics';

export const Scene08HandwrittenLetter = ({ onLetterOpenStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageErrors, setImageErrors] = useState({});
  const [touchStartX, setTouchStartX] = useState(null);

  const letter = birthdayConfig.letter;
  const pages = letter.pages;

  const handleOpenEnvelope = () => {
    soundEngine.playPop();
    setIsOpen(true);
    setZoomLevel(1);
    if (onLetterOpenStateChange) onLetterOpenStateChange(true);
  };

  const handleCloseEnvelope = () => {
    soundEngine.playPop();
    setIsOpen(false);
    setZoomLevel(1);
    if (onLetterOpenStateChange) onLetterOpenStateChange(false);
  };

  const handleNextPage = () => {
    soundEngine.playPop();
    setCurrentPage((prev) => (prev + 1) % pages.length);
    setZoomLevel(1);
  };

  const handlePrevPage = () => {
    soundEngine.playPop();
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

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
    <section className="py-6 px-4 flex flex-col items-center justify-center select-none w-full">
      {/* ==========================================
          SOBRE FÍSICO INTERACTIVO
          ========================================== */}
      {!isOpen ? (
        <div
          onClick={handleOpenEnvelope}
          className="relative max-w-xs sm:max-w-sm w-full mx-auto cursor-pointer group transition-transform duration-300 hover:scale-105 active:scale-95 mt-2"
          style={{ perspective: '1000px' }}
        >
          {/* Cuerpo del sobre en relieve */}
          <div className="bg-[#EFE6DC] w-full aspect-[4/3] rounded-xl border-2 border-[#D9CEBF] shadow-xl p-4 flex flex-col items-center justify-between relative overflow-hidden">
            {/* Solapa superior */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#E6DACD] border-b border-[#D0C2B0] transition-transform duration-500 origin-top"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
              }}
            />

            {/* Sello de lacre rojo con la inicial "K" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#C83E4D] border-3 border-[#A62B3A] shadow-md flex items-center justify-center z-10 transition-transform group-hover:scale-110">
              <span className="font-display text-xl font-bold text-[#FFFFFF] drop-shadow-sm">
                {letter.sealInitial}
              </span>
            </div>

            {/* Destinatario */}
            <div className="mt-auto z-0 text-center pb-1">
              <span className="font-hand text-lg sm:text-xl font-bold text-[#685E5E]">
                Para: Kimberly ✨
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button className="btn-handcrafted text-base py-2 px-5 shadow-md">
              {letter.buttonOpen}
            </button>
          </div>
        </div>
      ) : (
        /* ==========================================
           VISOR DE LA CARTA (OPTIMIZADO PARA FOTO REAL)
           ========================================== */
        <div
          className="relative max-w-xl w-full mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-[#FFFDF9] p-4 sm:p-6 rounded-2xl border-2 border-[#E9B872]/40 shadow-2xl relative hand-border-soft">
            {/* Washi tapes en los costados para no interferir con los controles superiores */}
            <WashiTape color="mustard" className="top-1/3 -left-3.5 z-20" style={{ transform: 'rotate(-90deg)' }} />
            <WashiTape color="peach" className="top-1/3 -right-3.5 z-20" style={{ transform: 'rotate(90deg)' }} />

            {/* Barra superior de controles de lectura */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-dashed border-[#2A2525]/15">
              <div className="flex items-center gap-2">
                <span className="font-body text-xs sm:text-sm font-bold text-[#2A2525]">
                  Página {currentPage + 1} de {pages.length}
                </span>
                {/* Controles de Zoom */}
                <div className="hidden sm:flex items-center gap-1 bg-[#FAF4EF] px-2 py-0.5 rounded-full border border-[#2A2525]/10 text-xs">
                  <button onClick={handleZoomOut} className="px-1.5 hover:text-[#FF6B6B]" title="Alejar">-</button>
                  <button onClick={handleResetZoom} className="px-1.5 hover:text-[#FF6B6B]" title="Tamaño original">{Math.round(zoomLevel * 100)}%</button>
                  <button onClick={handleZoomIn} className="px-1.5 hover:text-[#FF6B6B]" title="Acercar">+</button>
                </div>
              </div>

              <button
                onClick={handleCloseEnvelope}
                className="font-body text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF4EF] hover:bg-[#FF6B6B] hover:text-white transition-colors text-[#2A2525] border border-[#2A2525]/15"
              >
                Cerrar carta ✕
              </button>
            </div>

            {/* Contenedor de la foto de la carta */}
            <div className="min-h-[380px] max-h-[70vh] overflow-auto flex items-center justify-center bg-[#FAF6F0] rounded-xl border border-[#2A2525]/10 p-2">
              {!imageErrors[pages[currentPage].id] ? (
                <img
                  src={pages[currentPage].image}
                  alt={pages[currentPage].altText}
                  onError={() => handleImageError(pages[currentPage].id)}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease'
                  }}
                  className="max-h-[65vh] w-auto object-contain rounded shadow-sm cursor-zoom-in"
                  onClick={() => setZoomLevel(prev => (prev === 1 ? 1.4 : 1))}
                  title="Haz clic para hacer zoom"
                />
              ) : (
                /* Marcador visual elegante preparado para cuando se suba la foto */
                <div className="w-full py-12 px-4 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/10 border-2 border-dashed border-[#FF6B6B] flex items-center justify-center text-3xl">
                    ✉️
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#2A2525]">
                    Carta manuscrita para Kimberly
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#685E5E] max-w-xs">
                    Cuando coloques la foto de tu carta en:
                    <br />
                    <code className="bg-[#FAF7F2] px-2 py-0.5 rounded font-mono text-xs text-[#FF6B6B] font-bold block mt-1">
                      public/assets/letter/carta-0{currentPage + 1}.jpg
                    </code>
                    se visualizará aquí con zoom y alta resolución.
                  </p>
                </div>
              )}
            </div>

            {/* Paginación */}
            {pages.length > 1 && (
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-dashed border-[#2A2525]/15">
                <button
                  onClick={handlePrevPage}
                  className="btn-handcrafted btn-secondary text-xs py-1.5 px-3"
                >
                  ← Anterior
                </button>
                <div className="flex gap-1.5">
                  {pages.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                        currentPage === idx ? 'bg-[#FF6B6B] w-5' : 'bg-[#D9CEBF]'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  className="btn-handcrafted text-xs py-1.5 px-3"
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
