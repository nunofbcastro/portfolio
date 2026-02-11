# Project Constraints (Always On)

## Deploy and Runtime

- Target deploy is GitHub Pages.
- Build output must remain static (`astro build`).
- No production dependency on server-side runtime.

## Astro/React Architecture

- Astro is the page framework.
- React is allowed for interactive islands.
- Hydrate only what is necessary on the client.
- Do not render the entire page as `client:only`.

## Performance

- Prefer pre-rendered HTML for SEO and faster first paint.
- Minimize client-side JavaScript when possible.
- Prefer semantic native links for simple navigation.

## Compatibility and Safety

- Keep `npm run build` passing.
- Avoid direct `window`/`document` access during module initialization.
- Use SSR-safe patterns in hooks and components.

## Quality

- Keep changes small and focused.
- Update documentation when behavior or architecture changes.
