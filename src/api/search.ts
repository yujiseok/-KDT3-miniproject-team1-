import { client } from "./api";

export const getSearch = async (keyword: string) => {
  const res = await client.get("/product/search", {
    params: {
      keyword,
    },
  });
  return res.data.data;
};
