import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Clean Personal Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Introduction pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-caution-yellow text-ink-black border-2 border-terminal-night font-mono text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0px_#0047FF] -rotate-1">
            <span>👋 HELLO EVERYONE</span>
          </div>

          {/* Warm Bold Headline */}
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-terminal-night tracking-tight leading-[1.1]">
            I&apos;m{" "}
            <span className="bg-paper-wash px-2.5 py-0.5 border-2 border-electric-blue shadow-[3px_3px_0px_#0047FF] inline-block -rotate-1 text-electric-blue">
              Ibnu Pratama
            </span>
            .
          </h1>

          {/* Monospace Subtext */}
          <p className="font-mono text-base sm:text-lg text-terminal-night/80 max-w-xl leading-relaxed border-l-4 border-caution-yellow pl-4">
            Software Engineer building scalable web applications, real-time systems, and intelligent automation. Blending reliable backend architectures with snappy interfaces and data-driven problem solving.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-caution-yellow text-ink-black font-mono text-sm font-bold border-2 border-terminal-night shadow-[4px_4px_0px_#0047FF] hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-terminal-night font-mono text-sm font-bold border-2 border-terminal-night shadow-[4px_4px_0px_#0A192F] hover:bg-paper-wash hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <span>Explore Experience</span>
              <Briefcase className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Polaroid Memo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-6 lg:pt-0">
          <div className="relative w-full max-w-sm">
            {/* Pinned Washi Tape Accent (Top) */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 bg-caution-yellow/85 border border-terminal-night -rotate-2 z-30 shadow-sm pointer-events-none" />

            {/* Main Paper Polaroid Card */}
            <div className="bg-white border-2 border-terminal-night p-4 pb-6 shadow-[6px_6px_0px_#0047FF] rotate-1 transition-transform hover:rotate-0 duration-300 relative">
              {/* Polaroid Frame */}
              <div className="w-full aspect-square border-2 border-terminal-night overflow-hidden relative bg-paper-wash">
                <Image
                  src="/avatar.png"
                  alt="Ibnu Pratama - Developer Avatar"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-white border border-terminal-night text-terminal-night font-mono text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  DAY // ONE
                </div>
              </div>

              {/* Polaroid Caption / Stamp */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <div className="font-headline text-lg font-bold text-terminal-night">
                    Ibnu Pratama
                  </div>
                  <div className="font-mono text-xs text-terminal-night/70">
                    Software Engineer
                  </div>
                </div>
                <div className="px-2 py-1 bg-blueprint-cyan text-terminal-night border border-terminal-night font-mono text-[11px] font-bold -rotate-3 shadow-[2px_2px_0px_#0A192F]">
                  @ National Hospital Surabaya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
