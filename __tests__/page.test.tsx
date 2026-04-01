import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

test('Home page renders heading', () => {
  render(<Page />)
  expect(
    screen.getByRole('heading', { level: 1 })
  ).toBeDefined()
})

test('Home page renders Next.js logo', () => {
  render(<Page />)
  expect(screen.getAllByAltText('Next.js logo').length).toBeGreaterThanOrEqual(1)
})

test('Home page renders navigation links', () => {
  render(<Page />)
  expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2)
})
