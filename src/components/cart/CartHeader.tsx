import React from "react";
import styled from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import colors from "constants/colors";

const CartHeader = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <button onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft />
      </button>
      <h1>장바구니</h1>
      <div />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 56px;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 20px;
    color: ${colors["GRAY-9"]};
  }
`;

export default CartHeader;
