import React from "react";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import colors from "constants/colors";

const CompleteOrder = () => {
  // 신청 번호
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const random = [];
  while (numbers.length > 0) {
    const num = Math.floor(Math.random() * numbers.length);
    const newArr = numbers.splice(num, 1);
    const value = newArr[0];
    random.push(value);
  }
  // 신청 날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = `0${today.getMonth() + 1}`.slice(-2);
  const day = `0${today.getDate()}`.slice(-2);
  const orderDate = `${year}.${month}.${day}`;

  return (
    <Wrapper>
      <BsCheckLg />
      <Message>신청이 완료되었습니다.</Message>
      <OrderInfo>
        <Title>주문 번호</Title>
        <Content>{random.join("")}</Content>
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
