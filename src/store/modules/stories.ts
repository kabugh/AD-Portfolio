import { Story } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.VUE_APP_space,
  accessToken: process.env.VUE_APP_accessToken,
});

const state = {
  stories: [] as Story[],
  currentStory: {} as Story
};

const mutations = {
  setStories(state: { stories: Story[] }, payload: any) {
    state.stories = payload;
  },
  setCurrentStory(state: { currentStory: Story }, payload: any) {
    state.currentStory = payload;
  }
};

const getters = {
  stories(state: { stories: any }) {
    return state.stories;
  },
  currentStory(state: { currentStory: Story}) {
    return state.currentStory;
  }
};

const actions = {
  fetchStories({ commit, state }: any) {
    if (state.stories.length === 0) {
      commit("setLoading", true);
      commit("clearError");
      client
        .getEntries({
          order: "sys.createdAt",
          /* eslint-disable @typescript-eslint/camelcase */
          content_type: "stories",
          include: 2 // specified level of references, links
        })
        .then((entries: { items: any[] }) => {
          const stories = entries.items[0].fields.stories.map((a: any) => a.fields);
          commit("setStories", stories);
          commit("setLoading", false);
        });
    } else {
      commit("setStories", state.stories);
    }
  },
  fetchStory({ commit, state }: any, slug: string) {
    if (state.stories.length === 0) {
      commit("setLoading", true);
      commit("clearError");
      client
        .getEntries({
          order: "sys.updatedAt",
          content_type: "story",
          "fields.slug[match]": slug
        })
        .then((entries: { items: any[] }) => {
          commit("setCurrentStory", entries.items[0].fields);
          commit("setLoading", false);
        });
    } else {
      const foundStory = state.stories.find((story: Story) => story.slug === slug);
      commit("setCurrentStory", foundStory);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
