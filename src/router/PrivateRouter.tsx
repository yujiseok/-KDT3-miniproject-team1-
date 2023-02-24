import { useAppSelector } from "app/hooks";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }: { children: ReactElement }) => {
  const {
    auth: { accessToken },
  } = useAppSelector((state) => state);

  return accessToken ? children : <Navigate to="/signin" />;
};
export default PrivateRouter;
