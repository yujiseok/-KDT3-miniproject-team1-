import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://15.164.195.118:3100/",
};

console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
export const client = axios.create(config);
