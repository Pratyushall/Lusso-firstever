"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#0a1526] text-white">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lussoflower.jpg"
          alt="Blurred Background"
          fill
          className="object-cover blur-sm brightness-[0.4]"
          priority
        />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 px-6 py-24">
        {/* Hero Text */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Lusso is not a brand.
            <br /> It’s a feeling etched in wood and stone.
          </h1>
          <p className="text-lg font-light leading-relaxed text-white/80">
            We don’t just build interiors. We build stories.
            <br />
            Kitchens that remember laughter. Wardrobes that whisper elegance.
          </p>
        </section>

        {/* Founding Story */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-serif mb-4">How it all began</h2>
          <p className="text-lg leading-relaxed text-white/80">
            Born from a deep love for materials and minimalism, Lusso was
            founded to blur the line between function and emotion. Every hinge,
            every finish is chosen with care — not just for how it looks, but
            how it makes you feel.
          </p>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
            <p className="text-white/70 text-sm">
              Handmade precision. No shortcuts. Just stories carved in oak,
              pine, and polish.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customisation</h3>
            <p className="text-white/70 text-sm">
              We don’t force our style onto you. We build yours with you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Conscious Living</h3>
            <p className="text-white/70 text-sm">
              We choose sustainable materials, ethical processes, and timeless
              designs that live longer than trends.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
