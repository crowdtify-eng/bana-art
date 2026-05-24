'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-[#faf9f7]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section label */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-light">About Artist</h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Artist Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative background accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-primary/8 -z-10" />
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/about-artist.jpg"
                  alt="Baby Nathan - Artist"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl shadow-black/10">
                <p className="text-2xl font-light text-primary">3+</p>
                <p className="text-xs text-foreground/60 tracking-wide">Years of Artistry</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-7 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-5">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                I am <span className="text-foreground font-medium">Baby Nathan</span>, a passionate artist who believes every artwork tells a story.
              </p>
              <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-light">
                I specialize in handcrafted pencil sketches, charcoal portraits, watercolor and oil paintings, and custom wall art — each created with deep emotion and attention to detail.
              </p>
              <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-light">
                Inspired by life and nature, my work blends creativity with realism to turn memories into meaningful art. With professional experience, including an internship at SPIC and multiple certifications, I continue to refine my craft.
              </p>
              <p className="text-base md:text-lg text-foreground/65 leading-relaxed font-light">
                My goal is simple — to transform your most cherished moments into timeless art that truly speaks to your soul.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '100+', label: 'Portraits' },
                { value: '70+', label: 'Happy Clients' },
                { value: '4.0★', label: 'Rating' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm shadow-black/5 border border-black/4"
                >
                  <p className="text-xl md:text-2xl font-light text-primary">{stat.value}</p>
                  <p className="text-xs text-foreground/55 mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={`https://wa.me/919363131475?text=${encodeURIComponent('Hi, I would like to order a portrait.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-light hover:bg-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Your slot now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
