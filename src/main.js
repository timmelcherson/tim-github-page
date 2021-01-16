import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

import InlineSvg from 'vue-inline-svg';

import '@/assets/styles/app.scss';
import '@/mixins/animations_mixin';

Vue.component('inline-svg', InlineSvg);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
