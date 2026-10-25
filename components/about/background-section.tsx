import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Education } from "./education";
import { Experience } from "./experience";

export function BackgroundSection() {
  return (
    <Section
      id="background"
      eyebrow="04 / Background"
      title="Learning by doing."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn delay={0.08} className="h-full">
          <Experience />
        </FadeIn>
      </div>
    </Section>
  );
}
