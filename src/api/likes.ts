import { client } from "./api";

export const getLikeLists = async () => {
  const { data } = await client.get("/like", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MDcwMjY5LCJleHAiOjE2NzcxMDYyNjl9.9bJfszToLmXfW7q6zrG_KeMNu5FwfPotQiE3qXGBYHY`,
    },
  });

  return data.data;
};

export const postLikeLists = async (productId: string) => {
  const { data } = await client.post(`/like`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MDY3Mzk5LCJleHAiOjE2NzcxMDMzOTl9.hgFtFx93_dgZkCWepxsspV0MdvJd9jfKohgBrg2hRIw`,
    },
    data: {
      productId,
    },
  });

  return data.data;
};

export const deleteLikeList = async (id: number) => {
  const { data } = await client.delete(`/like`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjoxLFwiZW1haWxcIjpcInRlc3RAZW1haWwuY29tXCIsXCJqd3RUeXBlXCI6XCJBQ0NFU1NcIixcImVuYWJsZWRcIjpmYWxzZSxcInVzZXJuYW1lXCI6XCJ0ZXN0QGVtYWlsLmNvbVwiLFwicGFzc3dvcmRcIjpudWxsLFwiYXV0aG9yaXRpZXNcIjpudWxsLFwiYWNjb3VudE5vbkV4cGlyZWRcIjpmYWxzZSxcImNyZWRlbnRpYWxzTm9uRXhwaXJlZFwiOmZhbHNlLFwiYWNjb3VudE5vbkxvY2tlZFwiOmZhbHNlfSIsImlzcyI6IjEgdGVhbSBiYWNrZW5kIiwiaWF0IjoxNjc3MDY3Mzk5LCJleHAiOjE2NzcxMDMzOTl9.hgFtFx93_dgZkCWepxsspV0MdvJd9jfKohgBrg2hRIw`,
    },
    data: {
      id,
    },
  });

  return data.data;
};
