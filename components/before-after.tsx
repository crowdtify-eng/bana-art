'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return; // only while mouse button held
    updatePosition(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Before & After</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Transform your old or simple photos into emotional works of art
          </p>
        </div>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden soft-shadow-lg cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE — full size, always visible underneath */}
          <div className="absolute inset-0">
            <Image
              src="/before-after-1-before.jpg"
              alt="Before"
              fill
              className="object-cover object-center"
              draggable={false}
            />
          </div>

          {/* AFTER — same full size, clipped on the right.
              clipPath keeps the image at 100% width so object-cover
              never recalculates zoom — both images are pixel-identical
              in scale, only the visible area changes. */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <Image
              src="/before-after-1-after.jpg"
              alt="After"
              fill
              className="object-cover object-center"
              draggable={false}
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white/90 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          />

          {/* Handle knob */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 text-white text-sm font-light bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            Before
          </div>
          <div className="absolute bottom-4 right-4 text-white text-sm font-light bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
