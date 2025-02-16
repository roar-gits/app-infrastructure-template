# App Infrastructure Template

A production-ready application infrastructure template with enterprise-grade architecture, featuring:
- Role-based layered architecture
- TypeScript best practices
- Comprehensive testing setup
- Built-in error handling
- Path aliasing and code splitting

## Features

- Role-based layered architecture
- Type-safe development with TypeScript
- Comprehensive testing setup
- Error boundary implementation
- Responsive layout system
- Path aliasing
- Code splitting & lazy loading

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Router for navigation
- React Query for data fetching
- Jest and Testing Library for testing

## Quick Start

1. Create your project:
```bash
# Clone the template
git clone --depth 1 https://github.com/YOUR_USERNAME/app-infrastructure-template.git your-project-name

# Navigate to project and reinitialize git
cd your-project-name
rm -rf .git
git init
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run dev
```

## Documentation

- [Development Guide](./DEVELOPMENT.md) - Setup and development workflow
- [Architecture](./docs/ARCHITECTURE.md) - Project structure and design decisions

## Customizing the Template

1. Update package.json:
   - Change name, description, version
   - Add/remove dependencies as needed

2. Configure environment:
   - Copy .env.example to .env
   - Update variables for your project

3. Clean up example code:
   - Remove example components in src/ui
   - Update models in src/core/models.ts
   - Modify API setup in src/data/api.ts

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
