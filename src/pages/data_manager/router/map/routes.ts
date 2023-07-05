import { ILinkItem, NAMES_ROUTES, SectionsNames } from "../routes";

export const MapSingleRoutes = {
  SINGLE: ":mapId",
  MAP: "",
  GRID: SectionsNames.GRID,
  SEISM: SectionsNames.SEISM,
  WELL: SectionsNames.WELL,
  CONTOUR: SectionsNames.CONTOUR,
  POLYGON: SectionsNames.POLYGON,
  POINT: "point",
} as const;

export const MAP_SINGLE_ROOTES_ITEMS: ILinkItem[] = [
  { to: MapSingleRoutes.MAP as string, name: "Карта" },
].concat(
  [
    MapSingleRoutes.GRID,
    MapSingleRoutes.SEISM,
    MapSingleRoutes.WELL,
    MapSingleRoutes.CONTOUR,
    MapSingleRoutes.POLYGON,
    MapSingleRoutes.POINT,
  ].map((i) => ({ to: i, name: NAMES_ROUTES[i] }))
);
