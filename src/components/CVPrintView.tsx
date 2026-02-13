import { portfolioData } from "@/data/portfolio";
import { uiText, type Language } from "@/data/i18n";
import { AtSign, MapPin, Zap, Star, Trophy } from "lucide-react";

interface CVPrintViewProps {
    language: Language;
}

export const CVPrintView = ({ language }: CVPrintViewProps) => {
    const personal = portfolioData.personal;
    const about = portfolioData.about[language];
    const timeline = portfolioData.timeline[language].items;
    const projects = portfolioData.projects[language].projects;
    const text = uiText[language].cv;

    const experience = timeline.filter((item) => item.type === "experience");
    const education = timeline.filter((item) => item.type === "education");
    const awards = timeline.filter((item) => item.type === "award");

    return (
        <div id="cv-print-view" className="hidden print:block w-[210mm] mx-auto font-sans text-[#333] relative z-[9999]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page { 
                        size: A4; 
                        margin: 0 !important; 
                    }
                    
                    body { 
                        background: white !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        margin: 0 !important;
                    }

                    /* Ensure the main container doesn't force a minimum height or background on print */
                    .min-h-screen.bg-background {
                        background: white !important;
                        min-height: 0 !important;
                        height: auto !important;
                        display: block !important;
                    }

                    #cv-print-view { 
                        display: block !important; 
                        visibility: visible !important;
                        width: 210mm !important;
                        margin: 0 auto !important;
                        background: transparent !important;
                        position: relative !important;
                    }

                    /* Fixed background for the sidebar to ensure it repeats on every page and reaches the edges */
                    #cv-sidebar-bg {
                        position: fixed !important;
                        top: 0 !important;
                        bottom: 0 !important;
                        right: 0 !important;
                        width: 32% !important;
                        background-color: #004e52 !important;
                        z-index: -1 !important;
                        display: block !important;
                    }

                    /* Table layout for consistent margins on every page */
                    #cv-print-table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                        table-layout: fixed !important;
                    }

                    #cv-print-table thead .margin-spacer {
                        height: 20mm !important;
                    }

                    #cv-print-table tfoot .margin-spacer {
                        height: 15mm !important;
                    }

                    #cv-print-view * {
                        opacity: 1 !important;
                        visibility: visible !important;
                        animation: none !important;
                        transition: none !important;
                    }

                    .page-break-inside-avoid {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                }
            `}} />

            {/* Fixed Sidebar Background */}
            <div id="cv-sidebar-bg" className="hidden print:block"></div>

            <table id="cv-print-table">
                <thead>
                    <tr>
                        <th className="margin-spacer w-[68%]"></th>
                        <th className="margin-spacer w-[32%]"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* Main Column */}
                        <td className="main-col align-top p-0">
                            <div className="pl-[15mm] pr-[10mm] pt-[5mm]">
                                {/* Header */}
                                <header className="mb-14">
                                    <h1 className="text-[38pt] font-black text-[#313b3d] tracking-tighter leading-[0.9] mb-4">
                                        {personal.name}
                                    </h1>
                                    <p className="text-[18pt] text-[#4eaeb3] font-bold mb-8 uppercase tracking-tight">
                                        {personal.title[language]}
                                    </p>
                                    <div className="flex flex-wrap gap-x-8 text-[10.5pt] text-[#555] font-semibold">
                                        <div className="flex items-center gap-2.5">
                                            <AtSign className="h-4.5 w-4.5 text-[#4eaeb3]" />
                                            <span>{personal.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <MapPin className="h-4.5 w-4.5 text-[#4eaeb3]" />
                                            <span>{personal.location[language]}</span>
                                        </div>
                                    </div>
                                </header>

                                {/* Summary */}
                                <section className="mb-14">
                                    <h3 className="text-[14pt] font-black uppercase text-[#313b3d] border-b-[2pt] border-[#f0f0f0] pb-2 mb-6 w-full">
                                        {text.summary}
                                    </h3>
                                    <p className="text-[10.8pt] leading-[1.65] text-[#444] text-justify font-medium">
                                        {about.description}
                                    </p>
                                </section>

                                {/* Experience */}
                                <section className="mb-14">
                                    <h3 className="text-[14pt] font-black uppercase text-[#313b3d] border-b-[2pt] border-[#f0f0f0] pb-2 mb-8 w-full">
                                        {text.experience}
                                    </h3>
                                    <div className="space-y-12">
                                        {experience.map((item, index) => (
                                            <div key={index} className="page-break-inside-avoid">
                                                <div className="flex justify-between items-baseline mb-1.5">
                                                    <h4 className="text-[13pt] font-extrabold text-[#313b3d]">{item.role}</h4>
                                                    <span className="text-[10pt] text-[#777] font-black">{item.period}</span>
                                                </div>
                                                <div className="flex justify-between items-baseline mb-4">
                                                    <span className="text-[12pt] text-[#4eaeb3] font-black uppercase tracking-tight">{item.company}</span>
                                                    <span className="text-[9.5pt] text-[#aaa] italic font-bold">{item.location}</span>
                                                </div>
                                                <ul className="list-disc ml-4.5 text-[10.5pt] text-[#555] space-y-2.5 font-medium leading-relaxed">
                                                    {Array.isArray(item.description) ? (
                                                        item.description.map((desc, i) => <li key={i} className="pl-1.5">{desc}</li>)
                                                    ) : (
                                                        <li className="pl-1.5">{item.description}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Education */}
                                <section className="mb-12">
                                    <h3 className="text-[14pt] font-black uppercase text-[#313b3d] border-b-[2pt] border-[#f0f0f0] pb-2 mb-8 w-full">
                                        {text.education}
                                    </h3>
                                    <div className="space-y-10">
                                        {education.map((item, index) => (
                                            <div key={index} className="page-break-inside-avoid">
                                                <div className="flex justify-between items-baseline mb-1.5">
                                                    <h4 className="text-[12.5pt] font-extrabold text-[#313b3d]">{item.degree}</h4>
                                                    <span className="text-[10.5pt] text-[#777] font-black">{item.period}</span>
                                                </div>
                                                <div className="text-[11.8pt] text-[#4eaeb3] font-black mb-3">{item.institution}</div>
                                                <p className="text-[10.5pt] text-[#555] font-medium leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Languages */}
                                <section className="page-break-inside-avoid mt-14 mb-8">
                                    <h3 className="text-[14pt] font-black uppercase text-[#313b3d] border-b-[2pt] border-[#f0f0f0] pb-2 mb-8 w-full">
                                        {text.languages}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-x-14 gap-y-4">
                                        {(personal as any).languages?.[language]?.map((lang: any, index: number) => (
                                            <div key={index} className="flex items-center gap-3 text-[10.5pt]">
                                                <span className="font-extrabold text-[#313b3d]">{lang.name}</span>
                                                <span className="text-[400] text-[#777]">•</span>
                                                <span className="text-[9pt] text-[#4eaeb3] uppercase font-black tracking-tighter">{lang.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </td>

                        {/* Sidebar Column */}
                        <td className="side-col align-top p-0 text-white relative">
                            <div className="pl-[10mm] pr-[15mm] pt-[5mm] space-y-16">
                                {/* Key Achievements */}
                                <section className="page-break-inside-avoid">
                                    <h3 className="text-[14pt] font-black uppercase border-b-[2pt] border-[#ffffff33] pb-2.5 mb-7 px-0">
                                        {text.keyAchievements}
                                    </h3>
                                    <div className="space-y-9">
                                        {projects.slice(0, 3).map((project, index) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                <Zap className="h-[14pt] w-[14pt] text-[#4eaeb3] mt-1.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-[11.5pt] font-black mb-2 leading-snug">{project.title}</h4>
                                                    <p className="text-[9.8pt] text-[#ccd9d9] leading-relaxed font-medium">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Skills */}
                                <section className="page-break-inside-avoid">
                                    <h3 className="text-[14pt] font-black uppercase border-b-[2pt] border-[#ffffff33] pb-2.5 mb-7 px-0">
                                        {text.skills}
                                    </h3>
                                    <p className="text-[10.5pt] text-[#ccd9d9] leading-[1.8] font-bold">
                                        {about.skills.map(s => s.title).join(", ")}
                                    </p>
                                </section>

                                {/* Strengths */}
                                <section className="page-break-inside-avoid">
                                    <h3 className="text-[14pt] font-black uppercase border-b-[2pt] border-[#ffffff33] pb-2.5 mb-7 px-0">
                                        {text.strengths}
                                    </h3>
                                    <div className="space-y-9">
                                        {(about as any).strengths?.map((strength: any, index: number) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                <Star className="h-[14pt] w-[14pt] text-[#4eaeb3] mt-1.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-[11.5pt] font-black mb-2 leading-snug">{strength.title}</h4>
                                                    <p className="text-[9.8pt] text-[#ccd9d9] leading-relaxed font-medium">
                                                        {strength.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Awards */}
                                <section className="page-break-inside-avoid">
                                    <h3 className="text-[14pt] font-black uppercase border-b-[2pt] border-[#ffffff33] pb-2.5 mb-7 px-0">
                                        {text.awards}
                                    </h3>
                                    <div className="space-y-9">
                                        {awards.slice(0, 4).map((award, index) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                <Trophy className="h-[14pt] w-[14pt] text-[#4eaeb3] mt-1.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-[11pt] font-black mb-1.5 leading-snug">{award.title}</h4>
                                                    <div className="text-[8.5pt] text-[#4eaeb3] font-black uppercase tracking-wider">
                                                        {award.issuer} <span className="opacity-30 mx-1.5">•</span> {award.period}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="margin-spacer"></td>
                        <td className="margin-spacer"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
