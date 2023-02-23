import colors from "constants/colors";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <button onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft />
      </button>

      <h1>
        <Link to="/">Lonsliy</Link>
      </h1>

      <div />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 58px;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-right: 28px;
    /* font-size: 28px; */
    color: ${colors["INDIGO-9"]};
  }

  svg {
    font-size: 20px;
    color: ${colors["GRAY-9"]};
  }
`;

export default PageHeader;
