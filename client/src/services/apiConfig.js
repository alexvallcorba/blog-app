import axios from 'axios';


let api_URL
const api_URLS = {
  production: 'https://group-project-blog-app.herokuapp.com',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  api_URL = api_URLS.development
} else {
  api_URL = api_URLS.production
}

const api = axios.create({
  baseURL: api_URL
})

export default api;