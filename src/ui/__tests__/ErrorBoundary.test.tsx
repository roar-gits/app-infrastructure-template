import { render } from '@testing-library/react'
import { ErrorBoundary } from '../ErrorBoundary'

describe('ErrorBoundary', () => {
  const ThrowError = () => {
    throw new Error('Test error')
  }

  it('catches and handles errors', () => {
    const handleError = vi.fn()
    
    render(
      <ErrorBoundary onError={handleError}>
        <ThrowError />
      </ErrorBoundary>
    )

    expect(handleError).toHaveBeenCalled()
  })
})
