import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo0MDI4LFwiZW1haWxcIjpcInRlc3QxMTE4QGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2UsXCJ1c2VybmFtZVwiOlwidGVzdDExMThAZW1haWwuY29tXCIsXCJwYXNzd29yZFwiOm51bGx9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyNDA5NjQsImV4cCI6MTY3NzI0NDU2NH0.ZMhQbj-TFGiXklNjbkl8Z-fU-8deTS33pIHd4DLDMhw",
};

const NonToken = {
  accept: "application/json;charset=UTF-8",
};

// 신청 목록
export const getOrder = async () => {
  const res = await client.get("/order", {
    headers: Headers,
  });
  return res.data.data;
};

// 추천 상품 리스트
export const getProducts = async () => {
  const res = await client.get("/product", {
    headers: NonToken,
  });
  return res.data.data;
};

// 회원 정보
export const getUserInfo = async () => {
  const res = await client.get("/users/me", {
    headers: Headers,
  });
  return res.data.data;
};
