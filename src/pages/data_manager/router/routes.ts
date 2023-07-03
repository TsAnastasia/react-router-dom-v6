export const SectionsNames = {
  SEISM: "seism",
  WELL: "well",
  LIBRARY: "library",
  HORISON: "horison",
  GRID: "grid",
  MAP: "map",
  POLYGON: "polygon",
  PULSES: "pulses",
  CROSS_RAFTS: "cross-raft",
  CONTOUR: "contour",
} as const;

export const RootRouters = {
  SEISM: SectionsNames.SEISM,
  WELL: SectionsNames.WELL,
  LIBRARY: SectionsNames.LIBRARY,
  HORISON: SectionsNames.HORISON,
  GRID: SectionsNames.GRID,
  MAP: SectionsNames.MAP,
  POLYGON: SectionsNames.POLYGON,
  PULSES: SectionsNames.PULSES,
  CROSS_RAFTS: SectionsNames.CROSS_RAFTS,
  CONTOUR: SectionsNames.CONTOUR,
} as const;

export const MapRoutes = {
  MAP: "",
  GRID: SectionsNames.GRID,
  SEISM: SectionsNames.SEISM,
  WELL: SectionsNames.WELL,
  CONTOUR: SectionsNames.CONTOUR,
  POLYGON: SectionsNames.POLYGON,
  POINT: "point",
} as const;

export const GridRoutes = {
  MAP: SectionsNames.MAP,
  SEISM: SectionsNames.SEISM,
  HORISON: SectionsNames.HORISON,
} as const;

export const HorisonRoutes = {
  HORISON: "",
  GRID: SectionsNames.GRID,
  SEISM: SectionsNames.SEISM,
} as const;

type ObjectValues<T extends object> = T[keyof T];

export interface ILinkItem {
  to: string;
  name: string;
}

export type SectionsNamesType = ObjectValues<typeof SectionsNames>;

export const NAMES_ROUTES: Omit<
  Record<
    | ObjectValues<typeof RootRouters>
    | ObjectValues<typeof SectionsNames>
    | ObjectValues<typeof MapRoutes>
    | ObjectValues<typeof GridRoutes>
    | ObjectValues<typeof HorisonRoutes>,
    string
  >,
  ""
> = {
  seism: "Сейсмика",
  well: "Скважины",
  library: "Библиотеки",
  horison: "Горизонты",
  grid: "Сетки",
  map: "Карты",
  polygon: "Полигоны",
  pulses: "Импульсы",
  "cross-raft": "Кросс - плоты",
  contour: "Контура",
  point: "Точки",
};

export const ROOT_ROOTES_ITEMS: ILinkItem[] = Object.values(RootRouters).map(
  (i) => ({ to: i, name: NAMES_ROUTES[i] })
);

export const MAP_ROOTES_ITEMS: ILinkItem[] = Object.values(MapRoutes).map((i) =>
  i === "" ? { to: "", name: "Карта" } : { to: i, name: NAMES_ROUTES[i] }
);

export const GRID_ROOTES_ITEMS: ILinkItem[] = Object.values(GridRoutes).map(
  (i) => ({ to: i, name: NAMES_ROUTES[i] })
);

export const HORISON_ROOTES_ITEMS: ILinkItem[] = Object.values(MapRoutes).map(
  (i) =>
    i === "" ? { to: "", name: "Гоизонт" } : { to: i, name: NAMES_ROUTES[i] }
);
