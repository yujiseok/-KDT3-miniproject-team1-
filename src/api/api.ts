import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://15.164.195.118:3333/",
};

export const client = axios.create(config);
