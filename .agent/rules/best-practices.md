# Tech Stack Best Practices

This file outlines the coding standards and best practices for the specific technologies used in this project.

## Astro
**Globs:** `**/*.{ts,tsx,js,jsx}`
- Utilize Astro's partial hydration to optimize loading times.
- Leverage Astro components for better reusability and organization.
- Use Markdown and MDX for content management to enhance SEO.

## React
**Globs:** `**/*.{ts,tsx,js,jsx}`
- Use functional components and hooks for cleaner code.
- Implement React's Context API for global state management.
- Optimize performance with `React.memo` and `useCallback`.

## React Query
**Globs:** `**/*.{ts,tsx,js,jsx}`
- Use query keys to uniquely identify queries for better cache management.
- Implement pagination and infinite queries for large datasets.
- Utilize the `useMutation` hook for handling form submissions and updates.

## React Hook Form
**Globs:** `**/*.{ts,tsx,js,jsx}`
- Use the `Controller` component for integrating with UI libraries.
- Implement validation with Zod or Yup for type-safe forms.
- Leverage `useForm` for managing form state efficiently.

## Tailwind CSS
**Globs:** `**/*.{ts,tsx,css}`
- Use utility-first classes for rapid UI development.
- Create custom themes with Tailwind's configuration for consistency.
- Utilize `@apply` for reusable styles in your CSS files.

## Zod
**Globs:** `**/*.{ts,tsx}`
- Define schemas for form validation to ensure type safety.
- Use Zod's built-in methods for complex validations.
- Leverage `refine` for custom validation logic.

## Radix UI
**Globs:** `**/*.{ts,tsx}`
- Use Radix components for accessible and customizable UI elements.
- Follow the documentation for proper usage of state management.
- Ensure to manage focus and keyboard navigation for accessibility.

## TypeScript
**Globs:** `**/*.{ts,tsx}`
- Use strict null checks to avoid runtime errors.
- Prefer interfaces over types for object shapes.
- Implement type guards and assertions for better type safety.
