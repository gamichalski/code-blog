import router from "@/router";
import store from "@/store";

export const beforeEach = (to, from, next) => {
  const isLogged = store.getters["login/isLogged"];
  const isNeedAuthorization = to?.meta?.auth;
  const isLoginRoute = to?.name === "Login";

  if ((isNeedAuthorization && isLogged) || !isNeedAuthorization) {
    next();
  } else if (!isLoginRoute) {
    router.psh({ name: "Login" });
  }
};
