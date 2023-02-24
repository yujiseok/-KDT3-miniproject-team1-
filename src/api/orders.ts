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
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoyMDA1LFwiZW1haWxcIjpcInRlc3QyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwidGVzdDJAZW1haWwuY29tXCIsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2V9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyMjc4NjMsImV4cCI6MTY3NzIzMTQ2M30.cxXug60wisExbz1ZjfI9HTjDbWZmv8-A4WQuC9TXj98",
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
