import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard, Info, Input } from "components/untils/FigmaStyles";
import {
  Container,
  TitleBox,
  GroupLeftBox,
} from "components/untils/StyledUntils";
import colors from "constants/colors";

import { useForm } from "react-hook-form";

import { useState } from "react";
import InputModule from "components/auth/InputModule";

interface ErrorType {
  message?: string;
  ref?: HTMLElement;
  type?: string;
}
interface IForm {
  [index: string]: string | ErrorType | undefined;
  email?: string | ErrorType | undefined;
  password?: string | ErrorType | undefined;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        {forms.map(({ label, type, options }) => (
          <InputModule
            key={label}
            register={register}
            label={label}
            type={type}
            options={options}
            error={errors[label]}
          />
        ))}

        <button type="submit">로그인</button>
      </form>
    </Container>
  );
};
export default SignIn;

interface Forms {
  label: string;
  type: string;
  options?: Options;
}

type Options = {
  required?: FormHandler | boolean;
  min?: FormHandler | any;
  max?: FormHandler | any;
  minLength?: FormHandler | number;
  maxLength?: FormHandler | number;
  pattern?: FormHandler | RegExp;
  validate?: FormHandler | any;
};
type FormHandler = {
  value: string | boolean | number | RegExp;
  message: string;
};

const forms: Forms[] = [
  {
    label: "email",
    type: "text",
    options: {
      required: { value: true, message: "이메일을 작성해주세요" },
      pattern: {
        value: /@naver.com/,
        message: "naver.com 이메일만 가능합니다.",
      },
    },
  },
  { label: "password", type: "text" },
];
