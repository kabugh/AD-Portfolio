import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/AboutMe.vue"),
  },
  {
    path: "/stories",
    name: "Stories",
    component: () =>
      import(/* webpackChunkName: "stories" */ "../views/Stories.vue"),
  },
  // {
  //   path: "/stories/:id",
  //   name: "Story",
  //   component: () =>
  //     import(/* webpackChunkName: "story" */ "../views/Story.vue"),
  //   props: true
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
