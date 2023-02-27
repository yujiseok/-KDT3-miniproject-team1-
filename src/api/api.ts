import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://15.164.195.118:3100/",
  headers: { "Content-type": "application/json" },
  // withCredentials: true,
  timeout: 1000,
};

export const client = axios.create(config);
const { accessToken } = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root") as string).auth,
);
client.interceptors.request.use((config) => {
  if (!config.headers) return config;

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

    if (status !== 401 || config.url !== "/refresh") {
      return Promise.reject(error);
    }
    if (accessToken && status === 401) {
      const { data: newAccessToken } = await axios.post(
        `${config.baseURL}/refresh`,
      );

      config.headers.Authorization = `Bearer ${newAccessToken}`;
    }

    return axios(config);
  },
);
