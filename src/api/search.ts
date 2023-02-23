import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MTI1MzIwLCJleHAiOjE2NzcxNjEzMjB9.8aH-IONcjAfzYCMmtOEl51_g6xszax5aV-dsYheMs2g",
};

export const getSearch = async (
  page: number,
  size: number,
  sort: string,
  keyword: string,
) => {
  const res = await client.get("/product/search", {
    headers: Headers,
    params: {
      page,
      size,
      sort,
      keyword,
    },
  });
  console.log(res.data.data);
  return res.data.data;
};
