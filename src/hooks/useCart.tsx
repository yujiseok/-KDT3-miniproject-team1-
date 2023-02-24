import { getCart, addToCart, removeFromCart } from "api/carts";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const useCart = () => {
  const queryClient = useQueryClient();

  // 상품 목록 가져오기
  const getCartList = useQuery(["cart"], () => getCart());

  // 상품 추가
  const addCartList = useMutation((id: string) => addToCart(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  // 상품 삭제
  const deleteCartList = useMutation(
    (basketId: number) => removeFromCart(basketId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    },
  );
  return { getCartList, addCartList, deleteCartList };
};

export default useCart;
