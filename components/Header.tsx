"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">V</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            VIDOVERMEDIA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-2 py-1.5">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/")
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/about")
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/services")
                ? "bg-white shadow-sm text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Service
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Case Studies
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white border border-gray-200 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
