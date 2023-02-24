import { client } from "./api";

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjAzODc0LCJleHAiOjE2NzcyMDc0NzR9.X1QQ0b5NN2YiR1Wjmya1gJZyGGIBUsNO3PKTUudK7YY";

const Headers = {
  Authorization: `Bearer ${accessToken}`,
};

const addHeaders = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json;charset=UTF-8",
};

// 장바구니 상품 정보 가져오기
export const getCart = async () => {
  const res = await client.get("/cart", {
    headers: Headers,
  });
  return res.data.data;
};

// 장바구니 상품 추가
export const addToCart = async (productId: string) => {
  const res = await client.post(
    "/cart",
    {
      productId,
    },
    {
      headers: addHeaders,
    },
  );
  console.log(productId);
  return res.data.data;
};

export const addCartt = async (productId: string) => {
  const { data } = await client.post("/cart", {
    headers: addHeaders,
    data: {
      productId,
    },
  });
  console.log(productId);
  console.log(data.data);
  return data.data;
};

// 장바구니 상품 삭제
export const removeFromCart = async (basketId: string) => {
  const res = await client.delete(`/cart?basketId=${basketId}`, {
    headers: Headers,
  });
  return res.data.data;
};
