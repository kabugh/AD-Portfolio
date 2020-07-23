const state = {
  isNavOpen: false,
  loading: false,
  error: null
};

const mutations = {
  setNav(state: { isNavOpen: boolean }, payload: boolean) {
    state.isNavOpen = payload;
  },
  setLoading(state: { loading: boolean }, payload: boolean) {
    state.loading = payload;
  },
  setError(state: { error: string }, payload: string) {
    state.error = payload;
  },
  clearError(state: { error: null }) {
    state.error = null;
  }
};

const getters = {
  isNavOpen(state: { isNavOpen: boolean }) {
    return state.isNavOpen;
  },
  loading(state: { loading: boolean }) {
    return state.loading;
  },
  error(state: { error: string }) {
    return state.error;
  }
};

export default {
  state,
  mutations,
  getters
};
