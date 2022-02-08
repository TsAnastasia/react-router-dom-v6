export enum AppRoutes {
  HOME = "/",
  BLOG = "/posts",
  BLOG_POST = ":postId",
  BLOG_POST_EDIT = "edit",
  BLOG_ADD = "new",
  ABOUT = "/about",
  ABOUT_TEAM = "team",
  ABOUT_CONTACTS = "contacts",
  LOGIN = "/login",
}

export const pathToPage = {
  home: AppRoutes.HOME,
  blog: AppRoutes.BLOG,
  post: (postId: number) => `${AppRoutes.BLOG}/${postId}`,
  postAdd: `${AppRoutes.BLOG}/${AppRoutes.BLOG_ADD}`,
  postEdit: (postId: number) =>
    `${AppRoutes.BLOG}/${postId}/${AppRoutes.BLOG_POST_EDIT}`,
  about: AppRoutes.ABOUT,
  contacts: `${AppRoutes.ABOUT}/${AppRoutes.ABOUT_CONTACTS}`,
  team: `${AppRoutes.ABOUT}/${AppRoutes.ABOUT_TEAM}`,
  login: AppRoutes.LOGIN,
};
