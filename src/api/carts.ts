import { client } from "./api";

// 장바구니 상품 정보 가져오기
export const getCart = async () => {
  const res = await client.get("/cart");
  return res.data.data;
};

// 장바구니 상품 추가
export const addToCart = async (id: string) => {
  const res = await client.post("/cart", {
    productId: id,
  });
};

// 장바구니 상품 삭제
export const removeFromCart = async (basketId: number) => {
  const res = await client.delete(`/cart?basketId=${basketId}`);
};
