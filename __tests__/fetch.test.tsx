import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react'

import Fetch from '../src/fetch'

const server = setupServer(
  rest.get('/greeting', (_, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)
  fireEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
