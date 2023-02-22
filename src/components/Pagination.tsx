import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import colors from "constants/colors";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <ArrowBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdArrowBackIosNew />
      </ArrowBtn>
      {Array(numPages)
        .fill(undefined)
        .map((_, idx) => {
          return (
            <NumBtn
              // eslint-disable-next-line react/no-array-index-key
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              current={page === idx + 1 ? "true" : "false"}
            >
              {idx + 1}
            </NumBtn>
          );
        })}
      <ArrowBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <MdArrowForwardIos />
      </ArrowBtn>
    </Nav>
  );
};

const NumBtn = styled.li<{ current: string }>`
  display: flex;
  align-items: center;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 30px;
  height: 30px;
  justify-content: center;
  border-radius: 50%;
  ${(props) =>
    props.current === "true" &&
    `
      background-color: ${colors["INDIGO-9"]};
      color: #fff;
    `}
  ${(props) =>
    props.current === "false" &&
    `
      &:hover {
        background-color: #f0f0f0;
      }
    `}
`;

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export default Pagination;
