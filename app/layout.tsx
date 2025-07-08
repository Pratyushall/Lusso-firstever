import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../app/globals.css"; // make sure this path is correct
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lusso - Luxury Interior Design",
  description:
    "Crafted interiors for living. Exceptional interior design services blending timeless elegance with contemporary functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-primary font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
