import Vue from "vue";
import Vuex from "vuex";
import products from "./products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    products,
    shoppingCart: [],
  },
  getters: {
    searchProducts(state) {
      if (state.search === "") {
        return state.products;
      } else {
        return state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(state.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(state.search.toLowerCase()) ||
            product.category.toLowerCase().includes(state.search.toLowerCase())
        );
      }
    },
  },
  mutations: {
    SET_SEARCH(state, newSearch) {
      state.search = newSearch;
    },
    INCREMENT_PRODUCT_QUIANTITY(state, productAlreadyInShoppingCart) {
      productAlreadyInShoppingCart.quantity++;
    },
    ADD_PRODUCT_TO_SHOPPING_CART(state, product) {
      state.shoppingCart.push({ ...product, quantity: 1 });
    },
  },
  actions: {
    setSearch({ commit }, newSearch) {
      commit("SET_SEARCH", newSearch);
    },
    addProductToShoppingCart({ commit }, product) {
      const productAlreadyInShoppingCart = commit.state.shoppingCart.find(
        (productAlreadyInShoppingCart) =>
          (product.name && product.description) ===
          (productAlreadyInShoppingCart.name &&
            productAlreadyInShoppingCart.description)
      );
      if (productAlreadyInShoppingCart) {
        commit("INCREMENT_PRODUCT_QUIANTITY");
      } else {
        commit("ADD_PRODUCT_TO_SHOPPING_CART", product);
      }
    },
  },
  modules: {},
});
