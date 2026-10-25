import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/lib/portfolio";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "./contact-form";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

export function ContactCard(): ReactNode {
  const resumePath = profile.resume
    ? path.resolve("public", profile.resume.replace(/^\//, ""))
    : null;
  const hasResume =
    resumePath &&
    resumePath.startsWith(path.resolve("public") + path.sep) &&
    existsSync(resumePath);
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto my-10 w-full max-w-275 scroll-mt-28 px-6 sm:my-16 sm:px-10"
    >
      <FadeIn>
        <div className="border-foreground/8 bg-background relative overflow-hidden rounded-4xl border p-1.5 shadow-sm">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-15"
            >
              <ShaderFlow scale={3} brightness={3} />
            </div>
            <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:items-start md:gap-10">
              <div className="flex h-full flex-col gap-6 py-2">
                <h2
                  id="contact-title"
                  className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
                >
                  Let&rsquo;s connect
                </h2>
                <p className="text-foreground/65 max-w-[29ch] text-lg leading-relaxed">
                  Have a project, idea, or question? Tell me what you have in
                  mind and I&rsquo;ll get back to you by email.
                </p>
                <Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring border-foreground/10 bg-background hover:bg-foreground/5 inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> Find me on
                  GitHub
                </Link>
                {(profile.linkedin || hasResume) && (
                  <div className="flex flex-wrap gap-3">
                    {profile.linkedin && (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />{" "}
                        LinkedIn
                      </a>
                    )}
                    {hasResume && profile.resume && (
                      <a
                        href={profile.resume}
                        download
                        className="button-secondary"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />{" "}
                        Download resume
                      </a>
                    )}
                  </div>
                )}
                <div className="text-foreground/55 mt-auto space-y-1 pt-6 text-xs leading-relaxed">
                  <p>{new Date().getFullYear()} &copy; Zyrel Gabriel Maningding</p>
                  <p>UI/UX Designer & Full Stack Developer</p>
                </div>
              </div>
              <div className="border-foreground/8 bg-background rounded-3xl border p-5 sm:p-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
