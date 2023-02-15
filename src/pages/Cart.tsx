import { useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
import CartItem from "components/cart/CartItem";

const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
type TCartItems = { id: number };
const Cart = () => {
  const [cartItems, setCartItems] = useState<TCartItems[]>(products);
  const emptyCart = cartItems?.length === 0;

  return (
    <Wrapper>
      <Title>장바구니</Title>
      {emptyCart ? (
        <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
      ) : (
        <>
          <CheckWrapper>
            <CheckBox /> 전체 선택
          </CheckWrapper>
          {cartItems && cartItems.map((item) => <CartItem key={item.id} />)}
        </>
      )}
      <CartBtn>{emptyCart ? "상품을 담아주세요" : "주문하기"}</CartBtn>
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
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
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 10px;
  height: 10px;
  position: relative;
`;

const CartBtn = styled.button`
  position: absolute;
  bottom: 20px;
  border-radius: 10px;
  width: 90%;
  font-weight: 700;
  color: ${colors["INDIGO-9"]};
  border: 1px solid ${colors["INDIGO-9"]};
  padding: 10px;
`;
