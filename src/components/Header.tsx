import styled from "styled-components";

import { FaPiggyBank } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import colors from "constants/colors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value.trim();
    setSearchData(value);
  };

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    if (searchData) {
      e.preventDefault();
      navigate(`/search/${searchData}`, { state: searchData });
      setSearchData("");
    }
  };
  return (
    <HeaderContent>
      <Link to="/">
        <FaPiggyBank size={30} />
      </Link>
      <RightContent>
        <SearchContent onSubmit={submitEvent}>
          <input
            type="text"
            name="search"
            value={searchData}
            onChange={searchValue}
            placeholder="상품을 검색해보세요."
          />
          <button type="submit">
            <BiSearchAlt size={25} />
          </button>
        </SearchContent>
        <Link to="/cart">
          <HiOutlineShoppingCart size={25} />
        </Link>
      </RightContent>
    </HeaderContent>
  );
};

const HeaderContent = styled.header`
  width: 390px;
  height: 50px;
  padding: 13px 20px 7px 25px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  position: fixed;
  top: 0;
  svg {
    color: ${colors["INDIGO-9"]};
  }
`;

const RightContent = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: flex-end;
  position: relative;
  a {
    margin: auto;
    svg {
      float: right;
      color: ${colors["GRAY-9"]};
      cursor: pointer;
    }
  }
`;

const SearchContent = styled.form`
  width: 75%;
  margin-left: 20px;
  position: relative;
  input {
    width: 30px;
    height: 100%;
    border-radius: 10px;
    padding: 0 7px;
    font-size: 15px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    z-index: 3;
    border: 1px solid ${colors["INDIGO-9"]};
    transition: all 1s ease-in-out;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 100%;
      height: 100%;
      opacity: 1;
      z-index: 0;
      border: 1px solid ${colors["INDIGO-9"]};
      cursor: text;
      &::placeholder {
        color: ${colors["GRAY-5"]};
      }
    }
    &:focus ~ svg {
      z-index: 5;
    }
  }
  svg {
    position: absolute;
    top: 3px;
    right: 5px;
    color: ${colors["GRAY-9"]};
    cursor: pointer;
  }
`;

export default Header;
