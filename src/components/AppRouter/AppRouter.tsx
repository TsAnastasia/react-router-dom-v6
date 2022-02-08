import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Aboutpage from "../../pages/about/AboutPage";
import Contactspage from "../../pages/about/contacts/Contactspage";
import Teampage from "../../pages/about/team/Teampage";
import Blogpage from "../../pages/blog/Blogpage";
import CreatePostpage from "../../pages/createPost/CreatePostpage";
import EditPostpage from "../../pages/editPost/EditPostpage";
import Postpage from "../../pages/post/Postpage";
import Homepage from "../../pages/home/Homepage";
import { LoginPage } from "../../pages/login/Loginpage";
import Notfoundpage from "../../pages/notfound/NotfoundPage";
import { AppRoutes } from "../../utils/routes";
import RequireAuth from "../hoc/RequireAuth";

const routes: RouteObject[] = [
  { path: AppRoutes.HOME, element: <Homepage /> },
  {
    path: AppRoutes.BLOG,
    children: [
      { index: true, element: <Blogpage /> },
      {
        path: AppRoutes.BLOG_ADD,
        element: <RequireAuth children={<CreatePostpage />} />,
      },
      {
        path: AppRoutes.BLOG_POST,
        children: [
          { index: true, element: <Postpage /> },
          {
            path: AppRoutes.BLOG_POST_EDIT,
            element: <RequireAuth children={<EditPostpage />} />,
          },
        ],
      },
    ],
  },
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
