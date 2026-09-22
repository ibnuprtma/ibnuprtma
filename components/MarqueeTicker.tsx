export default function MarqueeTicker() {
  const stackItems = [
    "Vue.js",
    "Node.js",
    "Fastify",
    "Laravel",
    "TypeScript",
    "Socket.IO",
    "RESTful APIs",
    "PHP",
    "Tailwind CSS",
    "Next.js",
  ];

  const toolsItems = [
    { label: "PostgreSQL", bg: "bg-paper-wash", text: "text-terminal-night" },
    { label: "MySQL", bg: "bg-caution-yellow", text: "text-ink-black" },
    { label: "MariaDB", bg: "bg-paper-wash", text: "text-terminal-night" },
    { label: "Git / GitLab", bg: "bg-blueprint-cyan", text: "text-terminal-night" },
    { label: "GitHub", bg: "bg-paper-wash", text: "text-terminal-night" },
    { label: "PrimeVue", bg: "bg-caution-yellow", text: "text-ink-black" },
    { label: "CodeIgniter", bg: "bg-paper-wash", text: "text-terminal-night" },
    { label: "jQuery", bg: "bg-paper-wash", text: "text-terminal-night" },
    { label: "Salesforce", bg: "bg-caution-yellow", text: "text-ink-black" },
    { label: "Healthcare Systems", bg: "bg-blueprint-cyan", text: "text-terminal-night" },
    { label: "ERP Systems", bg: "bg-paper-wash", text: "text-terminal-night" },
  ];

  return (
    <section className="w-full overflow-hidden py-10 my-4 space-y-4">
      {/* Ribbon 1: Electric Blue Ribbon (Scrolls Left) */}
      <div className="marquee-wrapper relative w-full overflow-hidden bg-electric-blue border-y-2 border-terminal-night py-3.5 shadow-[0_4px_0_#0A192F] -rotate-1 cursor-grab">
        <div className="animate-marquee-left flex items-center gap-6 whitespace-nowrap font-mono text-sm tracking-wider uppercase text-white select-none">
          <div className="flex items-center gap-6">
            {stackItems.map((item, idx) => (
              <span key={`s1-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-caution-yellow">
                  {idx % 2 === 0 ? "✦" : "●"}
                </span>
              </span>
            ))}
            {stackItems.map((item, idx) => (
              <span key={`s1-repeat-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-caution-yellow">
                  {idx % 2 === 0 ? "✦" : "●"}
                </span>
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="flex items-center gap-6">
            {stackItems.map((item, idx) => (
              <span key={`s2-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-caution-yellow">
                  {idx % 2 === 0 ? "✦" : "●"}
                </span>
              </span>
            ))}
            {stackItems.map((item, idx) => (
              <span key={`s2-repeat-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-caution-yellow">
                  {idx % 2 === 0 ? "✦" : "●"}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ribbon 2: White Paper Tape Ribbon (Scrolls Right) */}
      <div className="marquee-wrapper relative w-full overflow-hidden bg-white border-y-2 border-electric-blue py-3.5 shadow-[0_4px_0_#0047FF] rotate-1 cursor-grab">
        <div className="animate-marquee-right flex items-center gap-5 whitespace-nowrap font-mono text-xs font-bold tracking-wider uppercase text-terminal-night select-none">
          <div className="flex items-center gap-5">
            {toolsItems.map((tool, idx) => (
              <span key={`t1-${idx}`} className="flex items-center gap-5">
                <span
                  className={`px-2.5 py-0.5 ${tool.bg} ${tool.text} border border-terminal-night`}
                >
                  {tool.label}
                </span>
                <span className="text-electric-blue font-black">/</span>
              </span>
            ))}
            {toolsItems.map((tool, idx) => (
              <span key={`t1-repeat-${idx}`} className="flex items-center gap-5">
                <span
                  className={`px-2.5 py-0.5 ${tool.bg} ${tool.text} border border-terminal-night`}
                >
                  {tool.label}
                </span>
                <span className="text-electric-blue font-black">/</span>
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="flex items-center gap-5">
            {toolsItems.map((tool, idx) => (
              <span key={`t2-${idx}`} className="flex items-center gap-5">
                <span
                  className={`px-2.5 py-0.5 ${tool.bg} ${tool.text} border border-terminal-night`}
                >
                  {tool.label}
                </span>
                <span className="text-electric-blue font-black">/</span>
              </span>
            ))}
            {toolsItems.map((tool, idx) => (
              <span key={`t2-repeat-${idx}`} className="flex items-center gap-5">
                <span
                  className={`px-2.5 py-0.5 ${tool.bg} ${tool.text} border border-terminal-night`}
                >
                  {tool.label}
                </span>
                <span className="text-electric-blue font-black">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
