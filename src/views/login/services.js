import { api } from "env";
import axios from "axios";

export const login = (user) => {
  const url = `${api}/oauth/token`;
  const params = { ...user, grant_type: "password" };
  const headers = {
    authorization: `Basic ${btoa("weblinked/fidelity-program:uaasecret")}`,
  };
  return axios.post(url, params, { headers });
};
