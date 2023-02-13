import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard, info, input } from "components/untils/FigmaStyles";
import {
  Container,
  TitleBox,
  GroupLeftBox,
} from "components/untils/StyledUntils";
import colors from "constants/colors";

const SignIn = () => {
  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <GroupLeftBox>이메일</GroupLeftBox>
    </Container>
  );
};
export default SignIn;
