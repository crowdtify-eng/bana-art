'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const categories = ['all', 'pencil-portrait', 'wall-art', 'still-life'];

  const galleryItems = [
    // Pencil Portraits
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil2-kKYFPicVThAw8qE9nCwncnTJRzPYOF.jpg', category: 'pencil-portrait', alt: 'Couple portrait sketch', title: 'Love Framed' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil3-3XsgMzoMgtxxCMy7Zol7ZYzMauvqAA.jpg', category: 'pencil-portrait', alt: 'Indian woman portrait', title: 'Cultural Grace' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil4-Uhi5HvoC5mlj299E2U2bnYYpqZRP7U.jpg', category: 'pencil-portrait', alt: 'Man with mustache portrait', title: 'Character Study' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil5-P8l64MWgOx89bXlCmXfsUyvETyiqN3.jpg', category: 'pencil-portrait', alt: 'Bearded man portrait', title: 'Expression' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil6-Wmpw2jiLYTmFte5ja25Y9Dax5fbvTv.jpg', category: 'pencil-portrait', alt: 'Man at desk sketch', title: 'Focused Moment' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil8-iTUSqfARl4SThn9zHpjjY98qahbIBr.jpg', category: 'pencil-portrait', alt: 'Baby portrait', title: 'Innocent Joy' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil11-FJ3McU2nkDux2RmcqhS0mnShKXg5MZ.jpg', category: 'pencil-portrait', alt: 'Woman sketch', title: 'Contemplation' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil12-fiCRjTCv1lPCpBVIZbUgq231t6epbt.jpg', category: 'pencil-portrait', alt: 'Baby portrait framed', title: 'Cherished Moment' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil13-UbH6zQuol8hK8ZXxEG32ds6mgBSpeb.jpg', category: 'pencil-portrait', alt: 'Woman portrait', title: 'Elegance' },
    { src: '/pencil-new-portrait.jpg', category: 'pencil-portrait', alt: 'Young man pencil portrait', title: 'Joyful Spirit' },

    // Wall Art Murals
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wall%20art%201-uat9L5gAV9pKZd96W4OSFaJkWxlpNh.jpg', category: 'wall-art', alt: 'Bon Appétit mural', title: 'Bon Appétit' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wall%20art%203-Qnarh9EgB2StbYNbdQP8xph9zLRxwv.jpg', category: 'wall-art', alt: 'Sherlock Corner mural', title: 'Sherlock Corner' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wall%20art%204-HpEEQNAAmn4RFQ8jd76yIGXIKTIdeT.jpg', category: 'wall-art', alt: 'Sherlock storefront', title: 'Storefront Mural' },

    // Still Life & Objects
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil%201-nemRXCMtoY5aewAUPxOTGyDazMAlxp.jpg', category: 'still-life', alt: 'Woman sketch in nature', title: 'Outdoor Sketch' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil7-UTQkJNyq52y3OyC4B5BnuQvfbBhefI.jpg', category: 'still-life', alt: 'Teapot and glass still life', title: 'Tea Time' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil9-e4DMRlSNIjpOfgunL760TXHvwc0OzP.jpg', category: 'still-life', alt: 'Decorative teapot', title: 'Ornate Vessel' },
    { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pencil10-PKoysjoZKtx4spC1glUqxIaLw2tdBs.jpg', category: 'still-life', alt: 'Horse portrait sketch', title: 'Majestic Horse' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categoryLabels: Record<string, string> = {
    all: 'All Works',
    'pencil-portrait': 'Pencil Portraits',
    'wall-art': 'Wall Art',
    'still-life': 'Still Life'
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">Our Works</h2>
          <p className="text-lg md:text-base text-foreground/60 max-w-2xl mx-auto">
            A collection of handcrafted pencil portraits, vibrant wall murals, and detailed still life sketches that capture emotion and artistry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 md:px-6 py-2 rounded-full font-light text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground soft-shadow-md scale-105'
                  : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        {/* Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer animate-in fade-in duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden soft-shadow-md hover:soft-shadow-lg transition-all duration-300 transform hover:scale-105">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  loading="lazy"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image Title */}
              <p className="mt-3 text-center text-sm font-light text-foreground/70 group-hover:text-foreground transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No works found in this category</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-foreground transition-colors duration-200 md:-top-10 z-10"
                aria-label="Close lightbox"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Size Image */}
              <div className="relative w-full max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl object-contain"
                  quality={95}
                  priority
                />
              </div>

              {/* Image Title and Hint */}
              <div className="text-center mt-4">
                <p className="text-white font-light text-lg mb-2">{selectedImage.title}</p>
                <p className="text-white/60 text-sm">
                  Click anywhere to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
