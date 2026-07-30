import type { Language } from "./i18n";

export const cvData = {
  pt: {
    targetRole: "Engenheiro de Software",
    summary:
      "Engenheiro de Software com experiência em desenvolvimento web e mobile, focado em entregar soluções com .NET, React, Azure e SQL Server. Ajudo empresas a modernizar aplicações, automatizar processos e melhorar a qualidade de sistemas em produção. Destaque: cocriação da app SandSpace, cobrindo 865 praias em Portugal e referida em mais de 100 meios de comunicação nacionais, com participação na INTEL ISEF (EUA).",
    links: [
      { label: "Email", value: "nunofbcastro@gmail.com", href: "mailto:nunofbcastro@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/nunofbcastro", href: "https://www.linkedin.com/in/nunofbcastro/" },
      { label: "GitHub", value: "github.com/nunofbcastro", href: "https://github.com/nunofbcastro" },
      { label: "Portfolio", value: "nunofbcastro.github.io/portfolio", href: "https://nunofbcastro.github.io/portfolio/" },
    ],
    skillGroups: [
      {
        title: "Linguagens",
        items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL", "HTML", "CSS"],
      },
      {
        title: "Backend",
        items: [".NET / .NET Core", ".NET Framework", "FastAPI", "NestJS", "Express.js", "Azure Functions", "REST APIs", "Swagger"],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Blazor", "Razor ASP.NET", "Angular", "Tailwind CSS"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Android (Java/Kotlin)", "Jetpack Compose", "Ionic"],
      },
      {
        title: "Cloud & DevOps",
        items: ["Azure", "Docker", "Git", "GitLab CI/CD", "Azure DevOps", "NGINX", "IIS", "Scrum"],
      },
      {
        title: "Dados & Low-Code",
        items: ["SQL Server", "MongoDB", "MySQL", "ETL", "Power Platform", "Power Automate", "PowerApps"],
      },
    ],
    experience: [
      {
        role: "Software Developer",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "set 2023 – Atual",
        bullets: [
          "Desenvolvi e mantive aplicações web com .NET Framework e Razor ASP.NET para suporte a processos de negócio em produção.",
          "Implementei integrações e automações com Azure Functions, Azure DevOps, SQL Server e Power Platform, reduzindo tarefas manuais em fluxos internos.",
          "Criei e evoluí interfaces e funcionalidades com Blazor, React e React Native, alinhadas com arquitetura MVC e princípios de clean architecture.",
          "Otimizei e estabilizei sistemas existentes, melhorando manutenibilidade e continuidade operacional das soluções da empresa.",
        ],
        technologies: [".NET Framework", "Razor", "Blazor", "React", "React Native", "Azure", "SQL Server", "Docker", "FastAPI", "Power Platform"],
      },
      {
        role: "Software Developer (Estágio)",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "mar 2023 – jul 2023",
        bullets: [
          "Automatizei processos ETL para recolha e tratamento de dados escolares, acelerando a disponibilização de informação.",
          "Mantive website com dados de fontes oficiais (Eurostat e DGEEC), garantindo atualização e fiabilidade dos conteúdos.",
          "Desenvolvi componentes escaláveis em .NET Framework e Razor ASP.NET para evoluir a plataforma existente.",
        ],
        technologies: [".NET Framework", "Razor ASP.NET", "ETL", "SQL"],
      },
      {
        role: "Computer Programming (Erasmus+)",
        company: "Etn Experience",
        location: "Portsmouth, Inglaterra",
        period: "jun 2019",
        bullets: [
          "Desenvolvi páginas web em HTML, CSS e JavaScript num contexto internacional de estágio Erasmus+.",
          "Colaborei em entregas rápidas de protótipos web, reforçando comunicação e práticas de desenvolvimento em equipa.",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],
    projects: [
      {
        title: "SandSpace",
        objective: "Aplicação móvel para consultar a ocupação de praias e apoiar decisões de deslocação em contexto pandémico.",
        technologies: ["Java", "Android Studio", "PHP", "MySQL", "REST API"],
        result: "Cobriu 865 praias em Portugal; referido em mais de 100 meios nacionais (RTP, SIC, CMTV, Porto Canal); participou na INTEL ISEF (EUA).",
        links: {
          demo: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
        },
      },
      {
        title: "PoluMap",
        objective: "App colaborativa para mapear focos de poluição e alertar autoridades ambientais.",
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
        result: "Entregue como prova de aptidão profissional, integrando monitorização em tempo real e gestão técnica via website.",
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
        period: "set 2024 – set 2026",
        details: "Formação em sistemas críticos, cibersegurança e engenharia de software. Projetos: github.com/orgs/nunofbcastro-ISEP",
      },
      {
        degree: "Licenciatura em Engenharia Informática",
        institution: "ESTG - Politécnico do Porto",
        location: "Felgueiras, Portugal",
        period: "out 2020 – jul 2023",
        details: "Classificação ECTS: A. Projetos: github.com/orgs/nunofbcastro-ESTG-IPP",
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
    targetRole: "Software Engineer",
    summary:
      "Software Engineer experienced in web and mobile development, focused on delivering solutions with .NET, React, Azure, and SQL Server. I help companies modernize applications, automate processes, and improve the quality of production systems. Highlight: co-created SandSpace, covering 865 beaches in Portugal and featured in 100+ national media outlets, with participation in INTEL ISEF (USA).",
    links: [
      { label: "Email", value: "nunofbcastro@gmail.com", href: "mailto:nunofbcastro@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/nunofbcastro", href: "https://www.linkedin.com/in/nunofbcastro/" },
      { label: "GitHub", value: "github.com/nunofbcastro", href: "https://github.com/nunofbcastro" },
      { label: "Portfolio", value: "nunofbcastro.github.io/portfolio", href: "https://nunofbcastro.github.io/portfolio/" },
    ],
    skillGroups: [
      {
        title: "Languages",
        items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL", "HTML", "CSS"],
      },
      {
        title: "Backend",
        items: [".NET / .NET Core", ".NET Framework", "FastAPI", "NestJS", "Express.js", "Azure Functions", "REST APIs", "Swagger"],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Blazor", "Razor ASP.NET", "Angular", "Tailwind CSS"],
      },
      {
        title: "Mobile",
        items: ["React Native", "Android (Java/Kotlin)", "Jetpack Compose", "Ionic"],
      },
      {
        title: "Cloud & DevOps",
        items: ["Azure", "Docker", "Git", "GitLab CI/CD", "Azure DevOps", "NGINX", "IIS", "Scrum"],
      },
      {
        title: "Data & Low-Code",
        items: ["SQL Server", "MongoDB", "MySQL", "ETL", "Power Platform", "Power Automate", "PowerApps"],
      },
    ],
    experience: [
      {
        role: "Software Developer",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "Sep 2023 – Present",
        bullets: [
          "Developed and maintained web applications with .NET Framework and Razor ASP.NET supporting business processes in production.",
          "Implemented integrations and automations with Azure Functions, Azure DevOps, SQL Server, and Power Platform, reducing manual work in internal workflows.",
          "Built and evolved UI features with Blazor, React, and React Native, following MVC architecture and clean architecture principles.",
          "Optimized and stabilized existing systems, improving maintainability and operational continuity of company solutions.",
        ],
        technologies: [".NET Framework", "Razor", "Blazor", "React", "React Native", "Azure", "SQL Server", "Docker", "FastAPI", "Power Platform"],
      },
      {
        role: "Software Developer (Internship)",
        company: "B2F - Business To Future",
        location: "Portugal",
        period: "Mar 2023 – Jul 2023",
        bullets: [
          "Automated ETL processes for school data extraction and processing, accelerating information availability.",
          "Maintained a website powered by official sources (Eurostat and DGEEC), ensuring content freshness and reliability.",
          "Developed scalable components with .NET Framework and Razor ASP.NET to evolve the existing platform.",
        ],
        technologies: [".NET Framework", "Razor ASP.NET", "ETL", "SQL"],
      },
      {
        role: "Computer Programming (Erasmus+)",
        company: "Etn Experience",
        location: "Portsmouth, England",
        period: "Jun 2019",
        bullets: [
          "Built web pages with HTML, CSS, and JavaScript in an international Erasmus+ internship setting.",
          "Collaborated on rapid web prototype delivery, strengthening teamwork and communication skills.",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
      },
    ],
    projects: [
      {
        title: "SandSpace",
        objective: "Mobile app to check beach occupancy and support travel decisions during pandemic restrictions.",
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
        result: "Delivered as a professional aptitude project, integrating real-time monitoring and technical management via website.",
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
        period: "Sep 2024 – Sep 2026",
        details: "Focus on critical systems, cybersecurity, and software engineering. Projects: github.com/orgs/nunofbcastro-ISEP",
      },
      {
        degree: "BSc in Computer Engineering",
        institution: "ESTG - Polytechnic of Porto",
        location: "Felgueiras, Portugal",
        period: "Oct 2020 – Jul 2023",
        details: "ECTS grade: A. Projects: github.com/orgs/nunofbcastro-ESTG-IPP",
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
