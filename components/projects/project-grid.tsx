import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ProjectGallery } from "./project-gallery";
import { ProjectActions, ProjectTechnologies } from "./project-content";

export function ProjectGrid() {
  return (
    <div className="projects-grid">
      {projects
        .filter((project) => !project.featured)
        .map((project, index) => (
          <FadeIn
            key={project.id}
            delay={Math.min(index * 0.06, 0.18)}
            className="h-full min-w-0"
          >
            <article
              className="project-item"
              aria-labelledby={project.id + "-title"}
            >
              <div className="project-item-preview">
                <ProjectGallery
                  title={project.title}
                  screenshots={project.screenshots}
                  device={
                    project.mockup ??
                    (project.platform === "mobile" ? "phone" : "browser")
                  }
                  compact
                />
              </div>
              <div className="project-item-content">
                <h3 id={project.id + "-title"}>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <ProjectTechnologies project={project} />
                <ProjectActions project={project} />
              </div>
            </article>
          </FadeIn>
        ))}
    </div>
  );
}
