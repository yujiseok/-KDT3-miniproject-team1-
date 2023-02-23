import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import colors from "constants/colors";
import Pagination from "components/Pagination";
import { RiFileListLine } from "react-icons/ri";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { getSearch } from "api/search";
// import data from "data/listData.json";
import { useEffect, useState } from "react";
import ItemList from "components/ItemList";
import type { Item } from "types/itemType";

const Search = () => {
  const location = useLocation();
  const searchValue = location.state;
  const search = searchValue.trim();

  const [result, setResult] = useState<Array<Item>>([]);

  const [page, setPage] = useState<number>(1);
  const limit = 4;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getData() {
      try {
        const searchData = await getSearch(0, 70, "", searchValue);
        setResult(searchData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [location, searchValue]);

  console.log(result);

  if (searchValue === null) {
    return (
      <NullContent>
        <BiSearchAlt className="icon" />
        <h3>관심있는 상품을 검색해 보세요.</h3>
      </NullContent>
    );
  }

  return (
    <SearchContent>
      <h3 className="title">
        <span>{search}</span>에 대한 검색결과입니다.
      </h3>
      {result === undefined ? (
        <NullContent>
          <RiFileListLine className="icon" />
          <h3>검색결과가 존재하지 않습니다.</h3>
        </NullContent>
      ) : (
        <ResultContent>
          {result.slice(offset, offset + limit).map((item) => {
            return (
              <ItemList
                key={item.id}
                item={item}
                icon={<HiOutlineChevronRight />}
              />
            );
          })}
          {Array.isArray(result) ? (
            <Pagination
              total={result.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          ) : null}
        </ResultContent>
      )}
    </SearchContent>
  );
};

const NullContent = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 90px;
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
  margin-top: 90px;
  .title {
    margin: 0 10px;
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
