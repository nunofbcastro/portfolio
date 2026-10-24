import { Fragment } from "react";
import { cvData } from "@/data/cv";
import { type Language } from "@/data/i18n";
import { portfolioData } from "@/data/portfolio";
import { getCVPages, type CVBlock } from "@/lib/cv-sections";

function BlockText({ block }: { block: CVBlock }) {
  const content = block.boldPrefix ? <><strong>{block.boldPrefix}</strong>{block.text.slice(block.boldPrefix.length)}</> : block.text;
  return block.url ? <a href={block.url}>{content}</a> : content;
}

function Entry({ blocks }: { blocks: CVBlock[] }) {
  return <article className="cv-item">
    {blocks.map((block, index) => {
      if (block.bullet) {
        if (blocks[index - 1]?.bullet) return null;
        const end = blocks.findIndex((next, i) => i > index && !next.bullet);
        return <ul key={index}>{blocks.slice(index, end === -1 ? undefined : end).map((bullet) => <li key={bullet.text}><BlockText block={bullet} /></li>)}</ul>;
      }
      return block.kind === "title"
        ? <h3 key={index}><BlockText block={block} /></h3>
        : <p key={index} className={block.kind ? `cv-${block.kind}` : undefined}><BlockText block={block} /></p>;
    })}
  </article>;
}

export const CVPrintView = ({ language }: { language: Language }) => {
  const cv = cvData[language];
  const person = portfolioData.personal;
  return (
    <div id="cv-print-view" className="cv-print" lang={language === "pt" ? "pt-PT" : "en"}>
      {getCVPages(language).map((sections, pageIndex) => <div className="cv-page" key={pageIndex}>
        {pageIndex === 0 && <header className="cv-header">
          <h1 className="cv-name">{person.name}</h1>
          <p className="cv-role">{cv.targetRole}</p>
          <p className="cv-contact-line">{person.location[language]}, Portugal | <a href={`mailto:${person.email}`}>{person.email}</a></p>
          <p className="cv-contact-line">
            {cv.links.filter((link) => link.label !== "Email").map((link, index) => <Fragment key={link.label}>
              {index > 0 && " · "}<a href={link.href}>{link.value}</a>
            </Fragment>)}
          </p>
        </header>}
        {sections.map((section) => <section key={section.id} className={`cv-section cv-section-${section.id}`}>
          <h2>{section.title}</h2>
          {section.entries.map((blocks, index) => <Entry key={index} blocks={blocks} />)}
        </section>)}
      </div>)}
    </div>
  );
};
