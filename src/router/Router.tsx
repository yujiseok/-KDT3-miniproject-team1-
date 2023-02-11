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

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SingUp />} />
      <Route element={<Root />}>
        <Route path="/home" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/likes" element={<Likes />} />
      </Route>
    </Route>,
  ),
);
export default Router;
