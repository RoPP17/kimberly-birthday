import React, { useMemo } from 'react';

export const ContinuousBackgroundConfetti = () => {
  // Generar 30 piezas de confeti artesanal con propiedades fijas para evitar re-renderizados
  const confettiPieces = useMemo(() => {
    const colors = ['#FF6B6B', '#F8B195', '#E9B872', '#A88BBA', '#A2D2BF', '#FFD166'];
    const shapes = ['rectangle', 'circle', 'streamer'];

    return Array.from({ length: 32 }, (_, i) => {
      const color = colors[i % colors.length];
      const shape = shapes[i % shapes.length];
      const left = Math.floor((i * 3.1) % 98); // Distribución horizontal equilibrada
      const duration = 9 + (i % 8) * 1.2; // Duración lenta y elegante (9s - 18s)
      const delay = (i % 10) * 1.5; // Desfases naturales
      const size = shape === 'streamer' ? { w: 4, h: 14 } : shape === 'circle' ? { w: 7, h: 7 } : { w: 8, h: 6 };
      const rotate = (i * 47) % 360;

      return {
        id: i,
        color,
        shape,
        left,
        duration,
        delay,
        size,
        rotate
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <style>{`
        @keyframes gentleConfettiFall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(25px);
            opacity: 0.65;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
            opacity: 0;
          }
        }
      `}</style>

      {confettiPieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-20px',
            left: `${p.left}%`,
            width: `${p.size.w}px`,
            height: `${p.size.h}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'streamer' ? '2px' : '1px',
            animation: `gentleConfettiFall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: 0.6,
            transform: `rotate(${p.rotate}deg)`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};

export default ContinuousBackgroundConfetti;
