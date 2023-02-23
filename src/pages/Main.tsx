import colors from "constants/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "components/ItemList";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import data from "data/listData.json";
import { HiOutlineChevronRight } from "react-icons/hi2";

export type ItemType = {
  productId: string;
  productName: string;
  bankName: string;
  bankImgPath: string;
  avg_rate: string;
  type: string;
};

// export type Itemtype = {
//   id: string;
//   productName: string;
//   bankName: string;
//   bankImgPath: string;
//   categoryName: string;
//   loanRateList: LoanRateList[];
// };

// interface LoanRateList {
//   id: number;
//   rateType: string;
//   repayType: string;
//   minRate: number;
//   maxRate: number;
//   avgRate: number;
//   mortgageType: string;
// }

const Main = () => {
  const [recommend, setRecommend] = useState<Array<ItemType>>([]);

  useEffect(() => {
    async function getData() {
      try {
        await setRecommend(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  // return (
  //   <MainContent>
  //     <TitleContent>
  //       <h2>
  //         <span>###</span> 님이
  //         <br />
  //         신청하신 대출 정보 입니다.
  //       </h2>
  //     </TitleContent>

  //     <OrderContent>
  //       <Swiper
  //         modules={[Pagination]}
  //         pagination={{ clickable: true }}
  //         loop={false} // 루프 슬라이드
  //         spaceBetween={10} // 슬라이드간의 간격
  //         slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
  //       >
  //         {recommend.map((item) => {
  //           return (
  //             <SwiperSlide key={item.id}>
  //               <ItemList item={item} icon={<HiOutlineChevronRight />} />
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>
  //     </OrderContent>
  //   </MainContent>
  // );

  return (
    <MainContent>
      {/* <TitleContent>
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
      </BtnContent> */}

      <TitleContent>
        <h2>
          <span>###</span> 님이
          <br />
          신청하신 대출 정보 입니다.
        </h2>
      </TitleContent>

      <OrderContent>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={false} // 루프 슬라이드
          spaceBetween={10} // 슬라이드간의 간격
          slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
        >
          {recommend.map((item) => {
            return (
              <SwiperSlide key={item.productId}>
                <ItemList item={item} icon={<HiOutlineChevronRight />} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </OrderContent>

      <RecommendContent>
        {/* <h2>가장 인기 있는 대출 상품입니다.</h2> */}
        <h2 className="recommend">
          <span>###</span> 님의 맞춤 대출 정보 입니다.
        </h2>
        {recommend.length > 0
          ? recommend.map((item) => {
              return (
                <ItemList
                  key={item.productId}
                  item={item}
                  icon={
                    <Link to={`/product/${item.productId}`}>
                      <HiOutlineChevronRight />
                    </Link>
                  }
                />
              );
            })
          : null}
      </RecommendContent>
    </MainContent>
  );
};

const MainContent = styled.div`
  padding: 90px 12px 0 12px;
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

const OrderContent = styled.div`
  .swiper {
    display: flex;
    flex-flow: row;
    .swiper-wrapper {
      display: flex;
      flex-flow: row;
    }
    .swiper-pagination-bullet {
      background-color: transparent;
      border: 1px solid ${colors["INDIGO-9"]};
      opacity: 1;
      margin: 0 2px;
    }
    .swiper-pagination-bullet-active {
      background-color: ${colors["INDIGO-9"]};
    }
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

const RecommendContent = styled.ul`
  margin-top: 50px;
  .recommend {
    margin-bottom: 40px;
    span {
      color: ${colors["INDIGO-9"]};
    }
  }
`;

export default Main;
