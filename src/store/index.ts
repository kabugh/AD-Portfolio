import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false
  },
  mutations: {
    setNav(state: { isNavOpen: boolean }, payload: boolean) {
        state.isNavOpen = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isNavOpen(state: { isNavOpen: boolean }) {
      return state.isNavOpen;
    }
  }
});
