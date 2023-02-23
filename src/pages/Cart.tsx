import { useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
import { useNavigate } from "react-router-dom";
import ItemList from "components/ItemList";
import { GrFormClose } from "react-icons/gr";
import data from "data/listData.json";
import { getCart } from "api/api";
import { useQuery } from "@tanstack/react-query";
import type { ItemType } from "./Main";

const Cart = () => {
  // const [cartItems, setCartItems] = useState<ItemType[]>(data.items);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/completeOrder");
  };

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      const newArr: string[] = [];
      data.items.forEach((item) => newArr.push(item.productId));
      setCheckedItems(newArr);
    } else {
      setCheckedItems([]);
    }
  };

  const {
    isLoading,
    error,
    data: cartItems,
  } = useQuery(["cart"], () => getCart());
  const emptyCart = cartItems?.length === 0;

  // console.log(cartItems);

  return (
    <Wrapper>
      {emptyCart ? (
        <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
      ) : (
        <>
          <CheckWrapper>
            <CheckBox
              onChange={handleAllChecked}
              checked={checkedItems?.length === data.items.length}
            />{" "}
            전체 선택
          </CheckWrapper>
          {cartItems &&
            cartItems.map((item: ItemType) => (
              <ItemList
                key={item.productId}
                item={item}
                icon={<GrFormClose />}
                cart
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            ))}
        </>
      )}
      {emptyCart ? (
        <CartBtn primary>상품을 담아주세요</CartBtn>
      ) : (
        <CartBtn onClick={handleClick} primary={false}>
          신청하기
        </CartBtn>
      )}
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyCart = styled.p`
  margin-top: 200px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${colors["GRAY-7"]};
`;

const CheckWrapper = styled.div`
  border-bottom: 1px solid ${colors["GRAY-4"]};
  width: 90%;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

const CartBtn = styled.button<{ primary: boolean }>`
  border-radius: 10px;
  width: 90%;
  font-weight: 700;
  color: ${({ primary }) => (primary ? colors["INDIGO-9"] : "white")};
  border: 1px solid ${colors["INDIGO-9"]};
  background: ${({ primary }) => (primary ? "white" : colors["INDIGO-9"])};
  padding: 10px;
`;
