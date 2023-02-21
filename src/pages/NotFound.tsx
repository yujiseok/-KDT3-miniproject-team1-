import NotFoundIcon from "components/svg/NotFoundIcon";
import colors from "constants/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Block>
      <div>
        <NotFoundIcon />
        <div>
          <h2>이런! 찾으시는 페이지가 아닙니다.</h2>
          <p>404 Page not found</p>
        </div>

        <Link to="/">홈으로 가기</Link>
      </div>
    </Block>
  );
};

const Block = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  svg {
    height: 250px;
  }

  p {
    text-transform: uppercase;
    margin-top: 8px;
    color: ${colors["GRAY-6"]};
  }

  a {
    display: block;
    margin-top: 32px;
    background-color: ${colors["INDIGO-7"]};
    padding: 8px 14px;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
  }
`;

export default NotFound;
