import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollTo from "vue-scrollto";
import { gsap, TimelineLite } from "gsap";

Vue.use(VueScrollTo, {
  easing: [0.86, 0, 0.07, 1],
  duration: 1500,
  onStart: function (element: any) {
    if(store.state.isNavOpen)
      store.commit("setNav", false);
  },
});

AOS.init({
  easing: "ease-in-out-quart"
});

gsap.registerPlugin(TimelineLite);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
