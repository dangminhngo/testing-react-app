import { sum } from '../src/sum'

describe('sum module', () => {
  test('adds 1 + 2 equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('2 + 2 is 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})

describe('common matchers', () => {
  test('assign object', () => {
    const data: { [prop: string]: number } = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })

  test('adding positive numbers is not zero', () => {
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        expect(i + j).not.toBe(0)
      }
    }
  })

  test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })

  test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4)
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    // expect(value).toBe(0.3)
    expect(value).toBeCloseTo(0.3)
  })

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })

  test('but there is a "stop" in Cristoph', () => {
    expect('Cristoph').toMatch(/stop/)
  })

  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk']
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
  })

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!')
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/)
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/)
  })
})
