export const actions = {
  // fired once on app init on the server side
  //todo: check use-cases
  // Nuxt Auth External API (JWT)
  // can only be placed on the main module
  nuxtServerInit ({ commit }, { req }) {
    console.log('server init');
    // if (req.session && req.session.authUser) {
    //   commit('setToken', req.session.authUser)
    // }
    if (0) {
      commit('auth/setToken', 'sadasdasdasdasd')
    }
  },
}