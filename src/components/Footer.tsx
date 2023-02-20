import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "constants/colors";

import { BiHomeAlt, BiSearchAlt, BiLogInCircle } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi";

const Footer = () => {
  const [clickTab, setClickTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(1, 7) === "search") {
      setClickTab(1);
    }
  }, [location.pathname]);

  interface TabItem {
    name: string;
    content: JSX.Element;
    path: string;
  }

  const nonMemberMenu: TabItem[] = [
    { name: "home", content: <BiHomeAlt />, path: "/" },
    { name: "search", content: <BiSearchAlt />, path: "/search/page" },
    { name: "likes", content: <HiOutlineHeart />, path: "/mypage/likes" },
    { name: "login", content: <BiLogInCircle />, path: "/signin" },
  ];

  const memberMenu: TabItem[] = [
    { name: "home", content: <BiHomeAlt />, path: "/" },
    { name: "search", content: <BiSearchAlt />, path: "/search/page" },
    { name: "likes", content: <HiOutlineHeart />, path: "/mypage/likes" },
    { name: "mypage", content: <HiOutlineUserCircle />, path: "/mypage" },
  ];

  return (
    <FooterContent>
      <ul role="navigation">
        {memberMenu.map((item, i) => (
          <Link to={item.path} key={item.name} onClick={() => setClickTab(i)}>
            <li
              className={
                item.path === location.pathname ? "tabmenu focused" : "tabmenu"
              }
            >
              {item.content}
            </li>
          </Link>
        ))}
      </ul>
    </FooterContent>
  );
};

const FooterContent = styled.footer`
  height: 60px;
  width: 390px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  ul {
    display: flex;
    height: 100%;
    border-top: 1px solid ${colors["GRAY-4"]};
    box-shadow: 0 -5px 5px -3px ${colors["GRAY-4"]};
    a {
      margin: auto;
      .tabmenu {
        list-style: none;
        svg {
          color: ${colors["INDIGO-1"]};
          font-size: 30px;
        }
      }
      .focused {
        list-style: none;
        svg {
          color: ${colors["INDIGO-9"]};
          font-size: 30px;
        }
      }
    }
  }
`;

export default Footer;
