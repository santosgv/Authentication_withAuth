import axios from 'axios'

let api = 'http://127.0.0.1:8000/api/auth/'

const http = axios.create({
  baseURL: api
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('user-token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (err) => {
  return Promise.reject(err)
})

http.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401) {
    window.location = '#/home'
  }

  return Promise.reject(error)
})

export default http