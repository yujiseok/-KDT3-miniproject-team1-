import Footer from "components/Footer";
import Header from "components/myPage/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MyPageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MyPageLayout;
