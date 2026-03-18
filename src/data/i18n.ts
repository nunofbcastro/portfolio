export type Language = "pt" | "en";

export const uiText = {
  pt: {
    accessibility: {
      skipToMainContent: "Saltar para o conteúdo principal",
      primaryNavigation: "Navegação principal",
      opensInNewTabSuffix: "abre num novo separador"
    },
    header: {
      brand: "Portfólio",
      nav: [
        { id: "sobre", label: "Sobre" },
        { id: "experiencia", label: "Experiência" },
        { id: "projetos", label: "Projetos" },
        { id: "contacto", label: "Contacto" }
      ]
    },
    hero: {
      viewProjects: "Ver Projetos",
      contact: "Contactar",
      downloadCV: "Descarregar CV"
    },
    projects: {
      seeMore: "Ver mais",
      showLess: "Ver menos",
      readMore: "Ver mais",
      githubLabel: "GitHub",
      viewScreenshots: "Ver Imagens"
    },
    contact: {
      socialLinks: "Ligações Sociais",
      faq: "Perguntas Frequentes"
    },
    footer: {
      rights: "Todos os direitos reservados",
      contact: "Contacto"
    },
    faq: {
      sectionLabel: "Perguntas frequentes"
    },
    languageToggle: {
      switchToEnglish: "Mudar idioma para ingles",
      switchToPortuguese: "Mudar idioma para portugues"
    },
    themeToggle: {
      switchToLight: "Mudar para tema claro",
      switchToDark: "Mudar para tema escuro",
      light: "Claro",
      dark: "Escuro"
    },
    cv: {
      summary: "Resumo",
      experience: "Experiência",
      education: "Educação",
      languages: "Idiomas",
      keyAchievements: "Principais Conquistas",
      skills: "Competências",
      strengths: "Pontos Fortes",
      awards: "Prémios"
    },
    cookieConsent: {
      consentModal: {
        title: "Este site usa cookies",
        description: "Uso cookies essenciais e, com a tua permissao, cookies de analise para melhorar o site.",
        acceptAllBtn: "Aceitar todos",
        acceptNecessaryBtn: "Rejeitar opcionais",
        showPreferencesBtn: "Gerir preferencias",
      },
      preferencesModal: {
        title: "Preferencias de cookies",
        acceptAllBtn: "Aceitar todos",
        acceptNecessaryBtn: "Rejeitar opcionais",
        savePreferencesBtn: "Guardar preferencias",
        closeIconLabel: "Fechar",
        serviceCounterLabel: "Servico|Servicos",
        sections: [
          {
            title: "Escolhe que cookies queres permitir",
            description: "Podes atualizar estas escolhas a qualquer momento.",
          },
          {
            title: "Cookies estritamente necessarios",
            description: "Obrigatorios para funcionalidades basicas e seguranca.",
            linkedCategory: "necessary",
          },
          {
            title: "Cookies de analise",
            description: "Ajudam-me a perceber como o site e utilizado para o melhorar.",
            linkedCategory: "analytics",
          },
        ],
      },
    }
  },
  en: {
    accessibility: {
      skipToMainContent: "Skip to main content",
      primaryNavigation: "Primary navigation",
      opensInNewTabSuffix: "opens in a new tab"
    },
    header: {
      brand: "Portfolio",
      nav: [
        { id: "sobre", label: "About" },
        { id: "experiencia", label: "Experience" },
        { id: "projetos", label: "Projects" },
        { id: "contacto", label: "Contact" }
      ]
    },
    hero: {
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    projects: {
      seeMore: "See more",
      showLess: "Show less",
      readMore: "Read more",
      githubLabel: "GitHub",
      viewScreenshots: "View Screenshots"
    },
    contact: {
      socialLinks: "Social Links",
      faq: "Frequently Asked Questions"
    },
    footer: {
      rights: "All rights reserved",
      contact: "Contact"
    },
    faq: {
      sectionLabel: "Frequently asked questions"
    },
    languageToggle: {
      switchToEnglish: "Switch language to English",
      switchToPortuguese: "Switch language to Portuguese"
    },
    themeToggle: {
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      light: "Light",
      dark: "Dark"
    },
    cv: {
      summary: "Summary",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      keyAchievements: "Key Achievements",
      skills: "Skills",
      strengths: "Strengths",
      awards: "Awards"
    },
    cookieConsent: {
      consentModal: {
        title: "This website uses cookies",
        description: "I use essential cookies and, with your permission, analytics cookies to improve the website.",
        acceptAllBtn: "Accept all",
        acceptNecessaryBtn: "Reject optional",
        showPreferencesBtn: "Manage preferences",
      },
      preferencesModal: {
        title: "Cookie preferences",
        acceptAllBtn: "Accept all",
        acceptNecessaryBtn: "Reject optional",
        savePreferencesBtn: "Save preferences",
        closeIconLabel: "Close",
        serviceCounterLabel: "Service|Services",
        sections: [
          {
            title: "Choose which cookies to allow",
            description: "You can update these choices at any time.",
          },
          {
            title: "Strictly necessary cookies",
            description: "Required for basic functionality and security.",
            linkedCategory: "necessary",
          },
          {
            title: "Analytics cookies",
            description: "Help me understand site usage and improve the experience.",
            linkedCategory: "analytics",
          },
        ],
      },
    }
  }
} as const;
