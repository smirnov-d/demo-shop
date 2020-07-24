export const actions = {
  // fired once on app init on the server side
  //todo: check use-cases
  // Nuxt Auth External API (JWT)
  // can only be placed on the main module
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    console.log('server init');
    // if (req.session && req.session.authUser) {
    //   commit('setToken', req.session.authUser)
    // }
    await dispatch('products/fetchData');

    if (0) {
      commit('auth/setToken', 'sadasdasdasdasd')
    }
  },
}
