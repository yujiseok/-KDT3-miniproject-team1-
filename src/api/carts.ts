import { client } from "./api";

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo0MDM0LFwiZW1haWxcIjpcImh5dWtAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJoeXVrQGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjQ0NTM4LCJleHAiOjE2NzcyNDgxMzh9._fv4erKas3fU8BGd9e4_Fd3d4ZfhB-RgCuokSgKTNCg";

const Headers = {
  Authorization: `Bearer ${accessToken}`,
};

const addHeaders = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json;charset=UTF-8",
};

// 장바구니 상품 정보 가져오기
export const getCart = async () => {
  const res = await client.get("/cart", {
    headers: Headers,
  });
  return res.data.data;
};

// 장바구니 상품 추가
export const addToCart = async (id: string) => {
  const res = await client.post(
    "/cart",
    {
      productId: id,
    },
    {
      headers: addHeaders,
    },
  );
};

// 장바구니 상품 삭제
export const removeFromCart = async (basketId: number) => {
  const res = await client.delete(`/cart?basketId=${basketId}`, {
    headers: Headers,
  });
};
