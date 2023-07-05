import { ILinkItem, NAMES_ROUTES, SectionsNames } from "../routes";

export const GridSingleRoutes = {
  SINGLE: ":gridId",
  MAP: SectionsNames.MAP,
  SEISM: SectionsNames.SEISM,
  HORISON: SectionsNames.HORISON,
} as const;

export const GRID_SINGLE_ROOTES_ITEMS: ILinkItem[] = [
  GridSingleRoutes.MAP,
  GridSingleRoutes.SEISM,
  GridSingleRoutes.HORISON,
].map((i) => ({ to: i, name: NAMES_ROUTES[i] }));
