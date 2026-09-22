"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ibnuprtma@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pt-12 pb-24" id="contact">
      <div className="bg-white border-2 border-terminal-night p-8 sm:p-12 shadow-[6px_6px_0px_#0047FF] relative overflow-hidden">
        {/* Subtle corner washi tape */}
        <div className="absolute -top-3 right-8 w-24 h-6 bg-caution-yellow/80 border border-terminal-night rotate-3 pointer-events-none shadow-sm" />

        <div className="max-w-2xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-caution-yellow text-ink-black font-mono text-xs font-bold uppercase tracking-wider border border-terminal-night -rotate-1 shadow-sm">
            <span>👋 LET&apos;S CONNECT</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-terminal-night tracking-tight">
            Have a project in mind or just want to chat?
          </h2>
          <p className="font-mono text-base text-terminal-night/80">
            Always open for new projects, creative collabs, freelance gigs, or just a casual chat.
          </p>
        </div>

        {/* Pill Links & Actions */}
        <div className="flex flex-wrap items-center gap-3 pb-8 border-b-2 border-dashed border-terminal-night/20">
          {/* Email Button with Copy Feedback */}
          <div className="relative inline-flex items-center">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-caution-yellow text-ink-black font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0A192F] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Mail className="w-4 h-4 text-ink-black" />
              <span>Email Me ({email})</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy email address"
              aria-label="Copy email address"
              className="ml-1.5 p-2.5 bg-paper-wash text-terminal-night border-2 border-terminal-night shadow-[2px_2px_0px_#0A192F] hover:bg-white active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
              ) : (
                <Copy className="w-4 h-4 text-terminal-night" />
              )}
            </button>
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-terminal-night text-white font-mono text-[10px] font-bold border border-white shadow-[2px_2px_0px_#0047FF] whitespace-nowrap animate-bounce">
                COPIED! ✨
              </span>
            )}
          </div>

          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-wash text-terminal-night font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:bg-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="https://github.com/ibnuprtma"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>🐙 GitHub</span>
          </a>

          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-wash text-terminal-night font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:bg-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="https://linkedin.com/in/ibnuprtma"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>💼 LinkedIn</span>
          </a>

          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-wash text-terminal-night font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:bg-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="https://twitter.com/ibnuprtma"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>🐦 X / Twitter</span>
          </a>

          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-wash text-terminal-night font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:bg-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="https://www.instagram.com/ibnuprtma"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>🌀 Instagram</span>
          </a>

          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-paper-wash text-terminal-night font-mono text-xs font-bold border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:bg-white hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href="https://pinterest.com/ibnuprtma"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>📌 Pinterest</span>
          </a>
        </div>

        {/* Minimal Copyright & Signal Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-terminal-night/70">
          <div>© 2026 Ibnu Pratama</div>
          <div className="inline-flex items-center gap-1.5 text-electric-blue font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>NO FLUFF // ALL SIGNAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
