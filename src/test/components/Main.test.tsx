import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Main from '../../components/Main'

describe('Main Component', () => {
  it('rend le main avec le rôle main', () => {
    render(<Main />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('affiche les sections avec des titres de niveau 2', () => {
    render(<Main />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.length).toBeGreaterThanOrEqual(3)
  })
})
