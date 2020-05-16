import Vue from "vue";
import Vuex from "vuex";
import LoginStore from "@/views/login/store";
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    login: LoginStore,
  },
});
