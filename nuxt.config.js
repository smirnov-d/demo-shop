module.exports = {
  //mode: 'universal', // todo: check default
  head: {
    titleTemplate: '%s - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Мета описание' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css' },
    ]
  },
  css: [
    'normalize.css',
    'assets/style.css',
  ],
  loading: {
    color: 'yellow',
    height: '5px'
  },
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/services/ApiService.js',
  ],
}
