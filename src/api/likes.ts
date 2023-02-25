import { client } from "./api";

export const getLikeLists = async () => {
  const { data } = await client.get("/like");

  return data.data;
};

export const postLikeLists = async (productId: string) => {
  const { data } = await client.post("/like", {
    productId,
  });

  return data.data;
};

export const deleteLikeList = async (id: number) => {
  const { data } = await client.delete("/like", {
    data: {
      id,
    },
  });

  return data;
};
