export const portfolioData = {
  personal: {
    name: "Nuno Castro",
    title: {
      pt: "Engenheiro de Software",
      en: "Software Engineer"
    },
    email: "nunofbcastro@gmail.com",
    location: {
      pt: "Rio Tinto, Porto",
      en: "Rio Tinto, Porto"
    },
    availability: {
      pt: "Disponível para freelancing",
      en: "Available for freelancing"
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
      description: "Olá, o meu nome é Nuno, licenciei-me em Engenharia Informática na ESTG Felgueiras em agosto de 2023. Descobri a minha paixão pela programação aos 15 anos, quando decidi ingressar num curso profissional na área. Desde então, dedico o meu tempo a aperfeiçoar as minhas competências e a desenvolver projetos inovadores.",
      skills: [".NET", ".NET Core", "React", "Angular", "Next.js", "Express.js", "NestJS", "FastAPI", "Azure", "Docker", "SQL Server", "MongoDB"],
      interests: ["Tecnologia", "Inovação", "Programação", "Desenvolvimento Mobile"]
    },
    en: {
      title: "About Me",
      description: "Hello, my name is Nuno, I graduated in Computer Engineering from ESTG Felgueiras in August 2023. I discovered my passion for programming at the age of 15, when I decided to join a professional course in the area. Since then, I've dedicated my time to honing my skills and developing innovative projects.",
      skills: [".NET", ".NET Core", "React", "Angular", "Next.js", "Express.js", "NestJS", "FastAPI", "Azure", "Docker", "SQL Server", "MongoDB"],
      interests: ["Technology", "Innovation", "Programming", "Mobile Development"]
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
          institution: "Universidade do Porto",
          degree: "Mestrado em Engenharia Informática",
          location: "Porto, Portugal",
          period: "2017 – 2019",
          description: "Especialização em Sistemas Distribuídos e Segurança"
        },
        {
          institution: "Instituto Politécnico de Lisboa",
          degree: "Licenciatura em Informática",
          location: "Lisboa, Portugal",
          period: "2014 – 2017",
          description: "Desenvolvimento de Software e Base de Dados"
        }
      ]
    },
    en: {
      title: "Education",
      educations: [
        {
          institution: "University of Porto",
          degree: "Master's in Computer Engineering",
          location: "Porto, Portugal",
          period: "2017 – 2019",
          description: "Specialization in Distributed Systems and Security"
        },
        {
          institution: "Polytechnic Institute of Lisbon",
          degree: "Bachelor's in Computer Science",
          location: "Lisbon, Portugal",
          period: "2014 – 2017",
          description: "Software Development and Database"
        }
      ]
    }
  },

  projects: {
    pt: {
      title: "Projetos",
      projects: [
        {
          title: "E-commerce Moderno",
          description: "Plataforma completa de e-commerce com pagamentos integrados",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
        },
        {
          title: "Dashboard Analytics",
          description: "Dashboard interativo para análise de dados em tempo real",
          technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
        },
        {
          title: "App Mobile Fitness",
          description: "Aplicação mobile para tracking de exercícios e nutrição",
          technologies: ["React Native", "Firebase", "Redux"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
        }
      ]
    },
    en: {
      title: "Projects",
      projects: [
        {
          title: "Modern E-commerce",
          description: "Complete e-commerce platform with integrated payments",
          technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
        },
        {
          title: "Analytics Dashboard",
          description: "Interactive dashboard for real-time data analysis",
          technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
        },
        {
          title: "Fitness Mobile App",
          description: "Mobile app for exercise and nutrition tracking",
          technologies: ["React Native", "Firebase", "Redux"],
          image: "/placeholder.svg",
          link: "https://exemplo.com",
          github: "https://github.com"
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
      subtitle: "Interessado em trabalhar comigo? Estou disponível para freelancing ou propostas de colaboração.",
      socialLinks: [
        { icon: "Mail", label: "Email", href: "mailto:nunofbcastro@gmail.com" },
        { icon: "Linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nunofbcastro/" },
        { icon: "Github", label: "GitHub", href: "https://github.com/nunofbcastro" },
        { icon: "Globe", label: "Portfolio", href: "https://nunofbcastro.com" }
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
      subtitle: "Interested in working together? I'm open to freelance or collaboration proposals.",
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