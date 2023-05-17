import { fetchData } from '../src/fetch-data'

test('the data is peanut butter with promise', async () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter')
  })
})

test('the data is peanut butter with async function', async () => {
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

test('the fetch data fails with an error', async () => {
  expect.assertions(1)
  try {
    await fetchData(true)
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).toMatch(/failed/)
    }
  }
})

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  await expect(fetchData(true)).rejects.toThrow(/failed/)
})
