import React, { useMemo } from 'react';

export const StarBackground: React.FC = () => {
  // Generate static stars once
  const stars = useMemo(() => {
    return Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, // 1px to 3px
      twinkleDuration: `${Math.random() * 3 + 2}s`, // 2s to 5s
      floatDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-float"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.floatDuration,
            animationDelay: star.delay,
          }}
        >
          <div 
            className="rounded-full bg-slate-200 animate-twinkle"
            style={{
              width: star.size,
              height: star.size,
              animationDuration: star.twinkleDuration,
              animationDelay: star.delay,
              boxShadow: '0 0 2px 0px rgba(255, 255, 255, 0.1)'
            }}
          />
        </div>
      ))}
    </div>
  );
};