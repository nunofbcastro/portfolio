import type { Language } from "./i18n";

export const cvData = {
  pt: {
    targetRole: "Engenheiro de Software | .NET, React e Azure",
    summary:
      "Engenheiro de Software com experiência em aplicações web e mobile, com foco em .NET, React, Azure e SQL Server. Na B2F, desenvolvo aplicações e integrações e automatizo processos de negócio. Experiência em manutenção de sistemas em produção e desenvolvimento de aplicações Android.",
    links: [
      { label: "Email", value: "nunofbcastro@gmail.com", href: "mailto:nunofbcastro@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/nunofbcastro", href: "https://www.linkedin.com/in/nunofbcastro/" },
      { label: "GitHub", value: "github.com/nunofbcastro", href: "https://github.com/nunofbcastro" },
      { label: "Portfolio", value: "nunofbcastro.github.io/portfolio", href: "https://nunofbcastro.github.io/portfolio/" },
    ],
    skillGroups: [
      {
        title: "Linguagens de programação",
        items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL"],
      },
      {
        title: "Backend",
        items: [".NET / .NET Core", ".NET Framework", "Razor ASP.NET", "FastAPI", "REST APIs"],
      },
      {
        title: "Frontend",
        items: ["React", "Blazor", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Android (Java/Kotlin)", "Jetpack Compose"],
      },
      {
        title: "Cloud & DevOps",
        items: ["Azure", "Azure Functions", "Azure DevOps", "Docker", "Git"],
      },
      {
        title: "Dados & Low-Code",
        items: ["SQL Server", "ETL", "Power Platform", "Power Automate", "Power Apps"],
      },
    ],
    experience: [
      {
        role: "Software Developer",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "set 2023 – Atual",
        bullets: [
          "Desenvolvo e mantenho aplicações web com .NET Framework e Razor ASP.NET para processos de negócio em produção.",
          "Implemento integrações e automações de processos internos com Azure Functions, SQL Server e Power Platform.",
          "Desenvolvo interfaces web e mobile com Blazor, React e React Native, com arquitetura MVC e princípios de arquitetura limpa.",
          "Faço manutenção e otimização de sistemas existentes, com foco na estabilidade e na evolução das aplicações.",
        ],
        technologies: [".NET Framework", "Blazor", "React", "React Native", "Azure", "SQL Server", "Power Platform"],
      },
      {
        role: "Software Developer (Estágio)",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "mar 2023 – jul 2023",
        bullets: [
          "Automatizei processos ETL para recolha e tratamento de dados escolares.",
          "Mantive um website com dados de fontes oficiais, incluindo Eurostat e DGEEC.",
          "Desenvolvi componentes em .NET Framework e Razor ASP.NET para a plataforma existente.",
        ],
        technologies: [".NET Framework", "Razor ASP.NET", "ETL", "SQL"],
      },
      {
        role: "Computer Programming (Erasmus+)",
        company: "Etn Experience",
        location: "Portsmouth, Inglaterra",
        period: "jun 2019",
        bullets: [
          "Desenvolvi páginas e protótipos web em HTML, CSS e JavaScript num estágio internacional Erasmus+.",
          "Colaborei com uma equipa internacional na entrega de protótipos web.",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],
    projects: [
      {
        title: "SandSpace",
        objective: "Cocriação de uma aplicação Android para consultar a ocupação de praias durante a pandemia.",
        technologies: ["Java", "Android Studio", "PHP", "MySQL", "REST API"],
        result: "Cobertura de 865 praias em Portugal e divulgação em mais de 100 meios nacionais, incluindo RTP e SIC. Participação na INTEL ISEF (EUA).",
        links: {
          demo: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
        },
      },
      {
        title: "PoluMap",
        objective: "Aplicação colaborativa para mapear focos de poluição e alertar autoridades ambientais.",
        technologies: ["Java", "Android Studio", "PHP", "MySQL", "REST API"],
        result: "Permitiu reportar pontos críticos com notificação por email a autoridades locais e à Agência Portuguesa do Ambiente.",
        links: {
          demo: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
        },
      },
      {
        title: "SmartHouse",
        objective: "Sistema de segurança residencial com sensores, câmaras, app móvel e backoffice web (PAP).",
        technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "REST API"],
        result: "Integração de monitorização em tempo real e gestão via website na prova de aptidão profissional.",
        links: {
          demo: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
        },
      },
    ],
    education: [
      {
        degree: "Mestrado em Engenharia de Sistemas Computacionais Críticos",
        institution: "ISEP - Instituto Superior de Engenharia do Porto",
        location: "Porto, Portugal",
        period: "set 2024 – nov 2026 (previsto)",
        details: "Em curso. Formação em sistemas críticos, cibersegurança e engenharia de software.",
        projectUrl: "https://github.com/orgs/nunofbcastro-ISEP",
      },
      {
        degree: "Licenciatura em Engenharia Informática",
        institution: "ESTG - Politécnico do Porto",
        location: "Felgueiras, Portugal",
        period: "out 2020 – jul 2023",
        details: "Classificação ECTS: A.",
        projectUrl: "https://github.com/orgs/nunofbcastro-ESTG-IPP",
      },
      {
        degree: "Técnico de Gestão e Programação de Sistemas Informáticos",
        institution: "Agrupamento de Escolas Dr. Serafim Leite",
        location: "São João da Madeira, Portugal",
        period: "set 2017 – ago 2020",
        details: "Curso profissional com foco em desenvolvimento de software, web e mobile.",
      },
    ],
    awards: [
      {
        title: "3º Lugar - Mobile Application Development",
        issuer: "World Skills Portugal",
        period: "2020",
      },
      {
        title: "People's Choice Award - SandSpace",
        issuer: "Apps For Good UK",
        period: "2020",
      },
      {
        title: "2º Lugar - Jovens Empreendedores (SandSpace)",
        issuer: "Fundação da Juventude",
        period: "2020",
      },
      {
        title: "3º Lugar - PoluMap",
        issuer: "Apps for Good Portugal",
        period: "2019",
      },
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Básico" },
    ],
  },
  en: {
    targetRole: "Software Engineer | .NET, React & Azure",
    summary:
      "Software Engineer experienced in web and mobile applications, with a focus on .NET, React, Azure, and SQL Server. At B2F, I develop applications and integrations and automate business processes. Background in maintaining production systems and building Android applications.",
    links: [
      { label: "Email", value: "nunofbcastro@gmail.com", href: "mailto:nunofbcastro@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/nunofbcastro", href: "https://www.linkedin.com/in/nunofbcastro/" },
      { label: "GitHub", value: "github.com/nunofbcastro", href: "https://github.com/nunofbcastro" },
      { label: "Portfolio", value: "nunofbcastro.github.io/portfolio", href: "https://nunofbcastro.github.io/portfolio/" },
    ],
    skillGroups: [
      {
        title: "Programming languages",
        items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL"],
      },
      {
        title: "Backend",
        items: [".NET / .NET Core", ".NET Framework", "Razor ASP.NET", "FastAPI", "REST APIs"],
      },
      {
        title: "Frontend",
        items: ["React", "Blazor", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Android (Java/Kotlin)", "Jetpack Compose"],
      },
      {
        title: "Cloud & DevOps",
        items: ["Azure", "Azure Functions", "Azure DevOps", "Docker", "Git"],
      },
      {
        title: "Data & Low-Code",
        items: ["SQL Server", "ETL", "Power Platform", "Power Automate", "Power Apps"],
      },
    ],
    experience: [
      {
        role: "Software Developer",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "Sep 2023 – Present",
        bullets: [
          "Develop and maintain web applications with .NET Framework and Razor ASP.NET for business processes in production.",
          "Implement integrations and internal process automation with Azure Functions, SQL Server, and Power Platform.",
          "Build web and mobile interfaces with Blazor, React, and React Native, using MVC and clean architecture principles.",
          "Maintain and optimize existing systems, focusing on application stability and ongoing development.",
        ],
        technologies: [".NET Framework", "Blazor", "React", "React Native", "Azure", "SQL Server", "Power Platform"],
      },
      {
        role: "Software Developer (Internship)",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "Mar 2023 – Jul 2023",
        bullets: [
          "Automated ETL processes for school data extraction and processing.",
          "Maintained a website using data from official sources, including Eurostat and DGEEC.",
          "Developed components with .NET Framework and Razor ASP.NET for the existing platform.",
        ],
        technologies: [".NET Framework", "Razor ASP.NET", "ETL", "SQL"],
      },
      {
        role: "Computer Programming (Erasmus+)",
        company: "Etn Experience",
        location: "Portsmouth, England",
        period: "Jun 2019",
        bullets: [
          "Built web pages and prototypes with HTML, CSS, and JavaScript during an international Erasmus+ internship.",
          "Collaborated with an international team to deliver web prototypes.",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],
    projects: [
      {
        title: "SandSpace",
        objective: "Co-created an Android application to check beach occupancy during the pandemic.",
        technologies: ["Java", "Android Studio", "PHP", "MySQL", "REST API"],
        result: "Covered 865 beaches in Portugal; featured in 100+ national media outlets; participated in INTEL ISEF (USA).",
        links: {
          demo: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
        },
      },
      {
        title: "PoluMap",
        objective: "Collaborative app to map pollution hotspots and alert environmental authorities.",
        technologies: ["Java", "Android Studio", "PHP", "MySQL", "REST API"],
        result: "Enabled reporting of critical points with email notifications to local authorities and the Portuguese Environment Agency.",
        links: {
          demo: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
        },
      },
      {
        title: "SmartHouse",
        objective: "Home security system with sensors, cameras, mobile app, and web backoffice (final professional project).",
        technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "REST API"],
        result: "Integrated real-time monitoring and web-based management in the final professional project.",
        links: {
          demo: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
        },
      },
    ],
    education: [
      {
        degree: "Master's in Critical Computational Systems Engineering",
        institution: "ISEP - Instituto Superior de Engenharia do Porto",
        location: "Porto, Portugal",
        period: "Sep 2024 – Nov 2026 (expected)",
        details: "In progress. Focus on critical systems, cybersecurity, and software engineering.",
        projectUrl: "https://github.com/orgs/nunofbcastro-ISEP",
      },
      {
        degree: "BSc in Computer Engineering",
        institution: "ESTG - Polytechnic of Porto",
        location: "Felgueiras, Portugal",
        period: "Oct 2020 – Jul 2023",
        details: "ECTS grade: A.",
        projectUrl: "https://github.com/orgs/nunofbcastro-ESTG-IPP",
      },
      {
        degree: "Technician in Computer Systems Management and Programming",
        institution: "Agrupamento de Escolas Dr. Serafim Leite",
        location: "São João da Madeira, Portugal",
        period: "Sep 2017 – Aug 2020",
        details: "Vocational course focused on software, web, and mobile development.",
      },
    ],
    awards: [
      {
        title: "3rd Place - Mobile Application Development",
        issuer: "World Skills Portugal",
        period: "2020",
      },
      {
        title: "People's Choice Award - SandSpace",
        issuer: "Apps For Good UK",
        period: "2020",
      },
      {
        title: "2nd Place - Young Entrepreneurs (SandSpace)",
        issuer: "Fundação da Juventude",
        period: "2020",
      },
      {
        title: "3rd Place - PoluMap",
        issuer: "Apps for Good Portugal",
        period: "2019",
      },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Basic" },
    ],
  },
} as const;

export type CvContent = (typeof cvData)[Language];
