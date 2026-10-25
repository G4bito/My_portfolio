import { Code2, Database, Server, Wrench, Shapes } from "lucide-react";
import { skillGroups } from "@/lib/portfolio";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion-primitives";

const icons = [Code2, Server, Database, Wrench, Shapes];
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / My toolkit"
      title="Tools behind the work."
      description="A growing toolkit for turning ideas into usable interfaces."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <FadeIn
              key={group.title}
              delay={index * 0.04}
              className="portfolio-card p-6"
            >
              <Icon className="text-accent mb-5 h-5 w-5" aria-hidden="true" />
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {group.note}
              </p>
              {group.items.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="skill-badge">
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground mt-5 text-xs font-medium">
                  Details coming soon
                </p>
              )}
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
