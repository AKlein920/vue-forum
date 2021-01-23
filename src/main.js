import Vue from "vue";
import App from "./App";
import AppDate from "./components/AppDate";
import router from "./router";

Vue.component("AppDate", AppDate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
