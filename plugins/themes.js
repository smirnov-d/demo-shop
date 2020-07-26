// unused version!!! can't pass dynamic params. move to modules for binding params

import Vue from 'vue'

export default ({req, app}, inject) => {
  console.log(process.server, process.env.MY_TEST);
  const cookies = process.server ? req.headers.cookie : document.cookie
  const find = 'mytesttheme';

  const matches = cookies.match(new RegExp(
    "(?:^|; )" + find.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  const res = matches ? decodeURIComponent(matches[1]) : '';

  inject('theme', {
    set(val) {
      if (process.server) {
        req.headers.cookie = `mytesttheme=${val}`
      } else {
        document.cookie = `mytesttheme=${val}`
      }
      app.$theme.res.res = (val === 'auto') ? getSystemTheme() : val;
    },
    res: Vue.observable({res: res})
  })
}

function getSystemTheme() {
  const knownThemes = ['light', 'dark'];
  return knownThemes.find((theme) => window.matchMedia(`(prefers-color-scheme: ${theme})`).matches);
}
