import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard } from "global/FigmaStyles";
import { Container, TitleBox } from "components/auth/StyledUtils";
import colors from "constants/colors";

import { useForm } from "react-hook-form";
import type { FieldError, RegisterOptions } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import InputModule from "components/auth/InputModule";

const reactIcons = {
  verticalAlign: "middle",
  width: "24px",
  height: "24px",
  color: colors["INDIGO-9"],
};

const inputs: InputFields[] = [
  {
    name: "이메일",
    Prefix: <MdAlternateEmail style={reactIcons} />,
    label: "email",
    placeholder: "email@example.com",
    options: {
      required: { value: true, message: "이메일을 입력해주세요" },
      pattern: {
        value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "이메일 주소를 확인해주세요.",
      },
    },
  },
  {
    name: "비밀번호",
    label: "current-password",
    Prefix: <CgLock style={reactIcons} />,
    type: "password",
    placeholder: "Password",
    options: {
      required: { value: true, message: "비밀번호를 입력해주세요" },
      minLength: { value: 8, message: "비밀번호는 8자 이상 입력해주세요." },
      maxLength: {
        value: 20,
        message: "비밀번호는 20자 이하로 입력해주세요.",
      },
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
        message: "8-20자 영문, 숫자, 특수문자를 사용하세요",
      },
    },
  },
];

type IForm = Record<string, FieldError | string>;

interface InputFields {
  Prefix?: JSX.Element;
  name: string;
  label: string;
  type?: string;
  options?: RegisterOptions;
  placeholder?: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const navigate = useNavigate();

  const onSubmit = (data: IForm) => {
    console.log(data);
    navigate("/");
  };

  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map(({ label, type, options, Prefix, name, placeholder }) => (
          <InputModule
            key={label}
            Prefix={Prefix}
            name={name}
            register={register}
            placeholder={placeholder}
            label={label}
            type={type}
            options={options}
            error={
              typeof errors[label] !== "string" ? errors[label] : undefined
            }
          />
        ))}
        <SummitBox>
          <Button type="submit">
            <Bold color={colors["GRAY-0"]}>로그인</Bold>
          </Button>
          <Signup color={colors["INDIGO-9"]}>
            <Link to="/signup"> 회원가입</Link>
          </Signup>
        </SummitBox>
      </Form>
    </Container>
  );
};
export default SignIn;

const Signup = styled(Pretendard)`
  text-decoration-line: underline;
`;

const SummitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: fit-content;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 48px;

  /* Primary Color/INDIGO 9 */

  background: ${colors["INDIGO-9"]};
  border-radius: 10px;
`;

const Form = styled(Container.withComponent("form"))`
  padding: 0;
  height: fit-content;
`;
