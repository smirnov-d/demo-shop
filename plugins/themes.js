import Vue from 'vue'

export default ({ req, isServer, app}, inject) => {
    const cookies = process.server ? req.headers.cookie : document.cookie
    const find = 'mytesttheme';

    const matches = cookies.match(new RegExp(
      "(?:^|; )" + find.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    const res = matches ? decodeURIComponent(matches[1]) : '';

  inject('theme', {
      set(val) {
          if(process.server) {
              req.headers.cookie = `mytesttheme=${val}`
          } else {
              document.cookie = `mytesttheme=${val}`
          }
          app.$theme.res.res = val
      },
      res: Vue.observable({ res: res })
  })
}
