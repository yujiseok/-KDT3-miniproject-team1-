import { useEffect, useRef, useState } from "react";
import type { AxiosRequestConfig } from "axios";
import { AxiosError } from "axios";
import { client } from "api/api";
import { useNavigate } from "react-router-dom";

// 원래 구조는 useAxios를 사용할 때 필요한 데이터를 미리 전달 받아두고
// 그 데이터를 이용해 axios 요청을 보내는 구조
export const useAxios = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef(new AbortController());
  const navigate = useNavigate();
  const cancelRequest = () => {
    controllerRef.current.abort();
  };

  const fetchData = async (plusUrl: string, params?: AxiosRequestConfig) => {
    setLoading(() => true);
    controllerRef.current = new AbortController();

    try {
      const result = await client.request({
        url: plusUrl,
        ...params,
        signal: controllerRef.current.signal,
      });
      // console.log("", result);
      if (result.data.errorCode) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw "200으로 온 에러";
      }
      setError(undefined); // 상태 초기화
      setResponse(result.data);
    } catch (err: AxiosError | unknown) {
      console.log("에러", err);
      if (err instanceof AxiosError) {
        console.log("에러", err.response?.status);
        if (err.response && err.response.status === 401) {
          console.log("401에러");
        }
      }

      setError(err);
    } finally {
      setLoading(() => false);
    }
  };

  return { fetchData, cancelRequest, response, error, loading };
};
