import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginForm from "../views/authentication/LoginForm.vue";
import RegisterForm from "../views/authentication/RegisterForm.vue";
import WishList from "../views/wishlist/WishList.vue";
import ShopCart from "../views/shopcart/ShopCart.vue";
import AboutViewVue from "@/views/about/AboutView.vue";
import ProductsView1Vue from "@/views/products/ProductsView1.vue";
import ProductsView2Vue from "@/views/products/ProductsView2.vue";
import ProductsView3Vue from "@/views/products/ProductsView3.vue";

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
  {
    path: "/aboutview",
    component: AboutViewVue,
    name: "aboutview",
  },
  {
    path: "/productsview1",
    component: ProductsView1Vue,
    name: "productosview1",
  },
  {
    path: "/productsview2",
    component: ProductsView2Vue,
    name: "productosview2",
  },
  {
    path: "/productsview3",
    component: ProductsView3Vue,
    name: "productosview3",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
