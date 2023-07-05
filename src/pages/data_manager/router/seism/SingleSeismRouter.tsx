import { FC, lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";

const SingleSeism = lazy(() => import("../../pages/seism/single/SingleSeism"));

const SingleSeismRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.SEISM}/:seismId`}
        element={<SingleSeism />}
      />
    </Routes>
  );
};

export default memo(SingleSeismRouter);
