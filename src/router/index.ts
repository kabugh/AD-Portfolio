import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";


Vue.use(VueRouter);

const overlayGuard = (to: Route, from: Route, next: Function) => {
  store.commit("setNav", false);
  next();
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: overlayGuard
  },
  {
    path: "/uslugi/:name",
    name: "service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/Service.vue"),
    props: true,
    beforeEnter: overlayGuard
  },
  {
    path: "/o-mnie",
    name: "aboutMe",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/AboutMe.vue"),
    beforeEnter: overlayGuard
  },
  {
    path: "/historie",
    name: "stories",
    component: () =>
      import(/* webpackChunkName: "stories" */ "../views/Stories.vue"),
    beforeEnter: overlayGuard
  },
  {
    path: "/historie/:name",
    name: "story",
    component: () =>
      import(/* webpackChunkName: "story" */ "../views/Story.vue"),
    props: true,
    meta: { navBarPosition: "static", navBarColor: "white" },
    beforeEnter: overlayGuard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
export default router;
