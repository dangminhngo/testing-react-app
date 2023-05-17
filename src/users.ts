import axios from "axios"

class Users {
  static async all() {
    return axios.get('/users.json').then(resp => resp.data)
  }
}

export default Users
