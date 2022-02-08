import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Aboutpage from "../../pages/about/AboutPage";
import Contactspage from "../../pages/about/contacts/Contactspage";
import Teampage from "../../pages/about/team/Teampage";
import Blogpage from "../../pages/blog/Blogpage";
import Homepage from "../../pages/home/Homepage";
import { LoginPage } from "../../pages/login/Loginpage";
import Notfoundpage from "../../pages/notfound/NotfoundPage";
import { AppRoutes } from "../../utils/routes";

const routes: RouteObject[] = [
  { path: AppRoutes.HOME, element: <Homepage /> },
  { path: AppRoutes.BLOG, element: <Blogpage /> },
  {
    path: AppRoutes.ABOUT,
    element: <Aboutpage />,
    children: [
      { path: AppRoutes.ABOUT_CONTACTS, element: <Contactspage /> },
      { path: AppRoutes.ABOUT_TEAM, element: <Teampage /> },
    ],
  },
  { path: AppRoutes.LOGIN, element: <LoginPage /> },
  { path: "*", element: <Notfoundpage /> },
];

const AppRouter = () => useRoutes(routes);

export default AppRouter;
