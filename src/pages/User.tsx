import colors from "constants/colors";
import styled, { css } from "styled-components";
import { useState } from "react";
import Button from "components/myPage/Button";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { zodResolver } from "@hookform/resolvers/zod";
import * as yup from "yup";
import { z } from "zod";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(2, "2 글자 이상으로 작성해주세요")
    .required("이름을 입력해주세요"),
  oldPassword: yup
    .string()
    .min(8, "비밀번호는 8자 이상 입력해주세요")
    .max(20, "비밀번호는 20자 이하로 입력해주세요")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
      "8자 이상 20자 이하 영어 대·소문자, 숫자, 특수문자!@#$%^&*가 포함되어야 합니다.",
    )
    .required("비밀번호를 입력해주세요"),
  newPassword: yup
    .string()
    .oneOf([yup.ref("oldPassword")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 입력해주세요"),
});

const validationSchema = z
  .object({
    username: z.string().min(2, "2 글자 이상으로 입력해주세요"),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요")
      .max(20, "비밀번호는 20자 이하로 입력해주세요")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,

        "8자 이상 20자 이하 영어 대·소문자, 숫자, 특수문자!@#$%^&*가 포함되어야 합니다.",
      ),
    confirmPassword: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요")
      .max(20, "비밀번호는 20자 이하로 입력해주세요")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,

        "8자 이상 20자 이하 영어 대·소문자, 숫자, 특수문자!@#$%^&*가 포함되어야 합니다.",
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

// interface FormValues {
//   username: string;
//   password: string;
//   confirmPassword: string;
// }

type FormValues = z.infer<typeof validationSchema>;

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  console.log(errors);

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <Block>
      <H1>회원정보 수정</H1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* 컴포넌트 분리해야 개별 포커싱 */}
        <InputWrapper>
          <Label htmlFor="username" focused={focused}>
            이름
          </Label>
          <input
            {...register("username")}
            onFocus={onFocus}
            onBlur={onBlur}
            type="text"
            id="username"
          />
        </InputWrapper>
        <ErrorMessage>{errors.username?.message}</ErrorMessage>
        <InputWrapper>
          <Label htmlFor="password" focused={focused}>
            비밀번호 변경
          </Label>
          <input
            {...register("password")}
            onFocus={onFocus}
            onBlur={onBlur}
            type="password"
            id="password"
          />
        </InputWrapper>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <InputWrapper>
          <Label htmlFor="newPassword" focused={focused}>
            비밀번호 확인
          </Label>
          <input
            {...register("confirmPassword")}
            onFocus={onFocus}
            onBlur={onBlur}
            type="password"
            id="newPassword"
          />
        </InputWrapper>
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
        {/* 선택 정보 추가 해야함 */}
        <BtnWrapper>
          <Button primary type="submit">
            정보 수정
          </Button>
          <Button primary={false}>회원 탈퇴</Button>
        </BtnWrapper>
      </Form>
    </Block>
  );
};

const Block = styled.section`
  margin-top: 24px;
  /* padding: 0 16px; */
`;
const H1 = styled.h1`
  margin-bottom: 24px;
  padding-bottom: 12px;
  position: relative;
  display: inline-block;
`;

const Form = styled.form`
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;

  input {
    padding: 6px 8px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border: 1px solid ${colors["GRAY-3"]};
    color: ${colors["GRAY-8"]};

    &:focus {
      border-color: ${colors["INDIGO-3"]};
    }

    &::placeholder {
      color: ${colors["GRAY-7"]};
    }
  }

  input:focus + label {
    color: ${colors["INDIGO-3"]};
  }
`;

const Label = styled.label<{ focused?: boolean }>`
  /* ${(props) =>
    props.focused &&
    css`
      color: ${colors["INDIGO-6"]};
    `} */
`;

const ErrorMessage = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fa5252;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 8px;
  margin-top: 24px;
`;

export default User;
