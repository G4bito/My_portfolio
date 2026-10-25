import { FolderOpen, Star } from "lucide-react";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ProjectGrid } from "./project-grid";
import { ProjectGallery } from "./project-gallery";
import { ProjectActions, ProjectTechnologies } from "./project-content";
import styles from "./device-mockups.module.css";

export function FeaturedProjects({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const featured = projects.filter((project) => project.featured);
  const Heading = standalone ? "h1" : "h2";
  const ProjectHeading = standalone ? "h2" : "h3";
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={
        standalone
          ? "projects-section projects-section-standalone"
          : "projects-section"
      }
    >
      <FadeIn>
        <header className="projects-header">
          <div>
            <p className="projects-eyebrow">
              <FolderOpen size={15} aria-hidden="true" /> Projects
            </p>
            <Heading id="projects-heading">
              My <span>Projects</span>
            </Heading>
            <p className="projects-intro">
              A collection of my work that showcases my skills in UI/UX design,
              full-stack development, and creative problem-solving.
            </p>
          </div>
          <p className="projects-aside">
            <span aria-hidden="true" />
            Turning ideas
            <br />
            into real products
          </p>
        </header>
      </FadeIn>
      {featured.map((project) => (
        <div
          key={project.id}
          className={`project-featured ${project.mockup === "phone" ? styles.spotlight : ""}`}
        >
          <FadeIn className="project-featured-preview">
            <ProjectGallery
              title={project.title}
              screenshots={project.screenshots}
              device={project.mockup ?? "browser"}
            />
          </FadeIn>
          <FadeIn delay={0.1} className="project-featured-content">
            <p className="projects-eyebrow">
              <Star size={14} fill="currentColor" aria-hidden="true" />{" "}
              {project.platform === "mobile"
                ? "Mobile App"
                : "Featured Project"}
            </p>
            <ProjectHeading className="project-featured-title">
              {project.title}
            </ProjectHeading>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
            <ProjectTechnologies project={project} />
            <ProjectActions project={project} />
          </FadeIn>
        </div>
      ))}
      <div className="projects-more">
        <div className="projects-grid-heading">
          <h2>More of my work</h2>
          <span>
            {String(projects.length - featured.length).padStart(2, "0")}{" "}
            projects
          </span>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}
