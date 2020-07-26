import path from 'path'
const DEFAULT_OPTIONS = {};

export default function nuxtBootstrapVue (moduleOptions) {
  const options = { ...DEFAULT_OPTIONS, ...moduleOptions, ...this.options.themes }
  console.log(moduleOptions, this.options.themes);

  // Register `plugin.js` template
  this.nuxt.hook('ready', async (nuxt) => {
    // Your custom code here
    console.log('nuxt ready hook');
  })
  // this.plugin('ready', async (moduleContainer) => {
  //   console.log('nuxt plugin ready hook');
  // })
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      ...options,
      // Nuxt will replace `options.ua` with `123` when copying plugin to project
      ua: 123,

      // conditional parts with dev will be stripped from plugin code on production builds
      debug: this.options.dev
    }
  })
}
