# Template Architecture

## Overview

This template implements a role-based architecture optimized for scalable React applications. Each layer has specific responsibilities and constraints.

## Directory Structure

```
src/
├── app/            # Application root
│   ├── App.tsx     # Main component
│   └── __tests__/  # App-level tests
├── core/           # Business logic
│   ├── models.ts   # Data structures
│   └── services.ts # Business operations
├── data/          # Data management
│   ├── api.ts     # API communication
│   └── transforms.ts # Data transforms
├── ui/            # Presentation
│   ├── components/ # Reusable components
│   └── layouts/    # Layout components
└── [other dirs]   # Additional layers
```

## Using the Template

### 1. Layer Organization

Place your code in the appropriate layer:
- Business logic → core/
- Data fetching → data/
- UI components → ui/

### 2. Testing Strategy

Follow the testing patterns:
```typescript
// Component test example
describe('Component', () => {
  it('should render', () => {
    render(<Component />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### 3. Adding Features

1. Define models in core/
2. Add API endpoints in data/
3. Create UI components
4. Write tests
