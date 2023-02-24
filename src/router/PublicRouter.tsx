import { useAppSelector } from "app/hooks";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }: { children: ReactElement }) => {
  const {
    auth: { accessToken },
  } = useAppSelector((state) => state);

  return accessToken ? <Navigate to="/" /> : children;
};
export default PublicRouter;
