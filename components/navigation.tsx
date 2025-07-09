"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./button"; // ✅ assuming it's a custom styled button
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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
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
          LUSSO
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-light whitespace-nowrap">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a1526]/95 px-6 py-4 mt-2 rounded-md backdrop-blur-sm text-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-neutral-300 text-lg font-light py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
