import type { Person, WebSite, WithContext } from "schema-dts";

export default function JsonLd() {
  const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibnu Pratama",
    alternateName: "ibnuprtma",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer building scalable web applications, real-time systems, and intelligent automation.",
    url: "https://Ibnuprtma.vercel.app",
    sameAs: [
      "https://github.com/ibnuprtma",
      "https://linkedin.com/in/ibnuprtma",
      "https://twitter.com/ibnuprtma",
      "https://www.instagram.com/ibnuprtma",
    ],
    knowsAbout: [
      "Software Engineering",
      "Vue.js",
      "Laravel",
      "Node.js",
      "Fastify",
      "TypeScript",
      "Socket.IO",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Algorithmic Trading",
    ],
  };

  const websiteJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ibnuprtma.vercel.app // Clean & Casual Neo-Paper Portfolio",
    url: "https://Ibnuprtma.vercel.app",
    description:
      "Personal portfolio and engineering log of Ibnu Pratama — Frontend Architect and UI Developer.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
