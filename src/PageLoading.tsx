import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Bold } from "global/FigmaStyles";
import GlobalStyles from "global/globalStyles";

// interface Iinterval {
//   (callback: () => void, ms?: number | undefined): NodeJS.Timer;
// }

const Loading = () => {
  const interval = useRef<any>(null);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((value) => {
        if (value > 2) return 0;
        return value + 1;
      });
    }, 500);
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arr = Array(count).fill(".");

  console.log(arr);
  return (
    <Box>
      <Bold color="#fff">로딩 중{arr.join("")}</Bold>

      <GlobalStyles />
    </Box>
  );
};

const Box = styled.div`
  max-width: 390px;
  margin: auto;
  background-color: #666;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default Loading;
