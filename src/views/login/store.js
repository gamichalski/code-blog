import { login } from "./services";

const types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export default {
  namespaced: true,
  state: { auth: null },
  mutations: {
    [types.LOGIN](state, auth) {
      state.auth = auth;
    },
    [types.LOGOUT](state) {
      state.auth = null;
    },
  },
  actions: {
    login({ commit }, user) {
      return login(user).then(({ data }) => {
        commit(types.LOGIN, data);
      });
    },
  },
  getters: {
    isLogged(state) {
      return !!state.auth;
    },
  },
};
