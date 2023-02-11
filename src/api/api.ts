import type { AxiosRequestConfig } from "axios";
import axios from "axios";

const config: AxiosRequestConfig = {
  baseURL: "",
};

export const client = axios.create(config);
