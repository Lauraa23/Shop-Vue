import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginForm from "../views/authentication/LoginForm.vue";
import RegisterForm from "../views/authentication/RegisterForm.vue";
import WishList from "../views/wishlist/WishList.vue";
import ShopCart from "../views/shopcart/ShopCart.vue";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
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
  {
    path: "/wishlist",
    component: WishList,
    name: "wishlist",
  },
  {
    path: "/shopcart",
    component: ShopCart,
    name: "shopcart",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
