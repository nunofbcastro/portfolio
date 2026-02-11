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
      contact: "Contactar"
    },
    projects: {
      seeMore: "Ver mais",
      showLess: "Ver menos",
      readMore: "Ver mais",
      githubLabel: "GitHub"
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
      contact: "Contact"
    },
    projects: {
      seeMore: "See more",
      showLess: "Show less",
      readMore: "Read more",
      githubLabel: "GitHub"
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
    }
  }
} as const;
