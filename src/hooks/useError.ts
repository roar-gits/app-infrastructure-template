/**
 * Project Structure Reference:
 * /src
 * └── hooks/         # Custom hooks
 *     └── useError.ts  # [current] Error handling hook
 */

import { useState } from 'react'
import { AppError } from '../utils/errors'  // Fix relative path

export function useError() {
  const [error, setError] = useState<AppError | null>(null)

  const handleError = (error: AppError) => {
    setError(error)
  }

  return { error, handleError }
}
