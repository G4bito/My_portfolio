"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useId, useRef, useState } from "react";
import type { ProjectScreenshot } from "@/lib/projects";
import { useReducedMotion } from "@/lib/motion";

export function ProjectGallery({
  title,
  screenshots,
  mobile = false,
}: {
  title: string;
  screenshots: ProjectScreenshot[];
  mobile?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const id = useId();
  if (!screenshots.length) {
    return (
      <div className={`project-preview-empty ${mobile ? "is-mobile" : ""}`}>
        <ImageIcon size={28} strokeWidth={1.25} aria-hidden="true" />
        <span>{title}</span>
        <p>Project screenshots haven’t been shared yet.</p>
      </div>
    );
  }
  function goTo(index: number) {
    const next = Math.max(0, Math.min(index, screenshots.length - 1));
    const element = track.current;
    if (!element) return;
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      className={`project-gallery ${mobile ? "is-mobile" : ""}`}
    >
      <div
        ref={track}
        id={id}
        className="project-gallery-track focus-ring"
        tabIndex={0}
        aria-label="Screenshot gallery. Use left and right arrow keys to navigate."
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
            return;
          event.preventDefault();
          goTo(
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? screenshots.length - 1
                : active + (event.key === "ArrowRight" ? 1 : -1)
          );
        }}
        onScroll={() => {
          const element = track.current;
          if (element?.clientWidth)
            setActive(Math.round(element.scrollLeft / element.clientWidth));
        }}
      >
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${screenshots.length}`}
            className="project-gallery-slide"
          >
            <div className={mobile ? "project-phone" : "project-browser"}>
              <div className="project-screenshot">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes={mobile ? "280px" : "(min-width: 1024px) 600px, 90vw"}
                  className="object-contain"
                />
              </div>
            </div>
            {screenshot.caption && (
              <figcaption>{screenshot.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
      {screenshots.length > 1 && (
        <div className="project-gallery-controls">
          <button
            type="button"
            className="focus-ring"
            aria-label={`Previous ${title} screenshot`}
            aria-controls={id}
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <p aria-live="polite" aria-atomic="true">
            {active + 1} / {screenshots.length}
          </p>
          <button
            type="button"
            className="focus-ring"
            aria-label={`Next ${title} screenshot`}
            aria-controls={id}
            disabled={active === screenshots.length - 1}
            onClick={() => goTo(active + 1)}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
