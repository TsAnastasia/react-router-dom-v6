import React, { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { pathToPage } from "../../utils/routes";

const RequireAuth: FC = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  return user ? (
    <>{children}</>
  ) : (
    <Navigate to={pathToPage.login} state={{ from: location }} />
  );
};

export default RequireAuth;
