# Portfolio Project Guide

This guide explains how the project is organized, how it works, and how to manage the data, specifically from LinkedIn.

## 1. Project Overview & Architecture

This is a static portfolio website built with **Astro** and **React**.

- **Framework:** Astro (for static site generation, performance, and routing).
- **UI Library:** React (used for interactive components like the Timeline).
- **Styling:** Tailwind CSS (for utility-first styling).
- **Deployment:** GitHub Pages (static hosting).

### Key Concept: Islands Architecture
Astro renders most of the site as static HTML (zero JavaScript). React components are only "hydrated" (made interactive) when necessary (e.g., `client:visible` or `client:load`). This ensures the site is extremely fast.

## 2. Project Organization (`/src`)

The source code is organized as follows:

- **`src/data/`**: The **BRAIN** of the portfolio.
  - `portfolio.ts`: Contains ALL the dynamic data (Profile info, About section, Timeline, Skills, Projects). This is the **single source of truth**.
- **`src/pages/`**: The routes of the website.
  - `index.astro`: The main homepage. It fetches data from `src/data/portfolio.ts` and passes it to components.
- **`src/layouts/`**: Shared page wrappers.
  - `BaseLayout.astro`: Handling the `<head>`, metadata, SEO, and common page structure.
- **`src/components/`**: Reusable UI blocks.
  - `cv/`: Components specific to the CV/Resume print view.
  - `Timeline.tsx`: The interactive timeline component (React).
  - `ThemeProvider.astro`: Handles light/dark mode.
- **`src/assets/`**: Static assets like images.

## 3. Data Management (LinkedIn Integration)

The portfolio data is synchronized manually with LinkedIn to ensure accuracy and customization.

### How to Update Data from LinkedIn:

1.  **Open the LinkedIn Profile:** Navigate to [linkedin.com/in/nunofbcastro](https://www.linkedin.com/in/nunofbcastro/).
2.  **Extract Information:**
    - **Description:** Copy the "About" section summary.
    - **Experience:** Check the "Experience" section. Note the Company, Role, Dates, Location, Description, and *Skills*.
    - **Education:** Check the "Education" section. Note the Institution, Degree, Dates, Description, and *Skills*.
    - **Skills:** Check the "Skills" section for a comprehensive list.
3.  **Update `src/data/portfolio.ts`:**
    - This file exports a `portfolioData` object.
    - **`about` section:** Update the `description` and `skills` array.
    - **`timeline` section:** Update the `items` array.
      - Ensure each item has the correct `type` ('experience' or 'education'), `company`/`institution`, `role`/`degree`, `period`, `description`, and `technologies`.
      - **IMPORTANT:** The `technologies` array in each timeline item should reflect the specific skills used in that role/education, matching the LinkedIn skills for that entry (e.g., if LinkedIn says you used "C#" at "B2F", add "C#" to the `technologies` array for the B2F item).

### Example Mapping:
- **LinkedIn Experience:** "Software Developer at B2F" -> `portfolioData.timeline.items` (find the B2F entry).
- **LinkedIn Skills for B2F:** "C#, .NET, SQL Server" -> update the `technologies` array for that item: `technologies: ["C#", ".NET", "SQL Server"]`.

## 4. How Everything Works Together

1.  **Data Source:** `src/data/portfolio.ts` holds all the text and structured data.
2.  **Page Rendering:** `src/pages/index.astro` imports this data.
3.  **Component Passing:** The data is passed as props to components (e.g., `<Timeline client:load items={portfolioData.timeline.items} />`).
4.  **Display:** The components render the data into HTML/CSS for the user to see.

To change the website's content, you almost always just need to edit `src/data/portfolio.ts`.

## 5. Technical Deep Dive (For AI & Developers)

This section provides low-level details to help AIs understand the codebase context immediately.

### 🧬 Data Architecture (`src/data/portfolio.ts`)

The portfolio data is structured as a typed configuration object.
**Important Types (Infered):**

```typescript
interface PortfolioData {
  sections: { [key: string]: boolean }; // Toggles for "hero", "about", etc.
  personal: {
    name: string;
    title: { pt: string; en: string };
    // ... contact details
  };
  about: {
    pt: AboutSectionData;
    en: AboutSectionData;
  };
  timeline: {
    pt: { title: string; items: TimelineItem[] };
    en: { title: string; items: TimelineItem[] };
  };
  // ... projects, awards, etc.
}

interface TimelineItem {
  type: "experience" | "education" | "award";
  icon: "Briefcase" | "GraduationCap" | "Award" | "Trophy"; // Lucide icon names
  company?: string;
  institution?: string;
  issuer?: string; // For awards
  role?: string;
  degree?: string;
  title?: string; // For awards
  location?: string;
  period: string; // e.g. "Sep 2023 – Present"
  description: string | string[]; // Can be a single string or bullet points
  technologies?: string[]; // Array of skill strings used in this role
  category?: string; // For awards
}

interface SkillCategory {
  icon: "Code" | "Layout" | "Smartphone" | "Cloud" | "Database";
  title: string;
  description: string[]; // List of specific technologies (e.g. [".NET", "Java"])
}
```

### 🏗️ Component Hierarchy & State Flow

1.  **Entry Point:** `src/pages/index.astro`
    -   **Role:** Server-side generation (SSG).
    -   **Actions:**
        -   Optimizes images (LCP).
        -   Constructs SEO metadata (`jsonLd`).
        -   Renders `BaseLayout.astro` (HTML shell).
        -   Hydrates the React root: `<App client:idle />`.

2.  **React Root:** `src/react/App.tsx`
    -   **Role:** Client-side state manager.
    -   **State:**
        -   `language`: "pt" | "en" (Persistent in `localStorage`).
    -   **Effects:** Syncs `document.documentElement.lang`.

3.  **Main Layout:** `src/react/Index.tsx`
    -   **Role:** UI Orchestrator.
    -   **Logic:**
        -   Reads `portfolioData.sections` to conditionally render sections.
        -   Passes `language` and data down to children.
    -   **Children:**
        -   `Header`: Nav & Lang toggle.
        -   `HeroSection`, `AboutSection`, `JourneySection`, etc.
        -   `CVPrintView`: Hidden in screen view, visible in print (`@media print`).

### 🎨 Styling & Theming Architecture

-   **Framework:** Tailwind CSS v4.
-   **Dark Mode:** Implemented via `next-themes` and a `ThemeProvider`.
    -   Uses `.dark` class on `<html>`.
    -   Tailwind detects this via `darkMode: ['class']`.
-   **Colors:** CSS Variables defined in `src/index.css`.
    -   `--background`, `--foreground`, `--primary`, etc.
-   **Utility Function:** `cn()` (from `src/lib/utils.ts`) is used everywhere to merge Tailwind classes safely (combines `clsx` and `tailwind-merge`).

### 📦 Key Libraries & Tools

-   **`astro-seo`**: Used in `src/layouts/BaseLayout.astro` for Open Graph/Twitter tags.
-   **`lucide-react`**: Icon set. Used dynamically in components (mapped from string names in `portfolio.ts`).
-   **`framer-motion`**: Used for complex animations (e.g., in `HeroSection`).
-   **`react-hook-form` + `zod`**: Contact form validation.


