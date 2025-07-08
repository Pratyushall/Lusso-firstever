"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Lusso interior"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="z-20 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Lusso</h1>
        <p className="text-xl md:text-2xl mb-6">Crafted Interiors for Living</p>
        <button className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition">
          Discover Projects →
        </button>
      </div>
    </section>
  );
}
