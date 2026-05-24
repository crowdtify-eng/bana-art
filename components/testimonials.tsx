'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'This made my mother emotional. The detailing is out of this world!',
      author: 'Sneha R.',
      rating: 5,
    },
    {
      text: 'Perfect anniversary gift. My husband was blown away by the quality.',
      author: 'Karthik V.',
      rating: 5,
    },
    {
      text: 'Worth every rupee. This is now my most treasured possession.',
      author: 'Divya L.',
      rating: 5,
    },
    {
      text: 'Absolutely stunning work. The emotion captured in the portrait is incredible.',
      author: 'Rahul S.',
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Love from Our Clients</h2>
          <p className="text-lg text-foreground/60">
            Real stories from people who cherish their portraits
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="text-center space-y-6">
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-2xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
                      "{testimonial.text}"
                    </p>
                    <p className="text-lg text-foreground/60">– {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-6' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
