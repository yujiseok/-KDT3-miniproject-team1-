import styled from "styled-components";

// {Container, TitleBox, GroupLeftBox }

/**
 * 빈 가운데 정렬 컴포넌트
 * @color : 글자색
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  gap: 24px;

  position: relative;
  width: 100vw;
  height: 100%;

  background: #ffffff;
`;

/**
 * 로그인에 사용된 정렬용 빈 컴포넌트
 *   TitleBox 컴포넌트
 * 상하 여백 24px , 상하 보더 1px
 * @color : 글자색
 */
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  gap: 8px;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  height: fit-content;
`;

/**
 * 로그인에 사용된 정렬용 빈 컴포넌트
 * @color : 글자색
 */
export const GroupLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 100%;
  height: fit-content;
`;
