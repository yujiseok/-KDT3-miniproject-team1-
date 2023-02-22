import type {
  FieldError,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";
import type { FormValues } from "pages/SingUp";
import { Pretendard, Info, InputFontStyle } from "global/FigmaStyles";
import { MdInfo } from "react-icons/md";
import colors from "constants/colors";
import styled from "styled-components";
import { GroupLeftBox } from "./StyledUtils";

interface Props {
  register: UseFormRegister<FormValues>;
  options?: RegisterOptions;
  error?: Errors;
}

type Errors = {
  front?: FieldError;
  back?: FieldError;
};

const frontOptions = {
  required: { value: true, message: "주민번호 앞자리를 입력해주세요" },
  pattern: {
    value: /^[0-9]{6}$/,
    message: "앞 자리는 6자리 숫자로 입력해주세요",
  },
};

const InputModule = ({ register, options, error }: Props) => {
  return (
    <GroupLeftBox>
      <Pretendard color={colors["GRAY-7"]}>
        주민번호 앞 자리 + 뒷자리 1자리
      </Pretendard>
      <LoginEmail>
        <Test>
          <InputComp
            type="text"
            inputMode="numeric"
            maxLength={6}
            {...register(`front`, frontOptions)}
            placeholder="YYMMDD"
            autoComplete="SecurityFrontNumber"
          />
        </Test>
        <InputFontStyle color={colors["GRAY-9"]}>-</InputFontStyle>
        <Test2>
          <InputPassword
            type="password"
            inputMode="numeric"
            size={1}
            maxLength={1}
            {...register(`back`, options)}
            placeholder="0"
            autoComplete="SecurityBackNumber"
          />
          ●●●●●●
        </Test2>
      </LoginEmail>
      {error?.front && (
        <Info color={colors["RED-9"]}>
          <MdInfo />
          {error?.front.message}
        </Info>
      )}
      {error?.back && (
        <Info color={colors["RED-9"]}>
          <MdInfo />
          {error?.back.message}
        </Info>
      )}
    </GroupLeftBox>
  );
};

export default InputModule;

const LoginEmail = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 48px;
`;

const Test = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 100%;
  /* Primary Color/INDIGO 9 */
  border: 1px solid ${colors["INDIGO-9"]};
  border-radius: 8px;
`;

const Test2 = styled(Test)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: none;
  padding: 0px;
  gap: 4px;
`;

const InputComp = styled.input`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.color || colors["GRAY-9"]};
  width: 100%;
`;

const InputPassword = styled(InputComp)`
  padding: 0px;
  text-align: center;

  width: 32px;
  height: 48px;

  /* Primary Color/INDIGO 9 */

  border: 1px solid #364fc7;
  border-radius: 8px;
`;
