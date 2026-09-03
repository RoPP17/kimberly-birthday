import React, { useState, useRef } from 'react';
import { EasterEggProvider } from './components/effects/InteractiveEasterEggs';
import FloatingAudioControl from './components/common/FloatingAudioControl';
import FloatingNav from './components/common/FloatingNav';
import Scene01Intro from './sections/Scene01Intro/Scene01Intro';
import Scene02ComicVideo from './sections/Scene02ComicVideo/Scene02ComicVideo';
import Scene03BirthdayReveal from './sections/Scene03BirthdayReveal/Scene03BirthdayReveal';
import Scene04PersonalMessage from './sections/Scene04PersonalMessage/Scene04PersonalMessage';
import Scene05ScrapbookGallery from './sections/Scene05ScrapbookGallery/Scene05ScrapbookGallery';
import Scene06Memories from './sections/Scene06Memories/Scene06Memories';
import SceneWish from './sections/SceneWish/SceneWish';
import Scene07SurpriseCupcake from './sections/Scene07SurpriseCupcake/Scene07SurpriseCupcake';
import Scene08HandwrittenLetter from './sections/Scene08HandwrittenLetter/Scene08HandwrittenLetter';
import Scene09FinalCelebration from './sections/Scene09FinalCelebration/Scene09FinalCelebration';

export function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLetterReading, setIsLetterReading] = useState(false);

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
    }, 120);
  };

  const handleReplay = () => {
    comicRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <EasterEggProvider>
      <div className={`min-h-screen w-full relative transition-colors duration-700 ${isLetterReading ? 'bg-[#FAF6F0]' : 'bg-[#FAF7F2]'}`}>
        
        {/* Control flotante de audio */}
        <FloatingAudioControl />

        {/* Navegación flotante discreta entre escenas */}
        <FloatingNav isVisible={hasStarted} />

        {/* FLUJO RESPONSIVE NATURAL (SIN DISPOSITIVOS FICTICIOS) */}
        {!hasStarted ? (
          <Scene01Intro onStart={handleStart} />
        ) : (
          <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col items-center gap-12 sm:gap-16">
            
            {/* 1. Cortometraje Cómico */}
            <div id="scene-comic" ref={comicRef} className="w-full scroll-mt-6">
              <Scene02ComicVideo onComplete={handleComicComplete} />
            </div>

            {/* 2. Gran Revelación de Cumpleaños */}
            <div id="scene-reveal" ref={revealRef} className="w-full scroll-mt-6">
              <Scene03BirthdayReveal onContinue={() => {
                const el = document.getElementById('scene-message');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} />
            </div>

            {/* 3. Mensaje Personal Sincero */}
            <div id="scene-message" className="w-full scroll-mt-6">
              <Scene04PersonalMessage />
            </div>

            {/* 4. Galería Scrapbook de Fotografías */}
            <div id="scene-photos" className="w-full scroll-mt-6">
              <Scene05ScrapbookGallery />
            </div>

            {/* 5. Cápsulas de Memoria */}
            <div id="scene-memories" className="w-full scroll-mt-6">
              <Scene06Memories />
            </div>

            {/* 6. Nueva Sección: Pedir un deseo / Regalo */}
            <div id="scene-wish" className="w-full scroll-mt-6">
              <SceneWish />
            </div>

            {/* 7. Sorpresa Interactiva: Cupcake y Vela */}
            <div id="scene-cupcake" className="w-full scroll-mt-6">
              <Scene07SurpriseCupcake />
            </div>

            {/* 8. Sobre Físico y Carta Manuscrita (Foto real) */}
            <div id="scene-letter" className="w-full scroll-mt-6">
              <Scene08HandwrittenLetter onLetterOpenStateChange={setIsLetterReading} />
            </div>

            {/* 9. Mensaje Final y Celebración */}
            <div id="scene-final" className="w-full pb-20 scroll-mt-6">
              <Scene09FinalCelebration onReplay={handleReplay} />
            </div>

          </main>
        )}
      </div>
    </EasterEggProvider>
  );
}

export default App;
