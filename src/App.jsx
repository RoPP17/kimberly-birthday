import React, { useState, useRef } from 'react';
import { EasterEggProvider } from './components/effects/InteractiveEasterEggs';
import ContinuousBackgroundConfetti from './components/effects/ContinuousBackgroundConfetti';
import FloatingAudioControl from './components/common/FloatingAudioControl';
import Scene01Intro from './sections/Scene01Intro/Scene01Intro';
import Scene02ComicVideo from './sections/Scene02ComicVideo/Scene02ComicVideo';
import Scene03BirthdayReveal from './sections/Scene03BirthdayReveal/Scene03BirthdayReveal';
import Scene08HandwrittenLetter from './sections/Scene08HandwrittenLetter/Scene08HandwrittenLetter';
import Scene05ScrapbookGallery from './sections/Scene05ScrapbookGallery/Scene05ScrapbookGallery';
import SceneVideo from './sections/SceneVideo/SceneVideo';
import Scene06Memories from './sections/Scene06Memories/Scene06Memories';
import SceneWish from './sections/SceneWish/SceneWish';
import Scene04PersonalMessage from './sections/Scene04PersonalMessage/Scene04PersonalMessage';
import Scene07SurpriseCupcake from './sections/Scene07SurpriseCupcake/Scene07SurpriseCupcake';
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

  return (
    <EasterEggProvider>
      <div className={`min-h-screen w-full relative transition-colors duration-700 overflow-x-hidden ${isLetterReading ? 'bg-[#FAF6F0]' : 'bg-[#FAF7F2]'}`}>
        
        {/* Confeti continuo cayendo suavemente al fondo */}
        <ContinuousBackgroundConfetti />

        {/* Control flotante de audio */}
        <FloatingAudioControl />

        {/* CONTENIDO CENTRADO Y CÓMODO EN CUALQUIER PANTALLA (SIN TELÉFONOS FALSOS) */}
        {!hasStarted ? (
          <div className="relative z-10">
            <Scene01Intro onStart={handleStart} />
          </div>
        ) : (
          <div className="w-full min-h-screen flex justify-center py-6 px-4 relative z-10">
            {/* Espacio amplio al final (pb-48) para poder seguir bajando sin cortes abruptos */}
            <main className="w-full max-w-[480px] flex flex-col items-center gap-10 pb-48">
              
              {/* 1. Cortometraje Cómico */}
              <div id="scene-comic" ref={comicRef} className="w-full scroll-mt-6">
                <Scene02ComicVideo onComplete={handleComicComplete} />
              </div>

              {/* 2. Gran Revelación de Cumpleaños */}
              <div id="scene-reveal" ref={revealRef} className="w-full scroll-mt-6">
                <Scene03BirthdayReveal />
              </div>

              {/* 3. Sobre y Carta Manuscrita Real (Ubicada arriba) */}
              <div id="scene-letter" className="w-full scroll-mt-6">
                <Scene08HandwrittenLetter onLetterOpenStateChange={setIsLetterReading} />
              </div>

              {/* 4. Galería de Fotografías */}
              <div id="scene-photos" className="w-full scroll-mt-6">
                <Scene05ScrapbookGallery />
              </div>

              {/* 5. Video After Effects con su nombre */}
              <div id="scene-video" className="w-full scroll-mt-6">
                <SceneVideo />
              </div>

              {/* 6. Recuerdos */}
              <div id="scene-memories" className="w-full scroll-mt-6">
                <Scene06Memories />
              </div>

              {/* 7. Pedir un deseo */}
              <div id="scene-wish" className="w-full scroll-mt-6">
                <SceneWish />
              </div>

              {/* 8. Mensaje Personal Sincero ("Para ti, siempre", ubicado abajo) */}
              <div id="scene-message" className="w-full scroll-mt-6">
                <Scene04PersonalMessage />
              </div>

              {/* 9. Sorpresa: Cupcake y Vela */}
              <div id="scene-cupcake" className="w-full scroll-mt-6">
                <Scene07SurpriseCupcake />
              </div>

              {/* 10. Cierre y Celebración */}
              <div id="scene-final" className="w-full scroll-mt-6">
                <Scene09FinalCelebration />
              </div>

              {/* Espaciador inferior generoso para permitir seguir bajando cómodamente */}
              <div className="w-full h-36" aria-hidden="true" />

            </main>
          </div>
        )}
      </div>
    </EasterEggProvider>
  );
}

export default App;
