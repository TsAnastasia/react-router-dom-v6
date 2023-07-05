import { ComponentType, ReactNode, Suspense, useMemo } from "react";
import { useLocation, useResolvedPath } from "react-router-dom";

import NavDataManager from "./components/nav/NavDataManager";
import DMRouter from "./router/DMRouter";
import SingleMapRouter from "./router/map/SingleMapRouter";
import {
  ROOT_ROOTES_ITEMS,
  SectionsNames,
  SectionsNamesType,
} from "./router/routes";
import SingleSeismRouter from "./router/seism/SingleSeismRouter";

// const SingleHorison = lazy(
//   () => import("./pages/horison/single/SingleHorison")
// );

// const SingleGrid = lazy(() => import("./pages/grid/single/SingleGrid"));

const SINGLE_PAGES: Record<
  SectionsNamesType,
  ComponentType<{ path: string }>
> = {
  seism: SingleSeismRouter,
  well: (path) => <></>,
  library: (path) => <></>,
  horison: (path) => <></>,
  grid: (path) => <></>,
  map: SingleMapRouter,
  polygon: (path) => <></>,
  pulses: (path) => <></>,
  "cross-raft": (path) => <></>,
  contour: (path) => <></>,
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
