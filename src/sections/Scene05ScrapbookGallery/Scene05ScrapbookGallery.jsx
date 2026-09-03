import React, { useState } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape } from '../../components/common/HandcraftedGraphics';

export const Scene05ScrapbookGallery = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const photos = birthdayConfig.gallery.photos;

  const handleOpenPhoto = (index) => {
    soundEngine.playPop();
    setActivePhotoIndex(index);
  };

  const handleClosePhoto = () => {
    soundEngine.playPop();
    setActivePhotoIndex(null);
  };

  const handleNextPhoto = () => {
    soundEngine.playPop();
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    soundEngine.playPop();
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Contenido de la foto o placeholder artístico
  const renderPhotoContent = (photo) => {
    const [imgError, setImgError] = React.useState(false);

    if (photo.src && !imgError) {
      return (
        <img
          src={photo.src}
          alt={`Recuerdo ${photo.id}`}
          onError={() => setImgError(true)}
          className="w-full aspect-[4/5] object-cover rounded-sm transition-transform duration-500 group-hover:scale-102"
          loading="lazy"
        />
      );
    }

    return (
      <div
        className="w-full aspect-[4/5] flex flex-col items-center justify-center p-4 relative overflow-hidden"
        style={{
          backgroundColor: photo.placeholderColor || '#FAF4EF'
        }}
      >
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30 text-white/80 font-hand text-xl">
          📸
        </div>
        <span className="font-hand text-sm text-white/90 mt-2">
          {photo.id === 1 ? 'Tu foto favorita aquí' : `Foto ${photo.id}`}
        </span>
      </div>
    );
  };

  return (
    <section className="w-full py-4 select-none">
      {/* Cuadrícula estilo Scrapbook compacta */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
        {photos.map((photo, idx) => {
          const washiColors = ['peach', 'mint', 'lavender', 'mustard', 'coral'];
          const tapeColor = washiColors[idx % washiColors.length];
          const isFirstPhoto = idx === 0;

          return (
            <div
              key={photo.id}
              onClick={() => handleOpenPhoto(idx)}
              style={{
                transform: `rotate(${photo.rotation}deg)`
              }}
              className={`polaroid-card cursor-pointer group ${
                isFirstPhoto ? 'col-span-2 w-full' : 'col-span-1'
              }`}
            >
              {/* Washi tape superior */}
              <WashiTape
                color={tapeColor}
                className="-top-3 left-1/2 -translate-x-1/2"
                style={{ transform: `rotate(${-photo.rotation * 1.5}deg)` }}
              />

              {/* Contenido fotográfico: la primera foto es más grande y destacada */}
              <div
                className={`overflow-hidden bg-[#F4EFEA] rounded-sm relative aspect-[4/5] ${
                  isFirstPhoto ? 'max-h-[340px]' : 'max-h-[220px]'
                }`}
              >
                {renderPhotoContent(photo)}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#2A2525] font-body text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    Ver 🔍
                  </span>
                </div>
              </div>

              {/* Solo la primera foto lleva pie de foto personalizado; las demás son limpias */}
              {isFirstPhoto && photo.caption && (
                <div className="mt-2.5 px-1 text-center">
                  <p className="font-hand text-xl sm:text-2xl font-bold text-[#2A2525] leading-snug">
                    {photo.caption}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Visor modal: se cierra instantáneamente al tocar a cualquier costado en la parte vacía */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-xs flex items-center justify-center p-6 cursor-pointer select-none"
          onClick={handleClosePhoto}
        >
          {/* Tarjeta compacta para dejar amplio espacio a los costados */}
          <div
            className="bg-white p-3 sm:p-4 rounded-2xl max-w-[310px] w-full relative shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#2A2525]/10">
              <span className="font-body text-xs text-[#685E5E] font-semibold">
                {activePhotoIndex + 1} de {photos.length}
              </span>
              <button
                onClick={handleClosePhoto}
                className="w-7 h-7 rounded-full bg-[#FAF4EF] text-[#2A2525] hover:bg-[#FF6B6B] hover:text-white transition-colors flex items-center justify-center text-sm font-bold"
                title="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="rounded-lg overflow-hidden bg-[#F8F5F0]">
              {renderPhotoContent(photos[activePhotoIndex])}
            </div>

            {activePhotoIndex === 0 && photos[0].caption && (
              <p className="font-hand text-lg text-center text-[#2A2525] font-bold mt-2.5">
                {photos[0].caption}
              </p>
            )}

            <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#2A2525]/10">
              <button
                onClick={handlePrevPhoto}
                className="px-3 py-1 text-xs font-body font-bold text-[#685E5E] hover:text-[#2A2525] rounded hover:bg-[#FAF4EF]"
              >
                ◀ Anterior
              </button>
              <button
                onClick={handleNextPhoto}
                className="px-3 py-1 text-xs font-body font-bold text-[#685E5E] hover:text-[#2A2525] rounded hover:bg-[#FAF4EF]"
              >
                Siguiente ▶
              </button>
            </div>

            <p className="text-center text-[11px] font-body text-[#8C8282] mt-2">
              (Toca a un costado para cerrar)
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Scene05ScrapbookGallery;
