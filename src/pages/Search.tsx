import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import colors from "constants/colors";
import { RiFileListLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

import data from "data/listData.json";
import { useEffect, useState } from "react";
import ItemList from "components/ItemList";
import type { ItemType } from "./Main";

const Search = () => {
  const location = useLocation();
  const searchValue = location.state;

  const [result, setResult] = useState<Array<ItemType>>([]);

  useEffect(() => {
    async function getData() {
      try {
        await setResult(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (searchValue === null) {
    return (
      <NullContent>
        <BiSearchAlt className="icon" />
        <h3>관심있는 상품을 검색해 보세요.</h3>
      </NullContent>
    );
  }

  const search = searchValue.trim();
  return (
    <SearchContent>
      <h3 className="title">
        <span>{search}</span>에 대한 검색결과입니다.
      </h3>
      {result.length === 0 ? (
        <NullContent>
          <RiFileListLine className="icon" />
          <h3>검색결과가 존재하지 않습니다.</h3>
        </NullContent>
      ) : (
        <ResultContent>
          {result.map((item) => {
            return (
              <ItemList
                key={item.id}
                item={item}
                icon={<MdKeyboardArrowRight />}
              />
            );
          })}
        </ResultContent>
      )}
    </SearchContent>
  );
};

const NullContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  svg {
    margin-top: 250px;
    color: ${colors["GRAY-4"]};
    width: 35%;
    height: 35%;
  }
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  .title {
    margin: 20px 10px;
    letter-spacing: 0.5px;
    font-size: 23px;
    span {
      color: ${colors["INDIGO-9"]};
    }
  }
`;

const ResultContent = styled.ul`
  margin-top: 50px;
`;

export default Search;
