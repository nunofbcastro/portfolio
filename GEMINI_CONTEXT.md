# Gemini CLI Project Context

This document provides context for the Gemini CLI to ensure consistency and adherence to project standards.

## 1. Project Overview

- **Project:** Personal Portfolio Website
- **Objective:** To showcase skills, experience, and projects in a modern, responsive, and bilingual (Portuguese & English) web application.

## 2. Tech Stack

- **Framework:** React with Vite
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## 3. Key Architectural Patterns

- **Centralized Data:** All text content, project details, experience, etc., is managed in a single source of truth: `src/data/portfolio.ts`. Components should be refactored to consume data from this file rather than having hardcoded content.
- **Bilingual Support:** The data in `portfolio.ts` is structured with `pt` and `en` objects to support both Portuguese and English. Components receive a `language` prop to render the correct text.
- **Component Structure:**
    - Section components (e.g., `HeroSection.tsx`, `AboutSection.tsx`) are located in `src/components/`.
    - Reusable UI elements, primarily from shadcn/ui, are in `src/components/ui/`.

## 4. Commit Message Convention

- All commits MUST follow the [Conventional Commits](https://www.conventionalcommits.org) standard.
- Commits should be written in **English**.
- **Format:** `<type>(<scope>): <subject>`
    - **Example Type:** `feat`, `fix`, `refactor`, `docs`, `style`, `test`
    - **Example Scope:** `components`, `data`, `ui`, `deps`
    - **Example:** `feat(components): add new project section`

## 5. General Guidelines

- **Responsiveness:** All components must be fully responsive. The primary mobile breakpoint is `1150px`.
- **Code Style:** Follow existing code style. Use Prettier for formatting if available, otherwise maintain the established style.
