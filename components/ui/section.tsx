import type { ReactNode } from "react";
import { FadeIn } from "./motion-primitives";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="portfolio-section"
    >
      <FadeIn>
        <header className="mb-8 max-w-2xl sm:mb-10">
          <p className="text-accent mb-3 font-mono text-xs font-medium tracking-[0.16em] uppercase">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              {description}
            </p>
          )}
        </header>
      </FadeIn>
      {children}
    </section>
  );
}
