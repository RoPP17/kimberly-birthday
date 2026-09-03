import React, { useState, useRef } from 'react';
import { EasterEggProvider } from './components/effects/InteractiveEasterEggs';
import FloatingAudioControl from './components/common/FloatingAudioControl';
import Scene01Intro from './sections/Scene01Intro/Scene01Intro';
import Scene02ComicVideo from './sections/Scene02ComicVideo/Scene02ComicVideo';
import Scene03BirthdayReveal from './sections/Scene03BirthdayReveal/Scene03BirthdayReveal';
import Scene04PersonalMessage from './sections/Scene04PersonalMessage/Scene04PersonalMessage';
import Scene05ScrapbookGallery from './sections/Scene05ScrapbookGallery/Scene05ScrapbookGallery';
import Scene06Memories from './sections/Scene06Memories/Scene06Memories';
import Scene07SurpriseCupcake from './sections/Scene07SurpriseCupcake/Scene07SurpriseCupcake';
import Scene08HandwrittenLetter from './sections/Scene08HandwrittenLetter/Scene08HandwrittenLetter';
import Scene09FinalCelebration from './sections/Scene09FinalCelebration/Scene09FinalCelebration';

export function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLetterReading, setIsLetterReading] = useState(false);
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' | 'desktop'

  const comicRef = useRef(null);
  const revealRef = useRef(null);

  const handleStart = () => {
    setHasStarted(true);
    setTimeout(() => {
      comicRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleComicComplete = () => {
    setTimeout(() => {
      revealRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReplay = () => {
    comicRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Contenido principal de todas las escenas
  const renderExperienceContent = () => (
    <div className="w-full flex flex-col items-center">
      {/* Pantalla 2: Cómic interactivo dinámico */}
      <div ref={comicRef} className="w-full">
        <Scene02ComicVideo onComplete={handleComicComplete} />
      </div>

      {/* Pantalla 3: Gran revelación de cumpleaños */}
      <div ref={revealRef} className="w-full">
        <Scene03BirthdayReveal onContinue={() => {
          const el = document.getElementById('personal-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />
      </div>

      {/* Pantalla 4: Mensaje personal */}
      <div id="personal-section" className="w-full">
        <Scene04PersonalMessage />
      </div>

      {/* Pantalla 5: Galería de fotos scrapbook */}
      <div className="w-full">
        <Scene05ScrapbookGallery />
      </div>

      {/* Pantalla 6: Cápsulas de memoria */}
      <div className="w-full">
        <Scene06Memories />
      </div>

      {/* Pantalla 7: Sorpresa interactiva (Cupcake & deseo) */}
      <div className="w-full">
        <Scene07SurpriseCupcake />
      </div>

      {/* Pantalla 8: Sobre y carta manuscrita física (foto real) */}
      <div className="w-full">
        <Scene08HandwrittenLetter onLetterOpenStateChange={setIsLetterReading} />
      </div>

      {/* Pantalla 9: Mensaje final y celebración */}
      <div className="w-full">
        <Scene09FinalCelebration onReplay={handleReplay} />
      </div>
    </div>
  );

  return (
    <EasterEggProvider>
      <div className={`min-h-screen relative transition-colors duration-700 ${isLetterReading ? 'bg-[#FAF6F0]' : 'bg-[#FAF7F2]'}`}>
        {/* Selector de modo de vista (exclusivo para escritorio) */}
        <div className="hidden md:flex fixed top-4 left-6 z-[998] bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#2A2525]/15 shadow-md items-center gap-1">
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-1 rounded-full text-xs font-hand font-bold transition-all ${
              viewMode === 'mobile'
                ? 'bg-[#FF6B6B] text-white shadow-sm'
                : 'text-[#685E5E] hover:text-[#2A2525]'
            }`}
          >
            📱 Vista Móvil (Simulador)
          </button>
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-1 rounded-full text-xs font-hand font-bold transition-all ${
              viewMode === 'desktop'
                ? 'bg-[#FF6B6B] text-white shadow-sm'
                : 'text-[#685E5E] hover:text-[#2A2525]'
            }`}
          >
            💻 Vista Expandida
          </button>
        </div>

        {/* Control flotante de audio */}
        <FloatingAudioControl />

        {/* RENDERIZADO CONDICIONAL SEGÚN MODO DE VISTA */}
        {viewMode === 'mobile' ? (
          /* MODO SIMULADOR MÓVIL EN ESCRITORIO (Y NATIVO EN CELULARES) */
          <div className="w-full min-h-screen flex items-center justify-center md:py-8">
            <div className="w-full md:max-w-[420px] md:h-[90vh] md:rounded-[44px] md:border-[10px] md:border-[#2A2525] md:shadow-2xl md:overflow-y-auto bg-[#FAF7F2] relative flex flex-col">
              {/* Notch superior decorativo en modo simulador */}
              <div className="hidden md:block sticky top-0 left-0 right-0 h-6 bg-[#FAF7F2] z-50 text-center">
                <div className="w-24 h-4 bg-[#2A2525] mx-auto rounded-b-xl" />
              </div>

              {!hasStarted ? (
                <Scene01Intro onStart={handleStart} />
              ) : (
                <main className="flex-1 w-full">
                  {renderExperienceContent()}
                </main>
              )}
            </div>
          </div>
        ) : (
          /* MODO EXPANDIDO / PANTALLA COMPLETA EN ESCRITORIO */
          <div className="w-full min-h-screen flex flex-col items-center">
            {!hasStarted ? (
              <Scene01Intro onStart={handleStart} />
            ) : (
              <main className="w-full max-w-2xl mx-auto py-8">
                {renderExperienceContent()}
              </main>
            )}
          </div>
        )}
      </div>
    </EasterEggProvider>
  );
}

export default App;
