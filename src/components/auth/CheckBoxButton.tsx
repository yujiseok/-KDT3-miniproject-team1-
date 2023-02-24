import { Pretendard } from "global/FigmaStyles";
import colors from "constants/colors";
import styled from "styled-components";
import type { FormValues } from "pages/SingUp";
import type { UseFormRegister, RegisterOptions } from "react-hook-form";
import { GroupLeftBox } from "./StyledUtils";

interface Props {
  register: UseFormRegister<FormValues>;
  label: keyof FormValues;

  options?: RegisterOptions;
  Prefix?: JSX.Element;
  name: string;
  typeValue?: number;
}

const CheckBoxButton = ({
  name,
  register,
  label,

  options,
  typeValue,
}: Props) => {
  return (
    <ButtonWarpper>
      <InputComp
        id={name}
        type="radio"
        {...register(`${label}`, options)}
        value={typeValue}
        style={{ display: "none" }}
      />
      <LoginEmail htmlFor={name}>{name}</LoginEmail>
    </ButtonWarpper>
  );
};

export default CheckBoxButton;

const ButtonWarpper = styled(GroupLeftBox)`
  width: fit-content;
  position: relative;
`;

const LoginEmail = styled(Pretendard.withComponent("label"))`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  height: 48px;

  /* Primary Color/INDIGO 9 */
  border: 1px solid ${colors["INDIGO-9"]};
  border-radius: 8px;
`;

const InputComp = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
  width: fit-content;

  &:checked + label {
    background-color: ${colors["INDIGO-9"]};
    color: ${colors["GRAY-1"]};
    padding: 0px 23px 0 41px;

    &::before {
      content: "✔";
      position: absolute;
      left: 16px;
      width: 18px;
      font-size: 18px;
    }
  }
`;
