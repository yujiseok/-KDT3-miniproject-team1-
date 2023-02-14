import styled from "styled-components";
import colors from "constants/colors";

// {Bold, Pretendard, info, input}

export const Bold = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const Pretendard = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* identical to box height */

  /* Font Color/Gray 7 */

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;
