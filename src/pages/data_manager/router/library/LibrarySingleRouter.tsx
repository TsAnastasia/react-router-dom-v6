import { FC, Suspense, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { LibrarySingleRoutes } from "./routes";

const HeaderDataManager = lazy(
  () => import("../../components/header/HeaderDataManager")
);

const LibrarySingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<HeaderDataManager />}>
            <Route
              path={`${path}${SectionsNames.LIBRARY}/${LibrarySingleRoutes.SINGLE}`}
            >
              <Route index element={<p>library single tools</p>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={null}>
        <Routes>
          <Route
            path={`${path}${SectionsNames.LIBRARY}/${LibrarySingleRoutes.SINGLE}`}
          >
            <Route index element={<p>library single</p>} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default memo(LibrarySingleRouter);
