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
  let storeStatus = store.getters.getStatus;
  let status = localStorage.getItem('quizStarted');
  if (to.path !== "/") {
    if (!status || !storeStatus) {
      return next({ name: "home" });
    }else {
      return next();
    }
  } else {
    return next();
  }
});

export default router;
