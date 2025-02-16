import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
        <App />
      </BrowserRouter>
    )
    expect(
      screen.getByText('Initiative Management System')
    ).toBeInTheDocument()
  })
})
