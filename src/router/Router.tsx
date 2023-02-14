import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "components/layout/Layout";
import Cart from "pages/Cart";
import Likes from "pages/Likes";
import Main from "pages/Main";
import MyPage from "pages/MyPage";
import ProductDetail from "pages/ProductDetail";
import SignIn from "pages/SignIn";
import SingUp from "pages/SingUp";
import Search from "pages/Search";
import NotFound from "pages/NotFound";
import Order from "pages/Order";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route element={<Root />}>
        <Route path="/home" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/likes" element={<Likes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
export default Router;
