import { useMutation } from "@tanstack/react-query";
import { editUser } from "api/user";
import type { EditValues } from "components/myPage/UserForm";
import UserForm from "components/myPage/UserForm";
import styled from "styled-components";

const User = () => {
  const editMutation = useMutation((data: EditValues) => editUser(data), {
    onSuccess(data) {
      console.log(data);
    },
  });
  const onSubmit = (data: EditValues) => {
    console.log(data);
    editMutation.mutate(data);
  };

  return (
    <Block>
      <H1>회원정보 수정</H1>
      <UserForm onSubmit={onSubmit} />
    </Block>
  );
};

const Block = styled.section`
  margin-top: 24px;
  /* padding: 0 16px; */
`;
const H1 = styled.h1`
  margin-bottom: 24px;
  padding-bottom: 12px;
  position: relative;
  display: inline-block;
`;

export default User;
