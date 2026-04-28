'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function AnimatedLogo({ size = 60, animate = true }: { size?: number; animate?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${animate && isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-90'}`}
      style={{
        animation: animate && isVisible ? 'float 3s ease-in-out infinite' : 'none',
      }}
    >
      <Image
        src="/logo.png"
        alt="eLand Register - Secure Digital Property Registration"
        width={size}
        height={size}
        className="drop-shadow-lg hover:drop-shadow-2xl transition-all"
        priority
      />
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}
