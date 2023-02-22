import { Pretendard, Info, InputFontStyle } from "global/FigmaStyles";
import { MdInfo } from "react-icons/md";
import colors from "constants/colors";
import styled from "styled-components";
import type { FormValues } from "pages/SingUp";
import type {
  FieldError,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";
import { GroupLeftBox } from "./StyledUtils";

interface Props {
  register: UseFormRegister<FormValues>;
  label: keyof FormValues;
  type?: string;
  options?: RegisterOptions;
  error?: FieldError | any;
  Prefix?: JSX.Element;
  name: string;
  placeholder?: string;
}

const InputModule = ({
  name,
  register,
  label,
  type = "text",
  options,
  error,
  Prefix,
  placeholder,
}: Props) => {
  return (
    <GroupLeftBox>
      <Pretendard color={colors["GRAY-7"]}>{name}</Pretendard>
      <LoginEmail>
        {Prefix}
        <InputComp
          type={type}
          placeholder={placeholder}
          autoComplete={label}
          {...register(`${label}`, options)}
        />
      </LoginEmail>
      {error && (
        <Info color={colors["RED-9"]}>
          <MdInfo />
          {error.message}
        </Info>
      )}
    </GroupLeftBox>
  );
};

export default InputModule;

const LoginEmail = styled.div`
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

  border: 1px solid ${colors["INDIGO-9"]};
  border-radius: 8px;
`;

const InputComp = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
  width: 100%;
`;
