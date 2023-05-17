import axios from 'axios'
import Users from '../src/users'

jest.mock('axios')
const mockAxios = jest.mocked(axios)

test('should fetch users', async () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }
  mockAxios.get.mockResolvedValue(resp)

  return Users.all().then(data => expect(data).toEqual(users))
})

