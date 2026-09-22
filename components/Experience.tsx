import { MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  period: string;
  type: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
  tags: string[];
  tagBg: string;
  tapePosition: string;
  projectNote?: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Nov 2025 — Present",
    type: "Full-time",
    title: "Web Developer",
    company: "National Hospital",
    location: "Surabaya, East Java · On-site",
    highlights: [
      "Developed and maintained mission-critical healthcare web applications, including the Pharmacy Queue & dispensing system to streamline prescription fulfillment and patient wait times.",
      "Built real-time queue display dashboards and pharmacist operational interfaces using Vue.js and modern JavaScript.",
      "Integrated internal hospital backend services and RESTful APIs, ensuring high reliability, fast response times, and real-time status updates across departments.",
      "Enhanced system reliability and responsive user experience for cross-department clinical workflows.",
    ],
    tags: ["Vue Js", "Node Js", "Fastify", "Typescript", "Socket IO", "REST APIs", "PostgreSQL", "Mysql", "Tailwind CSS", "Healthcare Systems"],
    tagBg: "bg-caution-yellow text-ink-black",
    tapePosition: "right-6 rotate-2",
    projectNote: "🏥 National Hospital Surabaya",
  },
  {
    period: "Apr 2021 — Mar 2025",
    type: "Full-time · 4 yrs",
    title: "Web Developer",
    company: "PT. Kreasi Informatika Mandiri",
    location: "Jakarta · Remote",
    highlights: [
      "Built and maintained Salesforce Automation Web Apps and Web Reports for over 30+ client projects.",
      "Developed and integrated RESTful APIs using Laravel for seamless multi-system data integration.",
      "Created interactive, accessible UI/UX using Vue.js and PrimeVue with responsive and user-friendly designs.",
      "Optimized data processing efficiency, significantly reduced page load time, and enhanced overall user satisfaction.",
    ],
    tags: ["Vue.js", "Laravel", "CodeIgniter", "MariaDB", "PostgreSQL", "Mysql", "Salesforce Automation"],
    tagBg: "bg-paper-wash text-terminal-night",
    tapePosition: "left-8 -rotate-2",
  },
  {
    period: "Dec 2018 — Feb 2021",
    type: "Part-time · 2 yrs 3 mos",
    title: "Web Developer",
    company: "PT. Sarana Mendulang Arta",
    location: "Surabaya, Jawa Timur",
    highlights: [
      "Designed and developed responsive websites using Laravel, HTML, CSS, JavaScript and Jquery for an ERP system in an aircraft maintenance facility (Merpati Maintenance Facility).",
      "Performed comprehensive debugging, automated feature testing, and bug fixing to ensure system stability and meet operational aerospace standards.",
    ],
    tags: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "Jquery", "Mysql", "ERP Systems"],
    tagBg: "bg-blueprint-cyan/40 text-terminal-night",
    tapePosition: "right-12 rotate-3",
    projectNote: "✈️ SmartAircraft ID (Merpati Maintenance Facility ERP)",
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
          TRACK RECORD // 2018 — PRESENT
        </div>
      </div>

      {/* Vertical List of Memo Slip / Receipt Cards */}
      <div className="space-y-8">
        {experiences.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white border-2 border-terminal-night p-6 sm:p-8 shadow-[5px_5px_0px_#0047FF] hover:-translate-y-1 transition-all group"
          >
            {/* Tactile Washi Tape Accent */}
            <div
              className={`absolute -top-3.5 ${item.tapePosition} w-24 h-6 bg-caution-yellow/85 border border-terminal-night pointer-events-none shadow-sm z-10`}
            />

            {/* Top Card Row: Title, Company, Period & Main Tag */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b-2 border-dashed border-terminal-night/20">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 bg-caution-yellow text-ink-black font-bold border border-terminal-night">
                    {item.period}
                  </span>
                  <span className="px-2 py-0.5 bg-paper-wash text-terminal-night/80 border border-terminal-night/40">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-terminal-night group-hover:text-electric-blue transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="lg:text-right space-y-1">
                <div className="font-headline text-lg font-bold text-electric-blue">
                  {item.company}
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-terminal-night/70">
                  <MapPin className="w-3.5 h-3.5 text-terminal-night/60" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="pt-5 space-y-3">
              <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-terminal-night/85 leading-relaxed">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-electric-blue font-bold select-none mt-0.5">
                      ▸
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Project / Media Reference if present */}
              {item.projectNote && (
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-paper-wash border border-terminal-night text-terminal-night font-mono text-xs font-bold shadow-[2px_2px_0px_#0A192F]">
                    <span>{item.projectNote}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-electric-blue" />
                  </div>
                </div>
              )}

              {/* Tech Pill Tags */}
              <div className="pt-3 flex flex-wrap items-center gap-2 border-t border-terminal-night/10">
                <span className="font-mono text-xs text-terminal-night/60 uppercase mr-1">
                  Tech:
                </span>
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 bg-paper-wash text-terminal-night font-mono text-xs font-medium border border-terminal-night/60 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
