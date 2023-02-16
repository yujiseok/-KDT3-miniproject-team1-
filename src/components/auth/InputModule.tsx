import { Bold, Pretendard, Info, Input } from "components/untils/FigmaStyles";
import {
  Container,
  TitleBox,
  GroupLeftBox,
} from "components/untils/StyledUntils";
import { MdAlternateEmail, MdInfo } from "react-icons/md";
import colors from "constants/colors";
import styled from "styled-components";
import type { CustomElement, FieldValues } from "react-hook-form";

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

interface Props {
  register: any;
  label?: string;
  type: string;
  options?: Options;
  error?: ErrorType;
}

interface ErrorType {
  message?: string;
  ref?: CustomElement<FieldValues>;
  type?: string;
}

const InputModule = ({
  register,
  label,
  type = "text",
  options = {},
  error = {},
}: Props) => {
  console.log(error);
  return (
    <GroupLeftBox>
      <Pretendard color={colors["GRAY-7"]}>이메일</Pretendard>
      <LoginEmail>
        <MdAlternateEmail />
        <InputComp type={type} {...register(`${label}`, options)} />
      </LoginEmail>
      {error.message && (
        <Info color="#C92A2A">
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
