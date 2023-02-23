import colors from "constants/colors";
import type { ItemType } from "pages/Main";
import type { SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ListProps {
  item: ItemType;
  icon: JSX.Element;
  cart?: boolean;
  checkedItems?: string[];
  setCheckedItems?: React.Dispatch<SetStateAction<string[]>>;
}

const ItemList = ({
  item,
  icon,
  cart,
  checkedItems,
  setCheckedItems,
}: ListProps) => {
  const detailUrl = `/product/${item.productId}`;
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (!checkedItems || !setCheckedItems) {
      return;
    }
    if (checked) {
      setCheckedItems((prev) => [...prev, item.productId]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== item.productId));
    }
  };
  return (
    <ListContent cart={typeof cart === "boolean" ? cart : false}>
      <CheckBox
        cart={typeof cart === "boolean" ? cart : false}
        onChange={handleChecked}
        checked={!!checkedItems?.includes(item.productId)}
      />
      <Link to={detailUrl}>
        <ImgContent>
          <img src={item.bankImgPath} alt="bank img" />
        </ImgContent>

        <TextContent cart={typeof cart === "boolean" ? cart : false}>
          <h3>{item.bankName}</h3>
          <p>{item.productName}</p>
          {item.loanRateList[0].avgRate === null ? (
            <h2>
              평균
              {(item.loanRateList[0].maxRate + item.loanRateList[0].minRate) /
                2}
              %
            </h2>
          ) : (
            <h2>평균 {item.loanRateList[0].avgRate}%</h2>
          )}
          <TagContent>{/* <span>{item.type}</span> */}</TagContent>
        </TextContent>
      </Link>
      <IconContent>{icon}</IconContent>
    </ListContent>
  );
};

const ListContent = styled.li<{ cart: boolean }>`
  display: flex;
  gap: 10px;
  width: ${(props) => (props.cart ? "80%" : "95%")};
  border-bottom: 1px solid ${colors["INDIGO-1"]};
  margin-bottom: 30px;
  padding-bottom: 25px;
  a {
    display: flex;
    justify-content: center;
    align-items: ${(props) => (props.cart ? "center" : "normal")};
    width: 90%;
  }
  &:last-child {
    border: none;
  }
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })<{ cart: boolean }>`
  display: ${(props) => (props.cart ? "block" : "none")};
  border: 1px solid #999;
`;

const ImgContent = styled.div`
  width: 16%;
  margin-left: 10px;
  margin-right: 10px;
  img {
    width: 100%;
    margin-top: 7px;
  }
`;

const TextContent = styled.div<{ cart: boolean }>`
  width: 75%;
  padding-left: 10px;
  h3 {
    margin-bottom: 5px;
    font-size: ${(props) => (props.cart ? "16px" : "22px")};
    &:first-child {
      font-size: ${(props) => (props.cart ? "16px" : "20px")};
    }
  }
  p {
    color: ${colors["GRAY-6"]};
    font-size: ${(props) => (props.cart ? "14px" : "")};
    margin-bottom: 10px;
  }
`;

const TagContent = styled.div`
  margin-top: 10px;
  span {
    background-color: ${colors["INDIGO-9"]};
    color: ${colors["INDIGO-1"]};
    font-size: 13px;
    border-radius: 50px;
    padding: 3px 7px;
  }
`;

const IconContent = styled.div`
  width: 10%;
  padding-top: 10px;
  svg {
    float: right;
  }
`;

export default ItemList;
