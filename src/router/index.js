import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/account/Login.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
import ExternalSearch from "@/views/search/ExternalSearch.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/tests",
    name: "Tests",
    component: firebaseTests
  },
  {
    path: "/external-search",
    name: "External Search",
    component: ExternalSearch
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
