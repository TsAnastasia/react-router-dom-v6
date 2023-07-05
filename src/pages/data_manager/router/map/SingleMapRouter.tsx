import { FC, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MapRoutes, SectionsNames } from "../routes";

const SingleMap = lazy(() => import("../../pages/map/single/SingleMap"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const SingleMapRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.MAP}/:mapId`}
        element={<SingleMap />}
      >
        <Route path="*" element={<Navigate to="" />} />
        <Route path="" element={<p>single map</p>} />
        <Route
          path={MapRoutes.GRID}
          element={<ListDataManager itemsType="grid" />}
        />
        <Route
          path={MapRoutes.SEISM}
          element={<ListDataManager itemsType="seism" />}
        />
        <Route
          path={MapRoutes.WELL}
          element={<ListDataManager itemsType="well" />}
        />
        <Route
          path={MapRoutes.CONTOUR}
          element={<ListDataManager itemsType="contour" />}
        />
        <Route
          path={MapRoutes.POLYGON}
          element={<ListDataManager itemsType="poligon" />}
        />
        <Route path={MapRoutes.POINT} element={<p>maps points</p>} />
      </Route>
    </Routes>
  );
};

export default memo(SingleMapRouter);
