'use client';

export default function SocialProof() {
  const stats = [
    { number: '100+', label: 'Portraits Delivered' },
    { number: '70+', label: 'Happy Clients' },
    { number: '4.0', label: 'Star Rating' },
  ];

  const testimonials = [
    { text: 'Absolutely stunning work.', author: 'Rahul S.' },
    { text: 'My best gift ever!', author: 'Priya M.' },
    { text: 'Incredible detailing.', author: 'Arjun K.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-3xl md:text-5xl font-light text-primary">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-card rounded-2xl soft-shadow hover:soft-shadow-md transition-all duration-300 border border-border"
            >
              <p className="text-foreground/80 font-light italic mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-foreground/60">– {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
