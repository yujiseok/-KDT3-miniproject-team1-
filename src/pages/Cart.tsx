import { useState } from "react";
import styled from "styled-components";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <Wrapper>
      <Title>장바구니</Title>
      <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
      <CartBtn>상품을 담아주세요</CartBtn>
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  padding: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const EmptyCart = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const CartBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  font-weight: 700;
  color: #364fc7;
  background-color: #dbe4ff;
  padding: 10px;
`;
