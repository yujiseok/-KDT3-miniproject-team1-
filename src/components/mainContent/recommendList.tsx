import colors from "constants/colors";
import type { RecommendType } from "pages/Main";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface ListProps {
  item: RecommendType;
}

const RecommendList = ({ item }: ListProps) => {
  const productUrl = `/product/${item.id}`;
  return (
    <ListContent>
      <ImgContent>
        <img src={item.bankimg} alt="bank img" />
      </ImgContent>

      <TextContent>
        <h3>{item.bank}</h3>
        <p>{item.title}</p>
        <h3>평균 {item.avg_rate}%</h3>
        <TagContent>
          <span>{item.type}</span>
        </TagContent>
      </TextContent>

      <Link to={productUrl}>
        <ArrowContent>
          <MdKeyboardArrowRight size={22} />
        </ArrowContent>
      </Link>
    </ListContent>
  );
};

const ListContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${colors["INDIGO-1"]};
  margin-bottom: 30px;
  padding-bottom: 25px;
  &:last-child {
    border: none;
  }
`;

const ImgContent = styled.div`
  width: 13%;
  margin-right: 20px;
  img {
    width: 90%;
    margin-top: 7px;
  }
`;

const TextContent = styled.div`
  width: 60%;
  h3 {
    margin-bottom: 5px;
    font-size: 22px;
    &:first-child {
      font-size: 20px;
    }
  }
  p {
    color: ${colors["GRAY-6"]};
    margin-bottom: 10px;
  }
`;

const TagContent = styled.div`
  margin-top: 10px;
  span {
    background-color: ${colors["INDIGO-9"]};
    color: ${colors["INDIGO-1"]};
    font-size: 13px;
    border-radius: 50px;
    padding: 3px 7px;
  }
`;

const ArrowContent = styled.div`
  width: 10%;
  padding-top: 10px;
`;

export default RecommendList;
