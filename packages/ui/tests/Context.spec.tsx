import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Context } from '../src/Context'

describe('Context API', () => {
  test("Context & it's value", () => {
    render(<Context.Provider value={null}></Context.Provider>)
    expect(Context).toBeDefined()
  })
})
