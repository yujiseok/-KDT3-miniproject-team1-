import { client } from "./api";

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjozMTAxLFwiZW1haWxcIjpcIjFxMnczZTRyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwiMXEydzNlNHJAZW1haWwuY29tXCIsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2V9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyMjEzNTcsImV4cCI6MTY3NzIyNDk1N30.K5ThrSfBIFh5tTNMfEjYjApCHXI_a4I5ijdgSbxZ5I0";

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
