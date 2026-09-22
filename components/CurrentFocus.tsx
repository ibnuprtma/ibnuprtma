export default function CurrentFocus() {
  const items = [
    {
      icon: "🛠",
      title: "Building & Refining:",
      text: "Deep diving into Next.js performance optimizations & modern component patterns.",
    },
    {
      icon: "⚡",
      title: "Experimenting:",
      text: "Exploring AI coding workflows and snappy micro-interactions.",
    },
    {
      icon: "📍",
      title: "Location & Status:",
      text: "Based in Surabaya, East Java — open for select freelance builds & collaborations.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-12" id="now">
      <div className="relative bg-white border-2 border-electric-blue p-6 sm:p-8 shadow-[4px_4px_0px_#0047FF]">
        {/* Washi Tape Accent at Top Center */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-caution-yellow border border-electric-blue -rotate-1 pointer-events-none shadow-sm z-30" />

        {/* Header Block */}
        <div className="mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-caution-yellow text-terminal-night font-mono text-xs font-bold uppercase tracking-wider border border-electric-blue">
            <span className="text-electric-blue">●</span>
            <span>CURRENT FOCUS</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-terminal-night tracking-tight">
            What I&apos;m into right now
          </h2>
        </div>

        {/* Content Items in Monospace */}
        <div className="space-y-4 font-mono text-sm text-terminal-night/85">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-paper-wash border border-terminal-night/20 flex items-start gap-3 hover:border-terminal-night transition-colors"
            >
              <span className="text-base leading-none select-none">
                {item.icon}
              </span>
              <div className="leading-relaxed">
                <strong className="text-electric-blue font-bold mr-1.5">
                  {item.title}
                </strong>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
