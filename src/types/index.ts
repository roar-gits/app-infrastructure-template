import type { User, Initiative } from '@core/models'

// Common type definitions
export type Status = 'success' | 'error' | 'loading' | 'idle'
export type Theme = 'light' | 'dark'

// Re-export core types
export type { User, Initiative }
