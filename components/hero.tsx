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

// Fan positions: each card gets a rotation + translate offset when expanded
const fanPositions = [
  { rotate: -28, x: -140, y: 10, z: 0 },
  { rotate: -10, x: -45, y: -15, z: 1 },
  { rotate: 10,  x:  45, y: -15, z: 2 },
  { rotate: 28,  x: 140, y: 10,  z: 3 },
];

export default function Hero() {
  const [expanded, setExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoExpand = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setExpanded(true);
      // Auto-collapse after 3s of being expanded
      collapseTimerRef.current = setTimeout(() => {
        setExpanded(false);
        startAutoExpand();
      }, 3000);
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoExpand();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
    };
  }, [startAutoExpand]);

  const handleInteract = () => {
    // Cancel auto timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
    setExpanded((prev) => {
      const next = !prev;
      if (next) {
        // Auto collapse after 4s then restart cycle
        collapseTimerRef.current = setTimeout(() => {
          setExpanded(false);
          startAutoExpand();
        }, 4000);
      } else {
        startAutoExpand();
      }
      return next;
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] items-center gap-8 md:gap-12">

        {/* LEFT — Card Fan */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <CardFan
            expanded={expanded}
            onInteract={handleInteract}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>

        {/* CENTER — text content */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-500 tracking-widest uppercase font-light">
            Handcrafted Portraits
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
            Turn Your Memories{" "}
            <br className="hidden md:block" />
            into{" "}
            <span className="font-semibold text-gray-800">Timeless Art</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed font-light">
            Handmade pencil and charcoal portraits crafted with emotion,
            delivered across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
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
          <div className="flex items-center gap-1.5 text-sm text-gray-400 mt-1 font-light">
            <Star className="w-4 h-4 fill-gray-500 text-gray-500" />
            <span>Rated 4.0 by Happy Clients</span>
          </div>
        </div>

        {/* RIGHT — second Card Fan (mirror) */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <CardFanRight
            expanded={expanded}
            onInteract={handleInteract}
          />
        </div>
      </div>

      {/* Mobile: single card fan */}
      <div className="flex md:hidden mt-10 justify-center">
        <CardFanMobile expanded={expanded} onInteract={handleInteract} />
      </div>

      {/* Tap hint */}
      <p className="mt-8 text-xs text-gray-300 tracking-widest uppercase font-light">
        {expanded ? "tap to close" : "tap to explore artworks"}
      </p>
    </section>
  );
}

// --- Card Fan Component (left side - 4 cards) ---
function CardFan({
  expanded,
  onInteract,
}: {
  expanded: boolean;
  onInteract: () => void;
  activeCard: number | null;
  setActiveCard: (i: number | null) => void;
}) {
  return (
    <div
      className="relative w-52 h-72 cursor-pointer select-none"
      onClick={onInteract}
      style={{ perspective: "800px" }}
    >
      {artworks.map((art, i) => {
        const pos = fanPositions[i];
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            style={{
              transition: "all 0.55s cubic-bezier(0.34,1.56,0.64,1)",
              transform: expanded
                ? `rotate(${pos.rotate}deg) translate(${pos.x}px, ${pos.y}px) scale(1.04)`
                : `rotate(${i * 1.5 - 2}deg) translate(${i * 1.5}px, ${i * -1}px)`,
              zIndex: expanded ? pos.z : artworks.length - i,
            }}
          >
            <Image
              src={art.src}
              alt={art.alt}
              fill
              className="object-cover"
            />
            {/* subtle label on expand */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 transition-opacity duration-300"
              style={{ opacity: expanded ? 1 : 0 }}
            >
              <p className="text-white text-xs font-light tracking-wide">{art.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Right fan with different starting art (artworks reversed) ---
function CardFanRight({
  expanded,
  onInteract,
}: {
  expanded: boolean;
  onInteract: () => void;
}) {
  const reversed = [...artworks].reverse();
  return (
    <div
      className="relative w-52 h-72 cursor-pointer select-none"
      onClick={onInteract}
      style={{ perspective: "800px" }}
    >
      {reversed.map((art, i) => {
        const pos = fanPositions[i];
        const mirroredPos = { ...pos, rotate: -pos.rotate, x: -pos.x };
        return (
          <div
            key={i}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            style={{
              transition: "all 0.55s cubic-bezier(0.34,1.56,0.64,1)",
              transitionDelay: `${i * 30}ms`,
              transform: expanded
                ? `rotate(${mirroredPos.rotate}deg) translate(${mirroredPos.x}px, ${pos.y}px) scale(1.04)`
                : `rotate(${i * -1.5 + 2}deg) translate(${i * -1.5}px, ${i * -1}px)`,
              zIndex: expanded ? pos.z : artworks.length - i,
            }}
          >
            <Image src={art.src} alt={art.alt} fill className="object-cover" />
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 transition-opacity duration-300"
              style={{ opacity: expanded ? 1 : 0 }}
            >
              <p className="text-white text-xs font-light tracking-wide">{art.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Mobile single fan ---
function CardFanMobile({ expanded, onInteract }: { expanded: boolean; onInteract: () => void }) {
  const mobileFan = [
    { rotate: -22, x: -90, y: 5 },
    { rotate: -7,  x: -28, y: -8 },
    { rotate: 7,   x:  28, y: -8 },
    { rotate: 22,  x:  90, y: 5 },
  ];
  return (
    <div
      className="relative w-40 h-56 cursor-pointer"
      onClick={onInteract}
    >
      {artworks.map((art, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-xl overflow-hidden shadow-md border border-gray-100"
          style={{
            transition: "all 0.55s cubic-bezier(0.34,1.56,0.64,1)",
            transitionDelay: `${i * 25}ms`,
            transform: expanded
              ? `rotate(${mobileFan[i].rotate}deg) translate(${mobileFan[i].x}px, ${mobileFan[i].y}px)`
              : `rotate(${i * 1.5 - 2}deg)`,
            zIndex: expanded ? i : artworks.length - i,
          }}
        >
          <Image src={art.src} alt={art.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
