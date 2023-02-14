import styled from "styled-components";
import { useState } from "react";
import CartModal from "components/productDetail/CartModal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Action } from "@reduxjs/toolkit";

const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <Wrapper>
      <ImgBox />
      <BankTitle>우리은행 신용대출</BankTitle>
      <ProductTitle>우리금융인클럽 신용대출</ProductTitle>
      <AverageBox>
        <AverageContent>
          <AverageTitle>평균 금리</AverageTitle>
          <AverageValue>5.04%</AverageValue>
        </AverageContent>
        <AverageContent>
          <AverageTitle>평균 대출액</AverageTitle>
          <AverageValue>3,420만원</AverageValue>
        </AverageContent>
      </AverageBox>
      <BtnBox>
        <LikeBtn>찜하기</LikeBtn>
        <CartBtn onClick={handleClick}>
          <AiOutlineShoppingCart />
          장바구니에 담기
        </CartBtn>
        {openModal && <CartModal setOpenModal={setOpenModal} />}
      </BtnBox>
      <DetailBox>
        <DetailBoxTitle>상세정보</DetailBoxTitle>
        <DetailTitle>대출 금리</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>대출 부대 비용</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>중도 상환 수수료</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>연체이자율</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        {/* <DetailTitle>대출 한도</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>신청 방식</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>신청 조건</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent>
        <DetailTitle>필요 서류</DetailTitle>
        <DetailContent>변동금리(6개월): 최저 6.21%</DetailContent> */}
      </DetailBox>
    </Wrapper>
  );
};
export default ProductDetail;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImgBox = styled.div`
  margin: 10px 15px;
  font-size: 18px;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
  background-image: url("https://cdn.banksalad.com/graphic/color/logo/circle/woori.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

const BankTitle = styled.h1`
  padding: 0 15px;
  font-size: 18px;
  font-weight: 700;
`;

const ProductTitle = styled.h2`
  padding: 0 15px;
  font-size: 18px;
  font-weight: 700;
`;

const AverageBox = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 60%;
`;

const AverageContent = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AverageTitle = styled.p`
  font-weight: 600;
  color: #605e5e;
`;

const AverageValue = styled.p`
  font-weight: 800;
  font-size: 20px;
`;

const BtnBox = styled.div`
  padding: 0 15px;
  margin: 10px 0;
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const LikeBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  font-weight: 600;
  color: #364fc7;
  background-color: #dbe4ff;
  padding: 10px;
`;

const CartBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  font-weight: 500;
  background-color: #364fc7;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const DetailBox = styled.div`
  padding: 10px 15px;
  border-top: 15px solid #b8b5b576;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailBoxTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
`;

const DetailTitle = styled.h3`
  font-weight: 600;
  color: #333;
  font-size: 15px;
`;

const DetailContent = styled.p`
  color: #434242;
  font-size: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #b8b5b576;
`;
