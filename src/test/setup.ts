/**
 * Project Structure Reference:
 * /src/test/setup.ts # [current] Test configuration
 */

import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { QueryClient } from '@tanstack/react-query'

declare global {
  var queryClient: QueryClient
}

// Setup global mocks
global.queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false }
  }
})

// Mock environment variables
vi.mock('@core/constants', () => ({
  ENV: {
    IS_DEV: true,
    API_URL: 'http://test.api'
  },
  STORAGE_KEYS: {
    AUTH_TOKEN: 'test_auth_token'
  }
}))

beforeEach(() => {
  vi.clearAllMocks()
  localStorage.clear()
  sessionStorage.clear()
})
