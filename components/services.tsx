'use client';

export default function Services() {
  const services = [
    {
      title: 'Pencil Sketch Portrait',
      description: 'Detailed pencil sketches capturing emotion and personality.',
      price: '',
      timeline: '3–5 Days',
      icon: '✏️',
    },
    {
      title: 'Watercolor Painting',
      description: 'Soft, flowing colors that bring a light and dreamy feel to your memories.\nPerfect for elegant, artistic portraits with a gentle emotional touch.',
      price: '',
      timeline: '4–6 Days',
      icon: '🎨',
    },
    {
      title: 'Oil Painting',
      description: 'Rich, detailed artwork with deep colors and a classic premium finish.\nIdeal for timeless portraits that look like gallery masterpieces.',
      price: '',
      timeline: '2–4 Days',
      icon: '🖌',
    },
    {
      title: 'Wall Art',
      description: 'Transform your walls with custom artwork that reflects your style and story.\nA perfect blend of creativity and decor to elevate any space.',
      price: '',
      timeline: '5–7 Days',
      icon: '🏠',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choose the perfect portrait service for your special moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 bg-card rounded-2xl soft-shadow hover:soft-shadow-lg border border-border transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-light mb-2">{service.title}</h3>
              <p className="text-sm text-foreground/60 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="space-y-3">
                <div>
                  {service.price && <p className="text-primary font-light">{service.price}</p>}
                  <p className="text-xs text-foreground/50">{service.timeline}</p>
                </div>
                <a
                  href={`https://wa.me/919363131475?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-accent transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
