import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineQueueList,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import colors from "constants/colors";
import MaleAvatar from "components/svg/MaleAvatar";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { logoutAction } from "features/authSlice";

interface LinkItem {
  icon?: JSX.Element;
  to: string;
  label: string;
}

const LINK_ITEM: LinkItem[] = [
  {
    icon: <HiOutlineUserCircle />,
    to: "user/password",
    label: "회원정보 수정",
  },
  {
    icon: <HiOutlineQueueList />,
    to: "order",
    label: "신청내역",
  },
  {
    icon: <HiOutlineShoppingCart />,
    to: "/cart",
    label: "장바구니",
  },
  {
    icon: <HiOutlineHeart />,
    to: "likes",
    label: "관심상품",
  },
];

const MyPage = () => {
  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <Block>
      <H1>마이페이지</H1>

      <ProfileWrapper>
        {/* 남성 여성에 따른 아바타? */}
        <MaleAvatar />
        {/* <FemaleAvatar /> */}
        <div>
          <Username>{auth.name}</Username>님 환영합니다.
          <div>
            <LogOutBtn onClick={handleClickLogout}>로그아웃</LogOutBtn>
          </div>
        </div>
      </ProfileWrapper>

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
`;

const H1 = styled.h1`
  margin-bottom: 16px;
`;

const ProfileWrapper = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${colors["GRAY-4"]};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    color: ${colors["INDIGO-8"]};
    font-weight: 600;
  }

  svg {
    border-radius: 50%;
    border: 1px solid ${colors["INDIGO-3"]};
  }
`;

const Username = styled.span`
  color: ${colors["INDIGO-8"]};
  font-weight: 600;
  font-size: 17px;
`;

const LogOutBtn = styled.button`
  margin-top: 8px;
  color: ${colors["RED-9"]};
  padding: 4px;
  border: 1px solid ${colors["RED-9"]};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
`;

const List = styled.li`
  border-bottom: 1px solid ${colors["GRAY-4"]};
  line-height: 1.4;
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
    svg {
      font-size: 20px;
      color: ${colors["GRAY-9"]};
    }
  }
`;

export default MyPage;
