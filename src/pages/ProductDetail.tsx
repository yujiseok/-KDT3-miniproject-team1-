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
import productData from "../data/productData.json";
import type { IItem } from "../components/productDetail/LoanInterest";

// interface IDetailProps {
//   bankName: string;
//   categoryName: string;
//   delayRate: string;
//   earlyRepayFee: string;
//   joinWay: string;
//   loanIncidentalExpenses: string;
//   loanLimit: string;
//   longRateDTO: IItem[];
//   productId: string;
//   productName: string;
// }

const {
  bankName,
  categoryName,
  delayRate,
  earlyRepayFee,
  joinWay,
  loanIncidentalExpenses,
  loanLimit,
  productName,
  longRateDTO,
  productId,
} = productData.data;

const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCart = () => {
    setOpenModal(true);
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Wrapper>
      <BankImg
        src="https://cdn.banksalad.com/graphic/color/logo/circle/woori.png"
        alt="은행 이미지"
      />
      <BankTitle>{`${bankName} ${categoryName}`}</BankTitle>
      <ProductBox>
        <ProductTitle>{productName}</ProductTitle>
        {liked ? (
          <HiHeart onClick={handleLike} />
        ) : (
          <HiOutlineHeart onClick={handleLike} />
        )}
      </ProductBox>
      <AverageBox>
        <AverageContent>
          <AverageTitle>최저 금리</AverageTitle>
          <AverageValue>{longRateDTO[0].minRate}%</AverageValue>
        </AverageContent>
        <AverageContent>
          <AverageTitle>최고 금리</AverageTitle>
          <AverageValue>{longRateDTO[0].maxRate}%</AverageValue>
        </AverageContent>
      </AverageBox>
      <BtnBox>
        <Btn onClick={handleCart}>
          <HiOutlineShoppingCart />
          장바구니에 담기
        </Btn>
        {openModal && <CartModal setOpenModal={setOpenModal} />}
      </BtnBox>
      <DetailBox>
        <DetailBoxTitle>상세정보</DetailBoxTitle>
        <DetailTitle>대출 한도</DetailTitle>
        <DetailContent>{loanLimit}</DetailContent>
        <DetailTitle>연체 이자율</DetailTitle>
        <DetailContent>{delayRate}</DetailContent>
        <DetailTitle>상품 이자율</DetailTitle>
        {longRateDTO.map(
          (item): IItem => (
            <LoanInterest key={item.id} item={item} />
          ),
        )}
        <DetailTitle>대출 부대비용</DetailTitle>
        <DetailContent>{loanIncidentalExpenses}</DetailContent>
        <DetailTitle>중도상환 수수료</DetailTitle>
        <DetailContent>{earlyRepayFee}</DetailContent>
        <DetailTitle>가입방법</DetailTitle>
        <DetailContent>{joinWay}</DetailContent>
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
  border-bottom: 1px solid ${colors["GRAY-4"]};
`;
