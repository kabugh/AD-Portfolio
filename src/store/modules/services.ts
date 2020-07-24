import { Service } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.VUE_APP_space,
  accessToken: process.env.VUE_APP_accessToken
});

const state = {
  services: [] as Service[],
  currentService: {} as Service
};

const mutations = {
  setServices(state: { services: Service[] }, payload: any) {
    state.services = payload;
  },
  setCurrentService(state: { currentService: Service }, payload: any) {
    state.currentService = payload;
  }
};

const getters = {
  services(state: { services: any }) {
    return state.services;
  },
  currentService(state: { currentService: Service }) {
    return state.currentService;
  }
};

const actions = {
  fetchServices({ commit, state }: any) {
    if (state.services.length === 0) {
      commit("setLoading", true);
      commit("clearError");
      client
        .getEntries({
          order: "sys.createdAt",
          /* eslint-disable @typescript-eslint/camelcase */
          content_type: "offers",
          include: 2 // specified level of references, links
        })
        .then((entries: { items: any[] }) => {
          const services = entries.items[0].fields.offersContainer.map(
            (a: any) => a.fields
          );
          console.log(services);
          commit("setServices", services);
          commit("setLoading", false);
        });
    } else {
      commit("setServices", state.services);
    }
  },
  fetchService({ commit, state }: any, slug: string) {
    if (state.currentService) {
      if (Object.values(state.currentService).length === 0) {
        commit("setLoading", true);
        commit("clearError");
        client
          .getEntries({
            order: "sys.updatedAt",
            /* eslint-disable @typescript-eslint/camelcase */
            content_type: "offer",
            "fields.slug[match]": slug
          })
          .then((entries: { items: any[] }) => {
            commit("setCurrentService", entries.items[0].fields);
            commit("setLoading", false);
          });
      } else {
        // const foundService = state.services.find((service: Service) => service.slug === slug);
        // commit("setCurrentService", foundService);
      }
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
