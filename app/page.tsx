"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/button";
import { Playfair_Display, Gloock } from "next/font/google";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
  display: "swap",
});

const galleryItems = [
  "/images/wrd5.jpg",
  "/images/kit5.jpg",
  "/images/wrd4.jpg",
  "/images/kit4.jpg",
  "/images/wrd3.jpg",
  "/images/kit3.jpg",
  "/images/wrd2.jpg",
  "/images/kit2.jpg",
  "/images/wrd1.jpg",
  "/images/kit1.jpg",
];

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className={`min-h-screen ${gloock.variable} ${playfair.variable}`}>
      {/* Header */}
      <header className="w-full bg-[#0a1526] shadow-sm fixed top-0 left-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* LUSSO Button */}
          <Link
            href="/"
            className="px-4 py-1.5 border border-white/40 rounded-full backdrop-blur-sm bg-white/5 text-white text-xl md:text-2xl font-[Gloock] tracking-widest hover:bg-white/10 hover:shadow-lg transition-all duration-300"
          >
            LUSSO
          </Link>

          {/* Navigation Buttons */}
          <nav className="flex space-x-4 text-sm font-medium items-center">
            <Link
              href="/about"
              className="px-4 py-1.5 border border-white/30 text-white rounded-full hover:bg-white/10 hover:shadow-md backdrop-blur-md transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-1.5 border border-white/30 text-white rounded-full hover:bg-white/10 hover:shadow-md backdrop-blur-md transition duration-300"
            >
              Contact
            </Link>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-green-500 text-green-400 rounded-full hover:bg-green-600 hover:text-white hover:shadow-lg transition duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"></div>
      </section>

      {/* Lookbook Slider */}
      {/* Lookbook Slider */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-12 text-center text-[#0a1526]">
            The Lusso Mess
          </h2>
          <div className="overflow-x-auto px-2 scrollbar-hide">
            <div className="inline-flex gap-6">
              {galleryItems.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="min-w-[320px] max-w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-[-0.5deg]"
                >
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={src}
                      alt={`Lookbook ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-4 text-center font-serif text-[#4a3f35] text-lg border-t border-gray-200">
                    Signature Style
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Gallery */}
      {lightboxIndex >= 0 && (
        <Lightbox
          open
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={galleryItems.map((src) => ({ src }))}
        />
      )}

      {/* The Lusso Way Section */}
      <section className="py-24 px-4 bg-[#0a1526] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-serif font-light mb-6">
              The Lusso Way
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Lusso brings the art of modular design to life — offering just two
              crafted products: kitchens and wardrobes.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              What makes us different? You get to choose. A hinge from one
              premium brand, a finish from another — the freedom to blend
              elegance with function is all yours.
            </p>
            <p className="text-lg leading-relaxed">
              With Lusso, your dream space is your blank canvas. We just make
              sure it turns out exquisite.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/products/kitchen">
                <Button className="bg-white text-[#060f1c] hover:bg-gray-200">
                  Kitchen
                </Button>
              </Link>
              <Link href="/products/wardrobes">
                <Button className="bg-white text-[#050c15] hover:bg-gray-200">
                  Wardrobes
                </Button>
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <Image
                src="/images/kit6.jpg"
                alt="Elegant Kitchen"
                width={600}
                height={800}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/images/wrd6.jpg"
                alt="Luxurious Wardrobe"
                width={300}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/images/kit7.jpg"
                alt="Modular Design"
                width={300}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Space, Your Story Section */}
      <section className="relative py-24 px-6 bg-[#0a1526] text-white text-center overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg" // Replace with your actual image path
            alt="Your space background"
            layout="fill"
            objectFit="cover"
            className="blur-sm brightness-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-light">
            Your Space, Your Story
          </h2>
          <div className="text-lg md:text-xl font-light space-y-4 leading-relaxed">
            <p>
              <em>You don’t just need shelves.</em>
              <br />
              You need a quiet corner to brew dreams.
            </p>
            <p>
              <em>You don’t just want a kitchen.</em>
              <br />
              You want sunlight, salt, and stories woven into wood and metal.
            </p>
            <p>
              <em>Lusso doesn’t sell spaces.</em>
              <br />
              We shape them around the rhythm of your life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
