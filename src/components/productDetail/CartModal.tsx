import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

interface ICartModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ setOpenModal }: ICartModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const checkCart = () => {
    setOpenModal(false);
    navigate("/cart");
  };

  const keepShopping = () => {
    setOpenModal(false);
  };

  return (
    <Overlay>
      <Wrapper ref={modalRef}>
        선택한 상품이 장바구니에 담겼습니다.
        <BtnBox>
          <CheckCart onClick={checkCart}>장바구니 확인</CheckCart>
          <KeepShopping onClick={keepShopping}>계속 쇼핑하기</KeepShopping>
        </BtnBox>
      </Wrapper>
    </Overlay>
  );
};

export default CartModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 35%;
  padding: 15px;
  width: 30%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border-radius: 10px;
  background-color: #fff;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const CheckCart = styled.button`
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #364fc7;
  background-color: #dbe4ff;
  padding: 10px;
`;

const KeepShopping = styled.button`
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  background-color: #364fc7;
  color: #fff;
  padding: 10px;
`;
