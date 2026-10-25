import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getProject, projects } from "@/lib/projects";
import { createMetadata } from "@/lib/metadata";
import { ProjectGallery } from "@/components/projects/project-gallery";
import {
  ProjectActions,
  ProjectTechnologies,
} from "@/components/projects/project-content";
import { FadeIn } from "@/components/ui/motion-primitives";

type Props = { params: Promise<{ slug: string }> };

// Next.js App Router dynamic params: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.id}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <main id="main-content" className="project-case-study">
      <Link href="/#projects" className="project-back focus-ring">
        <ArrowLeft size={16} aria-hidden="true" /> Back to projects
      </Link>
      <FadeIn>
        <header className="project-case-header">
          <p className="projects-eyebrow">
            {project.platform === "mobile"
              ? "Mobile application"
              : "Project overview"}
          </p>
          <h1>{project.title}</h1>
          <p className="project-category">{project.category}</p>
        </header>
        <div className="project-case-layout">
          <section aria-labelledby="overview-title">
            <h2 id="overview-title">Overview</h2>
            <p className="project-description">{project.description}</p>
            <ProjectTechnologies project={project} />
            {(project.repository ||
              (project.demo && project.platform !== "mobile")) && (
              <ProjectActions project={project} details={false} />
            )}
            {project.platform === "mobile" && (
              <p className="project-case-note">
                Explore the project here. No app installation is required.
              </p>
            )}
          </section>
          <div className="project-case-preview">
            <ProjectGallery
              title={project.title}
              screenshots={project.screenshots}
              mobile={project.platform === "mobile"}
            />
          </div>
        </div>
      </FadeIn>
      <div className="project-case-sections">
        {project.problem && (
          <section>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
        )}
        {project.features.length > 0 && (
          <section>
            <h2>Key features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}
        {project.technologies.length > 0 && (
          <section>
            <h2>Development technologies</h2>
            <ProjectTechnologies project={project} />
          </section>
        )}
        {project.role && (
          <section>
            <h2>My contribution</h2>
            <p>{project.role}</p>
          </section>
        )}
        {project.challenges.length > 0 && (
          <section>
            <h2>Challenges & solutions</h2>
            {project.challenges.map((item) => (
              <div key={item.challenge}>
                <h3>{item.challenge}</h3>
                <p>{item.solution}</p>
              </div>
            ))}
          </section>
        )}
      </div>
      <footer className="project-case-footer">
        <p>Have something in mind?</p>
        <Link href="/#contact" className="button-secondary">
          Let’s talk <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </footer>
    </main>
  );
}
