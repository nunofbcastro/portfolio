# Personal Portfolio

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and experience as a Software Engineer.

## Live Demo

You can view the live version of the portfolio here: [https://nunofbcastro.github.io/portfolio/](https://nunofbcastro.github.io/portfolio/)

## Project Info

This project uses Astro with static generation for deployment on GitHub Pages.

- No server runtime is required.
- The site is built at deploy time and served as static files.
- Interactive parts are hydrated on the client.

## Project Structure

Main folders and files:

- `src/pages/index.astro`: Astro page entrypoint
- `src/react/App.tsx`: React app shell used by the page
- `src/components/`: reusable UI and section components
- `src/data/portfolio.ts`: portfolio content (texts, projects, timeline, contact, etc.)
- `src/hooks/`: custom React hooks
- `src/lib/`: shared utilities
- `src/index.css`: global styles
- `src/assets/`: local assets imported in code
- `public/`: static files copied as-is (favicon, robots, etc.)
- `.agent/rules/`: always-on agent constraints
- `.agent/workflows/`: user-triggered automation flows
- `.agent/skills/`: agent-selectable capabilities
- `astro.config.mjs`: Astro configuration
- `package.json`: scripts and dependencies

## How to Edit This Code

You can edit this code using your preferred IDE or GitHub Codespaces.

### Using Your Preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository.
git clone https://github.com/nunofbcastro/portfolio.git

# Step 2: Navigate to the project directory.
cd portfolio

# Step 3 (optional): If you're using nvm, switch to the correct Node.js version.
nvm use

# Step 4: Install the necessary dependencies.
npm i

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Using GitHub Codespaces

- Navigate to the main page of this repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Astro (static build / GitHub Pages friendly)
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Vite
