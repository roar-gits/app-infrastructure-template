import { render, screen } from '@testing-library/react'
import { InitiativesPage } from '../index'

describe('InitiativesPage', () => {
  it('renders initiatives heading', () => {
    render(<InitiativesPage />)
    expect(screen.getByText('Initiatives')).toBeInTheDocument()
  })
})
