import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineChevronRight, HiOutlineShoppingCart } from "react-icons/hi2";
import colors from "constants/colors";
import ORDER_ITEM from "data/listData.json";
import ItemList from "components/ItemList";
import { useEffect, useState } from "react";
import Skeleton from "components/SkeletonUi";

interface OrderItem {
  img: string;
  id: string;
  title: string;
  loanName: string;
  rate: string;
}

// const ORDER_ITEM: OrderItem[] = [
//   {
//     img: "https://cdn.banksalad.com/graphic/color/logo/circle/shinhan.png",
//     id: "1",
//     title: "신한은행",
//     loanName: "청년 대출",
//     rate: "3%",
//   },
//   {
//     img: "https://cdn.banksalad.com/graphic/color/logo/circle/kb.png",
//     id: "2",
//     title: "국민은행",
//     loanName: "청년 대출",
//     rate: "3%",
//   },
//   {
//     img: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/83806321_2857019850986112_5528499456942538752_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7-KquQPpgbgAX-qrekc&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBDSr7tPLP3TTdjIkbg3GvsHY-6s_BzWI1He96ZC-4NQg&oe=64116858",
//     id: "3",
//     title: "하나은행",
//     loanName: "청년 대출",
//     rate: "3%",
//   },
// ];

const Likes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(loading);

  return (
    <Block>
      <H1>관심상품</H1>
      <ItemWrapper>
        {loading ? <Skeleton length={ORDER_ITEM.items.length} /> : null}
        {!loading &&
          ORDER_ITEM.items.map((item) => (
            <ItemList
              item={item}
              key={item.id}
              icon={
                <IconWrapper>
                  <HiOutlineChevronRight />
                  <Link to="/cart">
                    <HiOutlineShoppingCart />
                  </Link>
                </IconWrapper>
              }
              cart={false}
            />

            // <List key={id}>
            //   <Link to={`/product/${id}`}>
            //     <div className="wrapper">
            //       <div className="img-wrapper">
            //         <img src={img} alt={title} />
            //       </div>

            //       <LoanWrapper className="loan-wrapper">
            //         <h3>{title}</h3>
            //         <h4>{loanName}</h4>
            //         <div>
            //           <p>금리</p>
            //           <p>{rate}</p>
            //         </div>
            //       </LoanWrapper>
            //     </div>
            //     <HiOutlineChevronRight />
            //   </Link>
            // </List>
          ))}
      </ItemWrapper>
    </Block>
  );
};

const Block = styled.section`
  margin-top: 24px;
  /* padding: 0 16px; */
`;

const H1 = styled.h1`
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors["GRAY-4"]};
`;

const List = styled.li`
  border-bottom: 1px solid ${colors["GRAY-4"]};
  /* border-radius: 4px; */
  padding: 18px 14px;
  /* margin-bottom: 16px; */
  /* box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); */
  a {
    display: flex;
    justify-content: space-between;
  }
  .wrapper {
    display: flex;
    gap: 16px;
  }
  .img-wrapper {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid ${colors["GRAY-0"]};
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const LoanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
`;

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  a {
    width: auto;
  }

  svg {
    font-size: 18px;
  }
`;

export default Likes;
