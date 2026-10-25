import { ArrowRight, Mail } from "lucide-react";

export function HeroCtas() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <a href="/projects" className="button-primary group">
        View Projects{" "}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </a>
      <a href="#contact" className="button-secondary">
        <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
      </a>
    </div>
  );
}
