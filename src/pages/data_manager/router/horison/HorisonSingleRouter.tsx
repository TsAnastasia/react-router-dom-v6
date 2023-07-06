import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { HorisonSingleRoutes } from "./routes";

const HeaderDataManager = lazy(
  () => import("../../components/header/HeaderDataManager")
);
const SingleHorison = lazy(
  () => import("../../pages/horison/single/SingleHorison")
);
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
              path={`${path}${SectionsNames.HORISON}/${HorisonSingleRoutes.SINGLE}`}
            >
              <Route index element={<p>horison single tools</p>} />
              <Route
                path={HorisonSingleRoutes.GRID}
                element={<p>horison grid tools</p>}
              />
              <Route
                path={HorisonSingleRoutes.SEISM}
                element={<p>horison seism tools</p>}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Routes>
          <Route
            path={`${path}${SectionsNames.HORISON}/${HorisonSingleRoutes.SINGLE}`}
            element={<SingleHorison />}
          >
            <Route path="*" element={<Navigate to="" />} />
            <Route index element={<p>single horison</p>} />
            <Route
              path={HorisonSingleRoutes.GRID}
              element={<ListDataManager itemsType="grid" />}
            />
            <Route
              path={HorisonSingleRoutes.SEISM}
              element={<ListDataManager itemsType="seism" />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default memo(SingleHorisonRouter);
