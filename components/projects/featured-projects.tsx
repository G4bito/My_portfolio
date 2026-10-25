import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ProjectGrid } from "./project-grid";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Selected work"
      title="Ideas brought to life."
      description="Personal work and a space for the projects taking shape along the way."
    >
      <ProjectGrid />
      <Link href="/projects" className="button-secondary mt-6">
        View all projects{" "}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Section>
  );
}
