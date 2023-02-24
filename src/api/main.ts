import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoyMDA1LFwiZW1haWxcIjpcInRlc3QyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwidGVzdDJAZW1haWwuY29tXCIsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2UsXCJhdXRob3JpdGllc1wiOm51bGx9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyMTIyNTgsImV4cCI6MTY3NzIxNTg1OH0.gPmPh5s4fdqlOpRsoS6XTY3lg49Mk1ZrHzwdryD4pO8",
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
