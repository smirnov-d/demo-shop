// todo: setToken(). check for server side
// todo: API_HOST API_PORT for auto config axios
export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // API_HOST API_PORT can auto setup axios
  // Set baseURL to something different
  // api.setBaseURL(process.env.API_URL)

  // interceptors
  api.onRequest(config => {
    console.log('Making request to ', config.url)
  })

  api.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  api.getCategories = () => api.$get('/categories')
  api.getProducts = () => api.$get('/products')
  api.getProductsByCategory = (catId) => api.$get(`/products?categoryId=${catId}`)

  // Inject to context as $api
  inject('api', api)
}
