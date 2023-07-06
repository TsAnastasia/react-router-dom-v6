import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { SeismSingleRoutes } from "./routes";

const HeaderDataManager = lazy(
  () => import("../../components/header/HeaderDataManager")
);
const SingleSeism = lazy(() => import("../../pages/seism/single/SingleSeism"));

const SeismSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<HeaderDataManager />}>
            <Route path="*" element={<p>seism single tools</p>} />
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Routes>
          <Route
            path={`${path}${SectionsNames.SEISM}/${SeismSingleRoutes.SINGLE}`}
          >
            <Route index element={<SingleSeism />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default memo(SeismSingleRouter);
