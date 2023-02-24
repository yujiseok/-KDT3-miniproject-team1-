import { client } from "./api";

const headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjAzODc0LCJleHAiOjE2NzcyMDc0NzR9.X1QQ0b5NN2YiR1Wjmya1gJZyGGIBUsNO3PKTUudK7YY",
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
