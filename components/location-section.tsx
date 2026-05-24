export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-sm font-semibold uppercase tracking-widest mb-2">
          Find Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Our Location
        </h2>
        <p className="text-gray-500 mb-8">
          Based in Tamil Nadu, India. Orders accepted pan-India.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31542.66204385147!2d78.09796562406945!3d8.80177820063278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef006e266f51%3A0x15a399c1c5631536!2sThanasekaran%20Nagar!5e0!3m2!1sen!2sin!4v1776597434569!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bana Artist Location"
          />
        </div>

        <p className="mt-5 text-gray-500 text-sm">
          📦 Pan-India delivery available ·{" "}
          <a
            href="tel:+919363131475"
            className="text-gray-600 font-medium hover:underline"
          >
            +91 93631 31475
          </a>
        </p>
      </div>
    </section>
  );
}
