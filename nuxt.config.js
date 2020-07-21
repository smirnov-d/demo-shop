//https://habr.com/ru/post/490496/
//trailingSlash issue
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  // },
  //mode: 'universal', // 'universal' (default) / 'spa'
  // 2 bundles for old/new browsers
  modern: 'client',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
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
  //Разбиваем на независимые чанки всё приложение.
  splitChunks: {
    layouts: true,
    pages: true,
    commons: true
  },
  optimization: {
    minimize: true
    // minimize: !isDev
  },
  extractCSS: {
    ignoreOrder: true
  },
  //По умолчанию Babel старается трансплитирировать весь код проекта, но иногда он не делает это с некоторыми зависимостями и их нужно задать явно.
  transpile: ['vue-lazy-hydration'], //transpile: ['vue-lazy-hydration', 'intersection-observer'],
  // cache invalidation
  filenames: {
    app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
    css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
  },
  router: {
    prefetchLinks: false
  },
  css: [
    'normalize.css',
    'assets/style.css',
  ],
  loading: {
    color: '#0d6efd',
    height: '5px'
  },
  modules: [
    '@nuxtjs/axios',
    // persisted data example
    // todo: check versions
    // ['nuxt-vuex-localstorage', {
    //   ...(isDev && {
    //     mode: 'debug'
    //   }),
    //   // vuex modules names/ add version: '0.0.1' prop to module state for user cache invalidation
    //   localStorage: ['categories', 'products', 'cart', 'auth'] //  If not entered, “localStorage” is the default value
    // }],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en-US.js',
          },
          {
            code: 'es',
            name: 'Español',
            iso: 'es-ES',
            file: 'es-ES.js'
            // isCatchallLocale: true
          },
        ],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          // messages: {
          //
          // }
        },
        strategy: 'no_prefix',
        // detectBrowserLanguage: false,
        // detectBrowserLanguage: {
        //   useCookie: false
        // },
        seo: false,
        // async
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],
  plugins: [
    // only client side usage demo example (dependency is not installed)
    // { src: '~/plugins/datepicker.js', ssr: false },
    '~/services/ApiService.js',
  ],
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // todo: g-zip сжатие/ если это делает nginx - можно отключить (аналогично etag)
    // compressor: false,
    resourceHints: false
    // etag: false,
    // static: {
    //  etag: false
    // }
  },
}
