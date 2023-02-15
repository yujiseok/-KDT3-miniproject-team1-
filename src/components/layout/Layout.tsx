import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <header>헤더</header>
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

export default Layout;
