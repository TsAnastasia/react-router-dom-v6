import { FC, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { WellSingleRoutes } from "./routes";

const SingleWell = lazy(() => import("../../pages/well/single/SingleWell"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const SingleHorisonRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.WELL}/${WellSingleRoutes.SINGLE}`}
        element={<SingleWell />}
      >
        <Route
          index
          path="*"
          element={<Navigate to={WellSingleRoutes.GIS} />}
        />
        <Route
          path={WellSingleRoutes.GIS}
          element={<ListDataManager itemsType="gis" />}
        />
        <Route
          path={WellSingleRoutes.INCLINOMETRY}
          element={<p>Инклинометрия скважины</p>}
        />
        <Route
          path={WellSingleRoutes.CHOPS}
          element={<p>Отбивки скважины</p>}
        />
      </Route>
    </Routes>
  );
};

export default memo(SingleHorisonRouter);
