import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Finish from "../components/Finish";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/finish",
    name: "Finish",
    component: Finish
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
