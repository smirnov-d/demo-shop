export const state = () => ({
  categories: []
});

export const mutations = {
  add (state, categories) {
    state.categories = categories;
  }
};

export const actions = {
  async fetchData ({commit}) {
    try {
      const categories = await this.$api.getCategories();
      commit('add', categories);
    } catch (e) {
      console.log(e);
    }
  },
};
