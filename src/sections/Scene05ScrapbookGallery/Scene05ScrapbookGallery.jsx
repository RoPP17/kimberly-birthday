import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape, HandDrawnPin, DoodleStar, DoodleSparkle } from '../../components/common/HandcraftedGraphics';

export const Scene05ScrapbookGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const photos = birthdayConfig.gallery.photos;

  const handleOpenPhoto = (index) => {
    soundEngine.playPop();
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePhoto = () => {
    soundEngine.playPop();
    setSelectedPhotoIndex(null);
    document.body.style.overflow = '';
  };

  const handleNext = () => {
    soundEngine.playPop();
    setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    soundEngine.playPop();
    setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Navegación por teclado (Flechas y Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleClosePhoto();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Gestos táctiles de deslizamiento (Swipe)
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext(); // Swipe izquierda -> siguiente
      else handlePrev(); // Swipe derecha -> anterior
    }
    setTouchStartX(null);
  };

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Renderizar ilustración de Polaroid si la foto aún no está subida a /assets/photos/
  const renderPhotoContent = (photo, isViewer = false) => {
    const hasError = imageErrors[photo.id];

    if (hasError) {
      return (
        <div
          className={`w-full flex flex-col items-center justify-center text-center p-6 rounded-sm select-none ${
            isViewer ? 'min-h-[320px] max-h-[60vh]' : 'aspect-square'
          }`}
          style={{
            backgroundColor: photo.placeholderColor || '#F8B195',
            color: '#FFFFFF'
          }}
        >
          <span className="text-4xl sm:text-5xl mb-3 drop-shadow-sm">📸</span>
          <p className="font-hand text-xl sm:text-2xl font-bold drop-shadow-sm">
            {photo.caption}
          </p>
          <span className="text-xs sm:text-sm font-body opacity-90 mt-2 bg-black/15 px-3 py-1 rounded-full">
            {photo.src.replace('./', '')}
          </span>
        </div>
      );
    }

    return (
      <img
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        onError={() => handleImageError(photo.id)}
        className={`w-full object-cover rounded-sm transition-transform duration-300 ${
          isViewer ? 'max-h-[70vh] object-contain' : 'aspect-square'
        }`}
      />
    );
  };

  return (
    <section className="py-16 px-4 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado de la galería */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <DoodleSparkle size={20} color="#FF6B6B" />
            <span className="hand-badge text-xs sm:text-sm">ÁLBUM DE RECUERDOS</span>
            <DoodleSparkle size={20} color="#E9B872" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2A2525]">
            {birthdayConfig.gallery.title}
          </h2>
          <p className="font-body text-sm sm:text-base text-[#685E5E] max-w-md mx-auto mt-2">
            {birthdayConfig.gallery.subtitle}
          </p>
        </div>

        {/* Cuadrícula estilo Scrapbook con inclinaciones y Washi Tapes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 px-2">
          {photos.map((photo, idx) => {
            const washiColors = ['peach', 'mint', 'lavender', 'mustard', 'coral'];
            const tapeColor = washiColors[idx % washiColors.length];

            return (
              <div
                key={photo.id}
                onClick={() => handleOpenPhoto(idx)}
                style={{
                  transform: `rotate(${photo.rotation}deg)`
                }}
                className="polaroid-card cursor-pointer group"
              >
                {/* Washi tape superior */}
                <WashiTape
                  color={tapeColor}
                  className="-top-3.5 left-1/2 -translate-x-1/2"
                  style={{ transform: `rotate(${-photo.rotation * 1.5}deg)` }}
                />

                {/* Contenido fotográfico */}
                <div className="overflow-hidden bg-[#F4EFEA] rounded-sm relative">
                  {renderPhotoContent(photo)}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#2A2525] font-hand text-base px-3 py-1 rounded-full shadow-sm">
                      Ver foto 🔍
                    </span>
                  </div>
                </div>

                {/* Pie de foto manuscrito */}
                <div className="mt-3 px-1">
                  <p className="font-hand text-lg sm:text-xl font-bold text-[#2A2525] leading-snug">
                    {photo.caption}
                  </p>
                  <div className="flex items-center justify-between mt-1 pt-1 border-t border-dashed border-[#E9B872]/40 text-xs font-hand text-[#8C8282]">
                    <span>{photo.date}</span>
                    <span className="text-[#FF6B6B] font-bold">#{photo.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          VISOR DE FOTOS PANTALLA COMPLETA (LIGHTBOX)
          ========================================== */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botón cerrar */}
          <button
            onClick={handleClosePhoto}
            aria-label="Cerrar visor"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all z-20"
          >
            ✕
          </button>

          {/* Contador de fotos */}
          <div className="absolute top-6 left-6 font-hand text-white/80 text-lg sm:text-xl z-20">
            {selectedPhotoIndex + 1} de {photos.length}
          </div>

          {/* Tarjeta de foto en visor */}
          <div className="relative max-w-xl w-full bg-white p-4 sm:p-6 rounded-xl shadow-2xl z-10 hand-border-soft">
            {/* Foto ampliada */}
            <div className="bg-[#FAF7F2] rounded-lg overflow-hidden flex items-center justify-center">
              {renderPhotoContent(photos[selectedPhotoIndex], true)}
            </div>

            {/* Texto descriptivo de la foto */}
            <div className="mt-4 text-center">
              <h3 className="font-hand text-2xl sm:text-3xl font-bold text-[#2A2525]">
                {photos[selectedPhotoIndex].caption}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#8C8282] mt-1">
                {photos[selectedPhotoIndex].date} • {photos[selectedPhotoIndex].tag}
              </p>
            </div>
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/40 active:scale-90 transition-all z-20 hidden sm:flex"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente foto"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/40 active:scale-90 transition-all z-20 hidden sm:flex"
          >
            ›
          </button>

          {/* Indicación táctil móvil */}
          <div className="sm:hidden text-white/60 font-hand text-sm mt-4">
            Desliza hacia los lados para pasar de foto ↔
          </div>
        </div>
      )}
    </section>
  );
};

export default Scene05ScrapbookGallery;
