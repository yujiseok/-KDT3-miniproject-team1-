import { client } from "./api";

const Headers = {
  accept: "application/json;charset=UTF-8",
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
