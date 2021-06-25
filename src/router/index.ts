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
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/todo",
    name: "Todo",
    component: () =>
      import("../views/Todo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
