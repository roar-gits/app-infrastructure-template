/**
 * Project Structure Reference:
 * /src
 * ├── core/           # Business logic layer
 * │   ├── models.ts   # [current] Data structures & types
 * │   ├── services.ts # Business operations
 * │   └── constants.ts # Application constants
 * ├── data/          # Data management layer
 * │   ├── api.ts     # External API communication
 * │   ├── store.ts   # State management
 * │   └── transforms.ts # Data transformations
 * ├── ui/            # Presentation layer
 * │   ├── components.tsx # Reusable components
 * │   ├── layouts.tsx   # Layout components
 * │   └── styles.ts     # Styling definitions
 * ├── hooks/         # Custom React hooks
 * ├── test/          # Testing utilities
 * ├── types/         # Type definitions
 * └── utils/         # Shared utilities
 */

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Initiative {
    id: string;
    title: string;
    description: string;
    status: 'planned' | 'in-progress' | 'completed';
    startDate: Date;
    endDate?: Date;
}
