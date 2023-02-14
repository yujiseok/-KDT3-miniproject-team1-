import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard, Info, Input } from "components/untils/FigmaStyles";
import {
  Container,
  TitleBox,
  GroupLeftBox,
} from "components/untils/StyledUntils";
import colors from "constants/colors";

import { useState } from "react";
import InputModule from "components/auth/InputModule";

interface IForm {
  email?: string;
  password?: string;
}

const SignIn = () => {
  const [form, setForm] = useState<IForm>({});

  function ChangeState(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log("target", event.target);
    console.log("value", name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log(form.email);
        }}
      >
        <InputModule ChangeState={() => ChangeState} form={form} />

        <button type="submit">로그인</button>
      </form>
    </Container>
  );
};
export default SignIn;
