// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store'

import "firebase/auth";
import {
  FirebaseAuth
} from "@/library/Database";

import "bulma/css/bulma.css";

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faSignOutAlt,
  faCrown,
  faTimesCircle,
  faLocationArrow,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import VeeValidate from "vee-validate";

library.add(faSignOutAlt, faCrown,
  faTimesCircle, faLocationArrow, faPlus)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.use(VeeValidate);

Vue.config.productionTip = false;

let baseApp;

FirebaseAuth.onAuthStateChanged(() => {
  if (!baseApp) {
    baseApp = new Vue({
      el: "#app",
      router,
      store,
      components: {
        App
      },
      template: "<App/>"
    });
  }
})
