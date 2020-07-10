// import axios from 'axios'
// const baseUrl = '/api/login'

const login = async credentials => {
  console.log(credentials)
  if (credentials.password === 'wrong') {
    return await Promise.reject({
      error: 'invalid username or password'
    })
  }
  return await Promise.resolve({
    token: 'token',
    username: 'username',
    name: 'name'
  })
}

export default { login }