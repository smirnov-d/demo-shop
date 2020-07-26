export const actions = {
  // fired once on app init on the server side
  // Nuxt Auth External API (JWT)
  // can only be placed on the main module
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    console.log('server init');
    // if (req.session && req.session.authUser) {
    //   commit('setToken', req.session.authUser)
    // }
    if (req.headers && req.headers.cookie) {
      const cookies = req.headers.cookie
      const find = 'token';

      const matches = cookies.match(new RegExp(
        "(?:^|; )" + find.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      if(matches) {
        commit('auth/setToken', decodeURIComponent(matches[1]))
        console.log('auth/setToken', decodeURIComponent(matches[1]));
      }
    }
    // if (req.session && req.session.token) {
    //   commit('auth/setToken', req.session.token)
    //   console.log('auth/setToken', req.session.token);
    // }

    await dispatch('products/fetchData');

    // if (0) {
    //
    // }
  },
}
