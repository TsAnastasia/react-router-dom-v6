import { Navigate, Route, Routes } from "react-router-dom";
import { RootRouters, SectionsNames } from "./routes";
import { lazy, useEffect } from "react";

const MainSeism = lazy(() => import("../pages/seism/main/MainSeism"));
const MainMap = lazy(() => import("../pages/map/main/MainMap"));
const MainGrid = lazy(() => import("../pages/grid/main/MainGrid"));
const MainHorison = lazy(() => import("../pages/horison/main/MainHorison"));

const DMRouter = () => {
  return (
    <Routes>
      <Route path={RootRouters.SEISM} element={<MainSeism />} />

      <Route path={RootRouters.MAP} element={<MainMap />} />

      <Route path={RootRouters.GRID} element={<MainGrid />} />

      <Route path={RootRouters.HORISON} element={<MainHorison />} />

      <Route path="*" element={<p>not found</p>} />
      <Route path="*" element={<Navigate to={RootRouters.SEISM} />} />
    </Routes>
  );
};

export default DMRouter;
