// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Notify from 'vue-notifyjs';

import 'vue-notifyjs/themes/default.css';

import store from './store';
import App from './App';
import router from './router';

const config = {
  locale: 'pt_BR',
};


Vue.use(VeeValidate, config);
Vue.use(Notify, { type: 'primary', timeout: 3000 });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
