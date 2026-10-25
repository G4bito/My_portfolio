import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/portfolio";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion-primitives";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 / Milestones"
      title="Certifications & achievements."
    >
      {certifications.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <FadeIn
              key={`${certificate.issuer}-${certificate.title}`}
              className="portfolio-card overflow-hidden"
            >
              {certificate.image && (
                <div className="bg-muted relative aspect-[4/3]">
                  <Image
                    src={certificate.image.src}
                    alt={certificate.image.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-semibold">{certificate.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {certificate.issuer}
                </p>
                <p className="text-muted-foreground mt-1 text-sm">
                  {certificate.completed}
                </p>
                {certificate.verification && (
                  <a
                    className="button-secondary mt-5"
                    href={certificate.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View credential{" "}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn className="portfolio-card flex items-start gap-5 border-dashed p-6 sm:p-8">
          <Award
            className="text-accent mt-1 h-7 w-7 shrink-0"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-lg font-medium">More to share as I grow.</h3>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
              Certificates, training, and achievements will appear here when
              available.
            </p>
          </div>
        </FadeIn>
      )}
    </Section>
  );
}
