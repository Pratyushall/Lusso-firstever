"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Gloock } from "next/font/google";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, useInView } from "framer-motion";

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

const journeySteps = [
  {
    title: "Let's connect",
    image: "/images/letsconnect.jpg",
    details:
      "Fill out a quick form, or give us a call! Tell us about your dream kitchen or wardrobe",
  },
  {
    title: "Design Consultation",
    image: "/images/design.jpg",
    details: "We build the blueprint of your dream space.",
  },
  {
    title: "Final Touches and Quote",
    image: "/images/touches.jpg",
    details: "Pick from handpicked luxury finishes and textures.",
  },
  {
    title: "Installation Begins",
    image: "/images/installation.jpg",
    details: "Our team brings your vision to life.",
  },
  {
    title: "Experience it Live",
    image: "/images/experience.jpg",
    details: "Every corner is checked for finesse and perfection.",
  },
  {
    title: "Aftercare and Support",
    image: "/images/support.jpg",
    details: "Welcome to your new, luxurious home.",
  },
];

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${gloock.variable} ${playfair.variable}`}>
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
        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-light font-serif tracking-wide"></h1>
        </div>
      </section>

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
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105">
                  Kitchen
                </button>
              </Link>
              <Link href="/products/wardrobes">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105">
                  Wardrobes
                </button>
              </Link>
              <Link href="/products/partitions">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105">
                  Partitions
                </button>
              </Link>
              <Link href="/products/shutters">
                <button className="bg-yellow-800 hover:bg-yellow-900 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105">
                  Shutters
                </button>
              </Link>
            </div>
          </div>

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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg"
            alt="Your space background"
            layout="fill"
            objectFit="cover"
            className="blur-sm brightness-50"
          />
        </div>
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

      {/* Products Section */}
      <section className="py-24 px-6 bg-[#0a1526] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
          Our Products
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-white/80">
          Four elements, one essence — Kitchens, Wardrobes, Partitions, and
          Shutters. Designed with soul, built to last.
        </p>
        <Link href="/products">
          <button className="bg-white text-[#0a1526] hover:bg-gray-200 px-6 py-3 rounded-full text-sm font-semibold transition duration-300">
            View All Products
          </button>
        </Link>
      </section>

      {/* Your Journey with LUSSO Section */}
      <section className="bg-[#0a1526] py-24 px-6 text-white font-sans relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-16">
            Your Journey with LUSSO
          </h2>

          <div className="space-y-24">
            {journeySteps.map((step, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              const direction = index % 2 === 0 ? -100 : 100;

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: direction }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full md:w-3/4 h-96 rounded-xxl overflow-hidden shadow-xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <motion.div
                    className="w-full md:w-1/2 px-6 mt-8 md:mt-0"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h3
                      className="text-3xl font-serif font-light leading-tight cursor-pointer hover:underline transition-all duration-300"
                      onClick={() => setActiveIndex(index)}
                    >
                      {step.title}
                    </h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expanded fancy box with form */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center transition-all duration-500"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-[#131e33]/80 backdrop-blur-xl rounded-2xl p-8 text-white shadow-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-white/20 w-8 h-8 rounded-full text-white text-lg"
                onClick={() => setActiveIndex(null)}
              >
                ×
              </button>
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                <Image
                  src={journeySteps[activeIndex].image}
                  alt={journeySteps[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">
                {journeySteps[activeIndex].title}
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                {journeySteps[activeIndex].details}
              </p>

              {journeySteps[activeIndex].title === "Let's connect" && (
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/10 border border-white/30 placeholder-white/60 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/30 placeholder-white/60 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <textarea
                    placeholder="Tell us about your dream kitchen or wardrobe..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/30 placeholder-white/60 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/70">
                      Upload Reference Image
                    </label>
                    <input
                      type="file"
                      className="text-white file:bg-white/20 file:border-0 file:rounded-full file:px-4 file:py-2 file:text-white file:cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 bg-white text-[#0a1526] hover:scale-105 transition-transform duration-300 px-6 py-3 rounded-full text-sm font-semibold"
                  >
                    Let’s Build Together
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
