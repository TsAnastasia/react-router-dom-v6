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

// const SingleHorison = lazy(
//   () => import("./pages/horison/single/SingleHorison")
// );

// const SingleGrid = lazy(() => import("./pages/grid/single/SingleGrid"));

const SINGLE_PAGES: Record<
  SectionsNamesType,
  ComponentType<{ path: string }>
> = {
  seism: SeismSingleRouter,
  well: (path) => <>well</>,
  library: LibrarySingleRouter,
  horison: SingleHorisonRouter,
  grid: GridSingleRouter,
  map: MapSingleRouter,
  polygon: (path) => <>polygon</>,
  pulses: (path) => <>pulses</>,
  "cross-raft": (path) => <>cross</>,
  contour: (path) => <>contour</>,
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
    <main style={{ display: "flex" }}>
      <NavDataManager
        items={ROOT_ROOTES_ITEMS}
        end={false}
        direction="column"
      />
      <Suspense fallback={null}>{component || <DMRouter />}</Suspense>
    </main>
  );
};

export default DataManager;
