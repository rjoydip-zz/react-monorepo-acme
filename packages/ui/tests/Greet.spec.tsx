import { render, screen } from '@testing-library/react'
import { describe, expect, test, beforeEach } from 'vitest'
import { Greet } from '../src/Greet'

describe('<Greet />', () => {
  beforeEach(() => {
    render(<Greet />)
  })

  test('Greet Component Text', () => {
    expect(screen.getByText(/Greet/i)).toBeDefined()
  })
})
