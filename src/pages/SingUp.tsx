import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard, Info } from "global/FigmaStyles";
import { Container, TitleBox, GroupLeftBox } from "components/auth/StyledUtils";
import colors from "constants/colors";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldError, RegisterOptions } from "react-hook-form";
import { MdAlternateEmail, MdInfo } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import InputModule from "components/auth/InputModule";
import SecurityNumberInput from "components/auth/SecurityNumberInput";
import CheckBoxButton from "components/auth/CheckBoxButton";

interface InputField {
  Prefix?: JSX.Element;
  name: string;
  label: string;
  type?: string;
  options?: RegisterOptions;
  placeholder?: string;
}

type IForm = Record<string, FieldError | string>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IForm>();
  const a = Object.keys(watch()).length;
  const b = Object.keys(errors).length;

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  useEffect(() => {
    handleSubmit(onSubmit)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputs: InputField[] = [
    {
      name: "이름",
      label: "name",
      placeholder: "홍길동",
      options: {
        required: { value: true, message: "이름을 작성해주세요" },
        pattern: {
          value: /^[가-힣]+$/,
          message: "한글로 작성해주세요",
        },
        minLength: {
          value: 2,
          message: "이름은 2글자 이상 작성해주세요",
        },
      },
    },
    {
      name: "이메일",
      label: "email",
      placeholder: "email@example.com",
      options: {
        required: { value: true, message: "이메일을 작성해주세요" },
        pattern: {
          value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "이메일 주소를 다시 확인해주세요.",
        },
      },
    },
    {
      name: "비밀번호",
      label: "new-password",
      type: "password",
      placeholder: "Password",
      options: {
        required: { value: true, message: "비밀번호를 작성해주세요" },
        pattern: {
          value:
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
          message: "8-20자 영문, 숫자, 특수문자를 사용하세요",
        },
      },
    },
    {
      name: "비밀번호 확인",
      label: "current-password",
      type: "password",
      placeholder: "Password",
      options: {
        required: { value: true, message: "비밀번호를 다시 작성해주세요" },
        pattern: {
          value:
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
          message: "8-20자 영문, 숫자, 특수문자를 사용하세요",
        },
        // eslint-disable-next-line consistent-return
        validate: (val: string) => {
          if (watch("new-password") !== val) {
            return "비밀번호가 일치하지 않습니다";
          }
        },
      },
    },
  ];

  const interestsLabel = "interest";

  const interests: InputField[] = [
    {
      name: "신용대출",
      label: interestsLabel,
      options: {
        // eslint-disable-next-line consistent-return
        validate: () => {
          if (
            watch(interestsLabel)?.length === undefined ||
            watch(interestsLabel).length === 0 ||
            watch(interestsLabel) === false
          ) {
            return "옵션을 선택해주세요";
          }
        },
      },
    },
    {
      name: "생활비대출",
      label: interestsLabel,
    },
    {
      name: "주택담보대출",
      label: interestsLabel,
    },
    {
      name: "저소득자대출",
      label: interestsLabel,
    },
    {
      name: "학자금 대출",
      label: interestsLabel,
    },
  ];
  return (
    <Container>
      <TitleBox>
        <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        <Bold>회원가입</Bold>
      </TitleBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map(({ label, type, options, Prefix, name, placeholder }) => (
          <InputModule
            key={label}
            Prefix={Prefix}
            name={name}
            placeholder={placeholder}
            register={register}
            label={label}
            type={type}
            options={options}
            error={
              typeof errors[label] !== "string" ? errors[label] : undefined
            }
          />
        ))}
        <SecurityNumberInput
          register={(text, option) => register(text, option)}
          options={{
            pattern: {
              value: /^[0-9]$/,
              message: "숫자만 입력 가능합니다",
            },
            required: {
              value: true,
              message: "주민번호 뒷자리를 작성해주세요",
            },
            // eslint-disable-next-line consistent-return
          }}
          error={{ front: errors.front, back: errors.back }}
        />
        <GroupLeftBox>
          <Pretendard color={colors["GRAY-7"]}>가입 목적</Pretendard>

          <InterestBox>
            {interests.map(({ label, options, name }) => (
              <CheckBoxButton
                key={name}
                label={label}
                name={name}
                register={register}
                options={options}
              />
            ))}
          </InterestBox>
          {errors.interest && (
            <Info color={colors["RED-9"]}>
              <MdInfo />
              {errors.interest.message}
            </Info>
          )}
        </GroupLeftBox>

        <SummitBox>
          <Button type="submit">
            <Bold color={colors["GRAY-0"]}>
              회원가입 {a - b}/{a}
            </Bold>
          </Button>
          <Signin color={colors["GRAY-9"]}>
            <Link to="/signin"> 로그인</Link>
          </Signin>
        </SummitBox>
      </Form>
      <TitleBox />
    </Container>
  );
};
export default SignUp;

const Signin = styled(Pretendard)`
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

const reactIcons = {
  verticalAlign: "middle",
  width: "24px",
  height: "24px",
  color: colors["INDIGO-9"],
};

const Form = styled(Container.withComponent("form"))`
  position: relative;
  padding: 0;
  height: fit-content;
`;

const InterestBox = styled(GroupLeftBox)`
  flex-direction: row;
  flex-wrap: wrap;
`;
