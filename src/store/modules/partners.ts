import { Partner } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.VUE_APP_space,
  accessToken: process.env.VUE_APP_accessToken
});

const state = {
  partners: [] as Partner[]
};

const mutations = {
  setPartners(state: { partners: Partner[] }, payload: any) {
    state.partners = payload;
  }
};

const getters = {
  partners(state: { partners: Partner[] }) {
    return state.partners;
  }
};

const actions = {
  fetchPartners({ commit, state }: any) {
    if (state.partners.length === 0) {
      commit("setLoading", true);
      commit("clearError");
      client
        .getEntries({
          order: "sys.createdAt",
          /* eslint-disable @typescript-eslint/camelcase */
          content_type: "partnersContainer",
          include: 2 // specified level of references, links
        })
        .then((entries: { items: any[] }) => {
          const partnersContainer = entries.items[0].fields.partners.map(
            (partners: any) => partners.fields
          );
          commit("setPartners", partnersContainer);
          commit("setLoading", false);
        });
    } else {
      commit("setPartners", state.partners);
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
