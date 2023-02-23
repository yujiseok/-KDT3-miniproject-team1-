import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineChevronRight, HiOutlineShoppingCart } from "react-icons/hi2";
import colors from "constants/colors";
import ItemList from "components/ItemList";
import Skeleton from "components/SkeletonUi";
import { useQuery } from "@tanstack/react-query";
import { getLikeLists } from "api/likes";
import type { Item } from "types/itemType";

const Likes = () => {
  // const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery<Item[]>({
    queryKey: ["like"],
    queryFn: getLikeLists,
  });

  return (
    <Block>
      <H1>관심상품</H1>
      <ItemWrapper>
        {isLoading ? <Skeleton length={4} /> : null}
        {!isLoading &&
          data?.map((item) => (
            <ItemList
              item={item}
              key={item.productId}
              icon={
                <IconWrapper>
                  <Link to={`/product/${item.productId}`}>
                    <HiOutlineChevronRight />
                  </Link>
                  <Link to="/cart">
                    <HiOutlineShoppingCart />
                  </Link>
                </IconWrapper>
              }
            />
          ))}
      </ItemWrapper>
    </Block>
  );
};

const Block = styled.section`
  margin-top: 24px;
`;

const H1 = styled.h1`
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors["GRAY-4"]};
`;

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  a {
    width: auto;
  }

  svg {
    font-size: 18px;
  }
`;

export default Likes;
