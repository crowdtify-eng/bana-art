"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const artworks = [
  { src: "/hero-artwork-1.jpg", alt: "Artwork 1", label: "Portrait Study" },
  { src: "/hero-artwork-2.jpg", alt: "Artwork 2", label: "Charcoal Series" },
  { src: "/hero-artwork-3.jpg", alt: "Artwork 3", label: "Fine Lines" },
  { src: "/hero-artwork-4.jpg", alt: "Artwork 4", label: "Memory Sketch" },
];

// Full fan spread — completely visible, no overlap when expanded
const FAN_EXPANDED = [
  { rotate: -42, x: -195, y: 28 },
  { rotate: -14, x: -65,  y: 8  },
  { rotate:  14, x:  65,  y: 8  },
  { rotate:  42, x:  195, y: 28 },
];

// Stacked — tight pile with tiny offsets so they look like a deck
const FAN_STACKED = [
  { rotate: -4, x: -6, y: 0 },
  { rotate: -1, x: -2, y: -3 },
  { rotate:  2, x:  2, y: -6 },
  { rotate:  5, x:  6, y: -9 },
];

export default function Hero() {
  const [expanded, setExpanded] = useState(false);
  const autoTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAll = () => {
    if (autoTimer.current)    clearTimeout(autoTimer.current);
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
  };

  const scheduleExpand = useCallback(() => {
    clearAll();
    autoTimer.current = setTimeout(() => {
      setExpanded(true);
      collapseTimer.current = setTimeout(() => {
        setExpanded(false);
        scheduleExpand();
      }, 3200);
    }, 4000);
  }, []);

  useEffect(() => {
    scheduleExpand();
    return clearAll;
  }, [scheduleExpand]);

  const toggle = () => {
    clearAll();
    setExpanded((prev) => {
      const next = !prev;
      if (next) {
        collapseTimer.current = setTimeout(() => {
          setExpanded(false);
          scheduleExpand();
        }, 4000);
      } else {
        scheduleExpand();
      }
      return next;
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center justify-center px-4 py-20"
    >
      <div className="flex flex-col items-center text-center gap-5 w-full max-w-2xl">

        {/* Badge */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-500 tracking-widest uppercase font-light">
          Handcrafted Portraits
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
          Turn Your Memories<br className="hidden sm:block" /> into{" "}
          <span className="font-semibold text-gray-800">Timeless Art</span>
        </h1>

        {/* Sub-text */}
        <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed font-light">
          Handmade pencil and charcoal portraits crafted with emotion,
          delivered across India.
        </p>

        {/* ── Card Fan ── */}
        <div className="my-4 w-full flex justify-center">
          {/* Outer wrapper gives the fanned cards room to breathe */}
          <div
            className="relative cursor-pointer"
            style={{ width: 540, height: 230 }}
            onClick={toggle}
            title={expanded ? "Click to stack" : "Click to fan out"}
          >
            {artworks.map((art, i) => {
              const pos = expanded ? FAN_EXPANDED[i] : FAN_STACKED[i];
              return (
                <div
                  key={i}
                  className="absolute rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
                  style={{
                    width: 140,
                    height: 185,
                    /* Cards originate from the horizontal centre */
                    left: "50%",
                    top: 0,
                    marginLeft: -70, // half of card width
                    transition: "transform 0.55s cubic-bezier(0.34, 1.45, 0.64, 1)",
                    transitionDelay: `${i * 35}ms`,
                    transform: `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.rotate}deg)`,
                    zIndex: expanded ? i : artworks.length - i,
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={art.src}
                    alt={art.alt}
                    fill
                    className="object-cover pointer-events-none"
                  />
                  {/* Label shown only when expanded */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-2"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      transitionDelay: expanded ? "0.3s" : "0s",
                    }}
                  >
                    <p className="text-white text-[10px] font-light tracking-wide">
                      {art.label}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Tap hint inside the fan area */}
            <p
              className="absolute bottom-0 left-0 right-0 text-center text-[10px] text-gray-300 tracking-widest uppercase font-light pointer-events-none"
              style={{
                opacity: expanded ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            >
              tap to explore
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://wa.me/919363131475?text=Hi%2C%20I%20would%20like%20to%20order%20a%20portrait."
            target="_blank"
            className="bg-gray-900 hover:bg-gray-700 text-white font-light px-8 py-3 rounded-full shadow-md transition-all duration-200 tracking-wide"
          >
            Order on WhatsApp
          </Link>
          <Link
            href="#gallery"
            className="border border-gray-300 hover:border-gray-600 text-gray-700 font-light px-8 py-3 rounded-full transition-all duration-200 tracking-wide"
          >
            View Gallery
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 text-sm text-gray-400 font-light">
          <Star className="w-4 h-4 fill-gray-500 text-gray-500" />
          <span>Rated 4.0 by Happy Clients</span>
        </div>

      </div>
    </section>
  );
}
