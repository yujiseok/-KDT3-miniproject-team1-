import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjozMTAxLFwiZW1haWxcIjpcIjFxMnczZTRyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwiMXEydzNlNHJAZW1haWwuY29tXCIsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2V9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcyMjEzNTcsImV4cCI6MTY3NzIyNDk1N30.K5ThrSfBIFh5tTNMfEjYjApCHXI_a4I5ijdgSbxZ5I0",
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
