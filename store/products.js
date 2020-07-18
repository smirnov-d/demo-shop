export const state = () => ({
  products: []
});

export const mutations = {
  add (state, products) {
    state.products = products;
  }
};

export const actions = {
  async fetchData ({commit}) {
    try {
      const products = await this.$api.getProducts();
      commit('add', products);
    } catch (e) {
      console.log(e);
    }
  },
};

export const getters = {
  getProductById: ({products}) => (prodId) => products.find(({id}) => id == prodId),
  getProductsByCategory: (state) => (catId) => state.products.filter(({categoryId}) => categoryId == catId),
};
