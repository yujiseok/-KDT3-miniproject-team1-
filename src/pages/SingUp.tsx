import { Link, useNavigate } from "react-router-dom";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Loading from "Loading";
import { useAxios } from "hooks/useLoginAxios";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { loginAction, selectAccessToken } from "features/authSlice";

// validationSchema.z.object[interestsLabel] 이 되야함
const interestsLabel = "interest";

const validationSchema = z
  .object({
    username: z
      .string()
      .min(2, "2글자 이상 입력해주세요.")
      .regex(/^[가-힣]+$/, "한글로 입력해주세요"),
    email: z
      .string()
      .min(0, "이메일을 입력해주세요")
      .regex(
        /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "이메일 주소를 확인해주세요.",
      ),
    newPassword: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요.")
      .max(20, "비밀번호는 20자 이하로 입력해주세요.")
      .regex(
        /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,

        "8-20자 영문, 숫자, 특수문자를 사용하세요.",
      ),
    currentPassword: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요.")
      .max(20, "비밀번호는 20자 이하로 입력해주세요.")
      .regex(
        /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,

        "8-20자 영문, 숫자, 특수문자를 사용하세요.",
      ),
    interest: z
      .string()
      .nullable()
      .refine(
        (data) => data !== null,

        { message: "가입 목적을 선택해주세요." },
      ),
    front: z
      .string()
      .min(0, "주민번호 앞자리를 입력하세요")
      .max(6, "주민번호 앞자리를 6자 이하로 입력해주세요.")
      .regex(/^[0-9]+$/, "숫자만 입력 가능합니다"),
    back: z
      .string()
      .min(0, "주민번호 뒷자리를 입력하세요")
      .max(1, "주민번호 앞자리를 1자 이하로 입력해주세요.")
      .regex(/^[0-9]$/, "숫자만 입력 가능합니다"),
  })
  .refine((data) => data.newPassword === data.currentPassword, {
    path: ["currentPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type FormValues = z.infer<typeof validationSchema>;

interface InputField {
  Prefix?: JSX.Element;
  name: string;
  label: string;
  type?: string;
  options?: RegisterOptions;
  placeholder?: string;
  typeValue?: number;
}

type IForm = Record<string, FieldError | string>;

const interests: InputField[] = [
  {
    name: "신용대출",
    label: interestsLabel,
    typeValue: 1,
  },
  {
    name: "생활비대출",
    label: interestsLabel,
    typeValue: 2,
  },
  {
    name: "주택담보대출",
    label: interestsLabel,
    typeValue: 3,
  },
  {
    name: "저소득자대출",
    label: interestsLabel,
    typeValue: 4,
  },
  {
    name: "학자금 대출",
    label: interestsLabel,
    typeValue: 5,
  },
];
const SignUp = () => {
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const { fetchData, cancelRequest, response, error, loading } = useAxios();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const TokenUpdate = useAppSelector(selectAccessToken);
  useEffect(() => {
    if (TokenUpdate) {
      console.log("잘못된 접근, 엑세스토큰 있음");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TokenUpdate]);

  useEffect(() => {
    if (response) {
      dispatch(loginAction(response));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const onSubmit = (data: FormValues) => {
    fetchData("/signUp", {
      method: "post",
      data: {
        email: data.email,
        password: data.currentPassword,
        name: data.currentPassword,
        brith: `${data.front}${data.back}`,
        joinType: Number(data.interest),
      },
    });
    // navigate("/");
  };

  const inputs: InputField[] = [
    {
      name: "이름",
      label: "name",
      placeholder: "홍길동",
      options: {
        required: { value: true, message: "이름을 입력해주세요" },
        pattern: {
          value: /^[가-힣]+$/,
          message: "한글로 입력해주세요",
        },
        minLength: {
          value: 2,
          message: "이름은 2글자 이상 입력해주세요",
        },
      },
    },
    {
      name: "이메일",
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
      label: "new-password",
      type: "password",
      placeholder: "8-20자 영문, 숫자, 특수문자를 사용하세요",
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
    {
      name: "비밀번호 확인",
      label: "current-password",
      type: "password",
      placeholder: "8-20자 영문, 숫자, 특수문자를 사용하세요",
      options: {
        required: { value: true, message: "비밀번호를 다시 입력해주세요" },
        minLength: { value: 8, message: "비밀번호는 8자 이상 입력해주세요." },
        maxLength: {
          value: 20,
          message: "비밀번호는 20자 이하로 입력해주세요.",
        },
        // pattern: {
        //   value:
        //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
        //   message: "8-20자 영문, 숫자, 특수문자를 사용하세요",
        // },
        // eslint-disable-next-line consistent-return
        validate: (val: string) => {
          // if (watch("new-password") !== val) {
          //   return "비밀번호가 일치하지 않습니다";
          // }
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
            // [] 또는 선언되지 않는 경우가 있음
            !!watch(interestsLabel).length === false ||
            // 초기 값이 false인 경우가 있음
            !!watch(interestsLabel) === false
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
      {loading ? (
        <Loading
          loading={loading}
          outerCount={5}
          cancelRequest={cancelRequest}
        />
      ) : null}
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
          register={register}
          options={{
            pattern: {
              value: /^[0-9]$/,
              message: "숫자만 입력 가능합니다",
            },
            required: {
              value: true,
              message: "주민번호 뒷자리를 입력해주세요",
            },
            // eslint-disable-next-line consistent-return
          }}
          error={{ front: errors.front, back: errors.back }}
        />
        <GroupLeftBox>
          <Pretendard color={colors["GRAY-7"]}>가입 목적</Pretendard>

          <InterestBox>
            {interests.map(({ label, name, typeValue }) => (
              <CheckBoxButton
                key={name}
                label={label}
                name={name}
                register={register}
                typeValue={typeValue}
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
            <Bold color={colors["GRAY-0"]}>회원가입</Bold>
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
  font-family: Pretendard;
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
