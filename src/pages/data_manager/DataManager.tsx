import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NavDataManager from "./components/nav/NavDataManager";
import {
  GridRoutes,
  HorisonRoutes,
  MapRoutes,
  ROOT_ROOTES_ITEMS,
  RootRouters,
} from "./routes";

const ListDataManager = lazy(() => import("./components/list/ListDataManager"));

const MainSeism = lazy(() => import("./pages/seism/main/MainSeism"));
const SingleSeism = lazy(() => import("./pages/seism/single/SingleSeism"));

const MainMap = lazy(() => import("./pages/map/main/MainMap"));
const SingleMap = lazy(() => import("./pages/map/single/SingleMap"));

const MainHorison = lazy(() => import("./pages/horison/main/MainHorison"));
const SingleHorison = lazy(
  () => import("./pages/horison/single/SingleHorison")
);

const MainGrid = lazy(() => import("./pages/grid/main/MainGrid"));
const SingleGrid = lazy(() => import("./pages/grid/single/SingleGrid"));

const DataManager = () => {
  return (
    <main style={{ display: "flex" }}>
      <NavDataManager
        items={ROOT_ROOTES_ITEMS}
        end={false}
        direction="column"
      />
      <Suspense fallback={null}>
        <Routes>
          <Route path={RootRouters.SEISM} element={<MainSeism />} />
          <Route
            path={`${RootRouters.SEISM}/:seismId`}
            element={<SingleSeism />}
          />

          <Route path={RootRouters.MAP} element={<MainMap />} />
          <Route path={`${RootRouters.MAP}/:mapId`} element={<SingleMap />}>
            <Route index element={<p>single map</p>} />
            <Route path={MapRoutes.SEISM} element={<ListDataManager />} />
          </Route>
          {/* <Route
            path={`${RootRoutes.SEISM}/:seismId`}
            element={<SingleSeism />}
          /> */}

          <Route path={RootRouters.GRID} element={<MainGrid />} />
          <Route path={`${RootRouters.GRID}/:gridId`} element={<SingleGrid />}>
            <Route index element={<p>single grid</p>} />
            <Route path={GridRoutes.SEISM} element={<ListDataManager />} />
          </Route>

          <Route path={RootRouters.HORISON} element={<MainHorison />} />
          <Route
            path={`${RootRouters.HORISON}/:horisonId`}
            element={<SingleHorison />}
          >
            <Route index element={<p>single horison</p>} />
            <Route path={HorisonRoutes.SEISM} element={<ListDataManager />} />
            <Route path={HorisonRoutes.GRID} element={<ListDataManager />} />
          </Route>

          <Route path="*" element={<p>not found</p>} />
          {/* <Route path="*" element={<Navigate to={RootRouters.SEISM} />} /> */}
        </Routes>
      </Suspense>
    </main>
  );
};

export default DataManager;
