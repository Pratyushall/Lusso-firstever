"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Gloock } from "next/font/google";
import { motion } from "framer-motion";

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

export default function ProductsPage() {
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setVisibleItems((prev) => Math.min(prev + 2, galleryItems.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#0a1526] text-white ${gloock.variable} ${playfair.variable}`}
    >
      {/* Finger Symbol & Animated Text Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center space-y-10 px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="text-3xl md:text-5xl font-serif tracking-wide"
        >
          <span className="inline-block">All that beauty must be lived</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className="text-3xl md:text-5xl font-serif tracking-wide"
        >
          <span className="inline-block">Not just arranged</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="text-3xl md:text-5xl font-serif tracking-wide"
        >
          <span className="inline-block">That’s the Lusso Way</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/images/lussoflower4.jpg"
            alt="Scroll Down"
            width={200}
            height={200}
            className="opacity-200"
          />
        </motion.div>
      </section>

      {/* Scroll-Reveal Gallery */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-24">
          {galleryItems.slice(0, visibleItems).map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full h-[70vh] relative overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                fill
                className="object-cover object-center"
              />
            </motion.div>
          ))}

          {visibleItems < galleryItems.length && (
            <div className="text-center">
              <button
                onClick={() =>
                  setVisibleItems((prev) =>
                    Math.min(prev + 2, galleryItems.length)
                  )
                }
                className="mt-12 px-8 py-3 bg-white text-[#0a1526] rounded-full text-sm font-semibold hover:scale-105 transition duration-300"
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Horizontal Colored Button Section */}
      <section className="bg-[#0a1526] py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          <Link href="/products/kitchen">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:scale-105">
              Kitchens
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
      </section>
    </div>
  );
}
