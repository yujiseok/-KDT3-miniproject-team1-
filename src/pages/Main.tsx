import colors from "constants/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendList from "components/mainContent/recommendList";
import { Link, useNavigate } from "react-router-dom";

import data from "data/listData.json";

export type RecommendType = {
  id: string;
  title: string;
  bank: string;
  bankimg: string;
  avg_rate: string;
  type: string;
};

const Main = () => {
  const navigate = useNavigate();
  const [recommend, setRecommend] = useState<Array<RecommendType>>([]);

  useEffect(() => {
    async function getData() {
      try {
        setRecommend(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <MainContent>
      <TitleContent>
        <h2>
          안녕하세요 <span>사이트 이름</span> 입니다.
        </h2>
        <h2>
          로그인을 통해 <br />
          맞춤 대출 정보를 확인해 보세요.
        </h2>
      </TitleContent>

      <BtnContent>
        <Link to="/signup">
          <BtnWhite>회원가입</BtnWhite>
        </Link>

        <Link to="/signin">
          <BtnIndigo>로그인</BtnIndigo>
        </Link>
      </BtnContent>

      <RecommendContent>
        <h2>가장 인기 있는 대출 상품입니다.</h2>
        {recommend.length > 0
          ? recommend.map((item) => {
              return <RecommendList key={item.id} item={item} />;
            })
          : null}
      </RecommendContent>
    </MainContent>
  );
};

const MainContent = styled.div`
  padding: 0 12px 0 12px;
`;

const TitleContent = styled.div`
  font-size: 17px;
  h2 {
    margin-bottom: 30px;
    line-height: 35px;
    letter-spacing: 0.5px;
    span {
      color: ${colors["INDIGO-9"]};
    }
  }
`;

const BtnContent = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  a {
    width: 35%;
  }
`;

const BtnWhite = styled.button`
  background-color: #fff;
  color: ${colors["INDIGO-9"]};
  border: 1px solid ${colors["INDIGO-9"]};
  border-radius: 10px;
  width: 100%;
  padding: 13px 0;
  font-weight: 700;
`;

const BtnIndigo = styled.button`
  background-color: ${colors["INDIGO-9"]};
  color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 13px 0;
  font-weight: 700;
`;

const RecommendContent = styled.div`
  margin-top: 70px;
  h2 {
    margin-bottom: 30px;
  }
`;
export default Main;
