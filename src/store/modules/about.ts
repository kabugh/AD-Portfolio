import { AboutMeDescription } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.VUE_APP_space,
    accessToken: process.env.VUE_APP_accessToken,
});

const state = {
    aboutMe: [] as AboutMeDescription[]
}

const mutations = {
    setAboutMe(state: { aboutMe: AboutMeDescription[] }, payload: any) {
        state.aboutMe = payload;
    }
}

const getters = {
    aboutMe(state: { aboutMe: AboutMeDescription[] }) {
        return state.aboutMe
    }
}

const actions = {
    fetchAboutMe({ commit, state }: any) {
        if (state.aboutMe.length === 0) {
          commit("setLoading", true);
          commit("clearError");
          client
            .getEntries({
              order: "sys.createdAt",
              /* eslint-disable @typescript-eslint/camelcase */
              content_type: "aboutMe",
              include: 2 // specified level of references, links
            })
            .then((entries: { items: any[] }) => {
                console.log(entries.items)
              const aboutMe = entries.items[0].fields.descriptions.map((desc: any) => desc.fields);
              commit("setAboutMe", aboutMe);
              commit("setLoading", false);
            });
        } else {
          commit("setAboutMe", state.aboutMe);
        }
      },
}

export default {
    state,
    mutations,
    getters,
    actions
}