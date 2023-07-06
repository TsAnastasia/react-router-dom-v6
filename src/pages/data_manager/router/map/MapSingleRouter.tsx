import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { MapSingleRoutes } from "./routes";

const HeaderDataManager = lazy(
  () => import("../../components/header/HeaderDataManager")
);
const SingleMap = lazy(() => import("../../pages/map/single/SingleMap"));
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const MapSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<HeaderDataManager />}>
            <Route
              path={`${path}${SectionsNames.MAP}/${MapSingleRoutes.SINGLE}`}
            >
              <Route index element={<p>map single tools</p>} />
              <Route
                path={MapSingleRoutes.GRID}
                element={<p>map grid tools</p>}
              />
              <Route
                path={MapSingleRoutes.SEISM}
                element={<p>map seism tools</p>}
              />
              <Route
                path={MapSingleRoutes.WELL}
                element={<p>map well tools</p>}
              />
              <Route
                path={MapSingleRoutes.CONTOUR}
                element={<p>map contour tools</p>}
              />
              <Route
                path={MapSingleRoutes.POLYGON}
                element={<p>map polygon tools</p>}
              />
              <Route
                path={MapSingleRoutes.POINT}
                element={<p>map point tools</p>}
              />
              <Route path="*" element={null} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
};

export default memo(MapSingleRouter);
