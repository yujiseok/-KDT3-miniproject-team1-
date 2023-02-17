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
import User from "pages/User";
import CompleteOrder from "pages/CompleteOrder";
import MyPageLayout from "components/layout/MypageLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/completeOrder" element={<CompleteOrder />} />
      <Route element={<Root />}>
        <Route path="/" element={<Main />} />
        <Route path="/search/:value" element={<Search />} />
      </Route>
      <Route path="/mypage" element={<MyPageLayout />}>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="user" element={<User />} />
        <Route path="order" element={<Order />} />
        <Route path="likes" element={<Likes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
export default Router;
