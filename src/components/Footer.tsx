import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "constants/colors";

import { BiHomeAlt, BiSearchAlt, BiLogInCircle } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";

const Footer = () => {
  const [clickTab, setClickTab] = useState(0);

  interface TabItem {
    name: string;
    content: JSX.Element;
    path: string;
  }

  const menuContent: TabItem[] = [
    { name: "home", content: <BiHomeAlt />, path: "/" },
    { name: "search", content: <BiSearchAlt />, path: "/search/null" },
    { name: "likes", content: <HiOutlineHeart />, path: "/likes" },
    { name: "login", content: <BiLogInCircle />, path: "/signin" },
  ];

  return (
    <FooterContent>
      <ul>
        {menuContent.map((item, i) => (
          <Link to={item.path} key={item.name}>
            <li
              role="presentation"
              className={i === clickTab ? "tabmenu focused" : "tabmenu"}
              onClick={() => setClickTab(i)}
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
