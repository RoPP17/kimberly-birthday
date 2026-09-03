import React, { useMemo } from 'react';

export const ContinuousBackgroundConfetti = () => {
  // Generar 45 piezas de confeti festivo artesanal con desfases negativos para que ya estén en pantalla desde el inicio
  const confettiPieces = useMemo(() => {
    const colors = [
      '#FF6B6B', // Coral festivo
      '#F5B041', // Dorado cálido
      '#FA8072', // Durazno
      '#A88BBA', // Lavanda
      '#48C9B0', // Menta
      '#F4D03F', // Amarillo sol
      '#EB984E'  // Naranja suave
    ];
    const shapes = ['ribbon', 'circle', 'square'];

    return Array.from({ length: 42 }, (_, i) => {
      const color = colors[i % colors.length];
      const shape = shapes[i % shapes.length];
      const left = ((i * 2.38) % 96) + 2; // Distribución equilibrada de 2% a 98%
      const duration = 7 + (i % 7) * 1.1; // Caída fluida y constante (7s a 14s)
      // Desfase negativo: garantiza que el confeti ya esté cayendo por toda la pantalla desde el milisegundo 0
      const negativeDelay = -((i * 0.45) % duration);
      const width = shape === 'ribbon' ? 5 : shape === 'circle' ? 9 : 8;
      const height = shape === 'ribbon' ? 14 : shape === 'circle' ? 9 : 8;
      const rotate = (i * 37) % 360;

      return {
        id: i,
        color,
        shape,
        left,
        duration,
        negativeDelay,
        width,
        height,
        rotate
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
      <style>{`
        @keyframes constantConfettiFall {
          0% {
            transform: translateY(-40px) rotate(0deg) rotateX(0deg) translateX(0px);
            opacity: 0.9;
          }
          25% {
            transform: translateY(28vh) rotate(90deg) rotateX(180deg) translateX(18px);
            opacity: 0.85;
          }
          50% {
            transform: translateY(55vh) rotate(180deg) rotateX(360deg) translateX(-15px);
            opacity: 0.85;
          }
          75% {
            transform: translateY(82vh) rotate(270deg) rotateX(540deg) translateX(15px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) rotateX(720deg) translateX(-10px);
            opacity: 0;
          }
        }
      `}</style>

      {confettiPieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-25px',
            left: `${p.left}%`,
            width: `${p.width}px`,
            height: `${p.height}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'ribbon' ? '2px' : '1.5px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            animation: `constantConfettiFall ${p.duration}s linear infinite`,
            animationDelay: `${p.negativeDelay}s`,
            opacity: 0.85,
            transform: `rotate(${p.rotate}deg)`,
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
};

export default ContinuousBackgroundConfetti;
