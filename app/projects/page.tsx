import { ContactCard } from "@/components/contact/contact-card";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Design, development, and capstone work by Zyrel Gabriel Maningding.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <FeaturedProjects standalone />
      <ContactCard />
    </main>
  );
}
