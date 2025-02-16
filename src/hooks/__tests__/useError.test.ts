import { renderHook, act } from '@testing-library/react'
import { useError } from '../useError'
import { AppError } from '../../utils/errors'  // Fixed relative path

describe('useError', () => {
  it('should handle errors', () => {
    const { result } = renderHook(() => useError())
    const error = new AppError('Test error')
    
    act(() => {
      result.current.handleError(error)
    })

    expect(result.current.error).toBe(error)
  })
})
