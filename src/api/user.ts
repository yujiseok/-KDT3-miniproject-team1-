import { client } from "./api";

export const confirmPassword = async (password: string) => {
  const res = await client.post("/users/password", {
    // 추가
  });
};

export const editUser = async (password: string) => {
  const res = await client.put("/users", {
    // 추가
  });
};
