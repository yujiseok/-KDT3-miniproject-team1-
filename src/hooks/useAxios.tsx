import { useEffect, useRef, useState } from "react";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { client } from "api/api";
import { useNavigate } from "react-router-dom";

// 원래 구조는 useAxios를 사용할 때 필요한 데이터를 미리 전달 받아두고
// 그 데이터를 이용해 axios 요청을 보내는 구조
export const useAxios = (plusUrl: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const navigate = useNavigate();
  const cancelRequest = () => {
    controllerRef.current.abort();
  };

  const fetchData = async (params?: AxiosRequestConfig) => {
    setLoading(true);

    console.log("in");
    controllerRef.current = new AbortController();
    try {
      const result = await client.request({
        url: plusUrl,
        ...params,
        signal: controllerRef.current.signal,
      });
      console.log("result", result.status, result.data);
      setResponse(result.data);
    } catch (err: AxiosError | unknown) {
      console.log("catch", err);
    } finally {
      console.log("finally");
      setLoading(false);
    }
  };

  useEffect(() => {
    // 함수식만 선언해놓고 다른 변수에서 사용되는 구조
    return () => {
      console.log("out");
      cancelRequest();
      console.log("out2");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { fetchData, cancelRequest, response, error, loading };
};
