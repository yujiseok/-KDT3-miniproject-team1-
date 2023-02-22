import type { AxiosRequestConfig } from "axios";
import axios from "axios";

// const config: AxiosRequestConfig = {
//   baseURL: "http://15.164.195.118:3100/",
// };

// export const client = axios.create(config);

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MDY3MTMxLCJleHAiOjE2NzcxMDMxMzF9.h_vsHrtppRIrx_VnbzpBgaYGGa73M3QHJ4FDzY5M8Z8";

const config: AxiosRequestConfig = {
  baseURL: "http://15.164.195.118:3333",
  headers: {
    accept: "application/json;charset=UTF-8",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const client = axios.create(config);

// 장바구니
export const getCart = async () => {
  const response = await client.get("/cart");
  return response.data.data;
};
