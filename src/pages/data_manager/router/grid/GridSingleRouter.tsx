import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { GridSingleRoutes } from "./routes";

const HeaderDataManager = lazy(
  () => import("../../components/header/HeaderDataManager")
);
const SingleGrid = lazy(() => import("../../pages/grid/single/SingleGrid"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const GridSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<HeaderDataManager />}>
            <Route
              path={`${path}${SectionsNames.GRID}/${GridSingleRoutes.SINGLE}`}
            >
              <Route
                path={GridSingleRoutes.MAP}
                element={<p>grid map tools</p>}
              />
              <Route
                path={GridSingleRoutes.SEISM}
                element={<p>grid seism tools</p>}
              />
              <Route
                path={GridSingleRoutes.HORISON}
                element={<p>grid horison tools</p>}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};

export default memo(GridSingleRouter);
