import { useAppSelector } from "app/hooks";
import colors from "constants/colors";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageHeader = () => {
  const navigate = useNavigate();
  const {
    auth: { accessToken },
  } = useAppSelector((state) => state);

  return (
    <StyledHeader>
      {accessToken ? (
        <button onClick={() => navigate(-1)}>
          <HiOutlineChevronLeft />
        </button>
      ) : null}

      <H1 accessToken={accessToken}>
        <Link to="/">Lonsliy</Link>
      </H1>

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

  svg {
    font-size: 20px;
    color: ${colors["GRAY-9"]};
  }
`;

const H1 = styled.h1<{ accessToken: string }>`
  margin-right: ${(props) => (props.accessToken ? "28px" : 0)};
  text-align: ${(props) => (props.accessToken ? "left" : "center")};
  color: ${colors["INDIGO-9"]};
  width: ${(props) => (props.accessToken ? "auto" : "100%")};
`;

export default PageHeader;
