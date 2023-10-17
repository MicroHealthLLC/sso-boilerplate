import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { Amplify } from "@aws-amplify/core";
import ssoExports from "./sso-exports";

Amplify.configure(ssoExports)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


