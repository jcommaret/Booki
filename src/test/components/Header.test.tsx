import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from '../../components/header'

describe('Header Component', () => {
  it('rend le header avec le rôle banner', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('affiche le logo', () => {
    render(<Header />)
    expect(screen.getByAltText(/logo booki/i)).toBeInTheDocument()
  })

  it('contient les liens de navigation', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /hébergements/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /activités/i })).toBeInTheDocument()
  })
})
