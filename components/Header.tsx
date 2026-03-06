"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center backdrop-blur-md rounded-lg">
          <Image src="/logo.png" alt="Vidovermedia Logo" width={200} height={50} className="h-14 w-auto object-contain drop-shadow-lg" priority />
        </Link>

        {/* Navigation Links - Glassmorphic */}
        <div className="hidden md:flex items-center bg-white/20 backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/30 shadow-lg">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/about")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/services")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            Service
          </Link>
          <Link
            href="/testimonials"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/testimonials")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/blog")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/process"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              isActive("/process")
                ? "bg-white text-[#1a0a2e] shadow-md"
                : "text-[#1a0a2e] hover:bg-white/50"
            }`}
          >
            Process
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="animated-border-btn pill"
        >
          <span className="animated-border-btn-inner">
            Contact Us →
          </span>
        </Link>
      </nav>
    </header>
  );
}
