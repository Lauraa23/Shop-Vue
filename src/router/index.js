import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
