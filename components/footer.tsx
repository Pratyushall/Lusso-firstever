"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1526] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left: Logo & Socials */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/lussoflower4.jpg"
            alt="Lusso Logo"
            width={80}
            height={80}
            className="mb-2"
          />
          <span className="text-2xl font-[Gloock] mb-4 tracking-widest">
            LUSSO
          </span>

          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="hover:text-pink-400 transition"
                size={20}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="hover:text-blue-400 transition"
                size={20}
              />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP
                className="hover:text-red-400 transition"
                size={20}
              />
            </a>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="hover:text-green-400 transition"
                size={20}
              />
            </a>
          </div>
        </div>

        {/* Middle: Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products/kitchen" className="hover:underline">
                Kitchen
              </Link>
            </li>
            <li>
              <Link href="/products/wardrobes" className="hover:underline">
                Wardrobes
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Address & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Address</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Lusso Interiors
            <br />
            Jubilee Hills, Hyderabad
            <br />
            Telangana, India - 500033
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
          <p className="text-sm text-white/80">Phone: +91 90000 00000</p>
          <p className="text-sm text-white/80">Email: hello@lusso.in</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-white/50 mt-16 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} Lusso. All rights reserved.
      </div>
    </footer>
  );
}
