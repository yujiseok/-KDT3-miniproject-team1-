import { client } from "./api";

// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjAzODc0LCJleHAiOjE2NzcyMDc0NzR9.X1QQ0b5NN2YiR1Wjmya1gJZyGGIBUsNO3PKTUudK7YY";

const Headers = {
  accept: "application/json;charset=UTF-8",
};

// 제품 상세 정보 불러오기
export const getDetail = async (id: string) => {
  const res = await client.get(`/product/${id}`);
  return res.data.data;
};
