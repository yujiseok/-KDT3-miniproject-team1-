import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
};

export const getSearch = async (keyword: string) => {
  const res = await client.get("/product/search", {
    headers: Headers,
    params: {
      keyword,
    },
  });
  return res.data.data;
};
