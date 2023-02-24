import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://15.164.195.118:3100/",
  headers: { "Content-type": "application/json" },
};

export const client = axios.create(config);

client.interceptors.request.use((config) => {
  if (!config.headers) return config;

  const { accessToken } = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root") as string).auth,
  );

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status !== 401 || config.sent) {
      return Promise.reject(error);
    }

    const { data: accessToken } = await axios.post(
      "http://15.164.195.118:3100/refresh",
    );

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return axios(config);
  },
);
