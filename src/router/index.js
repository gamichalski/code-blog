import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index.vue";

import PostRoutes from "@/views/posts/routes";

Vue.use(VueRouter);

const routes = [
  // ...PostRoutes,
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [...PostRoutes],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
