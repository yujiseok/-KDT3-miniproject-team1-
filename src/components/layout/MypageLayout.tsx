import Footer from "components/Footer";
import Header from "components/myPage/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MyPageLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  padding: 0 12px;
`;
export default MyPageLayout;
