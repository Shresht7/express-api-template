import { add } from '.'
import { expect, test } from 'vitest'

test('should add two numbers', () => {
    expect(add(1, 3)).toBe(4)
})
