import { Partner } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.VUE_APP_space,
  accessToken: process.env.VUE_APP_accessToken
});

const state = {
  slideshow: {
    images: [require('@/assets/images/bg.jpg')]
  }
};

const mutations = {
  setSlideshow(state: { slideshow: [] }, payload: any) {
    state.slideshow = payload;
  }
};

const getters = {
  slideshow(state: { slideshow: [] }) {
    return state.slideshow;
  }
};

const actions = {
  fetchSlideshow({ commit, state }: any) {
    if (state.slideshow.images.length < 2) {
      commit("setLoading", true);
      commit("clearError");
      client
        .getEntries({
          order: "sys.createdAt",
          /* eslint-disable @typescript-eslint/camelcase */
          content_type: "slideshow"
        })
        .then((entries: { items: any[] }) => {
          const slideshow = {
            images: entries.items[0].fields.images.map(
            (image: any) => image.fields.file.url)
          }
          commit("setSlideshow", slideshow);
          commit("setLoading", false);
        });
    } else {
      commit("setSlideshow", state.slideshow);
    }
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
