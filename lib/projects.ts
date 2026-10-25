// Project facts below come from the owner's brief or this portfolio's source.
// Add only real screenshots and confirmed links. Missing information stays absent.
export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  platform: "web" | "mobile" | "game" | "presentation";
  mockup?: "laptop" | "phone";
  featured?: boolean;
  technologies: string[];
  features: string[];
  role: string | null;
  problem: string | null;
  challenges: { challenge: string; solution: string }[];
  repository: string | null;
  demo: string | null;
  screenshots: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    id: "safelink",
    mockup: "laptop",
    featured: true,
    title: "SafeLink",
    category: "Community Safety Reporting and Assistance System",
    description:
      "A web-based community safety reporting and assistance system for Pangasinan, featuring interactive incident mapping, role-based dashboards, real-time notifications, and coordinated response workflows.",
    platform: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    features: [
      "Interactive incident mapping",
      "Role-based dashboards",
      "Real-time notifications",
      "Coordinated response workflows",
    ],
    role: null,
    problem: null,
    challenges: [],
    repository: null,
    demo: null,
    screenshots: [
      {
        src: "/projects/safelink/Safelink-01.png",
        alt: "SafeLink landing page with the Report. Verify. Respond. heading, incident reporting actions, community statistics, and a safety map preview",
        caption: "SafeLink landing page",
      },
    ],
  },
  {
    id: "motra",
    mockup: "phone",
    featured: true,
    title: "Motra",
    category: "Personal Finance Mobile Application",
    description: "A personal finance application designed for mobile devices.",
    platform: "mobile",
    technologies: [],
    features: [],
    role: null,
    problem: null,
    challenges: [],
    repository: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "ya-paayos",
    title: "YA! PAAYOS",
    category: "Roblox Vehicle Repair Game",
    description: "A vehicle repair game on Roblox.",
    platform: "game",
    technologies: ["Roblox"],
    features: [],
    role: null,
    problem: null,
    challenges: [],
    repository: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "ln-by-piya",
    mockup: "laptop",
    featured: true,
    title: "LN by PIYA",
    category: "Nail Services Website",
    description: "A website for the LN by PIYA nail services brand.",
    platform: "web",
    technologies: [],
    features: [],
    role: null,
    problem: null,
    challenges: [],
    repository: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "academic-presentations",
    title: "Academic Presentation Designs",
    category: "Design / Presentation Work",
    description: "A collection of my academic presentation designs.",
    platform: "presentation",
    technologies: [],
    features: [],
    role: null,
    problem: null,
    challenges: [],
    repository: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "portfolio",
    mockup: "laptop",
    title: "Personal Portfolio",
    category: "Web Design & Development",
    description:
      "My space for design, development, and the work in between. A Next.js portfolio personalized with my own content and visual identity.",
    platform: "web",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive layouts and a portrait-inspired palette",
      "Light and dark themes with motion preferences",
      "Contact form with inline submission feedback",
    ],
    role: "Portfolio customization, content, and visual direction. Built on DavidHDev's portfolio template, with original contributor credits retained in the README.",
    problem: null,
    challenges: [],
    repository: "https://github.com/G4bito/My_portfolio",
    demo: null,
    screenshots: [
      {
        src: "/portfolio-home.jpg",
        alt: "Actual portfolio homepage with the introduction, mint green heading, and graduation portrait",
        caption: "Portfolio homepage",
      },
      {
        src: "/portfolio-about.jpg",
        alt: "Actual portfolio About page with the personal introduction and design principles",
        caption: "About page",
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
