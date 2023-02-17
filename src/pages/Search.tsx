import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  return (
    <SearchContent>
      <BiSearchAlt />
    </SearchContent>
  );
};

const SearchContent = styled.div``;

export default Search;
