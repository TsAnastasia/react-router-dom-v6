import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { LoginPage } from "../../pages/login/Loginpage";
import { AppRoutes, pathToPage } from "../../utils/routes";
import RequireAuth from "../hoc/RequireAuth";

const Aboutpage = lazy(() => import("../../pages/about/AboutPage"));
const Blogpage = lazy(() => import("../../pages/blog/Blogpage"));
const Contactspage = lazy(
  () => import("../../pages/about/contacts/Contactspage")
);
const CreatePostpage = lazy(
  () => import("../../pages/createPost/CreatePostpage")
);
const EditPostpage = lazy(() => import("../../pages/editPost/EditPostpage"));
const Homepage = lazy(() => import("../../pages/home/Homepage"));
const Notfoundpage = lazy(() => import("../../pages/notfound/NotfoundPage"));
const Postpage = lazy(() => import("../../pages/post/Postpage"));
const Teampage = lazy(() => import("../../pages/about/team/Teampage"));

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
        path: "add",
        element: <Navigate to={pathToPage.postAdd} replace />,
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

const AppRouter = () => (
  <Suspense fallback={<main>Loading...</main>}> {useRoutes(routes)}</Suspense>
);

export default AppRouter;
