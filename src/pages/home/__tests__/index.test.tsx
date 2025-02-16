import { render, screen } from '@testing-library/react'
import { HomePage } from '../index'

describe('HomePage', () => {
  it('renders welcome message', () => {
    render(<HomePage />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText(/manage your initiatives/i)).toBeInTheDocument()
  })
})
