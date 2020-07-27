import Vue from 'vue'

const knownThemes = [
  {
    name: 'Light',
    css: 'light',
    cssPath: [],
  },
  {
    name: 'Dark',
    css: 'dark',
    cssPath: [],
  },
]

export default ({req, app}, inject) => {
  console.log('from plugin', process.server, process.env.MY_TEST);
  const options = <%= serialize(options) %>

  const cookies = process.server ? req.headers.cookie : document.cookie
  const find = options.cookieName || 'testtheme';
  // const find = '<%= options.cookieName %>' || 'testtheme';
  console.log('cookieName', find);

  const matches = cookies.match(new RegExp(
    "(?:^|; )" + find.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  const res = matches ? decodeURIComponent(matches[1]) : '';


  inject('theme', {
    themes: [
      ...knownThemes,
      ...options.themes,
    ],
    set(val) {
      if (process.server) {
        req.headers.cookie = `${find}=${val}`;
      } else {
        document.cookie = `${find}=${val}`;
      }
      console.log('test', this.res.res);
      this.res.res = (val === 'auto') ? getSystemTheme() : val;
    },
    res: Vue.observable({res: res})
  })
}

function getSystemTheme() {
  return knownThemes.find(({css}) => window.matchMedia(`(prefers-color-scheme: ${css})`).matches).css;
}
