import { GridSingleRoutes } from "./grid/routes";
import { HorisonSingleRoutes } from "./horison/routes";
import { MapSingleRoutes } from "./map/routes";
import { WellMainRoutes, WellSingleRoutes } from "./well/routes";

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
  GIS: "gis",
} as const;

export const RootRouters = {
  SEISM: SectionsNames.SEISM,
  WELL: "wells",
  LIBRARY: SectionsNames.LIBRARY,
  HORISON: SectionsNames.HORISON,
  GRID: SectionsNames.GRID,
  MAP: SectionsNames.MAP,
  POLYGON: SectionsNames.POLYGON,
  PULSES: SectionsNames.PULSES,
  CROSS_RAFTS: SectionsNames.CROSS_RAFTS,
} as const;

type ObjectValues<T extends object> = T[keyof T];

export interface ILinkItem {
  to: string;
  name: string;
}

export type SectionsNamesType = ObjectValues<typeof SectionsNames>;
export type RootRoutesType = ObjectValues<typeof RootRouters>;

export type PageSectionsNamesType<T extends object> = ObjectValues<
  Omit<T, "SINGLE">
>;

export const NAMES_ROUTES: Omit<
  Record<
    | ObjectValues<typeof RootRouters>
    | ObjectValues<typeof SectionsNames>
    | PageSectionsNamesType<typeof MapSingleRoutes>
    | PageSectionsNamesType<typeof GridSingleRoutes>
    | PageSectionsNamesType<typeof HorisonSingleRoutes>
    | PageSectionsNamesType<typeof WellSingleRoutes>
    | PageSectionsNamesType<typeof WellMainRoutes>,
    string
  >,
  ""
> = {
  seism: "Сейсмика",
  well: "Скважины",
  wells: "Скважины",
  library: "Библиотеки",
  horison: "Горизонты",
  grid: "Сетки",
  map: "Карты",
  polygon: "Полигоны",
  pulses: "Импульсы",
  "cross-raft": "Кросс - плоты",
  contour: "Контура",
  point: "Точки",
  gis: "ГИС",
  inclinometry: "Инклинометрия",
  chops: "Отбивки",
  info: "Сводная информация",
  parameters: "Параметры",
  markers: "Маркеры",
  "well-types": "Типы скважин",
};

export const ROOT_ROOTES_ITEMS: ILinkItem[] = Object.values(RootRouters).map(
  (i) => ({ to: i, name: NAMES_ROUTES[i] })
);
