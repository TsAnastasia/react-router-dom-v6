import { FC, lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { SeismSingleRoutes } from "./routes";

const SingleSeism = lazy(() => import("../../pages/seism/single/SingleSeism"));

const SeismSingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.SEISM}/${SeismSingleRoutes.SINGLE}`}
        element={<SingleSeism />}
      />
    </Routes>
  );
};

export default memo(SeismSingleRouter);
