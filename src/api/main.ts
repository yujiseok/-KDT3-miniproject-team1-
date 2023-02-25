import { client } from "./api";

// 신청 목록
export const getOrder = async () => {
  const res = await client.get("/order");
  return res.data.data;
};

// 추천 상품 리스트
export const getProducts = async () => {
  const res = await client.get("/product");
  return res.data.data;
};

// 회원 정보
export const getUserInfo = async () => {
  const res = await client.get("/users/me");
  return res.data.data;
};
