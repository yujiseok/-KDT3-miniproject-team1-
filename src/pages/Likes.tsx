import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineChevronRight, HiOutlineShoppingCart } from "react-icons/hi2";
import colors from "constants/colors";
import ItemList from "components/ItemList";
import Skeleton from "components/SkeletonUi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLikeList, getLikeLists } from "api/likes";
import type { Item } from "types/itemType";
import { GrFormClose } from "react-icons/gr";

const Likes = () => {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<Item[]>({
    queryKey: ["like"],
    queryFn: getLikeLists,
  });

  const deleteMutation = useMutation((id: number) => deleteLikeList(id), {
    onSuccess(data) {
      console.log(data.success);
      queryClient.invalidateQueries(["like"]);
    },
  });

  return (
    <Block>
      <H1>
        {(data?.length as number) < 1
          ? "관심상품 목록이 비었습니다."
          : "관심상품"}
      </H1>
      <ItemWrapper>
        {data && isLoading ? (
          <Skeleton length={4} />
        ) : (
          data?.map((item) => (
            <ItemList
              item={item}
              key={item.productId}
              icon={
                <button
                  onClick={() => deleteMutation.mutate(item.likeId as number)}
                >
                  <GrFormClose size={24} />
                </button>
              }
            />
          ))
        )}
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
