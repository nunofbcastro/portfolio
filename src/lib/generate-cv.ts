import { jsPDF } from "jspdf";
import { cvData } from "@/data/cv";
import { type Language } from "@/data/i18n";
import { getCVPages, type CVBlock } from "@/lib/cv-sections";
import { portfolioData } from "@/data/portfolio";

interface TextBlock extends CVBlock {
  size?: number;
  bold?: boolean;
  indent?: number;
  after?: number;
  url?: string;
  bullet?: boolean;
}

/** Build real PDF text on demand, without a print dialog or a screenshot. */
export function createCV(language: Language) {
  const cv = cvData[language];
  const person = portfolioData.personal;
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const margin = 45.4;
  const top = 40;
  const width = doc.internal.pageSize.getWidth() - margin * 2;
  const bottom = doc.internal.pageSize.getHeight() - top;
  let y = top;

  doc.setLanguage(language);
  doc.setProperties({
    title: `${person.name} - ${cv.targetRole}`,
    author: person.name,
    subject: cv.targetRole,
    creator: "Nuno Castro Portfolio",
  });

  function newPage() {
    doc.addPage();
    y = top;
  }

  function prepare(block: TextBlock) {
    const size = block.size ?? (block.kind === "meta" || block.kind === "tech" ? 9.5 : 10.5);
    doc.setFont("helvetica", (block.bold || block.kind === "title") ? "bold" : "normal");
    doc.setFontSize(size);
    let prefixExtra = 0;
    if (block.boldPrefix) {
      const normalWidth = doc.getTextWidth(block.boldPrefix);
      doc.setFont("helvetica", "bold");
      prefixExtra = Math.max(0, doc.getTextWidth(block.boldPrefix) - normalWidth);
      doc.setFont("helvetica", "normal");
    }
    const lines = doc.splitTextToSize(block.text, width - (block.indent ?? (block.bullet ? 13 : 0)) - prefixExtra) as string[];
    return { lines, size, lineHeight: size * 1.35 };
  }

  function height(block: TextBlock) {
    const { lines, lineHeight } = prepare(block);
    return lines.length * lineHeight + (block.after ?? 3);
  }

  function ensureSpace(required: number) {
    if (y + required > bottom && y > top) newPage();
  }

  function write(block: TextBlock) {
    const { lines, size, lineHeight } = prepare(block);
    const x = margin + (block.indent ?? (block.bullet ? 13 : 0));
    doc.setTextColor(24, 35, 45);
    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineHeight);
      if (block.bullet && i === 0) doc.text("•", margin + 1, y + size);
      if (i === 0 && block.boldPrefix && lines[i].startsWith(block.boldPrefix)) {
        doc.setFont("helvetica", "bold");
        doc.text(block.boldPrefix, x, y + size);
        const prefixWidth = doc.getTextWidth(block.boldPrefix);
        doc.setFont("helvetica", "normal");
        doc.text(lines[i].slice(block.boldPrefix.length), x + prefixWidth, y + size);
      } else {
        doc.text(lines[i], x, y + size);
      }
      if (block.url) doc.link(x, y, doc.getTextWidth(lines[i]), lineHeight, { url: block.url });
      y += lineHeight;
    }
    y += block.after ?? 3;
  }

  function entry(blocks: TextBlock[], gap = 5) {
    // Keep an ordinary entry together; unusually long entries can still flow.
    ensureSpace(Math.min(blocks.reduce((sum, block) => sum + height(block), 0), bottom - top));
    for (const block of blocks) write(block);
    y += gap;
  }

  function section(title: string, firstEntry: TextBlock[]) {
    ensureSpace(27 + Math.min(firstEntry.reduce((sum, block) => sum + height(block), 0), 180));
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(36, 86, 79);
    doc.text(title, margin, y + 10.5);
    y += 17;
    doc.setDrawColor(164, 181, 178);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + width, y);
    y += 6;
  }

  write({ text: person.name, size: 26, bold: true, after: 1 });
  write({ text: cv.targetRole, size: 12, bold: true, after: 5 });
  write({ text: `${person.location[language]}, Portugal | ${person.email}`, size: 9, url: `mailto:${person.email}`, after: 2 });
  const links = cv.links.filter((link) => link.label !== "Email");
  let linkX = margin;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  for (const link of links) {
    const linkWidth = doc.getTextWidth(link.value);
    if (linkX + linkWidth > margin + width) { linkX = margin; y += 13; }
    doc.text(link.value, linkX, y + 9);
    doc.link(linkX, y, linkWidth, 13, { url: link.href });
    linkX += linkWidth + 12;
  }
  y += 22;
  doc.setDrawColor(36, 86, 79);
  doc.setLineWidth(1.5);
  doc.line(margin, y, margin + width, y);
  y += 7;

  for (const [pageIndex, sections] of getCVPages(language).entries()) {
    if (pageIndex > 0) newPage();
    for (const current of sections) {
      section(current.title, current.entries[0]);
      const compact = current.id === "skills" || current.id === "awards";
      for (const blocks of current.entries) {
        entry(blocks.map((block) => ({
          ...block,
          after: block.kind === "title" ? 1 : block.bullet ? 2 : 3,
        })), compact ? 0 : 5);
      }
    }
  }
  return doc;
}

export function downloadCV(language: Language) {
  createCV(language).save(`Nuno-Castro-CV-${language}.pdf`);
}
