import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineQueueList,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import colors from "constants/colors";

interface LinkItem {
  icon?: JSX.Element;
  to: string;
  label: string;
}

const LINK_ITEM: LinkItem[] = [
  {
    icon: <HiOutlineUserCircle />,
    to: "/user",
    label: "회원정보 수정",
  },
  {
    icon: <HiOutlineQueueList />,
    to: "/order",
    label: "신청내역",
  },
  {
    icon: <HiOutlineShoppingCart />,
    to: "/cart",
    label: "장바구니",
  },
  {
    icon: <HiOutlineHeart />,
    to: "/likes",
    label: "관심상품",
  },
];

const MyPage = () => {
  return (
    <Block>
      <H1>마이페이지</H1>
      <NameWrapper>
        <span>가나다라</span>님 환영합니다.
      </NameWrapper>

      <ul>
        {LINK_ITEM.map(({ icon, label, to }) => (
          <List key={label}>
            <Link to={to}>
              <div>
                {icon}
                {label}
              </div>
              <HiOutlineChevronRight />
            </Link>
          </List>
        ))}
      </ul>
    </Block>
  );
};

const Block = styled.section`
  margin-top: 24px;
  padding: 0 16px;
`;

const H1 = styled.h1`
  margin-bottom: 24px;
`;

const NameWrapper = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${colors["GRAY-4"]};
  border-bottom: 1px solid ${colors["GRAY-4"]};
  margin-bottom: 24px;

  span {
    color: ${colors["INDIGO-8"]};
    font-weight: 600;
  }
`;

const List = styled.li`
  border-bottom: 1px solid ${colors["GRAY-4"]};

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export default MyPage;
