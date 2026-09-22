import { MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  isContract?: boolean;
  description: string;
  tag: string;
  tagBg: string;
  tapePosition: "right-6 rotate-2" | "left-8 -rotate-2" | "right-12 rotate-3";
}

const experiences: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Veloce Labs",
    location: "Remote / Tokyo",
    description:
      "Spearheading next-generation client architectures and reducing Core Web Vitals to sub-second benchmarks.",
    tag: "Next.js • Performance",
    tagBg: "bg-paper-wash",
    tapePosition: "right-6 rotate-2",
  },
  {
    period: "2022 — 2024",
    title: "UI/UX & Web Developer",
    company: "Hyperion Systems",
    location: "Surabaya / Hybrid",
    description:
      "Constructed multi-product design systems and highly responsive web apps with strict accessibility compliance.",
    tag: "Design Systems",
    tagBg: "bg-blueprint-cyan/30",
    tapePosition: "left-8 -rotate-2",
  },
  {
    period: "2020 — 2022",
    title: "Frontend Specialist",
    company: "Chrono Studio",
    location: "Contract / Global",
    isContract: true,
    description:
      "Delivered 20+ bespoke brand marketing sites, client dashboards, and high-velocity conversion funnels.",
    tag: "Web Apps",
    tagBg: "bg-paper-wash",
    tapePosition: "right-12 rotate-3",
  },
];

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="experience">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-wash text-terminal-night font-mono text-xs border border-terminal-night font-bold uppercase shadow-sm">
            <span className="text-electric-blue">●</span>
            <span>CAREER JOURNAL // VERIFIED EXPERIENCE</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-terminal-night tracking-tight">
            Where I&apos;ve Been Working
          </h2>
        </div>
        <div className="font-mono text-xs text-terminal-night/60 uppercase tracking-wider">
          TRACK RECORD // 2020 — 2025
        </div>
      </div>

      {/* Vertical List of Memo Slip / Receipt Cards */}
      <div className="space-y-6">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white border-2 border-terminal-night p-6 sm:p-8 shadow-[4px_4px_0px_#0047FF] hover:-translate-y-1 transition-all group"
          >
            {/* Washi Tape Accent */}
            <div
              className={`absolute -top-3.5 ${item.tapePosition} w-20 h-6 bg-caution-yellow/85 border border-terminal-night pointer-events-none shadow-sm z-10`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start lg:items-center justify-between">
              {/* Year Period + Job Title */}
              <div className="lg:col-span-4 space-y-2">
                <div className="inline-block px-2.5 py-0.5 bg-caution-yellow text-ink-black font-mono text-xs font-bold border border-terminal-night">
                  {item.period}
                </div>
                <h3 className="font-headline text-xl font-bold text-terminal-night group-hover:text-electric-blue transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Company & Location */}
              <div className="lg:col-span-3 space-y-1">
                <div className="font-headline text-base font-bold text-electric-blue">
                  {item.company}
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-terminal-night/70">
                  {item.isContract ? (
                    <Briefcase className="w-3.5 h-3.5 text-terminal-night/60" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5 text-terminal-night/60" />
                  )}
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Concise Focus Sentence */}
              <div className="lg:col-span-3 font-mono text-sm text-terminal-night/85 leading-relaxed">
                {item.description}
              </div>

              {/* Tech Pill Tags */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <span
                  className={`px-3 py-1 ${item.tagBg} text-terminal-night font-mono text-xs font-bold border border-terminal-night shadow-sm whitespace-nowrap`}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
