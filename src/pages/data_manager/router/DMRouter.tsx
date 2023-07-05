import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RootRouters } from "./routes";

const MainSeism = lazy(() => import("../pages/seism/main/MainSeism"));
const MainLibrary = lazy(() => import("../pages/library/main/MainLibrary"));
const MainMap = lazy(() => import("../pages/map/main/MainMap"));
const MainGrid = lazy(() => import("../pages/grid/main/MainGrid"));
const MainHorison = lazy(() => import("../pages/horison/main/MainHorison"));

const DMRouter = () => {
  return (
    <Routes>
      <Route path={RootRouters.SEISM} element={<MainSeism />} />
      <Route path={RootRouters.WELL} element={<p>wells</p>} />
      <Route path={RootRouters.LIBRARY} element={<MainLibrary />} />
      <Route path={RootRouters.MAP} element={<MainMap />} />
      <Route path={RootRouters.GRID} element={<MainGrid />} />
      <Route path={RootRouters.HORISON} element={<MainHorison />} />

      {/* <Route path="*" element={<p>not found</p>} /> */}
      <Route path="*" element={<Navigate to={RootRouters.SEISM} />} />
    </Routes>
  );
};

export default DMRouter;
