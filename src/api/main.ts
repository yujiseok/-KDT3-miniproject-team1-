import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjAzODc0LCJleHAiOjE2NzcyMDc0NzR9.X1QQ0b5NN2YiR1Wjmya1gJZyGGIBUsNO3PKTUudK7YY",
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

// 회원용
