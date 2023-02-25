import { client } from "./api";

// 제품 상세 정보 불러오기
export const getDetail = async (id: string) => {
  const res = await client.get(`/product/${id}`);
  return res.data.data;
};
