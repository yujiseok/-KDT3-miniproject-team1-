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
import Password from "pages/Password";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Root />}>
        <Route
          path="/signin"
          element={
            <PublicRouter>
              <SignIn />
            </PublicRouter>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRouter>
              <SingUp />
            </PublicRouter>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRouter>
              <Cart />
            </PrivateRouter>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/" element={<Main />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/mypage">
          <Route
            path="/mypage"
            element={
              <PrivateRouter>
                <MyPage />
              </PrivateRouter>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRouter>
                <User />
              </PrivateRouter>
            }
          />
          <Route
            path="user/password"
            element={
              <PrivateRouter>
                <Password />
              </PrivateRouter>
            }
          />
          <Route
            path="order"
            element={
              <PrivateRouter>
                <Order />
              </PrivateRouter>
            }
          />
          <Route
            path="likes"
            element={
              <PrivateRouter>
                <Likes />
              </PrivateRouter>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
export default Router;
