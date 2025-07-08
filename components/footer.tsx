"use client";

import Link from "next/link";
import Button from "./button";
import Input from "./input";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-serif text-4xl font-light mb-4 block"
            >
              Lusso
            </Link>
            <p className="text-stone-300 text-lg leading-relaxed max-w-md">
              Crafting exceptional interiors that blend timeless elegance with
              contemporary functionality. Every space tells a story of luxury
              and livability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-lg mb-6">Stay Updated</h4>
            <p className="text-stone-300 mb-4">
              Subscribe to our newsletter for design insights and project
              updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-stone-400"
              />
              <Button className="w-full bg-white text-slate-900 hover:bg-stone-100 transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-stone-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lusso Interior Design. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-stone-400 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-stone-400 hover:text-white transition-colors duration-200"
              aria-label="Pinterest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.003-4.625 4.137 0 .695.366 1.56.949 1.836.096.045.146.025.168-.07.017-.07.108-.432.142-.563.047-.183.029-.246-.1-.405-.281-.346-.504-.777-.504-1.396 0-1.748 1.308-3.472 3.568-3.472 1.946 0 3.315 1.336 3.315 3.25 0 2.142-1.183 3.654-2.671 3.654-.797 0-1.392-.658-1.201-1.467.228-.963.671-2.001.671-2.696 0-.622-.333-1.14-1.021-1.14-.809 0-1.458.837-1.458 1.962 0 .715.242 1.198.242 1.198s-.825 3.499-.97 4.125c-.131.563-.131 1.345-.088 1.81-3.297-1.455-5.607-4.77-5.607-8.665C1.093 6.204 6.204 1.093 12 1.093S22.907 6.204 22.907 12 17.796 22.907 12 22.907z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-stone-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
