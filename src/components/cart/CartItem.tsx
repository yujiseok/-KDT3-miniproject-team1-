import styled from "styled-components";
import colors from "constants/colors";
import { GrFormClose } from "react-icons/gr";

const CartItem = () => {
  return (
    <Wrapper>
      <CheckBox />
      <BankImg
        src="https://cdn.banksalad.com/graphic/color/logo/circle/woori.png"
        alt="은행 이미지"
      />
      <ProductContent>
        <ProductTitle>우리 금융인클럽 신용대출</ProductTitle>
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
      </ProductContent>
      <GrFormClose className="closeBtn" />
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.li`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 1px solid ${colors["GRAY-4"]};
  svg {
    position: absolute;
    top: 15px;
    right: 0;
    color: red;
    background-color: red;
  }
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 10px;
  height: 10px;
  border: 1px solid #999;
  position: relative;
`;

const BankImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const ProductTitle = styled.h2`
  padding: 0 15px;
  font-size: 14px;
  font-weight: 700;
`;

const AverageBox = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const AverageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AverageTitle = styled.p`
  font-weight: 600;
  font-size: 13px;
  color: #605e5e;
`;

const AverageValue = styled.p`
  font-weight: 800;
  font-size: 13px;
`;
