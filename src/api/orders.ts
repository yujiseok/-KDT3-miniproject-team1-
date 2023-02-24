import { client } from "./api";

export const getOrderLists = async () => {
  const { data } = await client.get("/order");

  return data.data;
};


export const postOrder = async (productId: string) => {
  const res = await client.post("/order", {
    productId,
  });
};

export const deleteOrder = async (cartId: number) => {
  const { data } = await client.delete(`/order/?basketId=${cartId}`);

  return data.data;
};
