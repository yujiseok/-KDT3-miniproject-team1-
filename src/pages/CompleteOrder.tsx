import React from "react";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import colors from "constants/colors";

const CompleteOrder = () => {
  // 신청 번호
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const shuffle = (array: number[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const orderNumber = shuffle(numbers);
  // 신청 날짜
  const orderDate = new Date().toLocaleDateString();

  return (
    <Wrapper>
      <BsCheckLg />
      <Message>신청이 완료되었습니다.</Message>
      <OrderInfo>
        <Title>주문 번호</Title>
        <Content>{orderNumber}</Content>
      </OrderInfo>
      <OrderInfo>
        <Title>신청 날짜</Title>
        <Content>{orderDate}</Content>
      </OrderInfo>
    </Wrapper>
  );
};

export default CompleteOrder;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    width: 100px;
    height: 100px;
    padding: 20px;
    border-radius: 50%;
    background-color: ${colors["INDIGO-9"]};
    color: white;
    margin-bottom: 30px;
  }
`;

const Message = styled.h1`
  color: ${colors["GRAY-8"]};
  margin-bottom: 30px;
  font-size: 24px;
`;

const OrderInfo = styled.div`
  display: flex;
  gap: 5px;
`;
const Title = styled.p`
  color: ${colors["GRAY-6"]};
`;
const Content = styled.p``;
