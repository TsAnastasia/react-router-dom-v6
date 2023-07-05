import { FC, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { MapSingleRoutes } from "./routes";

const SingleMap = lazy(() => import("../../pages/map/single/SingleMap"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const MapSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.MAP}/${MapSingleRoutes.SINGLE}`}
        element={<SingleMap />}
      >
        <Route path="*" element={<Navigate to="" />} />
        <Route path="" element={<p>single map</p>} />
        <Route
          path={MapSingleRoutes.GRID}
          element={<ListDataManager itemsType="grid" />}
        />
        <Route
          path={MapSingleRoutes.SEISM}
          element={<ListDataManager itemsType="seism" />}
        />
        <Route
          path={MapSingleRoutes.WELL}
          element={<ListDataManager itemsType="well" />}
        />
        <Route
          path={MapSingleRoutes.CONTOUR}
          element={<ListDataManager itemsType="contour" />}
        />
        <Route
          path={MapSingleRoutes.POLYGON}
          element={<ListDataManager itemsType="poligon" />}
        />
        <Route path={MapSingleRoutes.POINT} element={<p>maps points</p>} />
      </Route>
    </Routes>
  );
};

export default memo(MapSingleRouter);
