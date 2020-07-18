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
  async login ({commit}, {email, password}) {
    try {
      const {data} = await this.$api.post('https://reqres.in/api/login', {
        email,
        password,
      });
      commit('setToken', data.token);
      this.$api.setToken(data.token, 'Bearer');
      localStorage.setItem('token', data.token)
    } catch (e) {
      console.log(e);
    }
  },
  logout({commit}) {
    this.$axios.setToken(false);
    commit('setToken', null);
    localStorage.removeItem('token');
    window.location.reload();
  },
};

export const getters = {
  isLoggedIn: (state) => !!state.token
};
