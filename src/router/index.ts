import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/usługi/:name",
    name: "service",
    component: () =>
      import(/* webpackChunkName: "service" */ "../views/Service.vue"),
    props: true
  },
  {
    path: "/o-mnie",
    name: "aboutMe",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/AboutMe.vue")
  },
  {
    path: "/historie",
    name: "stories",
    component: () =>
      import(/* webpackChunkName: "stories" */ "../views/Stories.vue")
  },
  {
    path: "/historie/:name",
    name: "story",
    component: () =>
      import(/* webpackChunkName: "story" */ "../views/Story.vue"),
    props: true
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
