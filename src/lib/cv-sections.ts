import { cvData } from "@/data/cv";
import { uiText, type Language } from "@/data/i18n";

export interface CVBlock {
  text: string;
  kind?: "title" | "meta" | "tech";
  boldPrefix?: string;
  url?: string;
  bullet?: boolean;
}

export interface CVSection {
  id: string;
  title: string;
  entries: CVBlock[][];
}

/** Shared content and reading order for the downloaded PDF and browser print. */
export function getCVPages(language: Language): CVSection[][] {
  const cv = cvData[language];
  const labels = uiText[language].cv;
  return [
    [
      { id: "summary", title: labels.summary, entries: [[{ text: cv.summary }]] },
      {
        id: "experience", title: labels.experience,
        entries: cv.experience.map((job) => [
          { text: `${job.role} — ${job.company}`, kind: "title" },
          { text: `${job.location} | ${job.period}`, kind: "meta" },
          ...job.bullets.map((text) => ({ text, bullet: true })),
          ...("technologies" in job && job.technologies.length ? [{
            text: `${labels.technologies}: ${job.technologies.join(", ")}`,
            kind: "tech" as const,
            boldPrefix: `${labels.technologies}:`,
          }] : []),
        ]),
      },
      {
        id: "skills", title: labels.skills,
        entries: cv.skillGroups.map((group) => [{ text: `${group.title}: ${group.items.join(", ")}`, boldPrefix: `${group.title}:` }]),
      },
    ],
    [
      {
        id: "education", title: labels.education,
        entries: cv.education.map((item) => [
          { text: item.degree, kind: "title" },
          { text: `${item.institution} — ${item.location} | ${item.period}`, kind: "meta" },
          { text: item.details },
          ...("projectUrl" in item ? [{
            text: `${labels.academicProjects} (${item.institution.split(" - ")[0]}) — ${item.projectUrl.replace("https://", "")}`,
            kind: "meta" as const, url: item.projectUrl,
          }] : []),
        ]),
      },
      {
        id: "projects", title: labels.projects,
        entries: cv.projects.map((project) => [
          { text: project.title, kind: "title" },
          { text: project.objective },
          { text: project.result },
          { text: `${labels.technologies}: ${project.technologies.join(", ")}`, kind: "tech", boldPrefix: `${labels.technologies}:` },
          {
            text: `${project.title} — ${new URL(project.links.demo).hostname === "play.google.com" ? "Google Play" : (language === "pt" ? "Vídeo" : "Video")}`,
            kind: "meta", url: project.links.demo,
          },
        ]),
      },
      {
        id: "awards", title: labels.awards,
        entries: cv.awards.map((award) => [{ text: `${award.title} — ${award.issuer} (${award.period})`, boldPrefix: award.title }]),
      },
      {
        id: "languages", title: labels.languages,
        entries: [[{ text: cv.languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ") }]],
      },
    ],
  ];
}
