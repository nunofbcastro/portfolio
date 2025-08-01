export const portfolioData = {
  personal: {
    name: "João Silva",
    title: {
      pt: "Engenheiro de Software",
      en: "Software Engineer"
    },
    email: "joao@exemplo.com",
    location: {
      pt: "Lisboa, Portugal",
      en: "Lisbon, Portugal"
    },
    availability: {
      pt: "Disponível para freelancing",
      en: "Available for freelancing"
    },
    subtitle: {
      pt: "Especialista em desenvolvimento web moderno",
      en: "Expert in modern web development"
    },
    greeting: {
      pt: "Olá, eu sou",
      en: "Hello, I'm"
    }
  },

  about: {
    pt: {
      title: "Sobre Mim",
      description: "Sou um engenheiro de software apaixonado por tecnologia e inovação. Com mais de 5 anos de experiência, especializo-me em desenvolvimento web moderno, criando soluções eficientes e escaláveis.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL"],
      interests: ["Tecnologia", "Inovação", "Design", "Música"]
    },
    en: {
      title: "About Me",
      description: "I'm a software engineer passionate about technology and innovation. With over 5 years of experience, I specialize in modern web development, creating efficient and scalable solutions.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL"],
      interests: ["Technology", "Innovation", "Design", "Music"]
    }
  },

  experience: {
    pt: {
      title: "Experiência",
      experiences: [
        {
          company: "TechNova Solutions",
          role: "Engenheiro de Software",
          location: "Lisboa, Portugal",
          period: "2022 – Presente",
          description: [
            "Desenvolvimento de aplicações web e mobile",
            "Integração com APIs externas",
            "Participação em planeamento ágil (Scrum)"
          ]
        },
        {
          company: "Digital Innovations",
          role: "Desenvolvedor Frontend",
          location: "Porto, Portugal",
          period: "2020 – 2022",
          description: [
            "Criação de interfaces modernas e responsivas",
            "Optimização de performance e SEO",
            "Colaboração com equipas multidisciplinares"
          ]
        },
        {
          company: "StartupLab",
          role: "Developer Júnior",
          location: "Braga, Portugal",
          period: "2019 – 2020",
          description: [
            "Desenvolvimento de protótipos",
            "Testes e debugging",
            "Documentação técnica"
          ]
        }
      ]
    },
    en: {
      title: "Experience",
      experiences: [
        {
          company: "TechNova Solutions",
          role: "Software Engineer",
          location: "Lisbon, Portugal",
          period: "2022 – Present",
          description: [
            "Web and mobile application development",
            "External API integration",
            "Agile planning participation (Scrum)"
          ]
        },
        {
          company: "Digital Innovations",
          role: "Frontend Developer",
          location: "Porto, Portugal",
          period: "2020 – 2022",
          description: [
            "Modern and responsive interface creation",
            "Performance and SEO optimization",
            "Multidisciplinary team collaboration"
          ]
        },
        {
          company: "StartupLab",
          role: "Junior Developer",
          location: "Braga, Portugal",
          period: "2019 – 2020",
          description: [
            "Prototype development",
            "Testing and debugging",
            "Technical documentation"
          ]
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
        { icon: "Mail", label: "Email", href: "mailto:joao@exemplo.com" },
        { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
        { icon: "Github", label: "GitHub", href: "https://github.com" },
        { icon: "Globe", label: "Website", href: "https://exemplo.com" }
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
        { icon: "Mail", label: "Email", href: "mailto:joao@exemplo.com" },
        { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
        { icon: "Github", label: "GitHub", href: "https://github.com" },
        { icon: "Globe", label: "Website", href: "https://exemplo.com" }
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