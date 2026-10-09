import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from '../../components/footer'

describe('Footer Component', () => {
  it('rend le footer avec le rôle contentinfo', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
