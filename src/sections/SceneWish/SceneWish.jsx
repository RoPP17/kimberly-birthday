import React, { useState, useEffect } from 'react';
import birthdayConfig from '../../config/birthday';
import soundEngine from '../../audio/soundEngine';
import { WashiTape } from '../../components/common/HandcraftedGraphics';

export const SceneWish = () => {
  const [wishText, setWishText] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  const wish = birthdayConfig.wish;

  const handleSaveWish = async (e) => {
    e.preventDefault();
    if (!wishText.trim()) return;

    soundEngine.playPop();
    setIsFlyingAway(true);

    // 1. Guardar de respaldo en localStorage
    try {
      localStorage.setItem('kimberly_birthday_wish', wishText.trim());
    } catch (err) {}

    // 2. Enviar automáticamente al correo de Andrés (andrespepe014@gmail.com)
    try {
      fetch(`https://formsubmit.co/ajax/${wish.recipientEmail || 'andrespepe014@gmail.com'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: '✨ Deseo de Cumpleaños de Kimberly',
          remitente: 'Kimberly ✨',
          deseo: wishText.trim(),
          fecha: new Date().toLocaleString('es-ES')
        })
      }).catch(() => {});
    } catch (err) {}

    // 3. Animación de cierre y vuelo del papel
    setTimeout(() => {
      soundEngine.playSparkle();
      setIsFlyingAway(false);
      setIsSaved(true);
    }, 700);
  };

  useEffect(() => {
    try {
      localStorage.removeItem('kimberly_birthday_wish');
    } catch (e) {}
  }, []);

  return (
    <section className="w-full py-6 select-none">
      <div className="text-center mb-5">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2A2525]">
          {wish.title}
        </h2>
        <p className="font-body text-sm text-[#685E5E] max-w-sm mx-auto mt-1 leading-relaxed">
          {wish.subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Washi tapes fijadas exactamente en las esquinas superiores del borde, fuera del área de escritura */}
        <WashiTape color="mint" className="-top-3 left-5 z-20" style={{ transform: 'rotate(-3deg)' }} />
        <WashiTape color="mustard" className="-top-3 right-5 z-20" style={{ transform: 'rotate(3deg)' }} />

        <div className="bg-[#FFFDF9] paper-sheet pt-8 px-6 pb-6 rounded-2xl border border-[#E9B872]/40 shadow-xl relative hand-border-soft overflow-hidden">
          {!isSaved ? (
            <div
              className={`transition-all duration-700 ease-in-out ${
                isFlyingAway
                  ? '-translate-y-28 scale-75 opacity-0 rotate-6'
                  : 'translate-y-0 scale-100 opacity-100 rotate-0'
              }`}
            >
              <form onSubmit={handleSaveWish} className="space-y-4">
                <textarea
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  placeholder={wish.placeholder}
                  rows={4}
                  required
                  className="w-full p-3.5 rounded-xl bg-[#FAF6F0] border border-[#2A2525]/15 focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 outline-none font-hand text-xl text-[#2A2525] leading-relaxed resize-none transition-all placeholder:text-[#8C8282]"
                />

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={!wishText.trim() || isFlyingAway}
                    className="btn-handcrafted text-sm py-2.5 px-6 shadow-md hover:scale-105 active:scale-95 disabled:opacity-40"
                  >
                    {wish.buttonSave}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Estado guardado: Frase exacta y limpia */
            <div className="text-center py-6 space-y-3">
              <div className="text-3xl animate-float">✉️✨</div>
              <p className="font-hand text-2xl text-[#FF6B6B] font-bold italic">
                «{wishText}»
              </p>
              <p className="font-display italic text-base sm:text-lg text-[#685E5E] pt-2">
                {wish.savedNotice}
              </p>
              <button
                onClick={() => {
                  setIsSaved(false);
                  setWishText('');
                }}
                className="text-xs font-body text-[#8C8282] hover:text-[#FF6B6B] underline pt-2 block mx-auto cursor-pointer"
              >
                (Escribir otro deseo o editar)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SceneWish;
