import Vue from 'vue'
import Vuex from 'vuex'
import textsModule from '@/store/modules/texts/index';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    textsModule,
  },
})

export default store;