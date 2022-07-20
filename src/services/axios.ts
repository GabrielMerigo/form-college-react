import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjNhMjZlMTcxMTYzYjY3YTQwOTEyZCIsImlhdCI6MTY1NTkzOTcxNn0.Yy5W4MO9-ZHXceshwKuxJIvsa4oDD1HwjRaCnsaAA3k'

export function getApiClient () {
  const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { Authorization: `Bearer ${token}`}
  })

  return api
}

export const api = getApiClient()