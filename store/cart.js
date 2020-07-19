export const state = () => ({
  cart: []
});

export const mutations = {
  add (state, product) {
    state.cart.push(product);
    console.log(state.cart);
  },
  remove (state, productId) {
    state.cart = state.cart.filter(({id}) => id !== productId);
    console.log(state.cart);
  }
};

export const actions = {
  addToCart ({commit}, product) {
    commit('add', product);
  },
  removeFromCart ({commit}, productId) {
    commit('remove', productId);
  },
};

export const getters = {
  inCartIDs: ({cart}) => cart.map(({id}) => id),
};
