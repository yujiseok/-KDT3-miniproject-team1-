import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
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
  padding: 90px 12px 30px;
`;

export default Layout;
