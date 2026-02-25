"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xs">V</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">
            VIDOVERMEDIA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/30">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/")
                ? "bg-white text-purple-600 shadow-md"
                : "text-white hover:bg-white/30"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/about")
                ? "bg-white text-purple-600 shadow-md"
                : "text-white hover:bg-white/30"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/services")
                ? "bg-white text-purple-600 shadow-md"
                : "text-white hover:bg-white/30"
            }`}
          >
            Service
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/30 transition-all"
          >
            Case Studies
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/30 transition-all"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white text-purple-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-all shadow-lg"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
