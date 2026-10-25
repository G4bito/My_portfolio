import { AboutSection } from "@/components/about/about-section";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { BackgroundSection } from "@/components/about/background-section";
import { Certifications } from "@/components/about/certifications";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Meet Zyrel Gabriel Maningding, a UPANG student interested in UI/UX design and software development.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <header className="mx-auto w-full max-w-275 px-6 pt-36 sm:px-10 sm:pt-44">
        <FadeIn>
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
            A little more about me.
          </h1>
        </FadeIn>
      </header>
      <AboutSection />
      <Skills />
      <div className="mx-auto w-full max-w-275 px-6 pb-8 sm:px-10">
        <Stack />
      </div>
      <BackgroundSection />
      <Certifications />
      <ContactCard />
    </main>
  );
}
