import { ArrowUpRight, Code2, Compass, PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion-primitives";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="01 / A little about me"
      title="Thoughtful design. Practical development."
    >
      <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">
        <FadeIn className="portfolio-card p-6 sm:p-8">
          <p className="text-xl leading-relaxed tracking-tight sm:text-2xl">
            I&rsquo;m Zyrel, a student at the University of Pangasinan (UPANG),
            with an interest in bringing interfaces and code together.
          </p>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            I enjoy turning ideas into clear, intuitive experiences. My
            interests sit at the intersection of software development,
            problem-solving, and building practical systems that people can use.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            I&rsquo;m working toward a career in software development,
            continuing to learn through hands-on projects and the details that
            make an interface feel easy to use.
          </p>
          <Link
            href="/about#background"
            className="focus-ring text-accent mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium hover:underline"
          >
            Explore my background{" "}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeIn>
        <div className="grid gap-4">
          {[
            {
              Icon: PanelsTopLeft,
              title: "Design with purpose",
              text: "Clear hierarchy, considered interactions, and an eye for the small details.",
            },
            {
              Icon: Code2,
              title: "Build for people",
              text: "Practical interfaces that connect an idea to a useful experience.",
            },
            {
              Icon: Compass,
              title: "Keep learning",
              text: "Exploring new approaches through coursework and personal projects.",
            },
          ].map(({ Icon, title, text }, index) => (
            <FadeIn
              key={title}
              delay={index * 0.06}
              className="portfolio-card flex items-start gap-4 p-5"
            >
              <Icon
                className="text-accent mt-1 h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
