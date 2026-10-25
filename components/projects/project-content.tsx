import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectTechnologies({ project }: { project: Project }) {
  if (!project.technologies.length) return null;
  return (
    <ul
      aria-label={`${project.title} technologies`}
      className="project-technologies"
    >
      {project.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export function ProjectActions({
  project,
  details = true,
}: {
  project: Project;
  details?: boolean;
}) {
  return (
    <div className="project-actions">
      {details && (
        <Link href={`/projects/${project.id}`} className="button-primary">
          View Details <ArrowRight size={16} aria-hidden="true" />
          <span className="sr-only"> for {project.title}</span>
        </Link>
      )}
      {project.repository && (
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          <Github size={16} aria-hidden="true" /> Source Code
          <span className="sr-only">
            {" "}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
      {project.demo && project.platform !== "mobile" && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          {project.platform === "presentation"
            ? "View Slides"
            : project.platform === "game"
              ? "View Game"
              : "Live Demo"}{" "}
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only">
            {" "}
            for {project.title} (opens in a new tab)
          </span>
        </a>
      )}
    </div>
  );
}
