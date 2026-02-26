"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-600/80 via-purple-600/80 to-blue-600/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-900/30">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Vidovermedia Logo" width={200} height={50} className="h-10 w-auto object-contain drop-shadow-lg" priority />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/about")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/services")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            Service
          </Link>
          <Link
            href="/case-studies"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/case-studies")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/blog")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/process"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive("/process")
                ? "bg-white text-purple-700 shadow-md"
                : "text-white/90 hover:bg-white/20"
            }`}
          >
            Process
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="bg-white text-purple-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-pink-100 hover:text-pink-700 transition-all shadow-lg shadow-white/10"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
