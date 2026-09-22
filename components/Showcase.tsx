"use client";

import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  categoryBg: string;
  title: string;
  icon: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel?: string;
}

const projects: ProjectItem[] = [
  {
    id: "pharmacy-queue",
    category: "WEB APPLICATION // HEALTHCARE",
    categoryBg: "bg-caution-yellow text-ink-black",
    title: "Pharmacy Queue & Call Display System",
    icon: "🏥",
    image: "/projects/pharmacy-queue.jpg",
    description:
      "Mission-critical real-time prescription fulfillment and patient call queue display system for hospital outpatient departments, powered by WebSockets for instant synchronization.",
    tech: ["Vue.js", "Node.js", "Fastify", "Socket.IO", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/ibnuprtma",
    linkLabel: "View System",
  },
  {
    id: "tradingview-indicator",
    category: "TRADINGVIEW // PINE SCRIPT",
    categoryBg: "bg-blueprint-cyan text-terminal-night",
    title: "Multi-Timeframe Trend & Volume Engine",
    icon: "📈",
    image: "/projects/tradingview-indicator.jpg",
    description:
      "Custom algorithmic TradingView indicator detecting institutional order blocks, volume imbalances, and dynamic momentum breakouts across multiple timeframes.",
    tech: ["Pine Script v5", "TradingView", "Technical Analysis", "Algo Strategy"],
    link: "https://www.tradingview.com",
    linkLabel: "View Indicator",
  },
  {
    id: "metatrader-ea",
    category: "METATRADER // EXPERT ADVISOR",
    categoryBg: "bg-paper-wash text-terminal-night",
    title: "AlphaGrid Automated Execution Bot",
    icon: "🤖",
    image: "/projects/metatrader-ea.jpg",
    description:
      "Automated risk-adjusted execution Expert Advisor (EA) for MetaTrader with dynamic trailing stop-loss, volatility filters, and automated position sizing algorithms.",
    tech: ["MQL5", "MQL4", "MetaTrader", "Python", "Risk Management"],
    link: "https://github.com/ibnuprtma",
    linkLabel: "View Bot Repo",
  },
  {
    id: "salesforce-automation",
    category: "WEB APPLICATION // AUTOMATION",
    categoryBg: "bg-caution-yellow text-ink-black",
    title: "Salesforce Automation & Web Reports Hub",
    icon: "⚡",
    image: "/projects/salesforce-automation.svg",
    description:
      "Enterprise workflow automation portal and dynamic web reporting suite built for 30+ client projects, integrating complex Salesforce workflows with custom dashboards.",
    tech: ["Laravel", "Vue.js", "PrimeVue", "REST APIs", "Salesforce API", "MySQL"],
    link: "https://github.com/ibnuprtma",
    linkLabel: "View Project",
  },
  {
    id: "aircraft-erp",
    category: "ENTERPRISE SYSTEM // AEROSPACE",
    categoryBg: "bg-paper-wash text-terminal-night",
    title: "SmartAircraft Maintenance ERP System",
    icon: "✈️",
    image: "/projects/aircraft-erp.svg",
    description:
      "ERP web platform for an aircraft maintenance facility (Merpati Maintenance Facility), managing aircraft component tracking, technical workorders, and parts inventory.",
    tech: ["PHP", "Laravel", "JavaScript", "jQuery", "MySQL", "ERP Architecture"],
    link: "https://github.com/ibnuprtma",
    linkLabel: "View Platform",
  },
  {
    id: "devops-cluster",
    category: "DEVOPS // CLUSTER LAB",
    categoryBg: "bg-blueprint-cyan text-terminal-night",
    title: "Containerized Microservices Cluster",
    icon: "🐳",
    image: "/projects/devops-cluster.svg",
    description:
      "High-availability staging infrastructure lab using Docker containerization, Kubernetes pod orchestration, and automated CI/CD delivery pipelines.",
    tech: ["Docker", "Kubernetes", "GitLab CI", "Linux", "Nginx"],
    link: "https://github.com/ibnuprtma",
    linkLabel: "View Architecture",
  },
];

export default function Showcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20" id="showcase">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-wash text-terminal-night font-mono text-xs border border-terminal-night font-bold uppercase shadow-sm">
            <span className="text-electric-blue">●</span>
            <span>SHOWCASE &amp; LAB ARTIFACTS</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-terminal-night tracking-tight">
            Things I&apos;ve Built &amp; Explored
          </h2>
        </div>

        {/* Carousel Controls & Swipe Hint */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-terminal-night/60 uppercase">
            <span>Swipe &bull; Scroll</span>
            <span>↔</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="p-2.5 bg-white text-terminal-night border-2 border-terminal-night shadow-[3px_3px_0px_#0A192F] hover:bg-paper-wash active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="p-2.5 bg-caution-yellow text-ink-black border-2 border-terminal-night shadow-[3px_3px_0px_#0047FF] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Swipeable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1"
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="w-[300px] sm:w-[380px] shrink-0 snap-start relative bg-white border-2 border-terminal-night p-6 shadow-[5px_5px_0px_#0047FF] hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
          >
            {/* Washi Tape Header Accent */}
            <div
              className={`absolute -top-3 left-8 w-24 h-5 bg-caution-yellow/85 border border-terminal-night ${
                idx % 2 === 0 ? "-rotate-2" : "rotate-2"
              } pointer-events-none shadow-sm z-10`}
            />

            {/* Top Area: Category & Title */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-block px-2.5 py-0.5 ${project.categoryBg} font-mono text-[11px] font-bold uppercase border border-terminal-night`}
                >
                  {project.category}
                </span>
                <span className="text-xl select-none" aria-hidden="true">
                  {project.icon}
                </span>
              </div>

              {/* Visual Display Frame */}
              <div className="w-full aspect-video border-2 border-terminal-night overflow-hidden relative bg-paper-wash shadow-[2px_2px_0px_#0A192F]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 300px, 380px"
                  unoptimized={project.image.endsWith(".svg")}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/95 border border-terminal-night font-mono text-[9px] font-bold tracking-wider text-terminal-night shadow-sm">
                  DISPLAY // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
              </div>

              <h3 className="font-headline text-xl font-bold text-terminal-night leading-snug group-hover:text-electric-blue transition-colors">
                {project.title}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-terminal-night/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom Area: Tech Tags & Open in New Tab Button */}
            <div className="pt-5 space-y-4 border-t border-dashed border-terminal-night/20 mt-5">
              {/* Tech Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-paper-wash border border-terminal-night/40 font-mono text-[11px] text-terminal-night"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Button: Open New Tab */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-between px-4 py-2.5 bg-caution-yellow text-ink-black font-mono text-xs font-bold uppercase tracking-wider border-2 border-terminal-night shadow-[3px_3px_0px_#0A192F] hover:bg-[#FFE033] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                <span>{project.linkLabel || "Open Project"}</span>
                <ExternalLink className="w-4 h-4 text-ink-black" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
