"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-electric-blue">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-1.5 group">
          <span className="font-headline text-2xl font-bold tracking-tight text-terminal-night uppercase">
            IBNUPRTMA
          </span>
          <span
            aria-hidden="true"
            className="w-3.5 h-3.5 bg-caution-yellow border-2 border-electric-blue rounded-full shadow-[1.5px_1.5px_0px_#0047FF] inline-block transition-transform group-hover:scale-125"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden sm:flex items-center gap-6 font-mono text-sm">
            <Link
              href="#about"
              className="text-terminal-night/80 hover:text-electric-blue font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#showcase"
              className="text-terminal-night/80 hover:text-electric-blue font-medium transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="#experience"
              className="text-terminal-night/80 hover:text-electric-blue font-medium transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#now"
              className="text-terminal-night/80 hover:text-electric-blue font-medium transition-colors"
            >
              Now
            </Link>
            <Link
              href="#contact"
              className="text-terminal-night/80 hover:text-electric-blue font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-caution-yellow text-ink-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            Say Hi ✨
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-terminal-night border-2 border-terminal-night bg-white shadow-[2px_2px_0px_#0047FF] hover:bg-paper-wash transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden border-t-2 border-electric-blue bg-white px-6 py-4 space-y-3 shadow-[0_4px_0_#0047FF]">
          <nav className="flex flex-col space-y-2 font-mono text-sm">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-terminal-night hover:text-electric-blue font-medium"
            >
              About
            </Link>
            <Link
              href="#showcase"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-terminal-night hover:text-electric-blue font-medium"
            >
              Showcase
            </Link>
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-terminal-night hover:text-electric-blue font-medium"
            >
              Experience
            </Link>
            <Link
              href="#now"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-terminal-night hover:text-electric-blue font-medium"
            >
              Now
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-terminal-night hover:text-electric-blue font-medium"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-2 border-t border-dashed border-terminal-night/20">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full justify-center items-center gap-1.5 px-4 py-2.5 bg-caution-yellow text-ink-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Say Hi ✨
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
