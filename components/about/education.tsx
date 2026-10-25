import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio";

export function Education() {
  return (
    <div className="portfolio-card p-6 sm:p-8">
      <h3 className="flex items-center gap-3 text-xl font-medium">
        <GraduationCap className="text-accent h-5 w-5" aria-hidden="true" />{" "}
        Education
      </h3>
      <ol className="border-border mt-7 space-y-7 border-l pl-5">
        {education.map((entry) => (
          <li key={entry.school} className="relative">
            <span
              aria-hidden="true"
              className="bg-accent absolute top-1.5 -left-6 h-2 w-2 rounded-full"
            />
            <p className="text-accent text-xs font-medium tracking-wide">
              {entry.period}
            </p>
            <h4 className="mt-2 text-lg leading-snug font-medium">
              {entry.school}
            </h4>
            <p className="text-foreground mt-2 text-sm">{entry.program}</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
