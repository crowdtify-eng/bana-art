'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/919363131475?text=${encodeURIComponent('Hi, I would like to order a portrait. Here is my photo and details.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      style={{
        animation: isVisible
          ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          : 'none',
      }}
      title="Chat with us on WhatsApp"
    >
   <svg
        className="w-7 h-7 md:w-9 md:h-9"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#25D366"/>
        <path
          d="M24 11C16.82 11 11 16.82 11 24c0 2.3.63 4.45 1.72 6.3L11 37l6.87-1.69A13 13 0 0024 37c7.18 0 13-5.82 13-13S31.18 11 24 11z"
          fill="white"
        />
        <path
          d="M20.1 17.5c-.3-.7-.6-.7-.9-.71h-.77c-.27 0-.7.1-1.06.5-.37.4-1.4 1.37-1.4 3.33s1.43 3.87 1.63 4.13c.2.27 2.76 4.4 6.82 5.99 3.38 1.33 4.07 1.07 4.8 1 .74-.06 2.37-.97 2.7-1.9.34-.94.34-1.74.24-1.9-.1-.17-.37-.27-.77-.47s-2.37-1.17-2.74-1.3c-.37-.14-.63-.2-.9.2-.27.4-1.03 1.3-1.26 1.57-.24.27-.47.3-.87.1-.4-.2-1.7-.63-3.23-2-.6-.54-1-.1-1.37-.56-.36-.47-.06-.73.14-.99l.6-.83c.2-.27.27-.47.4-.77.14-.3.07-.57-.03-.77-.1-.2-.87-2.1-1.2-2.87z"
          fill="#25D366"
        />
      </svg>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
}
