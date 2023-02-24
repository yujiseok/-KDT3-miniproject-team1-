import { client } from "./api";

const headers = {
  // accept: "application/json;charset=UTF-8",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjo4LFwiZW1haWxcIjpcImNvY29AZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcImF1dGhvcml0aWVzXCI6bnVsbCxcImFjY291bnROb25FeHBpcmVkXCI6ZmFsc2UsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjpmYWxzZSxcImFjY291bnROb25Mb2NrZWRcIjpmYWxzZSxcInBhc3N3b3JkXCI6bnVsbCxcInVzZXJuYW1lXCI6XCJjb2NvQGVtYWlsLmNvbVwifSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MjA3MzkxLCJleHAiOjE2NzcyMTA5OTF9.tdQeiTKU5-nUWJzlSbYVVyJBwTGohtPBPigEfiUqIM4",
};
export const getLikeLists = async () => {
  const { data } = await client.get("/like", {
    headers,
  });

  return data.data;
};

export const postLikeLists = async (productId: string) => {
  const { data } = await client.post("/like", {
    headers,
    data: {
      productId,
    },
  });

  return data.data;
};

export const deleteLikeList = async (id: number) => {
  const { data } = await client.delete("/like", {
    headers,
    data: {
      id,
    },
  });

  console.log(data);

  return data;
};
