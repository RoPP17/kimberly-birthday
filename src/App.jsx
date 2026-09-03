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

  return (
    <EasterEggProvider>
      <div className={`min-h-screen relative transition-opacity duration-700 ${isLetterReading ? 'bg-[#FAF6F0]' : 'bg-[#FAF7F2]'}`}>
        {/* Control flotante de audio */}
        <FloatingAudioControl />

        {/* Pantalla 1: Intriga de bienvenida */}
        {!hasStarted ? (
          <Scene01Intro onStart={handleStart} />
        ) : (
          <main className="w-full flex flex-col items-center">
            {/* Pantalla 2: Cómic interactivo */}
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

            {/* Pantalla 8: Sobre y carta manuscrita física */}
            <div className="w-full">
              <Scene08HandwrittenLetter onLetterOpenStateChange={setIsLetterReading} />
            </div>

            {/* Pantalla 9: Mensaje final y celebración */}
            <div className="w-full">
              <Scene09FinalCelebration onReplay={handleReplay} />
            </div>
          </main>
        )}
      </div>
    </EasterEggProvider>
  );
}

export default App;
