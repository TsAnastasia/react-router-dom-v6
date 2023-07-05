import { FC, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { GridSingleRoutes } from "./routes";

const SingleGrid = lazy(() => import("../../pages/grid/single/SingleGrid"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const GridSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.GRID}/${GridSingleRoutes.SINGLE}`}
        element={<SingleGrid />}
      >
        <Route
          index
          path="*"
          element={<Navigate to={GridSingleRoutes.MAP} />}
        />
        {/* <Route path="" element={<p>single grid</p>} /> */}
        <Route
          path={GridSingleRoutes.MAP}
          element={<ListDataManager itemsType="map" />}
        />
        <Route
          path={GridSingleRoutes.SEISM}
          element={<ListDataManager itemsType="seism" />}
        />
        <Route
          path={GridSingleRoutes.HORISON}
          element={<ListDataManager itemsType="grid" />}
        />
      </Route>
    </Routes>
  );
};

export default memo(GridSingleRouter);
