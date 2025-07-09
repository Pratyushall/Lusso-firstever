"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0a1526] text-white px-6 py-24 overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contactbg.jpg"
          alt="Contact Background"
          fill
          className="object-cover blur-md brightness-50"
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        {/* Heading */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-serif font-light">
            Let’s Bring Your Space to Life
          </h1>
          <p className="text-white/80 text-lg">
            Whether it’s a question, a dream, or a plan — we’re listening.
          </p>
        </section>

        <hr className="border-white/20" />

        {/* Contact Form */}
        <section>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-[#0a1526] rounded-full font-medium hover:bg-gray-200 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        <hr className="border-white/20" />

        {/* Contact Info */}
        <section className="space-y-4 text-white/80 text-sm md:text-base">
          <p>📍 3rd Floor, Oakwood Heights, Jubilee Hills, Hyderabad</p>
          <p>📞 +91 90000 00000</p>
          <p>
            💬{" "}
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Chat with us on WhatsApp
            </a>
          </p>
          <p>✉️ hello@lusso.in</p>
          <p>⏰ Mon – Sat: 10 AM – 7 PM</p>
        </section>
      </div>
    </div>
  );
}
