import { client } from "./api";

const headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MTQ4NjE2LCJleHAiOjE2NzcxNTIyMTZ9.pRCev6i5JInuR9Fo0lpXiLjjIncrvNKcndfTjKq97Ig",
};

export const getOrderLists = async () => {
  const { data } = await client.get("/order", {
    headers,
  });

  return data.data;
};

// 바디로
export const postOrder = async (productId: string) => {
  const { data } = await client.post(`/order`, {
    headers,
    data: {
      productId,
    },
  });

  return data.data;
};

// 쿼리로
export const deleteOrder = async (cartId: number) => {
  const { data } = await client.delete(`/order/?basketId=${cartId}`, {
    headers,
  });

  return data.data;
};
