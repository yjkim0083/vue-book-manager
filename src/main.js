import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// install bootstrapvue
Vue.use(BootstrapVue);
// Optionally install the bootstrapVue icon components plugin
Vue.use(IconsPlugin);
// bootstrap.css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
