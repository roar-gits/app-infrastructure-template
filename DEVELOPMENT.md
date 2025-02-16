# Template Development Guide

## Getting Started

1. **Create Your Project**
```bash
git clone --depth 1 https://github.com/YOUR_USERNAME/react-typescript-template.git your-project-name
cd your-project-name
rm -rf .git
git init
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development**
```bash
npm run dev
```

## Template Structure

```
src/
├── app/            # Application root
├── core/           # Business logic layer
├── data/          # Data management layer
├── ui/            # Presentation layer
├── hooks/         # Custom React hooks
├── test/          # Testing utilities
└── utils/         # Shared utilities
```

## Customizing the Template

### 1. Update Configuration

- Modify package.json
- Configure environment variables
- Adjust TypeScript settings
- Update ESLint rules

### 2. Clean Up Example Code

- Remove example components
- Update model definitions
- Modify API configuration
- Adjust routing setup

### 3. Add Your Features

- Place components in appropriate layers
- Follow testing patterns
- Maintain documentation

## Common Issues & Solutions

### TypeScript Language Service Crashes

If you see: "The JS/TS language service crashed..."

1. Clear TypeScript cache:
```bash
rm -rf node_modules/.cache/typescript
```

2. Rebuild project:
```bash
npm run build
```

3. If issues persist:
   - Restart VS Code
   - Clear VS Code cache: CMD+SHIFT+P -> "Developer: Reload Window"
   - Update TypeScript: `npm install typescript@latest`

### Import Path Issues

If you see path resolution errors:

1. Check tsconfig.json paths match vite.config.ts aliases
2. Ensure all imports use correct aliases:
   - @core/* for core layer
   - @data/* for data layer
   - @ui/* for UI layer
   - @utils/* for utilities

### Testing Issues

If tests fail to resolve imports:

1. Ensure vitest.config.ts has correct aliases
2. Check test file imports use correct paths
3. Verify @testing-library/jest-dom is imported in setup

## Code Style

- Use TypeScript strict mode
- Follow ESLint rules
- Document public APIs
- Keep components focused
- Use role-based architecture

## Version Control

- Commit messages follow conventional commits
- Branch from main for features
- Use pull requests for changes

## Deployment

1. Build project:
```bash
npm run build
```

2. Preview build:
```bash
npm run preview
```

## Environment Variables

Required in .env:
```
VITE_API_URL=http://your-api-url
```

## Updating Dependencies

1. Check for updates:
```bash
npm outdated
```

2. Update packages:
```bash
npm update
```

3. Test after updates:
```bash
npm test
```

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
