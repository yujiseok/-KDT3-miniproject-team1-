import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Bold, Pretendard } from "global/FigmaStyles";
import { Container, TitleBox } from "components/auth/StyledUtils";
import colors from "constants/colors";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { RegisterOptions } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import InputModule from "components/auth/SigninInputModule";
import Loading from "Loading";

import { useAxios } from "hooks/useLoginAxios";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  loginAction,
  selectAccessToken,
  selectuserInfo,
} from "features/authSlice";

const validationSchema = z.object({
  email: z
    .string()
    .min(0, "이메일을 입력해주세요")
    .regex(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 주소를 확인해주세요.",
    ),
  currentPassword: z
    .string()
    .min(8, "비밀번호는 8자 이상 입력해주세요.")
    .max(20, "비밀번호는 20자 이하로 입력해주세요.")
    .regex(
      /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,

      "8-20자 영문, 숫자, 특수문자를 사용하세요.",
    ),
});

export type FormValues = z.infer<typeof validationSchema>;

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
  },
  {
    name: "비밀번호",
    label: "currentPassword",
    Prefix: <CgLock style={reactIcons} />,
    type: "password",
    placeholder: "Password",
  },
];

interface InputFields {
  Prefix?: JSX.Element;
  name: string;
  label: keyof FormValues;
  type?: string;
  options?: RegisterOptions;
  placeholder?: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });
  const navigate = useNavigate();
  const { fetchData, cancelRequest, response, error, loading } = useAxios();

  const dispatch = useAppDispatch();
  const TokenUpdate = useAppSelector(selectAccessToken);
  useEffect(() => {
    if (TokenUpdate) {
      console.log("잘못된 접근, 엑세스토큰 있음");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TokenUpdate]);
  console.log("response", response);
  useEffect(() => {
    if (response) {
      dispatch(loginAction(response.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const count = useAppSelector(selectAccessToken);
  console.log("엑세스토큰", count);
  const info = useAppSelector(selectuserInfo);
  console.log("info", info);

  const onSubmit = (data: FormValues) => {
    fetchData("/login", {
      method: "post",
      data: {
        email: data.email,
        password: data.currentPassword,
      },
    });
  };

  return (
    <Container>
      {/* {loading ? (
        <Loading
          loading={loading}
          outerCount={5}
          cancelRequest={cancelRequest}
        />
      ) : null} */}
      <TitleBox>
        <Link to="/">
          <Bold color={colors["INDIGO-9"]}>사이트 이름</Bold>
        </Link>
        <Bold>회원 로그인</Bold>
      </TitleBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map(({ label, type, Prefix, name, placeholder }) => (
          <InputModule
            key={label}
            Prefix={Prefix}
            name={name}
            register={register}
            placeholder={placeholder}
            label={label}
            type={type}
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
