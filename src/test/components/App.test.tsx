import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../../App'

describe('App Component', () => {
  it('rend le header', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('rend le main', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('rend le footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
