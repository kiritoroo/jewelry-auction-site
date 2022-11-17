import axios from "axios"

const Instance = axios.create({
  baseURL: '/api',
  headers: {
    'Cache-Control': 'no-cache'
  }
})

export default Instance