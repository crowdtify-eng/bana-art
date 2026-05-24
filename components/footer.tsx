'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jpg"
                  alt="Bana Artist"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-light text-lg tracking-wider">BANA ARTS</span>
            </div>
            <p className="text-white/70 font-light max-w-xs">
              Art that speaks to your soul.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-light text-lg">Quick Links</h3>
            <ul className="space-y-2 text-white/70 font-light text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-light text-lg">Contact</h3>
            <ul className="space-y-2 text-white/70 font-light text-sm">
              <li>
                <a href="tel:+919363131475" className="hover:text-white transition-colors">
                  +91 9363131475
                </a>
              </li>
              <li>
                <a href="mailto:banaartist05@gmail.com" className="hover:text-white transition-colors break-all">
                  banaarts05@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_bana_artist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @_bana_artist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60 font-light">
          <p>Crafted with passion. Delivered with emotion.</p>
          <p>© 2026.crowdify All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
