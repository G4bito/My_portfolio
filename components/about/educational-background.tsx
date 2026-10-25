import { existsSync } from "node:fs";
import path from "node:path";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Download,
  GraduationCap,
  School,
  Target,
} from "lucide-react";
import { education, profile } from "@/lib/portfolio";
import { FadeIn } from "@/components/ui/motion-primitives";

export function EducationalBackground() {
  const startYears = education.flatMap((entry) =>
    entry.startYear === null ? [] : [entry.startYear]
  );
  const endYears = education.flatMap((entry) =>
    entry.endYear === null ? [] : [entry.endYear]
  );
  const yearsStudied = startYears.length
    ? `${Math.min(...startYears)} – ${education.some((entry) => entry.current) ? "Present" : endYears.length ? Math.max(...endYears) : "Ongoing"}`
    : "Dates to be added";
  const resumePath = profile.resume
    ? path.resolve("public", profile.resume.replace(/^\//, ""))
    : null;
  const hasResume = Boolean(
    resumePath &&
    resumePath.startsWith(path.resolve("public") + path.sep) &&
    existsSync(resumePath)
  );
  const stats = [
    {
      label: "Current Program",
      value: "BS Information Technology",
      icon: BookOpen,
    },
    { label: "Years Studied", value: yearsStudied, icon: CalendarDays },
    {
      label: "Focus Areas",
      value: "Web Development, UI/UX Design, Software Systems",
      icon: Target,
    },
  ];
  const timeline = [
    ...education.map((entry) => ({
      ...entry,
      period:
        entry.startYear !== null
          ? `${entry.startYear} – ${entry.current ? "Present" : (entry.endYear ?? "Ongoing")}`
          : entry.period,
      icon: entry.current ? GraduationCap : School,
    })),
    {
      school: "Relevant Learning & Certifications",
      program: "Workshops / Online Courses",
      period: "Ongoing",
      description:
        "Continuously improving my skills in frontend development, backend development, and UI/UX design.",
      current: false,
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="education-section"
    >
      <FadeIn className="education-shell">
        <div className="education-intro">
          <span className="education-eyebrow">
            <GraduationCap size={17} aria-hidden="true" /> Education
          </span>
          <h2 id="education-title" className="education-title">
            Educational <span>Background</span>
          </h2>
          <p className="education-description">
            My learning journey has shaped my passion for technology, design,
            and problem-solving. Here&rsquo;s a look at my educational
            background and the experiences that continue to fuel my growth as a
            UI/UX designer and full stack developer.
          </p>
          <dl className="education-stats">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="education-stat">
                <span className="education-stat-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="education-actions">
            <a
              href="/about#certifications"
              className="button-primary focus-ring"
            >
              View Certifications <ArrowRight size={18} aria-hidden="true" />
            </a>
            {hasResume && profile.resume ? (
              <a
                href={profile.resume}
                download
                className="button-secondary focus-ring"
              >
                <Download size={18} aria-hidden="true" /> Download CV
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="CV will be available soon"
                className="button-secondary education-disabled"
              >
                <Download size={18} aria-hidden="true" /> Download CV
              </button>
            )}
          </div>
        </div>
        <div className="education-timeline-panel">
          <ol
            className="education-timeline"
            aria-label="Education and ongoing learning"
          >
            {timeline.map(
              (
                { school, program, period, description, current, icon: Icon },
                index
              ) => (
                <li
                  key={school}
                  className={`education-timeline-item ${current ? "is-current" : ""}`}
                >
                  <span className="education-marker" aria-hidden="true">
                    <span />
                  </span>
                  <FadeIn delay={index * 0.08}>
                    <article className="education-timeline-card">
                      <div className="education-card-top">
                        <span className="education-period">{period}</span>
                        {current && (
                          <span className="education-current">
                            <span aria-hidden="true" /> Current
                          </span>
                        )}
                      </div>
                      <div className="education-card-content">
                        <span className="education-school-icon">
                          <Icon
                            size={29}
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                        </span>
                        <div className="min-w-0">
                          <h3>{school}</h3>
                          <p className="education-program">{program}</p>
                          {current && (
                            <span className="sr-only">Currently Studying.</span>
                          )}
                          <p className="education-card-description">
                            {description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                </li>
              )
            )}
          </ol>
        </div>
      </FadeIn>
    </section>
  );
}
