import { ComponentType, ReactNode, Suspense, useMemo } from "react";
import { useLocation, useResolvedPath } from "react-router-dom";

import NavDataManager from "./components/nav/NavDataManager";
import DMRouter from "./router/DMRouter";
import MapSingleRouter from "./router/map/MapSingleRouter";
import {
  ROOT_ROOTES_ITEMS,
  SectionsNames,
  SectionsNamesType,
} from "./router/routes";
import SeismSingleRouter from "./router/seism/SeismSingleRouter";
import SingleHorisonRouter from "./router/horison/HorisonSingleRouter";
import GridSingleRouter from "./router/grid/GridSingleRouter";
import LibrarySingleRouter from "./router/library/LibrarySingleRouter";
import WellSingleRouter from "./router/well/WellSingleRouter";
import HeaderDataManager from "./components/header/HeaderDataManager";

// const SingleHorison = lazy(
//   () => import("./pages/horison/single/SingleHorison")
// );

// const SingleGrid = lazy(() => import("./pages/grid/single/SingleGrid"));

const SINGLE_PAGES: Record<
  SectionsNamesType,
  ComponentType<{ path: string }>
> = {
  seism: SeismSingleRouter,
  well: WellSingleRouter,
  library: LibrarySingleRouter,
  horison: SingleHorisonRouter,
  grid: GridSingleRouter,
  map: MapSingleRouter,
  polygon: (path) => <>polygon single</>,
  pulses: (path) => <>pulses single</>,
  "cross-raft": (path) => <>cross single</>,
  contour: (path) => <>contour single</>,
  gis: (path) => <>gis single</>,
};

const DataManager = () => {
  const { pathname: MFPath } = useResolvedPath("");
  const { pathname } = useLocation();

  const component = useMemo<ReactNode | null>(() => {
    for (const section of Object.values(SectionsNames)) {
      const match = pathname.match(
        new RegExp(`${section}\\/(\\w)+?(\\/)?(\\w)*$`, "i")
      );

      if (match && match.index) {
        const Component = SINGLE_PAGES[section];
        return (
          <Component path={pathname.slice(MFPath.length + 1, match.index)} />
        );
      }
    }

    return null;
  }, [pathname, MFPath]);

  return (
    <main style={{ display: "flex", border: "1px solid", padding: 0 }}>
      <div style={{ borderRight: "1px solid", padding: 8 }}>
        <NavDataManager
          items={ROOT_ROOTES_ITEMS}
          end={false}
          direction="column"
        />
      </div>
      <div style={{ flex: 1 }}>
        <HeaderDataManager />
        <Suspense fallback={null}>{component || <DMRouter />}</Suspense>
      </div>
    </main>
  );
};

export default DataManager;
