import "dayjs/locale/pt-br";

import { api } from "env";
import axios from "axios";
import dayjs from "dayjs";

export const fetchPosts = () => {
  const url = `${api}/post`;
  return axios.get(url).then(({ data }) => {
    return data.items.map((post) => {
      return {
        ...post,
        formatedCreatedAt: dayjs(post.createdAt)
          .locale("pt-br")
          .format("MMMM DD, YYYY"),
      };
    });
  });
};
