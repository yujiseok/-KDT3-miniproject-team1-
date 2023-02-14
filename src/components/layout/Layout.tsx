import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>헤더</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
