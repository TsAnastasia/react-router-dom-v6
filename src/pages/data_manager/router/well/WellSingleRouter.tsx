import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { WellSingleRoutes } from "./routes";
import HeaderDataManager from "../../components/header/HeaderDataManager";

const SingleWell = lazy(() => import("../../pages/well/single/SingleWell"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const SingleHorisonRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<HeaderDataManager />}>
            <Route
              path={`${path}${SectionsNames.WELL}/${WellSingleRoutes.SINGLE}`}
            >
              <Route
                path={WellSingleRoutes.GIS}
                element={<p>well gis tools</p>}
              />
              <Route
                path={WellSingleRoutes.INCLINOMETRY}
                element={<p>well gis tools</p>}
              />
              <Route
                path={WellSingleRoutes.CHOPS}
                element={<p>well gis tools</p>}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};

export default memo(SingleHorisonRouter);
