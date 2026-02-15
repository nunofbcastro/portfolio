import { sortTimelineItems } from "../lib/utils";

export const portfolioData = {
  // Configuration for which sections are active
  sections: {
    hero: true,
    about: true,
    timeline: true,
    projects: true,
    awards: false,
    testimonials: false, // Hidden as requested
    contact: true
  },

  personal: {
    name: "Nuno Castro",
    title: {
      pt: "Engenheiro de Software",
      en: "Software Engineer"
    },
    email: "nunofbcastro@gmail.com",
    location: {
      pt: "Porto",
      en: "Porto"
    },
    availability: {
      pt: "Aberto a novas experiências profissionais",
      en: "Open to new professional experiences"
    },
    subtitle: {
      pt: "Especialista em desenvolvimento web e mobile",
      en: "Expert in web and mobile development"
    },
    greeting: {
      pt: "Olá, eu sou",
      en: "Hello, I'm"
    },
    languages: {
      pt: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Básico" }
      ],
      en: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Básico" }
      ]
    }
  },

  about: {
    pt: {
      title: "Sobre Mim",
      description: "Olá, o meu nome é Nuno, licenciei-me em Engenharia Informática na ESTG Felgueiras em agosto de 2023. Descobri a minha paixão pela programação aos 15 anos, quando decidi ingressar num curso profissional na área. Desde então, tenho dedicado o meu tempo a aperfeiçoar as minhas competências e a desenvolver projetos inovadores.",
      skillsTitle: "Principais Competências",
      skills: [
        { icon: "Code", title: "Backend", description: [".NET / .NET Core", "Express.js", "NestJS", "FastAPI", "Azure Functions", "Swagger"] },
        { icon: "Layout", title: "Frontend", description: ["Blazor / Razor", "React / Next.js", "Angular", "Tailwind CSS", "Bootstrap"] },
        { icon: "Smartphone", title: "Mobile", description: ["Android Nativo (Java/Kotlin)", "Jetpack Compose", "React Native", "Ionic"] },
        { icon: "Cloud", title: "Cloud e DevOps", description: ["Azure", "Docker", "GitLab CI/CD", "NGINX", "IIS", "Scrum"] },
        { icon: "Database", title: "Dados e Low-Code", description: ["SQL Server", "MongoDB", "MySQL", "Power Platform"] }
      ],
      strengths: [
        { title: "Resolução de Problemas", description: "Capacidade de identificar e resolver problemas técnicos complexos de forma eficiente." },
        { title: "Colaboração em Equipa", description: "Forte espírito de equipa e excelentes competências interpessoais." },
        { title: "Aprendizagem Contínua", description: "Proativo na aprendizagem de novas tecnologias e metodologias." }
      ]
    },
    en: {
      title: "About Me",
      description: "Hello, my name is Nuno, I graduated in Computer Engineering from ESTG Felgueiras in August 2023. I discovered my passion for programming at the age of 15, when I decided to join a professional course in the area. Since then, I've dedicated my time to honing my skills and developing innovative projects.",
      skillsTitle: "Key Skills",
      skills: [
        { icon: "Code", title: "Backend", description: [".NET / .NET Core", "Express.js", "NestJS", "FastAPI", "Azure Functions", "Swagger"] },
        { icon: "Layout", title: "Frontend", description: ["Blazor / Razor", "React / Next.js", "Angular", "Tailwind CSS", "Bootstrap"] },
        { icon: "Smartphone", title: "Mobile", description: ["Native Android (Java/Kotlin)", "Jetpack Compose", "React Native", "Ionic"] },
        { icon: "Cloud", title: "Cloud & DevOps", description: ["Azure", "Docker", "GitLab CI/CD", "NGINX", "IIS", "Scrum"] },
        { icon: "Database", title: "Data & Low-Code", description: ["SQL Server", "MongoDB", "MySQL", "Power Platform"] }
      ],
      strengths: [
        { title: "Problem Solving", description: "Ability to efficiently identify and resolve complex technical problems." },
        { title: "Team Collaboration", description: "Strong team player with excellent communication and interpersonal skills." },
        { title: "Continuous Learning", description: "Proactive in learning new technologies and methodologies." }
      ]
    }
  },

  timeline: {
    pt: {
      title: "Percurso Profissional e Académico",
      items: [
        {
          type: "experience",
          icon: "Briefcase",
          company: "B2F - Business To Future",
          role: "Software Developer",
          location: "Presencial",
          period: "set 2023 – Atual",
          description: [
            "Desenvolvimento de aplicações web com .NET Framework",
            "Criação de interfaces com Razor ASP.NET",
            "Manutenção e otimização de sistemas existentes"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "Docker", "Azure Functions", "Python", "Microsoft Power Automate", "JavaScript", "Git", "Azure DevOps", "Azure Logic", "Microsoft PowerApps", "ETL", "Microsoft SQL Server", "IIS", "FastAPI", "Blazor", "Arquitetura MVC", "Arquitetura limpa", "React.js", "React Native", "Azure"]

        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "B2F - Business To Future",
          role: "Software Developer (Estágio)",
          location: "Presencial",
          period: "mar 2023 – jul 2023",
          description: [
            "Automatização de ETL para obtenção de dados escolares",
            "Manutenção de website com dados de fontes como Eurostat e DGEEC",
            "Desenvolvimento de soluções escaláveis"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "ETL", "Web Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "ESTG - Politécnico do Porto",
          degree: "Licenciatura em Engenharia Informática",
          location: "Felgueiras, Portugal",
          period: "out 2020 – jul 2023",
          description: "European Scale of Comparability of Classifications: A. Projetos: https://github.com/orgs/nunofbcastro-ESTG-IPP/repositories",
          technologies: ["Microsoft SQL Server", "Nginx", "Java", "Tailwind CSS", "SQLite", "GitLab", "Node.js", "API", "Solidity", ".NET Framework", "Scrum", "R", "C", "NestJS", "Docker", "SQL", "HTML", "Android Jetpack", "TypeScript", "ERP", "React.js", "CSS", "Prolog", "JSON", "Servidor Apache", "Python", "MongoDB", "Express.js", "XML", "Aprendizado de máquina", "JavaScript", "Next.js", "Git", "Kotlin", "Linux", "DigitalOcean"]

        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "Agrupamento de Escolas Dr. Serafim Leite",
          role: "Programador Informático",
          location: "São João da Madeira, Aveiro",
          period: "abr 2020 – jul 2020",
          description: [
            "Desenvolvimento de website para angariação de fundos",
            "Criação de aplicação mobile Android",
            "Remodelação de campos desportivos da escola"
          ],
          technologies: ["HTML", "Android Studio", "Java", "Mobile Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "Agrupamento de Escolas Dr. Serafim Leite",
          degree: "Ensino Secundário Profissional - Técnico de Gestão e Programação de Sistemas Informáticos",
          location: "São João da Madeira, Portugal",
          period: "set 2017 – ago 2020",
          description: "Curso profissional com foco em desenvolvimento de software e sistemas informáticos"
        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "Etn Experience",
          role: "Computer Programming",
          location: "Portsmouth, Inglaterra",
          period: "jun 2019",
          description: [
            "Estágio Erasmus+ em Inglaterra",
            "Desenvolvimento de páginas web pequenas",
            "Experiência internacional em programação"
          ],
          technologies: ["HTML", "CSS", "JavaScript", "Web Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "Academia De Música De Arouca",
          degree: "Ensino articulado - 5º grau",
          location: "Arouca, Portugal",
          period: "set 2012 – jul 2017",
          description: "Formação em clarinete até ao 5º grau"
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "ISEP - Instituto Superior de Engenharia do Porto",
          degree: "Mestrado em Engenharia de Sistemas Computacionais Críticos",
          location: "Porto, Portugal",
          period: "set 2024 – set 2026",
          description: "Projetos: https://github.com/orgs/nunofbcastro-ISEP/repositories",
          technologies: ["C", "C++", "Programação Ada", "SPARK", "FreeRTOS", "Linux", "Kernel Linux", "Microsoft Project", "JIRA", "MQTT", "DDS", "COAP", "FIWARE", "Scrum", "Arduino", "NuSMV", "Rust", "Cibersegurança", "ROS"]

        },
        {
          type: "award",
          icon: "Award",
          title: "Entrevista Portugal Digital Summit",
          issuer: "Portugal Digital Summit 2020",
          period: "Nov 2020",
          description: "Entrevista sobre a app PoluMap.",
          category: "Reconhecimento Mediático"
        },
        {
          type: "award",
          icon: "Award",
          title: "Prémio Proteger a vida marítima",
          issuer: "AppStartUp",
          period: "Nov 2020",
          description: "3ª edição do AppStartUp - Proteger a vida marítima com a app PoluMap.",
          category: "Sustentabilidade"
        },
        {
          type: "award",
          icon: "Award",
          title: "3º Lugar",
          issuer: "World Skills Portugal",
          period: "Fev 2020",
          description: "Campeonato Nacional das Profissões 2020. 3º lugar em Mobile Application Development.",
          category: "Competição Nacional"
        },
        {
          type: "award",
          icon: "Award",
          title: "2º Lugar",
          issuer: "PAPTICE",
          period: "Jan 2020",
          description: "2º lugar na categoria PAPTICE Artefacts com o projeto SmartHouse.",
          category: "Inovação Tecnológica"
        },
        {
          type: "award",
          icon: "Award",
          title: "2º Lugar Jovens Empreendedores",
          issuer: "Fundação da Juventude",
          period: "Jan 2020",
          description: "3ª Mostra Nacional Virtual de Jovens Empreendedores - 2º lugar com a app SandSpace.",
          category: "Empreendedorismo"
        },
        {
          type: "award",
          icon: "Award",
          title: "3º Lugar Jovens Cientistas",
          issuer: "Fundação da Juventude",
          period: "Jan 2020",
          description: "3º lugar com a app SandSpace.",
          category: "Ciência"
        },
        {
          type: "award",
          icon: "Award",
          title: "People's Choice Award",
          issuer: "Apps For Good UK",
          period: "Jan 2020",
          description: "People's Choice Award para a app SandSpace.",
          category: "Reconhecimento Internacional"
        },
        {
          type: "award",
          icon: "Award",
          title: "3º Lugar",
          issuer: "Apps for Good Portugal",
          period: "Set 2019",
          description: "3º lugar com a app PoluMap.",
          category: "Inovação Social"
        }
      ].sort(sortTimelineItems)
    },
    en: {
      title: "Professional and Academic Journey",
      items: [
        {
          type: "experience",
          icon: "Briefcase",
          company: "B2F - Business To Future",
          role: "Software Developer",
          location: "On-site",
          period: "Sep 2023 – Present",
          description: [
            "Web application development with .NET Framework",
            "Interface creation with Razor ASP.NET",
            "Maintenance and optimization of existing systems"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "Docker", "Azure Functions", "Python", "Microsoft Power Automate", "JavaScript", "Git", "Azure DevOps", "Azure Logic", "Microsoft PowerApps", "ETL", "Microsoft SQL Server", "IIS", "FastAPI", "Blazor", "MVC Architecture", "Clean Architecture", "React.js", "React Native", "Azure"]

        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "B2F - Business To Future",
          role: "Software Developer (Internship)",
          location: "On-site",
          period: "Mar 2023 – Jul 2023",
          description: [
            "ETL automation for school data extraction",
            "Website maintenance fueled by sources like Eurostat and DGEEC",
            "Development of scalable solutions"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "ETL", "Web Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "ESTG - Polytechnic of Porto",
          degree: "Bachelor's in Computer Engineering",
          location: "Felgueiras, Portugal",
          period: "Oct 2020 – Jul 2023",
          description: "European Scale of Comparability of Classifications: A. Projects: https://github.com/orgs/nunofbcastro-ESTG-IPP/repositories",
          technologies: ["Microsoft SQL Server", "Nginx", "Java", "Tailwind CSS", "SQLite", "GitLab", "Node.js", "API", "Solidity", ".NET Framework", "Scrum", "R", "C", "NestJS", "Docker", "SQL", "HTML", "Android Jetpack", "TypeScript", "ERP", "React.js", "CSS", "Prolog", "JSON", "Apache Server", "Python", "MongoDB", "Express.js", "XML", "Machine Learning", "JavaScript", "Next.js", "Git", "Kotlin", "Linux", "DigitalOcean"]

        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "Agrupamento de Escolas Dr. Serafim Leite",
          role: "Computer Programmer",
          location: "São João da Madeira, Aveiro",
          period: "Apr 2020 – Jul 2020",
          description: [
            "Website development for fundraising",
            "Android mobile application creation",
            "School sports fields remodeling"
          ],
          technologies: ["HTML", "Android Studio", "Java", "Mobile Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "Agrupamento de Escolas Dr. Serafim Leite",
          degree: "Professional Secondary Education - IT Systems Management and Programming Technician",
          location: "São João da Madeira, Portugal",
          period: "Sep 2017 – Aug 2020",
          description: "Professional course focused on software development and information systems"
        },
        {
          type: "experience",
          icon: "Briefcase",
          company: "Etn Experience",
          role: "Computer Programming",
          location: "Portsmouth, England",
          period: "Jun 2019",
          description: [
            "Erasmus+ internship in England",
            "Small web pages development",
            "International programming experience"
          ],
          technologies: ["HTML", "CSS", "JavaScript", "Web Development"]
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "Academia De Música De Arouca",
          degree: "Articulated education - 5th grade",
          location: "Arouca, Portugal",
          period: "Sep 2012 – Jul 2017",
          description: "Clarinet training up to 5th grade"
        },
        {
          type: "education",
          icon: "GraduationCap",
          institution: "ISEP - Instituto Superior de Engenharia do Porto",
          degree: "Master's in Critical Computational Systems Engineering",
          location: "Porto, Portugal",
          period: "Sep 2024 – Sep 2026",
          description: "Projects: https://github.com/orgs/nunofbcastro-ISEP/repositories",
          technologies: ["C", "C++", "Ada Programming", "SPARK", "FreeRTOS", "Linux", "Linux Kernel", "Microsoft Project", "JIRA", "MQTT", "DDS", "COAP", "FIWARE", "Scrum", "Arduino", "NuSMV", "Rust", "Cybersecurity", "ROS"]

        },
        {
          type: "award",
          icon: "Award",
          title: "Portugal Digital Summit Interview",
          issuer: "Portugal Digital Summit 2020",
          period: "Nov 2020",
          description: "Interview about the PoluMap app.",
          category: "Media Recognition"
        },
        {
          type: "award",
          icon: "Award",
          title: "Protect Marine Life Award",
          issuer: "AppStartUp",
          period: "Nov 2020",
          description: "3rd edition of AppStartUp - Protecting marine life with the PoluMap app.",
          category: "Sustainability"
        },
        {
          type: "award",
          icon: "Award",
          title: "3rd Place",
          issuer: "World Skills Portugal",
          period: "Feb 2020",
          description: "National Skills Competition 2020. 3rd place in Mobile Application Development.",
          category: "National Competition"
        },
        {
          type: "award",
          icon: "Award",
          title: "2nd Place",
          issuer: "PAPTICE",
          period: "Jan 2020",
          description: "2nd place in the PAPTICE Artefacts category with the SmartHouse project.",
          category: "Technological Innovation"
        },
        {
          type: "award",
          icon: "Award",
          title: "2nd Place Young Entrepreneurs",
          issuer: "Fundação da Juventude",
          period: "Jan 2020",
          description: "3rd National Virtual Exhibition of Young Entrepreneurs - 2nd place with the SandSpace app.",
          category: "Entrepreneurship"
        },
        {
          type: "award",
          icon: "Award",
          title: "3rd Place Young Scientists",
          issuer: "Fundação da Juventude",
          period: "Jan 2020",
          description: "3rd place with the SandSpace app.",
          category: "Science"
        },
        {
          type: "award",
          icon: "Award",
          title: "People's Choice Award",
          issuer: "Apps For Good UK",
          period: "Jan 2020",
          description: "People's Choice Award for the SandSpace app.",
          category: "International Recognition"
        },
        {
          type: "award",
          icon: "Award",
          title: "3rd Place",
          issuer: "Apps for Good Portugal",
          period: "Set 2019",
          description: "3rd place with the PoluMap app.",
          category: "Social Innovation"
        }
      ].sort(sortTimelineItems)
    }
  },

  projects: {
    pt: {
      title: "Projetos",
      viewProject: "Ver Projeto",
      sourceCode: "Código",
      projects: [
        {
          title: "PORTFOLIO",
          description: "Este é o meu portfólio pessoal, construído com React, TypeScript e Tailwind CSS.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/portfolio_home_white.png",
            "/portfolio/screenshots/portfolio_home_black.png"
          ],
          link: "https://nunofbcastro.github.io/portfolio/",
          github: "https://github.com/nunofbcastro/portfolio"
        },
        {
          title: "SandSpace",
          description: "2020 foi um ano diferente para todos, proibindo a população mundial de muitas atividades e impondo restrições à maioria delas. Por isso, juntamente com alguns amigos, criei o projeto SandSpace, que consiste numa aplicação móvel que permite analisar a taxa de ocupação de 865 praias em Portugal. Cada praia é representada por um ponto que pode ter quatro cores: verde (baixo risco), amarelo (risco médio), laranja (alto risco) e vermelho (praia fechada). Este projeto foi mencionado em mais de 100 jornais e canais de televisão nacionais (RTP, SIC, CMTV, Porto Canal...) e participou na maior competição de engenharia do mundo organizada pela INTEL ISEF nos Estados Unidos.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/SandSpace_1.webp",
            "/portfolio/screenshots/SandSpace_2.webp",
            "/portfolio/screenshots/SandSpace_3.webp",
            "/portfolio/screenshots/SandSpace_4.webp",
            "/portfolio/screenshots/SandSpace_5.webp",
            "/portfolio/screenshots/SandSpace_6.webp"
          ],
          link: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "Polumap",
          description: "Esta aplicação móvel permite a TODOS identificar os locais onde existe poluição: desde a poluição de rios até lixeiras a céu aberto. Desta forma, será criado um novo tipo de cartografia ambiental pela comunidade, identificando pontos críticos de poluição. Para cada ponto selecionado, será enviado um email para a autoridade local e para a Agência Nacional do Ambiente para que sejam tomadas medidas.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/PoluMap1.webp",
            "/portfolio/screenshots/PoluMap2.webp",
            "/portfolio/screenshots/PoluMap3.webp",
            "/portfolio/screenshots/PoluMap4.webp",
            "/portfolio/screenshots/PoluMap5.webp",
            "/portfolio/screenshots/PoluMap6.webp",
            "/portfolio/screenshots/PoluMap7.webp",
            "/portfolio/screenshots/PoluMap8.webp"
          ],
          link: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "SmartHouse",
          description: "Projeto realizado no âmbito da prova de aptidão profissional (PAP) para o curso profissional TGPSI. Consistiu em conceber um sistema de segurança integrando vários tipos de sensores e câmaras. O proprietário deste sistema poderá também controlar todos os sensores e visualizar vídeo em tempo real da sua casa, tudo através de uma aplicação móvel. A gestão mais técnica do sistema de segurança será feita através de um website dedicado.",
          technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/smarthouse_1.png",
            "/portfolio/screenshots/smarthouse_2.jpg",
            "/portfolio/screenshots/smarthouse_5.png",
            "/portfolio/screenshots/smarthouse_6.jpg",
            "/portfolio/screenshots/smarthouse_8.jpg",
            "/portfolio/screenshots/smarthouse_10.jpg",
            "/portfolio/screenshots/smarthouse_11.png",
            "/portfolio/screenshots/smarthouse_12.png",
            "/portfolio/screenshots/smarthouse_12.jpg",
            "/portfolio/screenshots/smarthouse_13.jpg",
            "/portfolio/screenshots/smarthouse_14.png",
            "/portfolio/screenshots/smarthouse_15.png",
            "/portfolio/screenshots/smarthouse_16.png",
            "/portfolio/screenshots/smarthouse_17.png",
            "/portfolio/screenshots/smarthouse_17.jpg",
            "/portfolio/screenshots/smarthouse_18.png",
            "/portfolio/screenshots/smarthouse_19.jpg",
            "/portfolio/screenshots/smarthouse_19.png",
            "/portfolio/screenshots/smarthouse_20.png",
            "/portfolio/screenshots/smarthouse_21.jpg",
            "/portfolio/screenshots/smarthouse_22.png",
            "/portfolio/screenshots/smarthouse_23.png",
            "/portfolio/screenshots/smarthouse_24.jpg",
            "/portfolio/screenshots/smarthouse_25.png",
            "/portfolio/screenshots/smarthouse_26.png",
            "/portfolio/screenshots/smarthouse_27.png",
            "/portfolio/screenshots/smarthouse_28.png",
            "/portfolio/screenshots/smarthouse_29.png",
            "/portfolio/screenshots/smarthouse_30.png",
            "/portfolio/screenshots/smarthouse_31.png",
            "/portfolio/screenshots/smarthouse_32.png",
            "/portfolio/screenshots/smarthouse_33.png",
            "/portfolio/screenshots/smarthouse_34.jpg",
            "/portfolio/screenshots/smarthouse_35.png",
            "/portfolio/screenshots/smarthouse_36.png",
            "/portfolio/screenshots/smarthouse_37.png",
            "/portfolio/screenshots/smarthouse_38.png",
            "/portfolio/screenshots/smarthouse_39.png",
            "/portfolio/screenshots/smarthouse_40.png",
            "/portfolio/screenshots/smarthouse_41.png",
            "/portfolio/screenshots/smarthouse_42.png",
            "/portfolio/screenshots/smarthouse_43.png",
            "/portfolio/screenshots/smarthouse_44.png",
            "/portfolio/screenshots/smarthouse_45.png",
            "/portfolio/screenshots/smarthouse_45.jpg",
            "/portfolio/screenshots/smarthouse_46.png",
            "/portfolio/screenshots/smarthouse_47.png",
            "/portfolio/screenshots/smarthouse_48.png",
            "/portfolio/screenshots/smarthouse_49.png",
            "/portfolio/screenshots/smarthouse_50.png"
          ],
          link: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "QR-CODE-READER",
          description: "Um leitor de código QR baseado em HTML.",
          technologies: ["HTML", "JavaScript"],
          image: "/placeholder.svg",
          screenshots: ["/portfolio/screenshots/qr_code_reader.png"],
          link: "https://nunofbcastro.github.io/qr-code-reader/",
          github: "https://github.com/nunofbcastro/QR-CODE-READER"
        },
        {
          title: "SMART-MONEY-PAGE",
          description: "Uma página inteligente para gestão de dinheiro.",
          technologies: ["TypeScript", "React"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/smart_money_page_1.png",
            "/portfolio/screenshots/smart_money_page_2.png",
            "/portfolio/screenshots/smart_money_page_3.png"
          ],
          link: "https://nunofbcastro.github.io/smart-money-page/",
          github: "https://github.com/nunofbcastro/SMART-MONEY-PAGE"
        },
        {
          title: "OLLAMA-DOCKER",
          description: "Configuração Docker para Ollama.",
          technologies: ["Docker", "Shell"],
          image: "/placeholder.svg",
          link: "https://github.com/nunofbcastro/OLLAMA-DOCKER",
          github: "https://github.com/nunofbcastro/OLLAMA-DOCKER"
        },
        {
          title: "BLAZORWASMDEPLOY",
          description: "Exemplo de deploy de uma aplicação Blazor WebAssembly.",
          technologies: ["Blazor", "C#", "CSS"],
          image: "/placeholder.svg",
          link: "https://nunofbcastro.github.io/BlazorWASMDeploy/",
          github: "https://github.com/nunofbcastro/BLAZORWASMDEPLOY"
        },
        {
          title: "PEP-IT-PORTUGAL",
          description: "Projeto PEP-IT Portugal.",
          technologies: ["TypeScript", "Node.js"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/pep_it_portugal_1.png",
            "/portfolio/screenshots/pep_it_portugal_2.png"
          ],
          link: "https://nunofbcastro.github.io/pep-it-portugal/",
          github: "https://github.com/nunofbcastro/PEP-IT-PORTUGAL"
        }
      ]
    },
    en: {
      title: "Projects",
      viewProject: "View Project",
      sourceCode: "Source Code",
      projects: [
        {
          title: "PORTFOLIO",
          description: "This is my personal portfolio, built with React, TypeScript, and Tailwind CSS.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/portfolio_home_white.png",
            "/portfolio/screenshots/portfolio_home_black.png"
          ],
          link: "https://nunofbcastro.github.io/portfolio/",
          github: "https://github.com/nunofbcastro/portfolio"
        },
        {
          title: "SandSpace",
          description: "2020 was a different year for everyone, prohibiting the world's population from many activities and imposing restrictions on most of them. That's why, together with some friends, I created the SandSpace project, which consists of a mobile application that allows you to analyze the occupancy rate of 865 beaches in Portugal. Each beach is represented by a dot that can have four colors: green (low risk), yellow (medium risk), orange (high risk) and red (beach closed). This project has been mentioned in more than 100 national newspapers and television channels (RTP, SIC, CMTV, Porto Canal...) and took part in the world's largest engineering competition organized by INTEL ISEF in the United States.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/SandSpace_1.webp",
            "/portfolio/screenshots/SandSpace_2.webp",
            "/portfolio/screenshots/SandSpace_3.webp",
            "/portfolio/screenshots/SandSpace_4.webp",
            "/portfolio/screenshots/SandSpace_5.webp",
            "/portfolio/screenshots/SandSpace_6.webp"
          ],
          link: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "Polumap",
          description: "This mobile application allows EVERYONE to identify the places where there is pollution: from river pollution to open-air rubbish dumps. In this way, a new type of environmental cartography will be created by the community, identifying pollution hotspots. For each point selected, an email will be sent to the local authority and the National Environment Agency so that action can be taken.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/PoluMap1.webp",
            "/portfolio/screenshots/PoluMap2.webp",
            "/portfolio/screenshots/PoluMap3.webp",
            "/portfolio/screenshots/PoluMap4.webp",
            "/portfolio/screenshots/PoluMap5.webp",
            "/portfolio/screenshots/PoluMap6.webp",
            "/portfolio/screenshots/PoluMap7.webp",
            "/portfolio/screenshots/PoluMap8.webp"
          ],
          link: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "SmartHouse",
          description: "Project carried out as part of the professional aptitude test (PAP) for the TGPSI professional course. It consisted of designing a security system integrating various types of sensors and cameras. The owner of this system will also be able to control all the sensors and view real-time video of their home, all via a mobile application. The more technical management of the security system will be done via a dedicated website.",
          technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/smarthouse_1.png",
            "/portfolio/screenshots/smarthouse_2.jpg",
            "/portfolio/screenshots/smarthouse_5.png",
            "/portfolio/screenshots/smarthouse_6.jpg",
            "/portfolio/screenshots/smarthouse_8.jpg",
            "/portfolio/screenshots/smarthouse_10.jpg",
            "/portfolio/screenshots/smarthouse_11.png",
            "/portfolio/screenshots/smarthouse_12.png",
            "/portfolio/screenshots/smarthouse_12.jpg",
            "/portfolio/screenshots/smarthouse_13.jpg",
            "/portfolio/screenshots/smarthouse_14.png",
            "/portfolio/screenshots/smarthouse_15.png",
            "/portfolio/screenshots/smarthouse_16.png",
            "/portfolio/screenshots/smarthouse_17.png",
            "/portfolio/screenshots/smarthouse_17.jpg",
            "/portfolio/screenshots/smarthouse_18.png",
            "/portfolio/screenshots/smarthouse_19.jpg",
            "/portfolio/screenshots/smarthouse_19.png",
            "/portfolio/screenshots/smarthouse_20.png",
            "/portfolio/screenshots/smarthouse_21.jpg",
            "/portfolio/screenshots/smarthouse_22.png",
            "/portfolio/screenshots/smarthouse_23.png",
            "/portfolio/screenshots/smarthouse_24.jpg",
            "/portfolio/screenshots/smarthouse_25.png",
            "/portfolio/screenshots/smarthouse_26.png",
            "/portfolio/screenshots/smarthouse_27.png",
            "/portfolio/screenshots/smarthouse_28.png",
            "/portfolio/screenshots/smarthouse_29.png",
            "/portfolio/screenshots/smarthouse_30.png",
            "/portfolio/screenshots/smarthouse_31.png",
            "/portfolio/screenshots/smarthouse_32.png",
            "/portfolio/screenshots/smarthouse_33.png",
            "/portfolio/screenshots/smarthouse_34.jpg",
            "/portfolio/screenshots/smarthouse_35.png",
            "/portfolio/screenshots/smarthouse_36.png",
            "/portfolio/screenshots/smarthouse_37.png",
            "/portfolio/screenshots/smarthouse_38.png",
            "/portfolio/screenshots/smarthouse_39.png",
            "/portfolio/screenshots/smarthouse_40.png",
            "/portfolio/screenshots/smarthouse_41.png",
            "/portfolio/screenshots/smarthouse_42.png",
            "/portfolio/screenshots/smarthouse_43.png",
            "/portfolio/screenshots/smarthouse_44.png",
            "/portfolio/screenshots/smarthouse_45.png",
            "/portfolio/screenshots/smarthouse_45.jpg",
            "/portfolio/screenshots/smarthouse_46.png",
            "/portfolio/screenshots/smarthouse_47.png",
            "/portfolio/screenshots/smarthouse_48.png",
            "/portfolio/screenshots/smarthouse_49.png",
            "/portfolio/screenshots/smarthouse_50.png"
          ],
          link: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "QR-CODE-READER",
          description: "An HTML-based QR code reader.",
          technologies: ["HTML", "JavaScript"],
          image: "/placeholder.svg",
          screenshots: ["/portfolio/screenshots/qr_code_reader.png"],
          link: "https://nunofbcastro.github.io/qr-code-reader/",
          github: "https://github.com/nunofbcastro/QR-CODE-READER"
        },
        {
          title: "SMART-MONEY-PAGE",
          description: "A smart money management page.",
          technologies: ["TypeScript", "React"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/smart_money_page_1.png",
            "/portfolio/screenshots/smart_money_page_2.png",
            "/portfolio/screenshots/smart_money_page_3.png"
          ],
          link: "https://nunofbcastro.github.io/smart-money-page/",
          github: "https://github.com/nunofbcastro/SMART-MONEY-PAGE"
        },
        {
          title: "OLLAMA-DOCKER",
          description: "Docker configuration for Ollama.",
          technologies: ["Docker", "Shell"],
          image: "/placeholder.svg",
          link: "https://github.com/nunofbcastro/OLLAMA-DOCKER",
          github: "https://github.com/nunofbcastro/OLLAMA-DOCKER"
        },
        {
          title: "BLAZORWASMDEPLOY",
          description: "Example of deploying a Blazor WebAssembly application.",
          technologies: ["Blazor", "C#", "CSS"],
          image: "/placeholder.svg",
          link: "https://nunofbcastro.github.io/BlazorWASMDeploy/",
          github: "https://github.com/nunofbcastro/BLAZORWASMDEPLOY"
        },
        {
          title: "PEP-IT-PORTUGAL",
          description: "PEP-IT Portugal project.",
          technologies: ["TypeScript", "Node.js"],
          image: "/placeholder.svg",
          screenshots: [
            "/portfolio/screenshots/pep_it_portugal_1.png",
            "/portfolio/screenshots/pep_it_portugal_2.png"
          ],
          link: "https://nunofbcastro.github.io/pep-it-portugal/",
          github: "https://github.com/nunofbcastro/PEP-IT-PORTUGAL"
        }
      ]
    }
  },

  testimonials: {
    pt: {
      title: "Testemunhos",
      testimonials: [
        {
          name: "Maria Santos",
          role: "Product Manager",
          company: "TechNova",
          content: "João é um profissional excecional. A sua capacidade técnica e dedicação fazem dele um elemento fundamental na nossa equipa.",
          avatar: "/placeholder.svg"
        },
        {
          name: "Pedro Costa",
          role: "CTO",
          company: "Digital Innovations",
          content: "Trabalhar com o João foi uma experiência fantástica. Sempre entrega código de qualidade e dentro dos prazos.",
          avatar: "/placeholder.svg"
        }
      ]
    },
    en: {
      title: "Testimonials",
      testimonials: [
        {
          name: "Maria Santos",
          role: "Product Manager",
          company: "TechNova",
          content: "João is an exceptional professional. His technical skills and dedication make him a key element in our team.",
          avatar: "/placeholder.svg"
        },
        {
          name: "Pedro Costa",
          role: "CTO",
          company: "Digital Innovations",
          content: "Working with João was a fantastic experience. He always delivers quality code on time.",
          avatar: "/placeholder.svg"
        }
      ]
    }
  },

  contact: {
    pt: {
      title: "Contacto",
      subtitle: "Interessado em trabalhar comigo? Estou aberto a novas experiências profissionais e propostas de colaboração.",
      socialLinks: [
        { icon: "Mail", label: "Email", href: "mailto:nunofbcastro@gmail.com" },
        { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nunofbcastro/" },
        { icon: "Github", label: "GitHub", href: "https://github.com/nunofbcastro" },
        { icon: "Globe", label: "Portfolio", href: "https://nunofbcastro.github.io/portfolio/" }
      ],
      faq: [
        {
          question: "Quais são as tuas principais áreas de especialização?",
          answer: "Sou especialista em desenvolvimento web e mobile, com foco em .NET Framework, Razor ASP.NET, Blazor, React, React Native e Ionic. Também tenho experiência em UI/UX design, integrações de API (REST, XML, RPA) e gestão de dados (SQL Server, MongoDB)."
        },
        {
          question: "Estás disponível para novos projetos ou colaborações?",
          answer: "Sim, estou sempre aberto a novas oportunidades e desafios. Se tiveres um projeto em mente ou procuras colaboração, não hesites em contactar-me!"
        },
        {
          question: "Trabalhas remotamente?",
          answer: "Sim, estou totalmente disponível para trabalho remoto, o que me permite colaborar com equipas e projetos em qualquer parte do mundo."
        },
        {
          question: "Como é que garantes a qualidade do código e a manutenção?",
          answer: "Prezo pela escrita de código limpo, modular e bem documentado. Utilizo as melhores práticas de desenvolvimento, como testes unitários e integração contínua, para garantir a robustez e a fácil manutenção das soluções que entrego."
        },
        {
          question: "Podes dar exemplos de projetos em que trabalhaste?",
          answer: "Claro! No meu portfólio, podes encontrar projetos como o SandSpace (aplicação móvel para análise de ocupação de praias), PoluMap (aplicação para identificação de poluição) e SmartHouse (sistema de segurança residencial). Tenho também vários projetos pessoais e contribuições open-source."
        }
      ]
    },
    en: {
      title: "Contact",
      subtitle: "Interested in working together? I'm open to new professional experiences and collaboration proposals.",
      socialLinks: [
        { icon: "Mail", label: "Email", href: "mailto:nunofbcastro@gmail.com" },
        { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nunofbcastro/" },
        { icon: "Github", label: "GitHub", href: "https://github.com/nunofbcastro" },
        { icon: "Globe", label: "Portfolio", href: "https://nunofbcastro.github.io/portfolio/" }
      ],
      faq: [
        {
          question: "What are your main areas of expertise?",
          answer: "I specialize in web and mobile development, with a focus on .NET Framework, Razor ASP.NET, Blazor, React, React Native, and Ionic. I also have experience in UI/UX design, API integrations (REST, XML, RPA), and data management (SQL Server, MongoDB)."
        },
        {
          question: "Are you available for new projects or collaborations?",
          answer: "Yes, I am always open to new opportunities and challenges. If you have a project in mind or are looking for collaboration, don't hesitate to contact me!"
        },
        {
          question: "Do you work remotely?",
          answer: "Yes, I am fully available for remote work, which allows me to collaborate with teams and projects anywhere in the world."
        },
        {
          question: "How do you ensure code quality and maintainability?",
          answer: "I prioritize writing clean, modular, and well-documented code. I use best development practices, such as unit testing and continuous integration, to ensure the robustness and easy maintainability of the solutions I deliver."
        },
        {
          question: "Can you provide examples of projects you've worked on?",
          answer: "Of course! In my portfolio, you can find projects like SandSpace (mobile application for beach occupancy analysis), PoluMap (application for pollution identification), and SmartHouse (home security system). I also have several personal projects and open-source contributions."
        }
      ]
    }
  }
};

