import styled from "styled-components";
import colors from "constants/colors";

// {Bold, Pretendard, info, input}

export const Bold = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const Pretendard = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* identical to box height */

  /* Font Color/Gray 7 */

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const info = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;

export const input = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: ${(props) => props.color || colors["GRAY-9"]};
`;
