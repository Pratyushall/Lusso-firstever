"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import clsx from "clsx";

const wardrobeTypes = ["All", "Sliding", "Openable", "Walk-in"];

const wardrobeGallery = [
  // Sliding Wardrobes
  { src: "/images/wrd11.jpg", type: "Sliding" },
  { src: "/images/wrd12.jpg", type: "Sliding" },
  { src: "/images/wrd16.jpg", type: "Sliding" },
  { src: "/images/slidingwrd2.jpg", type: "Sliding" },
  { src: "/images/slidingwrd1.jpg", type: "Sliding" },

  // Openable Wardrobes
  { src: "/images/openablewrd1.jpg", type: "Openable" },
  { src: "/images/openablewrd2.jpg", type: "Openable" },
  { src: "/images/wrd17.jpg", type: "Openable" },
  { src: "/images/wrd1.jpg", type: "Openable" },
  { src: "/images/wrd2.jpg", type: "Openable" },

  // Walk-in Wardrobes
  { src: "/images/wrd3.jpg", type: "Walk-in" },
  { src: "/images/wrd4.jpg", type: "Walk-in" },
  { src: "/images/wrd5.jpg", type: "Walk-in" },
  { src: "/images/wrd6.jpg", type: "Walk-in" },
  { src: "/images/wrd17.jpg", type: "Walk-in" },
];

export default function WardrobeGalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredGallery =
    filter === "All"
      ? wardrobeGallery
      : wardrobeGallery.filter((img) => img.type === filter);

  return (
    <div className="min-h-screen bg-[#0a1526] text-white py-24 px-6">
      <h1 className="text-4xl font-serif text-center mb-12">
        Wardrobes by Lusso
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {wardrobeTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
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
        {filteredGallery.map((img, index) => (
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

      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          open
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={filteredGallery.map((img) => ({ src: img.src }))}
        />
      )}
    </div>
  );
}
