import styled from "styled-components";
import { useState } from "react";
import CartModal from "components/productDetail/CartModal";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi2";
import colors from "constants/colors";
import LoanInterest from "components/productDetail/LoanInterest";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDetail } from "api/productDetail";
import { addToCart, addCartt } from "api/carts";
import type { IItem } from "../components/productDetail/LoanInterest";

interface IDetail {
  bankName: string;
  categoryName: string;
  delayRate: string;
  earlyRepayFee: string;
  joinWay: string;
  loanIncidentalExpenses: string;
  loanLimit: string;
  loanRateList: IItem[];
  productId: string;
  productName: string;
}

const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const { id } = useParams();
  // 상세 정보 data 불러오기
  const { isLoading, data: detail } = useQuery([id], () =>
    getDetail(id as string),
  );

  // console.log(detail);

  const addCart = () => {
    setOpenModal(true);
    addToCart(productId);
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div>
      {detail && (
        <Wrapper>
          <BankImg
            src="https://cdn.banksalad.com/graphic/color/logo/circle/woori.png"
            alt="은행 이미지"
          />
          <BankTitle>{`${detail?.bankName} ${detail.categoryName}`}</BankTitle>
          <ProductBox>
            <ProductTitle>{detail.productName}</ProductTitle>
            {liked ? (
              <HiHeart onClick={handleLike} />
            ) : (
              <HiOutlineHeart onClick={handleLike} />
            )}
          </ProductBox>
          <AverageBox>
            <AverageContent>
              <AverageTitle>최저 금리</AverageTitle>
              <AverageValue>{detail.loanRateList[0].minRate}%</AverageValue>
            </AverageContent>
            <AverageContent>
              <AverageTitle>최고 금리</AverageTitle>
              <AverageValue>{detail.loanRateList[0].maxRate}%</AverageValue>
            </AverageContent>
          </AverageBox>
          <BtnBox>
            <Btn onClick={addCart}>
              <HiOutlineShoppingCart />
              장바구니에 담기
            </Btn>
            {openModal && <CartModal setOpenModal={setOpenModal} />}
          </BtnBox>
          <DetailBox>
            <DetailBoxTitle>상세정보</DetailBoxTitle>
            <DetailTitle>대출 한도</DetailTitle>
            <DetailContent>{detail.loanLimit}</DetailContent>
            <DetailTitle>연체 이자율</DetailTitle>
            <DetailContent>{detail.delayRate}</DetailContent>
            <DetailTitle>상품 이자율</DetailTitle>
            {detail.loanRateList.map((item: IItem) => (
              <LoanInterest key={item.id} item={item} />
            ))}
            <DetailTitle>대출 부대비용</DetailTitle>
            <DetailContent>{detail.loanIncidentalExpenses}</DetailContent>
            <DetailTitle>중도상환 수수료</DetailTitle>
            <DetailContent>{detail.earlyRepayFee}</DetailContent>
            <DetailTitle>가입방법</DetailTitle>
            <DetailContent>{detail.joinWay}</DetailContent>
          </DetailBox>
        </Wrapper>
      )}
    </div>
  );
};
export default ProductDetail;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  svg {
    font-size: 25px;
    color: ${colors["RED-9"]};
  }
`;

const BankImg = styled.img`
  margin: 10px 15px;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
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

const AverageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AverageTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #605e5e;
`;

const AverageValue = styled.p`
  font-weight: 800;
  font-size: 20px;
`;

const BtnBox = styled.div`
  padding: 0 15px;
  margin: 10px 0;
`;

const Btn = styled.button`
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: ${colors["GRAY-0"]};
  background-color: ${colors["INDIGO-9"]};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const DetailBox = styled.div`
  padding: 10px 15px;
  border-top: 15px solid #cac7c776;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DetailBoxTitle = styled.h3`
  color: #111;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
`;

const DetailTitle = styled.p`
  font-weight: 700;
  color: #666b78;
  font-size: 15px;
`;

const DetailContent = styled.p`
  color: #666b78;
  font-size: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors["GRAY-4"]};
`;
