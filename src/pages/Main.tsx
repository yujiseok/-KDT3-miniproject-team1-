import colors from "constants/colors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemList from "components/ItemList";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

import { getOrder, getProducts } from "api/main";
import { HiOutlineChevronRight } from "react-icons/hi2";
import type { Item } from "types/itemType";

const Main = () => {
  const [recommend, setRecommend] = useState<Array<Item>>([]);
  const [order, setOrder] = useState<Array<Item>>([]);
  const [allProducts, setAllProducts] = useState<Array<Item>>([]);
  const [products, setProducts] = useState<Array<Item>>([]);

  useEffect(() => {
    async function getData() {
      try {
        const orderData = await getOrder();
        const productsData = await getProducts();
        setOrder(orderData);
        setAllProducts(productsData);
        setProducts(productsData.splice(0, 5));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  // 개인신용대출
  const recommend1 = allProducts.filter(
    (item) => item.productType === "개인신용대출",
  );

  // 전세자금대출
  const recommend2 = allProducts.filter(
    (item) => item.productType === "전세자금대출",
  );

  // 주택담보대출
  const recommend3 = allProducts.filter(
    (item) => item.productType === "주택담보대출",
  );

  // 저소득자대출
  const recommend4 = allProducts.filter(
    (item) =>
      item?.loanRateList[0]?.avgRate !== null &&
      item?.loanRateList[0]?.avgRate < 5.1,
  );

  // 직장인대출
  const recommend5 = allProducts.filter((item) =>
    item.productName.includes("직장인"),
  );

  return (
    <MainContent>
      {/* 비회원용 */}
      {/* <TitleContent>
        <h2>
          안녕하세요 <span>Lonsily</span> 입니다.
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
        <TitleContent>
          <h2>가장 인기 있는 대출 상품입니다.</h2>
        </TitleContent>
        {products.length > 0
          ? products.map((item) => {
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
      </RecommendContent> */}

      {/* 회원용 */}
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
          {order.length !== 0 ? (
            order.map((item) => {
              return (
                <SwiperSlide key={item.cartId}>
                  <ItemList item={item} icon={<HiOutlineChevronRight />} />
                </SwiperSlide>
              );
            })
          ) : (
            <SwiperSlide>
              <p>신청하신 상품이 없습니다.</p>
            </SwiperSlide>
          )}
        </Swiper>
      </OrderContent>

      <RecommendContent>
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
      .swiper-slide {
        p {
          font-size: 18px;
          text-align: center;
          color: ${colors["GRAY-6"]};
        }
      }
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
