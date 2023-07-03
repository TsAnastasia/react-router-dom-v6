import { ReactNode, Suspense, lazy, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import NavDataManager from "./components/nav/NavDataManager";
import DMRouter from "./router/DMRouter";
import {
  ROOT_ROOTES_ITEMS,
  SectionsNames,
  SectionsNamesType,
} from "./router/routes";

// const ListDataManager = lazy(() => import("./components/list/ListDataManager"));

// const MainSeism = lazy(() => import("./pages/seism/main/MainSeism"));
const SingleSeism = lazy(() => import("./pages/seism/single/SingleSeism"));

// const MainMap = lazy(() => import("./pages/map/main/MainMap"));
// const SingleMap = lazy(() => import("./pages/map/single/SingleMap"));

// const MainHorison = lazy(() => import("./pages/horison/main/MainHorison"));
// const SingleHorison = lazy(
//   () => import("./pages/horison/single/SingleHorison")
// );

// const MainGrid = lazy(() => import("./pages/grid/main/MainGrid"));
const SingleGrid = lazy(() => import("./pages/grid/single/SingleGrid"));

const SINGLE_PAGES: Record<SectionsNamesType, ReactNode> = {
  seism: <SingleSeism />,
  well: undefined,
  library: undefined,
  horison: undefined,
  grid: <SingleGrid />,
  map: undefined,
  polygon: undefined,
  pulses: undefined,
  "cross-raft": undefined,
  contour: undefined,
};

const DataManager = () => {
  const { pathname } = useLocation();

  const section = useMemo<SectionsNamesType | null>(() => {
    for (const item of Object.values(SectionsNames)) {
      const pattern = new RegExp(`${item}\\/(\\w)+?(\\/)?(\\w)*$`);

      if (pathname.match(pattern)) {
        return item;
      }
    }

    return null;
  }, [pathname]);

  return (
    <main style={{ display: "flex" }}>
      <NavDataManager
        items={ROOT_ROOTES_ITEMS}
        end={false}
        direction="column"
      />
      <Suspense fallback={null}>
        {section ? <>{SINGLE_PAGES[section]}</> : <DMRouter />}
      </Suspense>
    </main>
  );
};

export default DataManager;
