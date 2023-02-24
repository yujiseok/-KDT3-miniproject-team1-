import { useState } from "react";
import styled from "styled-components";
import colors from "constants/colors";
import { useNavigate } from "react-router-dom";
import ItemList from "components/ItemList";
import { GrFormClose } from "react-icons/gr";
import { postOrder } from "api/orders";
import OrderModal from "components/cart/OrderModal";
import type { Item } from "types/itemType";
import useCart from "hooks/useCart";

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  // 전체 장바구니 데이터 불러오기
  const {
    getCartList: { data: cartItems },
  } = useCart();

  // 카트가 빈 경우
  const emptyCart = cartItems?.length === 0 || !cartItems;
  // 아무것도 선택되지 않은 경우
  const nothingChecked = checkedItems?.length === 0 || !checkedItems;

  // 전체 선택
  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      const newArr: string[] = [];
      cartItems.forEach((item: Item) => newArr.push(item.productId));
      setCheckedItems(newArr);
    } else {
      setCheckedItems([]);
    }
  };

  // 주문하기
  const handleOrder = () => {
    if (nothingChecked) {
      setOpenModal(true);
      return;
    }
    checkedItems?.forEach((item) => postOrder(item));
    navigate("/completeOrder");
  };

  return (
    <Wrapper>
      {emptyCart ? (
        <EmptyCart>장바구니에 담긴 상품이 없습니다.</EmptyCart>
      ) : (
        <>
          <CheckWrapper>
            <CheckBox
              onChange={handleAllChecked}
              checked={checkedItems?.length === cartItems.length}
            />{" "}
            전체 선택
          </CheckWrapper>
          {cartItems &&
            cartItems.map((item: Item) => (
              <ItemList
                key={item.productId}
                item={item}
                icon={<GrFormClose />}
                cart
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
              />
            ))}
        </>
      )}
      {emptyCart ? (
        <CartBtn primary>상품을 담아주세요</CartBtn>
      ) : (
        <CartBtn onClick={handleOrder} primary={false}>
          신청하기
        </CartBtn>
      )}
      {openModal ? <OrderModal /> : ""}
    </Wrapper>
  );
};
export default Cart;

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyCart = styled.p`
  margin-top: 200px;
  margin-bottom: 280px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${colors["GRAY-7"]};
`;

const CheckWrapper = styled.div`
  border-bottom: 1px solid ${colors["GRAY-4"]};
  width: 90%;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

const CartBtn = styled.button<{ primary: boolean }>`
  border-radius: 10px;
  width: 90%;
  font-weight: 700;
  color: ${({ primary }) => (primary ? colors["INDIGO-9"] : "white")};
  border: 1px solid ${colors["INDIGO-9"]};
  background: ${({ primary }) => (primary ? "white" : colors["INDIGO-9"])};
  padding: 10px;
`;
