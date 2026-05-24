'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/60">
            Reach out for inquiries, custom orders, or any questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Phone */}
          <a
            href="tel:+919363131475"
            className="flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary hover:soft-shadow-md transition-all group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
            <h3 className="font-light text-lg mb-2">Phone</h3>
            <p className="text-foreground/60 text-center">+91 9363131475</p>
          </a>

          {/* Email */}
          <a
            href="mailto:banaartist05@gmail.com"
            className="flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary hover:soft-shadow-md transition-all group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
            <h3 className="font-light text-lg mb-2">Email</h3>
            <p className="text-foreground/60 text-center break-all">banaarts05@gmail.com</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/_bana_artist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl border border-border hover:border-primary hover:soft-shadow-md transition-all group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="font-light text-lg mb-2">Instagram</h3>
            <p className="text-foreground/60 text-center">@_bana_artist</p>
          </a>
        </div>

        {/* WhatsApp Direct Link */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-6">Or start a conversation on WhatsApp</p>
          <a
            href={`https://wa.me/919363131475?text=${encodeURIComponent('Hi Bana, I would like to know more about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-light hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.411-2.391-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.23c-1.477.79-2.746 1.922-3.517 3.291-.771 1.369-1.152 2.922-.973 4.466.178 1.544.91 2.99 2.065 4.118 1.154 1.128 2.63 1.841 4.23 2.009 1.6.168 3.224-.098 4.637-.787 1.414-.69 2.592-1.784 3.32-3.09.729-1.306 1.094-2.825 1.043-4.348-.05-1.522-.483-2.99-1.25-4.268-.767-1.277-1.849-2.313-3.1-2.984-1.251-.67-2.672-1.01-4.087-.997z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
