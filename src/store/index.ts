import Vue from "vue";
import Vuex from "vuex";
import utils from "./modules/utils";
import stories from "./modules/stories";
import services from "./modules/services";
import about from "./modules/about";
import partners from "./modules/partners";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    utils,
    stories,
    services,
    about,
    partners
  }
});
