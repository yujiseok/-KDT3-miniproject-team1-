import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { confirmPassword } from "api/user";
import Button from "components/myPage/Button";
import TextFiled from "components/myPage/TextFiled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { z } from "zod";

const validationSchema = z.object({
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상 입력해주세요.")
    .max(20, "비밀번호는 20자 이하로 입력해주세요.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,

      "8-20자 영문, 숫자, 특수문자를 사용하세요.",
    ),
});

export type FormValues = z.infer<typeof validationSchema>;

const Password = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  // {
  //   resolver: zodResolver(validationSchema),
  // }

  const confirmMutation = useMutation((pw: string) => confirmPassword(pw), {
    onSuccess(data) {
      navigate("/mypage/user");
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    confirmMutation.mutate(data.password);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextFiled
        id="password"
        label="비밀번호 확인 *"
        placeholder="8-20자 영문, 숫자, 특수문자를 사용하세요."
        error={errors.password?.message}
        register={register("password")}
        type="password"
      />

      <BtnWrapper>
        <Button primary disabled={isSubmitting} type="submit">
          {isSubmitting ? <span>제출중...</span> : <span>비밀번호 확인</span>}
        </Button>
      </BtnWrapper>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 64px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Password;
