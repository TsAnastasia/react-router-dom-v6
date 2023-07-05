import { ILinkItem, NAMES_ROUTES, SectionsNames } from "../routes";

export const WellMainRoutes = {
  INFO: "info",
  GIS: "gis",
  PARAMTERS: "parameters",
  MARKERS: "markers",
  WELL_TYPES: "well-types",
} as const;

export const WELL_MAIN_ROOTES_ITEMS: ILinkItem[] = [
  WellMainRoutes.INFO,
  WellMainRoutes.GIS,
  WellMainRoutes.PARAMTERS,
  WellMainRoutes.MARKERS,
  WellMainRoutes.WELL_TYPES,
].map((i) => ({ to: i, name: NAMES_ROUTES[i] }));

export const WellSingleRoutes = {
  SINGLE: ":wellId",
  GIS: SectionsNames.GIS,
  INCLINOMETRY: "inclinometry",
  CHOPS: "chops",
} as const;

export const WELL_SINGLE_ROOTES_ITEMS: ILinkItem[] = [
  WellSingleRoutes.GIS,
  WellSingleRoutes.INCLINOMETRY,
  WellSingleRoutes.CHOPS,
].map((i) => ({ to: i, name: NAMES_ROUTES[i] }));
