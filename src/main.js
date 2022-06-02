import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import moment from "moment";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(value).format("YYYY-MM-DD");
  }
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
