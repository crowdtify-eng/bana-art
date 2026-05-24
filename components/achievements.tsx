'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: '🏆',
    value: '100+',
    label: 'Portraits Completed',
    desc: 'Successfully delivered hundreds of artworks with satisfied clients.',
  },
  {
    icon: '⭐',
    value: '4.0',
    label: 'Customer Rating',
    desc: 'Loved and trusted by clients for quality and detail.',
  },
  {
    icon: '🎨',
    value: '3+',
    label: 'Years of Experience',
    desc: 'Consistent artistic excellence and creative growth.',
  },
  {
    icon: '📦',
    value: '∞',
    label: 'Pan India Delivery',
    desc: 'Delivering artwork safely across the country.',
  },
  {
    icon: '💬',
    value: '70+',
    label: 'Happy Clients',
    desc: 'Building strong relationships through meaningful art.',
  },
];

const achievementImages = [
  { src: '/achievement-3.jpg', alt: 'Art Internship Certificate - Shara School of Arts' },
  { src: '/achievement-5.jpg', alt: 'Achievement Recognition' },
];

export default function Achievements() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">
            Recognition & Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4">Our Achievements</h2>
          <p className="text-lg text-foreground/55 max-w-xl mx-auto font-light">
            Years of dedication recognized by clients, institutions, and communities across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative bg-[#faf9f7] rounded-2xl p-5 text-center border border-black/4 
                hover:shadow-lg hover:shadow-black/8 hover:-translate-y-1 transition-all duration-400
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-light text-primary mb-1">{stat.value}</p>
              <p className="text-xs font-medium text-foreground/80 mb-2 tracking-wide">{stat.label}</p>
              <p className="text-xs text-foreground/50 leading-relaxed font-light hidden md:block">{stat.desc}</p>
              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Certificate Gallery */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-light text-foreground/80">Certificates & Recognition</h3>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {achievementImages.map((img, i) => (
              <div
                key={img.src}
                className={`group relative rounded-2xl overflow-hidden shadow-md shadow-black/8 
                  hover:shadow-xl hover:shadow-black/15 hover:-translate-y-2 transition-all duration-400
                  ${i === 0 || i === 2 ? 'md:row-span-1' : ''}
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-light leading-tight">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
