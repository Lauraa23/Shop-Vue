import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginForm from "../views/authentication/LoginForm.vue";
import RegisterForm from "../views/authentication/RegisterForm.vue";
const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/",
    component: HomeView,
    name: "home",
  },
  {
    path: "/login",
    component: LoginForm,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterForm,
    name: "register",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
