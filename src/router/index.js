import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Question from "../components/Question";
import Finish from "../components/Finish";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/vuejs-quiz/question",
    name: "question",
    component: Question,
  },
  {
    path: "/vuejs-quiz/finish",
    name: "finish",
    component: Finish,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let status = store.getters.getStatus;
  if (to.path !== "/") {
    if (status) {
      return next();
    } else {
      return next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
