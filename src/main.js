import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import counter from "./plugins/counter";

Vue.config.productionTip = false;

// Components
Vue.component("Home", require("./components/Home").default);

new Vue({
  vuetify,
  router,
  store,
  counter,
  render: (h) => h(App),
}).$mount("#app");
