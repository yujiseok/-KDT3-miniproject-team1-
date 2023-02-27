import type { EditValues } from "components/myPage/UserForm";
import type { FormValues } from "pages/SingUp";
import { client } from "./api";

export const confirmPassword = async (pw: string) => {
  const res = await client.post("/users/password", {
    pw,
  });

  return res;
};

export const signUp = async (data: FormValues) => {
  console.log(data);
  const res = await client.post("/signUp", {
    email: data.email,
    password: data.currentPassword,
    name: data.currentPassword,
    brith: `${data.front}${data.back}`,
    joinType: Number(data.interest),
  });

  console.log(res);
};

export const editUser = async (data: EditValues) => {
  const res = await client.put("/users/me", {
    name: data.name,
    password: data.password,
    asset: data.asset,
    income: data.income,
    job: data.job,
    region: data.region,
  });
  console.log(res.data);
};

export const logoutUser = async () => {
  const res = await client.post("/user/logout");
};

export const deleteUser = async () => {
  const res = await client.delete("/users/me");
};
