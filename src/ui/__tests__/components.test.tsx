import { render, screen } from '@testing-library/react'
import { Button, Card } from '../components'

describe('UI Components', () => {
  describe('Button', () => {
    it('renders with primary variant by default', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByText('Click me')).toHaveClass('bg-blue-500')
    })

    it('renders with secondary variant', () => {
      render(<Button variant="secondary">Click me</Button>)
      expect(screen.getByText('Click me')).toHaveClass('bg-gray-200')
    })
  })

  describe('Card', () => {
    it('renders children with default styling', () => {
      render(<Card>Content</Card>)
      const card = screen.getByText('Content')
      expect(card.parentElement).toHaveClass('bg-white', 'shadow', 'rounded-lg')
    })

    it('accepts additional className', () => {
      render(<Card className="extra-class">Content</Card>)
      const card = screen.getByText('Content')
      expect(card.parentElement).toHaveClass('extra-class')
    })
  })
})
