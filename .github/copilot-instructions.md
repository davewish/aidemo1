# React Project Setup Instructions

## Project Overview
This is a React 19 project with TypeScript, built with Vite for fast development and optimized builds.

## Technology Stack
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Modern build tool
- **ESLint** - Code quality
- **CSS** - Styling

## Available Scripts

- `npm run dev` - Start development server on http://localhost:5173/
- `npm run build` - Build for production
- `npm run lint` - Check code quality with ESLint
- `npm run preview` - Preview production build locally

## Project Structure
```
src/
├── App.tsx          - Main application component
├── App.css          - Application styles
├── main.tsx         - Entry point
├── vite-env.d.ts    - Vite type definitions
└── components/      - Reusable React components

public/             - Static assets
dist/               - Production build output (created after npm run build)
```

## Development Workflow
1. Run `npm run dev` to start the development server
2. Edit files in `src/` directory
3. Changes will hot-reload automatically
4. Use `npm run lint` to check code quality
5. Run `npm run build` when ready for production

## Getting Started
The project is ready to use. Start the dev server with `npm run dev` and open http://localhost:5173/ in your browser.

## Tips
- Use TypeScript for type safety
- Create reusable components in the `src/components/` directory
- Follow ESLint rules for consistent code style
- Vite provides instant HMR (Hot Module Replacement) during development
