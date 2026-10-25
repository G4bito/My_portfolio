// Publish only owner-confirmed details or facts visible in this repository.
export const profile = {
  name: "Zyrel Gabriel Maningding",
  title: "UI/UX Designer & Full Stack Developer",
  email: "zyrelgabrielmaningding@gmail.com",
  github: "https://github.com/G4bito",
  linkedin: null as string | null,
  // Set only after placing the actual PDF in public/.
  resume: null as string | null,
};

export const skillGroups = [
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    note: "The technologies behind this portfolio.",
  },
  {
    title: "Backend Development",
    items: [],
    note: "Backend technologies will be added here.",
  },
  {
    title: "Databases",
    items: [],
    note: "Database technologies will be added here.",
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub"],
    note: "Version control and source collaboration.",
  },
  {
    title: "Other Technical Skills",
    items: ["UI/UX Design", "Responsive Interfaces"],
    note: "Connecting thoughtful layouts with usable interfaces.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  role: string | null;
  repository: string | null;
  demo: string | null;
  image: { src: string; alt: string } | null;
  pending: boolean;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    category: "Web design & development",
    description:
      "A personal space for my work, background, and interests in design and software development. Built on an existing Next.js template and personalized with my own visual identity.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive layouts and a portrait-inspired palette",
      "Light and dark themes with motion preferences",
      "Contact form with inline submission feedback",
    ],
    role: "Portfolio customization, content, and visual direction.",
    repository: "https://github.com/G4bito/MY-PORTFOLIO-V2",
    demo: null,
    image: {
      src: "/zyrel-portrait.jpg",
      alt: "Graduation portrait used in my personal portfolio",
    },
    pending: false,
  },
  {
    id: "safelink",
    title: "SafeLink",
    category: "Capstone project",
    description:
      "A dedicated space for my SafeLink capstone. The project overview, screenshots, technical stack, and contributions will be added here.",
    technologies: [],
    features: [],
    role: null,
    repository: null,
    demo: null,
    image: null,
    pending: true,
  },
];

export type EducationEntry = {
  school: string;
  program: string;
  period: string;
  description: string;
  startYear: number | null;
  endYear: number | null;
  current: boolean;
};

// Add confirmed attendance years here; null means the year is not yet known.
export const education: EducationEntry[] = [
  {
    school: "PHINMA University of Pangasinan",
    program: "Bachelor of Science in Information Technology",
    period: "Present",
    description:
      "Currently pursuing a degree in Information Technology with a focus on web development, UI/UX design, and software systems.",
    startYear: null,
    endYear: null,
    current: true,
  },
  {
    school: "CCNHS",
    program: "Senior High School / TVL / ICT",
    period: "Class of 2024",
    description:
      "Developed a strong foundation in technology, design principles, and practical ICT skills. ICT 12 - Oracle.",
    startYear: null,
    endYear: 2024,
    current: false,
  },
];

export const experience = [
  {
    title: "Personal portfolio development",
    kind: "Independent project",
    description:
      "Personalizing and maintaining this portfolio, bringing together interface design, responsive pages, source control, and a contact workflow.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  completed: string;
  image: { src: string; alt: string } | null;
  verification: string | null;
};
// Add real certificates only. The empty state is intentional.
export const certifications: Certification[] = [];
