'use client';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Limited Slots Available This Week</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Each artwork is handmade with care. Only limited orders are accepted to ensure quality and attention to detail.
        </p>
        <a
          href={`https://wa.me/919363131475?text=${encodeURIComponent('Hi, I would like to book a portrait. Here are my details.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 md:px-12 md:py-5 bg-primary text-primary-foreground rounded-full font-light text-lg hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Book Your Portrait Now
        </a>
      </div>
    </section>
  );
}
