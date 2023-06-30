export const RootRouters = {
  SEISM: "seism",
  WELL: "well",
  LIBRARY: "library",
  HORISON: "horison",
  GRID: "grid",
  MAP: "map",
  POLYGON: "polygon",
  PULSES: "pulses",
  CROSS_RAFTS: "cross-rafts",
  CONTOUR: "contour",
} as const;

export const MapRoutes = {
  MAP: "",
  GRID: RootRouters.GRID,
  SEISM: RootRouters.SEISM,
  WELL: RootRouters.WELL,
  CONTOUR: RootRouters.CONTOUR,
  POLYGON: RootRouters.POLYGON,
  POINT: "point",
} as const;

export const GridRoutes = {
  MAP: RootRouters.MAP,
  SEISM: RootRouters.SEISM,
  HORISON: RootRouters.HORISON,
} as const;

export const HorisonRoutes = {
  HORISON: "",
  GRID: RootRouters.GRID,
  SEISM: RootRouters.SEISM,
} as const;

type ObjectValues<T extends object> = T[keyof T];

export interface ILinkItem {
  to: string;
  name: string;
}

export const NAMES_ROUTES: Omit<
  Record<
    | ObjectValues<typeof RootRouters>
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
  "cross-rafts": "Кросс - плоты",
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
