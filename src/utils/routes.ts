export enum AppRoutes {
  HOME = "/",
  BLOG = "/posts",
  ABOUT = "/about",
  ABOUT_TEAM = "team",
  ABOUT_CONTACTS = "contacts",
}

export const pathToPage = {
  home: AppRoutes.HOME,
  blog: AppRoutes.BLOG,
  about: AppRoutes.ABOUT,
  contacts: `${AppRoutes.ABOUT}/${AppRoutes.ABOUT_CONTACTS}`,
  team: `${AppRoutes.ABOUT}/${AppRoutes.ABOUT_TEAM}`,
};
