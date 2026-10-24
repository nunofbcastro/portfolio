import { cvData } from "@/data/cv";
import { uiText, type Language } from "@/data/i18n";
import { portfolioData } from "@/data/portfolio";

interface CVPrintViewProps {
  language: Language;
}

export const CVPrintView = ({ language }: CVPrintViewProps) => {
  const cv = cvData[language];
  const labels = uiText[language].cv;
  const location = portfolioData.personal.location[language];
  const name = portfolioData.personal.name;

  return (
    <div id="cv-print-view" className="cv-print" lang={language === "pt" ? "pt-PT" : "en"}>
      <div className="cv-page">
        <header className="cv-header">
          <h1 className="cv-name">{name}</h1>
          <p className="cv-role">{cv.targetRole}</p>
          <p className="cv-contact-line">
            {location}
            {" · "}
            <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
          </p>
          <p className="cv-contact-line">
            {cv.links
              .filter((link) => link.label !== "Email")
              .map((link, index) => (
                <span key={link.label}>
                  {index > 0 ? " · " : null}
                  <a href={link.href}>{link.value}</a>
                </span>
              ))}
          </p>
        </header>

        <section className="cv-section">
          <h2>{labels.summary}</h2>
          <p>{cv.summary}</p>
        </section>

        <section className="cv-section">
          <h2>{labels.skills}</h2>
          {cv.skillGroups.map((group) => (
            <p key={group.title} style={{ margin: "0 0 3pt 0" }}>
              <strong>{group.title}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2>{labels.experience}</h2>
          {cv.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="cv-item">
              <h3>
                {job.role} — {job.company}
              </h3>
              <p className="cv-meta" style={{ margin: "1pt 0 3pt 0" }}>
                {job.location} | {job.period}
              </p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="cv-tech" style={{ margin: "3pt 0 0 0" }}>
                <strong>{labels.technologies}:</strong> {job.technologies.join(", ")}
              </p>
            </article>
          ))}
        </section>

      </div>

      <div className="cv-page">
        <section className="cv-section">
          <h2>{labels.projects}</h2>
          {cv.projects.map((project) => (
            <article key={project.title} className="cv-item">
              <h3>{project.title}</h3>
              <p style={{ margin: "2pt 0" }}>
                <strong>{labels.objective}:</strong> {project.objective}
              </p>
              <p className="cv-tech" style={{ margin: "2pt 0" }}>
                <strong>{labels.technologies}:</strong> {project.technologies.join(", ")}
              </p>
              <p style={{ margin: "2pt 0" }}>
                <strong>{labels.result}:</strong> {project.result}
              </p>
              {project.links.demo ? (
                <p className="cv-meta" style={{ margin: "2pt 0 0 0" }}>
                  <strong>{labels.demo}:</strong>{" "}
                  <a href={project.links.demo}>
                    {project.title} — {new URL(project.links.demo).hostname.replace(/^www\./, "")}
                  </a>
                </p>
              ) : null}
            </article>
          ))}
        </section>

        <section className="cv-section">
          <h2>{labels.education}</h2>
          {cv.education.map((item) => (
            <article key={`${item.degree}-${item.period}`} className="cv-item">
              <h3>{item.degree}</h3>
              <p className="cv-meta" style={{ margin: "1pt 0 2pt 0" }}>
                {item.institution} — {item.location} | {item.period}
              </p>
              <p style={{ margin: 0 }}>{item.details}</p>
            </article>
          ))}
        </section>

        <section className="cv-section">
          <h2>{labels.awards}</h2>
          {cv.awards.map((award) => (
            <p key={`${award.title}-${award.period}`} style={{ margin: "0 0 3pt 0" }}>
              <strong>{award.title}</strong> — {award.issuer} ({award.period})
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2>{labels.languages}</h2>
          <p style={{ margin: 0 }}>
            {cv.languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
          </p>
        </section>
      </div>
    </div>
  );
};
