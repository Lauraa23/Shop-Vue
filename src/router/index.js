import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import WishListVue from "@/views/wishlist/WishList.vue";
import ShopCartVue from "@/views/shopcart/ShopCart.vue";
import ProfileViewVue from "@/views/profile/ProfileView.vue";
import ContactViewVue from "@/views/contact/ContactView.vue";
import BlogViewVue from "@/views/blog/BlogView.vue";
import AboutViewVue from "@/views/about/AboutView.vue";
import LoginFormVue from "@/views/authentication/LoginForm.vue";
import RegisterFormVue from "@/views/authentication/RegisterForm.vue";
import SingleBlog from "../views/blog/SingleBlog.vue";

const routes = [
  {
    path: "/home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
  {
    path: "/wishlist",
    component: WishListVue,
    name: "wishlist",
  },
  {
    path: "/shopcart",
    component: ShopCartVue,
    name: "shopcart",
  },
  {
    path: "/profileview",
    component: ProfileViewVue,
    name: "profileview",
  },
  {
    path: "/contactview",
    component: ContactViewVue,
    name: "contactview",
  },
  {
    path: "/blogview",
    component: BlogViewVue,
    name: "blog",
  },
  {
    path: "/aboutview",
    component: AboutViewVue,
    name: "aboutview",
  },
  {
    path: "/login",
    component: LoginFormVue,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterFormVue,
    name: "register",
  },
  {
    path: "/blog/:id",
    component: SingleBlog,
    name: "single-blog",
    props: (route) => ({
      id: route.params.id,
      blog: route.params.blog,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
