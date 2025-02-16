# App Infrastructure Base

My personal React application base with enterprise-grade architecture.

## Quick Start

1. **Copy Base:**
```bash
cp -r /Users/imac/Desktop/Apps/Initiative\ Management System/my-react-app/ ~/Desktop/NEW_PROJECT_NAME
cd ~/Desktop/NEW_PROJECT_NAME
```

2. **Setup:**
```bash
rm -rf .git
git init
cp .env.example .env
npm install
```

3. **Update Identity:**
- Edit package.json
- Edit .env
- Update index.html

4. **Verify:**
```bash
npm test
npm run dev
```

## Key Features

- TypeScript with strict mode
- Role-based architecture
- Comprehensive testing
- Error boundaries
- Path aliasing
- Code splitting

## Stack

- React 18 + TypeScript
- Vite + Vitest
- TailwindCSS
- React Query + Zustand
- React Router

## Documentation
See [Project Documentation](./docs/DOCS.md) for:
- Architecture & Development Patterns
- Workflow & Best Practices
- Common Issues & Solutions
- Feature Development Guide

## Project Structure
```
src/
├── app/          # Application root
├── core/         # Business logic
├── data/         # API & state
├── hooks/        # Custom hooks
├── pages/        # Route components
├── test/         # Test utilities
├── types/        # Type definitions
├── ui/           # Components
└── utils/        # Shared utilities
```

## Commands

```bash
npm run dev        # Development
npm run build      # Production build
npm run test       # Run tests
npm run lint       # Check code
```
