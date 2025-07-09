"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import clsx from "clsx";

const kitchenTypes = ["All", "Boho", "Modern Minimal", "French"];

const kitchenGallery = [
  // Boho Kitchens (5)
  { src: "/images/bohokit1.jpg", type: "Boho" },
  { src: "/images/bohokit2.jpg", type: "Boho" },
  { src: "/images/bohokit3.jpg", type: "Boho" },
  { src: "/images/bohokit5.jpg", type: "Boho" },
  { src: "/images/bohokit6.jpg", type: "Boho" },

  // Modern Minimal Kitchens (6)
  { src: "/images/minimalkit1.jpg", type: "Modern Minimal" },
  { src: "/images/minimalkit2.jpg", type: "Modern Minimal" },
  { src: "/images/minimalkit3.jpg", type: "Modern Minimal" },
  { src: "/images/minimalkit6.jpg", type: "Modern Minimal" },
  { src: "/images/minimalkit7.jpg", type: "Modern Minimal" },
  { src: "/images/minimalkit8.jpg", type: "Modern Minimal" },

  // French Kitchens (5)
  { src: "/images/frenchkit1.jpg", type: "French" },
  { src: "/images/frenchkit2.jpg", type: "French" },
  { src: "/images/frenchkit3.jpg", type: "French" },
  { src: "/images/frenchkit4.jpg", type: "French" },
  { src: "/images/frenchkit5.jpg", type: "French" },
];

export default function KitchenGalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(6);

  const allFiltered =
    filter === "All"
      ? kitchenGallery
      : kitchenGallery.filter((img) => img.type === filter);

  const visibleImages = allFiltered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#0a1526] text-white py-24 px-6">
      <h1 className="text-4xl font-serif text-center mb-12">
        Kitchens by Lusso
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {kitchenTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              setVisibleCount(6); // Reset visible count on filter change
            }}
            className={clsx(
              "px-6 py-2 rounded-full text-sm border transition-all duration-300",
              filter === type
                ? "bg-white text-[#0a1526] font-semibold"
                : "border-white text-white hover:bg-white/10"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="relative cursor-pointer group overflow-hidden rounded-xl border border-white/10 shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.type}
              width={500}
              height={400}
              className="object-cover w-full h-72 transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="absolute bottom-0 w-full text-center bg-black/50 py-2 text-sm font-serif">
              {img.type}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allFiltered.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0a1526] transition-all duration-300 text-sm"
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          open
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={visibleImages.map((img) => ({ src: img.src }))}
        />
      )}
    </div>
  );
}
