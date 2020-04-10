import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HelloWorld
  },
  {
    path: "/Home/:id",
    component: Home,
    name: "Home"
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
