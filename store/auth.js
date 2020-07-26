export const state = () => ({
  token: null
});

export const mutations = {
  setToken (state, token) {
    state.token = token;
    console.log('mutation', state.token);
  }
};

export const actions = {
  // https://ru.nuxtjs.org/examples/auth-routes/
  // https://github.com/nuxt/nuxt.js/blob/dev/examples/auth-routes/api/index.js
  // https://github.com/SohoHouse/nuxt-oauth
  /* todo: Don’t rely on localStorage because the server does not know that it exists.*/
  async login ({commit}, {email, password}) {
    try {
      const {data} = await this.$api.post('https://reqres.in/api/login', {
        email,
        password,
      });
      commit('setToken', data.token);
      this.$api.setToken(data.token, 'Bearer');
      // localStorage.setItem('token', data.token)
      document.cookie=`token=${data.token}`
    } catch (e) {
      console.log(e);
    }
  },
  logout({commit}) {
    this.$axios.setToken(false);
    commit('setToken', null);
    // localStorage.removeItem('token');
    document.cookie = "token=''; max-age=0";
    window.location.reload();
  },
};

export const getters = {
  isLoggedIn: (state) => !!state.token
  // isLoggedIn: (state) => !!localStorage.getItem('token')
};
