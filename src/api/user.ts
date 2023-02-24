import { client } from "./api";

const headers = {
  // accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjozMDUzLFwiZW1haWxcIjpcInRlc3QzQGVtYWlsLmNvbVwiLFwiand0VHlwZVwiOlwiQUNDRVNTXCIsXCJlbmFibGVkXCI6ZmFsc2UsXCJhdXRob3JpdGllc1wiOm51bGwsXCJhY2NvdW50Tm9uRXhwaXJlZFwiOmZhbHNlLFwiY3JlZGVudGlhbHNOb25FeHBpcmVkXCI6ZmFsc2UsXCJhY2NvdW50Tm9uTG9ja2VkXCI6ZmFsc2UsXCJwYXNzd29yZFwiOm51bGwsXCJ1c2VybmFtZVwiOlwidGVzdDNAZW1haWwuY29tXCJ9IiwiaXNzIjoiMSB0ZWFtIGJhY2tlbmQiLCJpYXQiOjE2NzcxNjA2ODQsImV4cCI6MTY3NzE2NDI4NH0.Rap2wCU6vvLJeedjbqVr_rf6ZvzDaaDTx78iYLnA_gw",
};

export const confirmPassword = async (pw: string) => {
  const res = await client.post("/users/password", {
    headers,
    data: {
      pw,
    },
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
