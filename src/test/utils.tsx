/**
 * Project Structure Reference:
 * /src
 * ├── test/         # Test configuration
 * │   ├── setup.ts  # Test initialization
 * │   └── utils.ts  # [current] Test utilities
 * ├── providers/    # Application providers
 * └── ui/          # UI components
 */

import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function renderWithProviders(ui: React.ReactElement) {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </QueryClientProvider>
  )
}
