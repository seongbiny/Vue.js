import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/basic",
    name: "Basic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Basic.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataBinding.vue"),
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataBindingHtml.vue"),
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Example.vue"),
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KakaoLogin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
