import { client } from "./api";

const headers = {
  Authorization:
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoyMDA1LFwiZW1haWxcIjpcInRlc3QyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwidGVzdDJAZW1haWwuY29tXCIsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2V9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyMjQ0NTIsImV4cCI6MTY3NzIyODA1Mn0.ZwienJIvff9_n4eLtEMeCLHgXxIa-ukmz1yPX73miao",
};

export const getOrderLists = async () => {
  const { data } = await client.get("/order", {
    headers,
  });

  return data.data;
};

// 바디로
// export const postOrder = async (productId: string) => {
//   const { data } = await client.post(`/order`, {
//     headers,
//     data: {
//       productId,
//     },
//   });

//   return data.data;
// };

const postHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo0MDM0LFwiZW1haWxcIjpcImh5dWtAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJoeXVrQGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjQ0NTM4LCJleHAiOjE2NzcyNDgxMzh9._fv4erKas3fU8BGd9e4_Fd3d4ZfhB-RgCuokSgKTNCg",
  "Content-Type": "application/json;charset=UTF-8",
};

// 주문하기
export const postOrder = async (id: string) => {
  const res = await client.post(
    "/order",
    {
      productId: id,
    },
    {
      headers: postHeader,
    },
  );
};

// 쿼리로
export const deleteOrder = async (cartId: number) => {
  const { data } = await client.delete(`/order/?basketId=${cartId}`, {
    headers,
  });

  return data.data;
};
