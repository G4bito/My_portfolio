import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { EducationalBackground } from "@/components/about/educational-background";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});
export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
      <EducationalBackground />
      <ContactCard />
    </main>
  );
}
