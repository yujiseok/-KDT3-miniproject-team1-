import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import PageHeader from "components/layout/PageHeader";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes("mypage") ||
      pathname.includes("signup") ||
      pathname.includes("signin") ||
      pathname.includes("cart") ? (
        <PageHeader />
      ) : (
        <Header />
      )}
      <Main>
        <Outlet />
      </Main>
      {pathname.includes("signup") ||
      pathname.includes("signin") ||
      pathname.includes("cart") ? null : (
        <Footer />
      )}
    </>
  );
};

const Main = styled.main`
  padding: 0 12px 30px;
`;

export default Layout;
