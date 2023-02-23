import { client } from "./api";

export const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MTg0MDYzLCJleHAiOjE2NzcxODc2NjN9.bpPC6RP1WjQcqJo2qKg9k6Zy-sBkw79QmRVMeyMhtPs";

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
export const addToCart = async (productId: string) => {
  const res = await client.post(
    "/cart",
    {
      productId,
    },
    {
      headers: addHeaders,
    },
  );
  return res.data.data;
};

// 장바구니 상품 삭제
export const removeFromCart = async (basketId: string) => {
  const res = await client.delete(`/cart?basketId=${basketId}`, {
    headers: Headers,
  });
  return res.data.data;
};
