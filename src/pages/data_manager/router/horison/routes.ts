import { ILinkItem, NAMES_ROUTES, SectionsNames } from "../routes";

export const HorisonSingleRoutes = {
  SINGLE: ":horisonId",
  HORISON: "",
  GRID: SectionsNames.GRID,
  SEISM: SectionsNames.SEISM,
} as const;

export const HORISON_SINGLE_ROOTES_ITEMS: ILinkItem[] = [
  { to: HorisonSingleRoutes.HORISON as string, name: "Гоизонт" },
].concat(
  [HorisonSingleRoutes.GRID, HorisonSingleRoutes.SEISM].map((i) => ({
    to: i,
    name: NAMES_ROUTES[i],
  }))
);
