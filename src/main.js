import Vue from "vue";
import App from "./App";
import AppDate from "./components/AppDate";
import router from "./router";
import store from "./store";

Vue.component("AppDate", AppDate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
