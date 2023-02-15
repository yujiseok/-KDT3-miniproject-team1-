import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import colors from "constants/colors";

interface ICartModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal = ({ setOpenModal }: ICartModalProps) => {
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
      <Wrapper>
        선택한 상품이 장바구니에 담겼습니다.
        <BtnBox>
          <Btn primary onClick={checkCart}>
            장바구니 확인
          </Btn>
          <Btn primary={false} onClick={keepShopping}>
            계속 쇼핑하기
          </Btn>
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

const Btn = styled.button<{ primary: boolean }>`
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${({ primary }) => (primary ? colors["INDIGO-9"] : "white")};
  color: ${({ primary }) => (primary ? colors["INDIGO-9"] : "white")};
  background-color: ${({ primary }) =>
    primary ? "white" : colors["INDIGO-9"]};
  padding: 10px;
`;
