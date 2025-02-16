/**
 * Project Structure Reference:
 * /src
 * ├── core/          # Business logic layer
 * ├── data/          # Data management layer
 * └── ui/            # Presentation layer
 *     ├── components.tsx # [current] Reusable UI components
 *     ├── layouts.tsx
 *     └── styles.ts
 */

import { PropsWithChildren } from 'react';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}: PropsWithChildren<{ 
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}>) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === 'primary' 
        ? 'bg-blue-500 text-white hover:bg-blue-600' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {children}
  </button>
)

export const Card = ({ children, className = '' }: PropsWithChildren<{ className?: string }>) => (
  <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
    {children}
  </div>
)
