import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <div className="portfolio-card h-full p-6 sm:p-8">
      <h3 className="flex items-center gap-3 text-xl font-medium">
        <BriefcaseBusiness className="text-accent h-5 w-5" aria-hidden="true" />{" "}
        Development experience
      </h3>
      <ul className="mt-7 space-y-6">
        {experience.map((entry) => (
          <li key={entry.title}>
            <p className="text-accent text-xs font-medium tracking-wide">
              {entry.kind}
            </p>
            <h4 className="mt-2 text-lg font-medium">{entry.title}</h4>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {entry.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="border-border text-muted-foreground mt-7 border-t pt-5 text-sm leading-relaxed">
        More milestones will be added as my journey develops.
      </p>
    </div>
  );
}
