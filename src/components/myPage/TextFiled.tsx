import colors from "constants/colors";
import type { ChangeEvent, FocusEvent, RefCallback } from "react";
import styled, { css } from "styled-components";

interface ITextFiled {
  id:
    | "name"
    | "password"
    | "confirmPassword"
    | "asset"
    | "income"
    | "job"
    | "region";
  label:
    | "이름 *"
    | "비밀번호 변경 *"
    | "비밀번호 확인 *"
    | "총 자산"
    | "소득"
    | "직업"
    | "지역";
  type?: "text" | "password";
  error?: string;
  placeholder?: string;
  register?: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    ref: RefCallback<HTMLInputElement>;
    name: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
}

const TextFiled = ({
  id,
  label,
  type,
  error,
  placeholder,
  register,
}: ITextFiled) => {
  return (
    <>
      <InputWrapper>
        <Label htmlFor={id}>{label}</Label>
        <input
          {...(register ?? {})}
          type={type ?? "text"}
          id={id}
          placeholder={placeholder}
        />
      </InputWrapper>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};
export default TextFiled;

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
      font-size: 14px;
    }
  }
`;

const Label = styled.label<{ focus?: boolean }>`
  /* ${(props) =>
    props.focus &&
    css`
      color: ${colors["INDIGO-6"]};
    `} */
`;
const ErrorMessage = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fa5252;
`;
