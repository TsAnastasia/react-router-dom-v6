import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Aboutpage from "../../pages/about/AboutPage";
import Blogpage from "../../pages/blog/Blogpage";
import Homepage from "../../pages/home/Homepage";
import Notfoundpage from "../../pages/notfound/NotfoundPage";
import { AppRoutes } from "../../utils/routes";

const routes: RouteObject[] = [
  { path: AppRoutes.HOME, element: <Homepage /> },
  { path: AppRoutes.BLOG, element: <Blogpage /> },
  { path: AppRoutes.ABOUT, element: <Aboutpage /> },
  { path: "*", element: <Notfoundpage /> },
];

const AppRouter = () => useRoutes(routes);

export default AppRouter;
