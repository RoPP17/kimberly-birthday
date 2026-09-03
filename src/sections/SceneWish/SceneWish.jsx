import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape, DoodleStar, DoodleSparkle } from '../../components/common/HandcraftedGraphics';

export const SceneWish = () => {
  const [wishText, setWishText] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isFolding, setIsFolding] = useState(false);
  const wish = birthdayConfig.wish;

  // Recuperar deseo guardado previamente de localStorage si existe
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kimberly_birthday_wish');
      if (saved) {
        setWishText(saved);
        setIsSaved(true);
      }
    } catch (e) {}
  }, []);

  const handleSaveWish = (e) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    soundEngine.playPop();
    setIsFolding(true);

    // Guardar en localStorage de manera real
    try {
      localStorage.setItem('kimberly_birthday_wish', wishText.trim());
    } catch (e) {}

    setTimeout(() => {
      soundEngine.playSparkle();
      setIsFolding(false);
      setIsSaved(true);
    }, 600);
  };

  const handleEditAgain = () => {
    soundEngine.playPop();
    setIsSaved(false);
  };

  // Crear enlace real a WhatsApp para enviar opcionalmente el deseo
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `¡Hola Andrés! ✨ Te comparto mi deseo de cumpleaños que escribí en la página: "${wishText}"`
  )}`;

  return (
    <section className="w-full max-w-xl mx-auto py-10 px-4 select-none">
      <div className="text-center mb-6">
        <span className="hand-badge text-xs sm:text-sm">
          {wish.badge}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2A2525] mt-2">
          {wish.title}
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#685E5E] max-w-md mx-auto mt-1 leading-relaxed">
          {wish.subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Washi tapes decorativas */}
        <WashiTape color="mint" className="-top-3 left-6" />
        <WashiTape color="mustard" className="-top-3 right-6" />

        {/* Tarjeta estilo hoja de libreta artesanal */}
        <div
          className={`bg-[#FFFDF9] paper-sheet p-6 sm:p-8 rounded-2xl border-2 border-[#E9B872]/40 shadow-xl transition-all duration-500 relative hand-border-soft ${
            isFolding ? 'scale-95 opacity-50 rotate-2' : 'scale-100 opacity-100 rotate-0'
          }`}
        >
          {!isSaved ? (
            <form onSubmit={handleSaveWish} className="space-y-4">
              <div className="relative">
                {/* Cuaderno con renglones tenues */}
                <textarea
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder={wish.placeholder}
                  rows={4}
                  required
                  className="w-full p-4 rounded-xl bg-[#FAF6F0] border border-[#2A2525]/15 focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 outline-none font-hand text-xl text-[#2A2525] leading-relaxed resize-none transition-all placeholder:text-[#8C8282]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="font-hand text-sm text-[#8C8282]">
                  (Se guarda de forma segura en tu navegador)
                </span>
                <button
                  type="submit"
                  disabled={!wishText.trim()}
                  className="btn-handcrafted text-base py-2.5 px-6 shadow-md hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                >
                  {wish.buttonSave}
                </button>
              </div>
            </form>
          ) : (
            /* Estado de deseo guardado con animación de sobrecito */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] border-2 border-[#A2D2BF] mx-auto flex items-center justify-center text-3xl animate-bounce">
                🌟
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#2A2525]">
                {wish.savedTitle}
              </h3>

              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-dashed border-[#A2D2BF] max-w-md mx-auto">
                <p className="font-hand text-xl text-[#FF6B6B] font-bold italic">
                  «{wishText}»
                </p>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#685E5E] max-w-sm mx-auto leading-relaxed">
                {wish.savedMessage}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleEditAgain}
                  className="px-4 py-2 text-xs font-body text-[#685E5E] hover:text-[#2A2525] underline"
                >
                  Modificar mi deseo
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-handcrafted text-sm py-2 px-5 bg-[#25D366] hover:bg-[#1EBE5D] shadow-sm"
                >
                  {wish.shareWhatsappText}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SceneWish;
