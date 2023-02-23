import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoyMDA1LFwiZW1haWxcIjpcInRlc3QyQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJhdXRob3JpdGllc1wiOm51bGwsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwidGVzdDJAZW1haWwuY29tXCJ9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcxNTYwMzIsImV4cCI6MTY3NzE1OTYzMn0.s_1MCexalQESX-YquSolH0mWElqP5dwQ-BXUj-36rw4",
};

// 신청 목록
export const getOrder = async () => {
  const res = await client.get("/order", {
    headers: Headers,
  });
  return res.data.data;
};

// 비회원용 추천 상품 리스트
export const getProducts = async () => {
  const res = await client.get("/product", {
    headers: Headers,
  });
  return res.data.data;
};
