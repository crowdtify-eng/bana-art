'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
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

        {/* Slider */}
        <div
          className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden soft-shadow-lg cursor-col-resize"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <Image
              src="/before-after-1-before.jpg"
              alt="Before"
              fill
              className="object-cover"
            />
          </div>

          {/* After Image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src="/before-after-1-after.jpg"
              alt="After"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/80 transition-all"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-foreground">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14M16 5v14" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 text-white text-sm font-light bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            Before
          </div>
          <div className="absolute bottom-4 right-4 text-white text-sm font-light bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
