import styled from "styled-components";
import colors from "constants/colors";
import { GrFormClose } from "react-icons/gr";
import ItemList from "components/ItemList";

const CartItem = ({ item }: any) => {
  console.log(item);
  return (
    <Wrapper>
      {/* <CheckBox /> */}
      {/* <ItemList item={item} icon={<GrFormClose />} /> */}
      {/* <CloseBtn>
        <GrFormClose className="closeBtn" />
      </CloseBtn> */}
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.ul`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 1px solid ${colors["GRAY-4"]};
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })<{ cart: boolean }>`
  width: 10px;
  height: 10px;
  border: 1px solid #999;
  position: relative;
`;

// const BankImg = styled.img`
//   width: 30px;
//   height: 30px;
//   margin-left: 10px;
// `;

// const ProductContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-right: 15px;
// `;

// const ProductTitle = styled.h2`
//   padding: 0 15px;
//   font-size: 14px;
//   font-weight: 700;
// `;

// const AverageBox = styled.div`
//   padding: 0 15px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const AverageContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const AverageTitle = styled.p`
//   font-weight: 600;
//   font-size: 13px;
//   color: #605e5e;
// `;

// const AverageValue = styled.p`
//   font-weight: 800;
//   font-size: 13px;
// `;

// const CloseBtn = styled.div`
//   position: absolute;
//   top: 15px;
//   right: 0;
//   .closeBtn path {
//     stroke: #605e5e;
//     cursor: pointer;
//   }
// `;
