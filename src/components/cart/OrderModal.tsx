import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import colors from "constants/colors";

interface IOrderModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const orderModal = () => {
  return (
    <Overlay>
      <Wrapper>
        상품을 선택해주세요
        <BtnBox>
          <Btn>닫기</Btn>
        </BtnBox>
      </Wrapper>
    </Overlay>
  );
};

export default orderModal;

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

const Btn = styled.button`
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${colors["INDIGO-9"]};
  color: white;
  background-color: ${colors["INDIGO-9"]};
  padding: 10px;
`;
