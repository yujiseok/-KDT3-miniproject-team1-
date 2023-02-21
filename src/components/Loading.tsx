import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Bold } from "global/FigmaStyles";

interface Props {
  loading: boolean;
  outerCount: number;
}

// interface Iinterval {
//   (callback: () => void, ms?: number | undefined): NodeJS.Timer;
// }

const Loading = ({ loading, outerCount = 5 }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  console.log("loading 컴포넌트 loading", loading);
  const [count, setCount] = useState<number>(outerCount);
  const interval = useRef<any>(null);
  console.log("재생", loading, count);
  if (count < 1) {
    clearInterval(interval.current);
  }
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((value) => value - 1);
      console.log("실행됨");
      if (count < 1) {
        clearInterval(interval.current);
        interval.current = null;
      }
    }, 1000);

    if (loading) {
      console.log("currents", dialogRef.current);
      if (dialogRef.current) {
        dialogRef.current.close();
        dialogRef.current.showModal();
      }
    }
    return () => {
      clearInterval(interval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function onClose() {
    console.log("닫힘", dialogRef.current!.closest("dialog")?.returnValue);
  }

  return (
    <Diglog ref={dialogRef} onClose={() => onClose()}>
      <Bold>{count}</Bold>

      <Form method="dialog">
        <button value="close">close</button>
        <button value="test">test</button>
      </Form>
    </Diglog>
  );
};

const Diglog = styled.dialog`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  padding: 16px;
  gap: 8px;
  border: 1px solid #000;
  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);

    backdrop-filter: blur(4px);
  }
`;

const Form = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    padding: 8px;
    background-color: #f00;
    border: 1px solid #000;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: auto;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export default Loading;
