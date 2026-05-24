'use client';

export default function Process() {
  const steps = [
    { number: '1', title: 'Send Photo via WhatsApp', description: 'Share your photo with details' },
    { number: '2', title: 'Confirm Style & Pricing', description: 'Discuss preferences and finalize' },
    { number: '3', title: 'Artwork Creation', description: 'Handcrafted with care and emotion' },
    { number: '4', title: 'Preview Approval', description: 'Review and request changes' },
    { number: '5', title: 'Delivered to Your Home', description: 'Carefully packaged and shipped' },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Our Process</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A simple, transparent journey from photo to beautiful art
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-light relative z-10 soft-shadow">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-light mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
