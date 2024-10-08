import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

// ? Add a request interceptor

export default http
