import { Service } from "../models";
/* eslint-disable @typescript-eslint/no-var-requires */
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.VUE_APP_space,
    accessToken: process.env.VUE_APP_accessToken,
});

const state = {
    currentService: {} as Service
}

const mutations = {
    setCurrentService(state: { currentService: Service }, payload: any) {
        state.currentService = payload;
    }
}

const getters = {
    currentService(state: { currentService: Service }) {
        return state.currentService
    }
}

const actions = {
    fetchService({ commit, state }: any, slug: string) {
        if(state.currentService) {
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
}

export default {
    state,
    mutations,
    getters,
    actions
}