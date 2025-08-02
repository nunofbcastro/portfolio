export const portfolioData = {
  // Configuration for which sections are active
  sections: {
    hero: true,
    about: true,
    experience: true,
    education: true,
    projects: true,
    awards: true,
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
    }
  },

  about: {
    pt: {
      title: "Sobre Mim",
      description: "Sou Engenheiro Informático, com experiência em desenvolvimento de software, design de interfaces e automação de processos. Gosto de criar ferramentas úteis, intuitivas e com impacto real na vida das pessoas.",
      skillsTitle: "Principais Competências",
      skills: [
        { icon: "Code", title: "Desenvolvimento Web / Mobile", description: [".NET Framework", "Razor ASP.NET", "Blazor", "React", "React Native", "Ionic"] },
        { icon: "Palette", title: "UI/UX Design", description: ["CSS", "Tailwind CSS", "Bootstrap"] },
        { icon: "Cpu", title: "Integrações e APIs", description: ["REST", "XML", "RPA"] },
        { icon: "Database", title: "Gestão de dados", description: ["SQL Server", "MongoDB"] }
      ]
    },
    en: {
      title: "About Me",
      description: "I'm a Software Engineer with experience in software development, UI design, and process automation. I enjoy building useful, intuitive tools that create real impact.",
      skillsTitle: "Key Skills",
      skills: [
        { icon: "Code", title: "Web / Mobile Development", description: [".NET Framework", "Razor ASP.NET", "Blazor", "React", "React Native", "Ionic"] },
        { icon: "Palette", title: "UI/UX Design", description: ["CSS", "Tailwind CSS", "Bootstrap"] },
        { icon: "Cpu", title: "API Integrations", description: ["REST", "XML", "RPA"] },
        { icon: "Database", title: "Data Management", description: ["SQL Server", "MongoDB"] }
      ]
    }
  },

  experience: {
    pt: {
      title: "Experiência",
      experiences: [
        {
          company: "B2F - Business To Future",
          role: "Software Developer",
          location: "Presencial",
          period: "set 2023 – Atual",
          description: [
            "Desenvolvimento de aplicações web com .NET Framework",
            "Criação de interfaces com Razor ASP.NET",
            "Manutenção e otimização de sistemas existentes"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "C#", "SQL Server"]
        },
        {
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
        }
      ]
    },
    en: {
      title: "Experience",
      experiences: [
        {
          company: "B2F - Business To Future",
          role: "Software Developer",
          location: "On-site",
          period: "Sep 2023 – Present",
          description: [
            "Web application development with .NET Framework",
            "Interface creation with Razor ASP.NET",
            "Maintenance and optimization of existing systems"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "C#", "SQL Server"]
        },
        {
          company: "B2F - Business To Future",
          role: "Software Developer (Internship)",
          location: "On-site",
          period: "Mar 2023 – Jul 2023",
          description: [
            "ETL automation for school data extraction",
            "Website maintenance with data from sources like Eurostat and DGEEC",
            "Development of scalable solutions"
          ],
          technologies: [".NET Framework", "Razor ASP.NET", "ETL", "Web Development"]
        },
        {
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
        }
      ]
    }
  },

  education: {
    pt: {
      title: "Educação",
      educations: [
        {
          institution: "ISEP - Instituto Superior de Engenharia do Porto",
          degree: "Mestrado em Engenharia de Sistemas Computacionais Críticos",
          location: "Porto, Portugal",
          period: "set 2024 – jul 2026",
          description: "Projetos: https://github.com/orgs/nunofbcastro-ISEP/repositories"
        },
        {
          institution: "ESTG - Politécnico do Porto",
          degree: "Licenciatura em Engenharia Informática",
          location: "Felgueiras, Portugal",
          period: "out 2020 – jul 2023",
          description: "European Scale of Comparability of Classifications: A. Projetos: https://github.com/orgs/nunofbcastro-ESTG-IPP/repositories"
        },
        {
          institution: "Agrupamento de Escolas Dr. Serafim Leite",
          degree: "Ensino Secundário Profissional - Técnico de Gestão e Programação de Sistemas Informáticos",
          location: "São João da Madeira, Portugal",
          period: "set 2017 – ago 2020",
          description: "Curso profissional com foco em desenvolvimento de software e sistemas informáticos"
        },
        {
          institution: "Academia De Música De Arouca",
          degree: "Ensino articulado - 5º grau",
          location: "Arouca, Portugal",
          period: "set 2012 – jul 2017",
          description: "Formação em clarinete até ao 5º grau"
        }
      ]
    },
    en: {
      title: "Education",
      educations: [
        {
          institution: "ISEP - Instituto Superior de Engenharia do Porto",
          degree: "Master's in Critical Computational Systems Engineering",
          location: "Porto, Portugal",
          period: "Sep 2024 – Jul 2026",
          description: "Projects: https://github.com/orgs/nunofbcastro-ISEP/repositories"
        },
        {
          institution: "ESTG - Polytechnic of Porto",
          degree: "Bachelor's in Computer Engineering",
          location: "Felgueiras, Portugal",
          period: "Oct 2020 – Jul 2023",
          description: "European Scale of Comparability of Classifications: A. Projects: https://github.com/orgs/nunofbcastro-ESTG-IPP/repositories"
        },
        {
          institution: "Agrupamento de Escolas Dr. Serafim Leite",
          degree: "Professional Secondary Education - IT Systems Management and Programming Technician",
          location: "São João da Madeira, Portugal",
          period: "Sep 2017 – Aug 2020",
          description: "Professional course focused on software development and information systems"
        },
        {
          institution: "Academia De Música De Arouca",
          degree: "Articulated education - 5th grade",
          location: "Arouca, Portugal",
          period: "Sep 2012 – Jul 2017",
          description: "Clarinet training up to 5th grade"
        }
      ]
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
          link: "https://nunofbcastro.github.io/portfolio/",
          github: "https://github.com/nunofbcastro/portfolio"
        },
        {
          title: "SandSpace",
          description: "2020 foi um ano diferente para todos, proibindo a população mundial de muitas atividades e impondo restrições à maioria delas. Por isso, juntamente com alguns amigos, criei o projeto SandSpace, que consiste numa aplicação móvel que permite analisar a taxa de ocupação de 865 praias em Portugal. Cada praia é representada por um ponto que pode ter quatro cores: verde (baixo risco), amarelo (risco médio), laranja (alto risco) e vermelho (praia fechada). Este projeto foi mencionado em mais de 100 jornais e canais de televisão nacionais (RTP, SIC, CMTV, Porto Canal...) e participou na maior competição de engenharia do mundo organizada pela INTEL ISEF nos Estados Unidos.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "Polumap",
          description: "Esta aplicação móvel permite a TODOS identificar os locais onde existe poluição: desde a poluição de rios até lixeiras a céu aberto. Desta forma, será criado um novo tipo de cartografia ambiental pela comunidade, identificando pontos críticos de poluição. Para cada ponto selecionado, será enviado um email para a autoridade local e para a Agência Nacional do Ambiente para que sejam tomadas medidas.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "SmartHouse",
          description: "Projeto realizado no âmbito da prova de aptidão profissional (PAP) para o curso profissional TGPSI. Consistiu em conceber um sistema de segurança integrando vários tipos de sensores e câmaras. O proprietário deste sistema poderá também controlar todos os sensores e visualizar vídeo em tempo real da sua casa, tudo através de uma aplicação móvel. A gestão mais técnica do sistema de segurança será feita através de um website dedicado.",
          technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "QR-CODE-READER",
          description: "Um leitor de código QR baseado em HTML.",
          technologies: ["HTML", "JavaScript"],
          image: "/placeholder.svg",
          link: "https://nunofbcastro.github.io/qr-code-reader/",
          github: "https://github.com/nunofbcastro/QR-CODE-READER"
        },
        {
          title: "SMART-MONEY-PAGE",
          description: "Uma página inteligente para gestão de dinheiro.",
          technologies: ["TypeScript", "React"],
          image: "/placeholder.svg",
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
          link: "https://nunofbcastro.github.io/portfolio/",
          github: "https://github.com/nunofbcastro/portfolio"
        },
        {
          title: "SandSpace",
          description: "2020 was a different year for everyone, prohibiting the world's population from many activities and imposing restrictions on most of them. That's why, together with some friends, I created the SandSpace project, which consists of a mobile application that allows you to analyze the occupancy rate of 865 beaches in Portugal. Each beach is represented by a dot that can have four colors: green (low risk), yellow (medium risk), orange (high risk) and red (beach closed). This project has been mentioned in more than 100 national newspapers and television channels (RTP, SIC, CMTV, Porto Canal...) and took part in the world's largest engineering competition organized by INTEL ISEF in the United States.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.essl.sandspace&hl=pt_PT&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "Polumap",
          description: "This mobile application allows EVERYONE to identify the places where there is pollution: from river pollution to open-air rubbish dumps. In this way, a new type of environmental cartography will be created by the community, identifying pollution hotspots. For each point selected, an email will be sent to the local authority and the National Environment Agency so that action can be taken.",
          technologies: ["Java", "Android Studio", "PHP", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=appinventor.ai_fatima_pais.PoluMap_V15&hl=en&gl=US",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "SmartHouse",
          description: "Project carried out as part of the professional aptitude test (PAP) for the TGPSI professional course. It consisted of designing a security system integrating various types of sensors and cameras. The owner of this system will also be able to control all the sensors and view real-time video of their home, all via a mobile application. The more technical management of the security system will be done via a dedicated website.",
          technologies: ["PHP", "Laravel", "Android Studio", "MySQL", "API", "JSON"],
          image: "/placeholder.svg",
          link: "https://www.youtube.com/channel/UCpMwe4zgl5rZKVPa9AdDzKA",
          github: "https://github.com/nunofbcastro"
        },
        {
          title: "QR-CODE-READER",
          description: "An HTML-based QR code reader.",
          technologies: ["HTML", "JavaScript"],
          image: "/placeholder.svg",
          link: "https://nunofbcastro.github.io/qr-code-reader/",
          github: "https://github.com/nunofbcastro/QR-CODE-READER"
        },
        {
          title: "SMART-MONEY-PAGE",
          description: "A smart money management page.",
          technologies: ["TypeScript", "React"],
          image: "/placeholder.svg",
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
          description: "Blazor WebAssembly deployment example.",
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
          link: "https://nunofbcastro.github.io/pep-it-portugal/",
          github: "https://github.com/nunofbcastro/PEP-IT-PORTUGAL"
        }
      ]
    }
  },

  awards: {
    pt: {
      title: "Prémios e Reconhecimentos",
      awards: [
        {
          title: "Participante INTEL ISEF",
          issuer: "INTEL ISEF",
          date: "Jan 2021",
          description: "Participante no INTEL ISEF com a aplicação SandSpace.",
          category: "Ciência e Tecnologia"
        },
        {
          title: "Entrevista Portugal Digital Summit",
          issuer: "Portugal Digital Summit 2020",
          date: "Nov 2020",
          description: "Entrevista sobre a app PoluMap.",
          category: "Reconhecimento Mediático"
        },
        {
          title: "Prémio Proteger a vida marítima",
          issuer: "AppStartUp",
          date: "Nov 2020",
          description: "3ª edição do AppStartUp - Proteger a vida marítima com a app PoluMap.",
          category: "Sustentabilidade"
        },
        {
          title: "3º Lugar",
          issuer: "World Skills Portugal",
          date: "Fev 2020",
          description: "Campeonato Nacional das Profissões 2020. 3º lugar em Mobile Application Development.",
          category: "Competição Nacional"
        },
        {
          title: "2º Lugar",
          issuer: "PAPTICE",
          date: "Jan 2020",
          description: "2º lugar na categoria PAPTICE Artefacts com o projeto SmartHouse.",
          category: "Inovação Tecnológica"
        },
        {
          title: "2º Lugar Jovens Empreendedores",
          issuer: "Fundação da Juventude",
          date: "Jan 2020",
          description: "3ª Mostra Nacional Virtual de Jovens Empreendedores - 2º lugar com a app SandSpace.",
          category: "Empreendedorismo"
        },
        {
          title: "3º Lugar Jovens Cientistas",
          issuer: "Fundação da Juventude",
          date: "Jan 2020",
          description: "3º lugar com a app SandSpace.",
          category: "Ciência"
        },
        {
          title: "People's Choice Award",
          issuer: "Apps For Good UK",
          date: "Jan 2020",
          description: "People's Choice Award para a app SandSpace.",
          category: "Reconhecimento Internacional"
        },
        {
          title: "3º Lugar",
          issuer: "Apps for Good Portugal",
          date: "Set 2019",
          description: "3º lugar com a app PoluMap.",
          category: "Inovação Social"
        }
      ]
    },
    en: {
      title: "Awards and Recognition",
      awards: [
        {
          title: "INTEL ISEF Participant",
          issuer: "INTEL ISEF",
          date: "Jan 2021",
          description: "Participant in INTEL ISEF with the SandSpace application.",
          category: "Science and Technology"
        },
        {
          title: "Portugal Digital Summit Interview",
          issuer: "Portugal Digital Summit 2020",
          date: "Nov 2020",
          description: "Interview about the PoluMap app.",
          category: "Media Recognition"
        },
        {
          title: "Protecting Marine Life Award",
          issuer: "AppStartUp",
          date: "Nov 2020",
          description: "3rd edition of AppStartUp - Protecting marine life with the PoluMap app.",
          category: "Sustainability"
        },
        {
          title: "3rd Place",
          issuer: "World Skills Portugal",
          date: "Feb 2020",
          description: "National Championship of Professions 2020. 3rd place in Mobile Application Development.",
          category: "National Competition"
        },
        {
          title: "2nd Place",
          issuer: "PAPTICE",
          date: "Jan 2020",
          description: "2nd place in the PAPTICE Artifacts category with the SmartHouse project.",
          category: "Technological Innovation"
        },
        {
          title: "2nd Place Young Entrepreneurs",
          issuer: "Fundação da Juventude",
          date: "Jan 2020",
          description: "3rd Virtual National Exhibition of Young Entrepreneurs - 2nd place with the SandSpace app.",
          category: "Entrepreneurship"
        },
        {
          title: "3rd Place Young Scientists",
          issuer: "Fundação da Juventude",
          date: "Jan 2020",
          description: "3rd place with the SandSpace app.",
          category: "Science"
        },
        {
          title: "People's Choice Award",
          issuer: "Apps For Good UK",
          date: "Jan 2020",
          description: "People's Choice Award for the SandSpace app.",
          category: "International Recognition"
        },
        {
          title: "3rd Place",
          issuer: "Apps for Good Portugal",
          date: "Set 2019",
          description: "3rd place with the PoluMap app.",
          category: "Social Innovation"
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
          question: "Trabalhas remotamente?",
          answer: "Sim, disponível para trabalho remoto."
        },
        {
          question: "Forneces documentação?",
          answer: "Sim, sempre com documentação e suporte técnico."
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
        { icon: "Globe", label: "Portfolio", href: "https://nunofbcastro.com" }
      ],
      faq: [
        {
          question: "Do you work remotely?",
          answer: "Yes, available for remote work."
        },
        {
          question: "Do you provide documentation?",
          answer: "Yes, always with technical documentation and support."
        }
      ]
    }
  }
};