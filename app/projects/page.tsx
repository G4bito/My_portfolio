import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ProjectGrid } from "@/components/projects/project-grid";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Personal projects and capstone work by Zyrel Gabriel Maningding.",
  path: "/projects",
});
export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section
        className="portfolio-section pt-36 sm:pt-44"
        aria-labelledby="projects-heading"
      >
        <FadeIn className="mb-10 max-w-2xl">
          <p className="text-accent mb-3 font-mono text-xs tracking-[0.16em] uppercase">
            Selected work
          </p>
          <h1
            id="projects-heading"
            className="font-serif text-4xl tracking-tight sm:text-5xl"
          >
            Projects with a purpose.
          </h1>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            A closer look at my work, the tools behind it, and what I
            contributed.
          </p>
        </FadeIn>
        <ProjectGrid headingLevel={2} />
      </section>
      <ContactCard />
    </main>
  );
}
