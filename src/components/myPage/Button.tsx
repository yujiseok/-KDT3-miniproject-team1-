import colors from "constants/colors";
import type { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  primary: boolean;
  children: ReactNode;
  type?: "button" | "submit";
}

const Button = ({ primary, children, type }: Props) => {
  return (
    <Btn primary={primary} type={type}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{ primary: boolean }>`
  padding: 8px 16px;
  background-color: ${(props) =>
    props.primary ? `${colors["INDIGO-6"]}` : `transparent`};
  color: ${(props) => (props.primary ? `#fff` : "#fa5252")};
  border-radius: 4px;
  border: ${(props) => (props.primary ? "none" : "1px solid #fa5252")};
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;
export default Button;
