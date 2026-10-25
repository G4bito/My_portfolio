import Image from "next/image";
import { ArrowUpRight, Github, ImageIcon, ShieldCheck } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { FadeIn } from "@/components/ui/motion-primitives";

export function ProjectGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Title = headingLevel === 2 ? "h2" : "h3";
  const DetailTitle = headingLevel === 2 ? "h3" : "h4";
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <FadeIn key={project.id} delay={index * 0.08} className="h-full">
          <article
            aria-labelledby={`${project.id}-title`}
            className="project-card portfolio-card flex h-full flex-col overflow-hidden"
          >
            <div className="project-card__image border-border bg-muted relative aspect-[16/10] border-b">
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1100px) 500px, (min-width: 768px) 50vw, 100vw"
                  className="project-card__image-inner object-cover object-[center_20%]"
                />
              ) : (
                <div className="page-atmosphere flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  {project.pending ? (
                    <ShieldCheck
                      className="text-accent h-10 w-10"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  ) : (
                    <ImageIcon
                      className="text-accent h-10 w-10"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  )}
                  <p className="font-serif text-3xl tracking-tight">
                    {project.title}
                  </p>
                  <p className="text-muted-foreground font-mono text-xs">
                    Preview coming soon
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-accent text-xs font-medium tracking-wide">
                {project.category}
              </p>
              <Title
                id={`${project.id}-title`}
                className="mt-2 text-2xl font-medium tracking-tight"
              >
                {project.title}
              </Title>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.technologies.length > 0 && (
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech) => (
                    <li className="skill-badge" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              {project.features.length > 0 && (
                <div className="mt-6">
                  <DetailTitle className="text-sm font-semibold">
                    Key features
                  </DetailTitle>
                  <ul className="text-muted-foreground marker:text-accent mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.role && (
                <div className="mt-5">
                  <DetailTitle className="text-sm font-semibold">
                    My contribution
                  </DetailTitle>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {project.role}
                  </p>
                </div>
              )}
              <div className="mt-auto pt-6">
                {project.pending ? (
                  <p className="border-border text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm">
                    Project details pending. Technical information and links
                    will be added once available.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" /> Source
                        code
                        <span className="sr-only">
                          {" "}
                          for {project.title} (opens in a new tab)
                        </span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        Live demo{" "}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">
                          {" "}
                          for {project.title} (opens in a new tab)
                        </span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
