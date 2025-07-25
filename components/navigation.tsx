"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./button";
import { Playfair_Display, Gloock } from "next/font/google";

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

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled ? "bg-[#0a1526] shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between text-white ${playfair.variable} ${gloock.variable}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-[Gloock] tracking-widest"
        >
          LUSSO <span className="text-sm font-light">| Luxury Simplified</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-light whitespace-nowrap">
          <Link href="/" className="hover:text-neutral-300 transition">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-neutral-300 transition">
            Portfolio
          </Link>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-neutral-300 transition"
            >
              Products <ChevronDown className="w-4 h-4" />
            </button>
            {showDropdown && (
              <div className="absolute mt-2 w-48 bg-[#0a1526] text-white rounded-lg shadow-lg overflow-hidden z-50 border border-white/10">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                >
                  All Products
                </Link>
                <Link
                  href="/products/kitchen"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                >
                  Kitchens
                </Link>
                <Link
                  href="/products/wardrobes"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                >
                  Wardrobes
                </Link>
                <Link
                  href="/products/partitions"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                >
                  Partitions
                </Link>
                <Link
                  href="/products/shutters"
                  className="block px-4 py-2 hover:bg-white/10 transition"
                >
                  Shutters
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-neutral-300 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1526]/95 px-6 py-4 mt-2 rounded-md backdrop-blur-sm text-white">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-lg"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-lg"
          >
            Portfolio
          </Link>

          <div className="mt-2">
            <p className="uppercase text-xs mb-1 tracking-wider text-white/60">
              Products
            </p>
            <Link
              href="/products"
              className="block py-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              href="/products/kitchen"
              className="block py-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Kitchens
            </Link>
            <Link
              href="/products/wardrobes"
              className="block py-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Wardrobes
            </Link>
            <Link
              href="/products/partitions"
              className="block py-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Partitions
            </Link>
            <Link
              href="/products/shutters"
              className="block py-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Shutters
            </Link>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-lg"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
