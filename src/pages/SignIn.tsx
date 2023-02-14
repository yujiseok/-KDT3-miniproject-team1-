import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard, Info, Input } from "components/untils/FigmaStyles";
import {
  Container,
  TitleBox,
  GroupLeftBox,
} from "components/untils/StyledUntils";
import colors from "constants/colors";
import { MdAlternateEmail } from "react-icons/md";

const SignIn = () => {
  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <GroupLeftBox>
        <Pretendard color={colors["GRAY-7"]}>이메일</Pretendard>
        <LoginEmail>
          <MdAlternateEmail />
        </LoginEmail>
      </GroupLeftBox>
    </Container>
  );
};
export default SignIn;

const LoginEmail = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 12px;
  gap: 12px;

  width: 366px;
  height: 48px;

  /* Primary Color/INDIGO 9 */

  border: 1px solid #364fc7;
  border-radius: 8px;
`;
