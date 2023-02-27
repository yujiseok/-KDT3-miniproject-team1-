import styled from "styled-components";
import Button from "components/myPage/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextFiled from "components/myPage/TextFiled";
import { useNavigate } from "react-router-dom";
import { deleteUser, editUser } from "api/user";
import { useAppDispatch } from "app/hooks";
import { logoutAction } from "features/authSlice";
import { useMutation } from "@tanstack/react-query";

const validationSchema = z
  .object({
    name: z.string().min(2, "2글자 이상 입력해주세요."),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요.")
      .max(20, "비밀번호는 20자 이하로 입력해주세요.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
        "8-20자 영문, 숫자, 특수문자를 사용하세요.",
      ),
    confirmPassword: z
      .string()
      .min(8, "비밀번호는 8자 이상 입력해주세요.")
      .max(20, "비밀번호는 20자 이하로 입력해주세요.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/,
        "8-20자 영문, 숫자, 특수문자를 사용하세요.",
      ),
    asset: z.number().nullable(),
    income: z.number().nullable(),
    job: z.string().min(2, "직업을 입력해주세요.").nullable(),
    region: z.string().min(2, "지역을 입력해주세요.").nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type EditValues = z.infer<typeof validationSchema>;

interface IUserForm {
  onSubmit: (data: EditValues) => void;
}

const UserForm = ({ onSubmit }: IUserForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditValues>({
    resolver: zodResolver(validationSchema),
  });
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const deleteMutation = useMutation(() => deleteUser(), {
    onSuccess(data) {
      dispatch(logoutAction());
      alert(data);
      navigate("/");
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextFiled
        id="name"
        label="이름"
        placeholder="2글자 이상 입력해주세요."
        error={errors.name?.message}
        register={register("name")}
      />

      <TextFiled
        id="password"
        label="비밀번호 변경"
        type="password"
        placeholder="8-20자 영문, 숫자, 특수문자를 사용하세요."
        error={errors.password?.message}
        register={register("password")}
      />
      <TextFiled
        id="confirmPassword"
        label="비밀번호 확인"
        type="password"
        placeholder="8-20자 영문, 숫자, 특수문자를 사용하세요."
        error={errors.confirmPassword?.message}
        register={register("confirmPassword")}
      />

      {/* 선택 정보 추가 해야함 */}
      <BtnWrapper>
        <Button primary disabled={isSubmitting} type="submit">
          {isSubmitting ? <span>제출중...</span> : <span>정보 수정</span>}
        </Button>
        <Button primary={false} onClick={() => deleteMutation.mutate()}>
          회원 탈퇴
        </Button>
      </BtnWrapper>
    </Form>
  );
};

const Form = styled.form`
  margin: 16px 0;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 8px;
  margin-top: 24px;
`;
export default UserForm;
