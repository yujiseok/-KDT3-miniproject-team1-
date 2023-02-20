import colors from "constants/colors";
import type { ItemType } from "pages/Main";
import type { SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ListProps {
  item: ItemType;
  icon: JSX.Element;
  cart: boolean;
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
  const detailUrl = `/product/${item.id}`;
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (!checkedItems || !setCheckedItems) {
      return;
    }
    if (checked) {
      setCheckedItems((prev) => [...prev, item.id]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== item.id));
    }
  };
  return (
    <ListContent cart={cart}>
      <CheckBox
        cart={cart}
        onChange={handleChecked}
        checked={!!checkedItems?.includes(item.id)}
      />
      <Link to={detailUrl}>
        <ImgContent>
          <img src={item.bankimg} alt="bank img" />
        </ImgContent>

        <TextContent>
          <h3>{item.bank}</h3>
          <p>{item.title}</p>
          <h3>평균 {item.avg_rate}%</h3>
          <TagContent>
            <span>{item.type}</span>
          </TagContent>
        </TextContent>
      </Link>
      <IconContent>{icon}</IconContent>
    </ListContent>
  );
};

const ListContent = styled.li<{ cart: boolean }>`
  display: flex;
  gap: 10px;
  width: ${(props) => (props.cart ? "80%" : "100%")};
  border-bottom: 1px solid ${colors["INDIGO-1"]};
  margin-bottom: 30px;
  padding-bottom: 25px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  width: 13%;
  margin-right: 20px;
  img {
    width: 90%;
    margin-top: 7px;
  }
`;

const TextContent = styled.div`
  width: 60%;
  h3 {
    margin-bottom: 5px;
    font-size: 22px;
    &:first-child {
      font-size: 20px;
    }
  }
  p {
    color: ${colors["GRAY-6"]};
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
