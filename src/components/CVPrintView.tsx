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
    <div id="cv-print-view" className="cv-print hidden print:block">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media print {
            @page {
              size: A4;
              margin: 12mm 14mm 14mm 14mm;
            }

            body {
              background: white !important;
              margin: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            #cv-print-view {
              display: block !important;
              visibility: visible !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              color: #1f2933 !important;
              background: white !important;
              font-family: Calibri, Aptos, Arial, Helvetica, sans-serif !important;
              font-size: 10.5pt !important;
              line-height: 1.4 !important;
              font-weight: 400 !important;
            }

            #cv-print-view,
            #cv-print-view * {
              font-family: Calibri, Aptos, Arial, Helvetica, sans-serif !important;
              letter-spacing: normal !important;
              opacity: 1 !important;
              visibility: visible !important;
              animation: none !important;
              transition: none !important;
              box-shadow: none !important;
              text-shadow: none !important;
            }

            #cv-print-view .cv-header {
              display: block !important;
              margin: 0 0 14pt 0 !important;
              padding: 0 0 10pt 0 !important;
              border-bottom: 2.5pt solid #0f766e !important;
            }

            #cv-print-view .cv-name {
              display: block !important;
              font-size: 28pt !important;
              font-weight: 700 !important;
              line-height: 1.05 !important;
              margin: 0 0 4pt 0 !important;
              color: #111827 !important;
              letter-spacing: -0.02em !important;
            }

            #cv-print-view .cv-role {
              display: block !important;
              font-size: 13pt !important;
              font-weight: 700 !important;
              margin: 0 0 8pt 0 !important;
              color: #0f766e !important;
            }

            #cv-print-view .cv-contact-line {
              display: block !important;
              font-size: 9.5pt !important;
              line-height: 1.45 !important;
              margin: 0 0 2pt 0 !important;
              color: #374151 !important;
            }

            #cv-print-view .cv-contact-line a {
              font-size: 9.5pt !important;
              color: #111827 !important;
              text-decoration: none !important;
            }

            #cv-print-view h3 {
              font-size: 11pt !important;
              font-weight: 700 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.06em !important;
              margin: 0 0 6pt 0 !important;
              padding: 0 0 3pt 0 !important;
              border-bottom: 1.25pt solid #0f766e !important;
              color: #0f766e !important;
            }

            #cv-print-view h4 {
              font-size: 10.75pt !important;
              font-weight: 700 !important;
              margin: 0 !important;
              color: #111827 !important;
            }

            #cv-print-view p,
            #cv-print-view li {
              font-size: 10.5pt !important;
              color: #1f2933 !important;
            }

            #cv-print-view a {
              text-decoration: none !important;
              color: #111827 !important;
            }

            #cv-print-view ul {
              margin: 3pt 0 0 14pt !important;
              padding: 0 !important;
            }

            #cv-print-view li {
              margin: 0 0 2.5pt 0 !important;
            }

            #cv-print-view .cv-section {
              margin: 0 0 11pt 0 !important;
              page-break-inside: avoid;
            }

            #cv-print-view .cv-item {
              margin: 0 0 8pt 0 !important;
              page-break-inside: avoid;
            }

            #cv-print-view .cv-meta {
              font-size: 9.5pt !important;
              color: #4b5563 !important;
            }

            #cv-print-view .cv-tech {
              font-size: 9pt !important;
              color: #374151 !important;
            }
          }
        `,
        }}
      />

      <header className="cv-header">
        <p className="cv-name">{name}</p>
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
        <h3>{labels.summary}</h3>
        <p>{cv.summary}</p>
      </section>

      <section className="cv-section">
        <h3>{labels.skills}</h3>
        {cv.skillGroups.map((group) => (
          <p key={group.title} style={{ margin: "0 0 3pt 0" }}>
            <strong>{group.title}:</strong> {group.items.join(" · ")}
          </p>
        ))}
      </section>

      <section className="cv-section">
        <h3>{labels.experience}</h3>
        {cv.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="cv-item">
            <h4>
              {job.role} — {job.company}
            </h4>
            <p className="cv-meta" style={{ margin: "1pt 0 3pt 0" }}>
              {job.location} | {job.period}
            </p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <p className="cv-tech" style={{ margin: "3pt 0 0 0" }}>
              <strong>{labels.technologies}:</strong> {job.technologies.join(" · ")}
            </p>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h3>{labels.projects}</h3>
        {cv.projects.map((project) => (
          <article key={project.title} className="cv-item">
            <h4>{project.title}</h4>
            <p style={{ margin: "2pt 0" }}>
              <strong>{labels.objective}:</strong> {project.objective}
            </p>
            <p className="cv-tech" style={{ margin: "2pt 0" }}>
              <strong>{labels.technologies}:</strong> {project.technologies.join(" · ")}
            </p>
            <p style={{ margin: "2pt 0" }}>
              <strong>{labels.result}:</strong> {project.result}
            </p>
            {project.links.demo ? (
              <p className="cv-meta" style={{ margin: "2pt 0 0 0" }}>
                <strong>{labels.demo}:</strong>{" "}
                <a href={project.links.demo}>{project.links.demo}</a>
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h3>{labels.education}</h3>
        {cv.education.map((item) => (
          <article key={`${item.degree}-${item.period}`} className="cv-item">
            <h4>{item.degree}</h4>
            <p className="cv-meta" style={{ margin: "1pt 0 2pt 0" }}>
              {item.institution} — {item.location} | {item.period}
            </p>
            <p style={{ margin: 0 }}>{item.details}</p>
          </article>
        ))}
      </section>

      <section className="cv-section">
        <h3>{labels.awards}</h3>
        {cv.awards.map((award) => (
          <p key={`${award.title}-${award.period}`} style={{ margin: "0 0 3pt 0" }}>
            <strong>{award.title}</strong> — {award.issuer} ({award.period})
          </p>
        ))}
      </section>

      <section className="cv-section">
        <h3>{labels.languages}</h3>
        <p style={{ margin: 0 }}>
          {cv.languages.map((lang) => `${lang.name} (${lang.level})`).join(" · ")}
        </p>
      </section>
    </div>
  );
};
