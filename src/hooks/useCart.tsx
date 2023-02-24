import { getCart, removeFromCart } from "api/carts";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const useCart = () => {
  const queryClient = useQueryClient();

  const { data: getCartList } = useQuery(["cart"], () => getCart());
  const deleteCartList = useMutation(
    (basketId: string) => removeFromCart(basketId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    },
  );
  return { getCartList, deleteCartList };
};

export default useCart;
