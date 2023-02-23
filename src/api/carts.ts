import { client } from "./api";

const accessToken = "";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization: `Bearer ${accessToken}`,
};

// 장바구니
export const getCart = async () => {
  const res = await client.get("/cart", {
    headers: Headers,
  });
  return res.data.data;
};
