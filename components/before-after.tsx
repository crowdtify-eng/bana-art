'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Before & After</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Transform your photos into emotional works of art
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden soft-shadow-lg cursor-col-resize select-none"
          style={{
            aspectRatio: '4 / 3',
            background: '#fff',
          }}
          onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
          onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX); }}
          onMouseUp={() => { isDragging.current = false; }}
          onMouseLeave={() => { isDragging.current = false; }}
          onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
          onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
        >

          {/* BEFORE — full image, no crop */}
          <div className="absolute inset-0 bg-white">
            <Image
              src="/before-after-1-before.jpg"
              alt="Before — original photo"
              fill
              className="object-contain"
              draggable={false}
              priority
            />
          </div>

          {/* AFTER — same full size, clipped by clipPath so zoom never changes */}
          <div
            className="absolute inset-0 bg-white"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/before-after-1-after.jpg"
              alt="After — pencil portrait"
              fill
              className="object-contain"
              draggable={false}
              priority
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-gray-400/80 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          />

          {/* Handle knob */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-11 h-11 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 text-gray-700 text-xs font-medium bg-white/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm pointer-events-none border border-gray-100">
            📷 Before
          </div>
          <div className="absolute bottom-4 right-4 text-gray-700 text-xs font-medium bg-white/80 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm pointer-events-none border border-gray-100">
            ✏️ After
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-foreground/40 font-light mt-4">
          Drag the slider to compare
        </p>
      </div>
    </section>
  );
}
