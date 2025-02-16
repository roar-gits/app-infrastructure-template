# Application Documentation

## 1. Quick Reference

### Commands
```bash
npm run dev        # Development server
npm run build     # Production build
npm test         # Run tests
npm run lint     # Check code
```

## 1. Project Structure
```
src/
├── app/          # Application root
│   ├── App.tsx
│   └── __tests__/
├── core/         # Business logic
│   ├── models.ts
│   ├── services.ts
│   └── __tests__/
├── data/         # API & state
│   ├── api.ts
│   ├── transforms.ts
│   └── __tests__/
├── pages/        # Route components
│   ├── home/
│   └── initiatives/
├── test/         # Test configuration
│   ├── setup.ts
│   └── utils.tsx
├── types/        # Type definitions
├── ui/          # Components
│   ├── components.tsx
│   ├── layouts.tsx
│   └── __tests__/
└── utils/        # Shared utilities
```

## 2. Architecture & Patterns

### Core Patterns
```typescript
// 1. Define Model (core/models.ts)
interface Model {
  id: string;
  // properties...
}

// 2. Add Service (core/services.ts)
const ModelService = {
  validate: (data: Model) => {...}
}

// 3. API Layer (data/api.ts)
const api = {
  model: {
    getAll: () => axios.get<Model[]>('/models')
  }
}

// 4. UI Component (ui/components/Model.tsx)
const ModelList = () => {
  const { data } = useQuery(['models'], api.model.getAll)
  return <div>{/* render data */}</div>
}
```

### Error Handling
```typescript
// Global (app/App.tsx)
<ErrorBoundary onError={handleError}>
  <App />
</ErrorBoundary>

// API Errors (data/api.ts)
throw new AppError(response.error)

// Component (ui/components/Example.tsx)
const { error, handleError } = useError()
```

## 3. Development Workflow

### Adding New Features

1. **Data Model:**
   - Add interface to `core/models.ts`
   - Create service in `core/services.ts`
   - Add API endpoints in `data/api.ts`

2. **Components:**
   - Create component in `ui/components/`
   - Add tests in `__tests__` directory
   - Update routes if needed

3. **Testing:**
   ```typescript
   describe('Component', () => {
     it('should work', () => {
       render(<Component />)
       expect(screen.getByRole('button')).toBeInTheDocument()
     })
   })
   ```

## 2. Testing Strategy

### Setup
Tests are configured in `src/test/`:
- `setup.ts`: Global test configuration
- `utils.tsx`: Testing utilities and providers

### Writing Tests
Co-locate tests with source code:
```
component/
├── index.tsx      # Component code
└── __tests__/     # Component tests
```

## 4. Common Issues

### Path Aliases
```typescript
// tsconfig.json
{
  "paths": {
    "@core/*": ["src/core/*"],
    "@ui/*": ["src/ui/*"]
  }
}

// Usage
import { Something } from '@core/models'
```

### TypeScript Issues
1. Clear cache: `rm -rf node_modules/.cache/typescript`
2. Rebuild: `npm run build`
3. Restart VS Code if needed

### Testing Problems
1. Check path aliases in `vitest.config.ts`
2. Verify `@testing-library/jest-dom` setup
3. Use correct import paths

## 5. Best Practices

1. **Code Organization**
   - One component per file
   - Co-locate tests with code
   - Keep components focused

2. **State Management**
   - React Query for API data
   - Local state for UI
   - Zustand for global state

3. **Testing**
   - Unit tests for core/
   - Integration for data/
   - Component tests for ui/

4. **Performance**
   - Lazy load routes
   - Memoize expensive computations
   - Use proper keys for lists
