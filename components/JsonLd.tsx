import type { Person, WebSite, WithContext } from "schema-dts";

export default function JsonLd() {
  const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibnuprtma.",
    alternateName: "ibnuprtma",
    jobTitle: "Senior Frontend Engineer & UI Dev",
    description:
      "Full-stack web craftsperson blending sleek UI design with snappy Next.js performance.",
    url: "https://Ibnuprtma.vercel.app",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Design Systems",
      "Web Performance",
      "Frontend Architecture",
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
