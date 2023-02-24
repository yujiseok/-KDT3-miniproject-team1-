import { client } from "./api";

export const confirmPassword = async (pw: string) => {
  const res = await client.post("/users/password", {
    pw,
  });

  return res;
};

export const editUser = async (password: string) => {
  const res = await client.put("/users/me", {
    data: {},
  });
};

export const deleteUser = async (id: number) => {
  const res = await client.delete("/users/me");
};
