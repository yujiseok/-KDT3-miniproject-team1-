import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
export const client = axios.create(config);
