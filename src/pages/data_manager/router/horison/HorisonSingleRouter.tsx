import { FC, lazy, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { HorisonSingleRoutes } from "./routes";

const SingleHorison = lazy(
  () => import("../../pages/horison/single/SingleHorison")
);
const ListDataManager = lazy(
  () => import("../../components/list/ListDataManager")
);

const SingleHorisonRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.HORISON}/${HorisonSingleRoutes.SINGLE}`}
        element={<SingleHorison />}
      >
        <Route path="*" element={<Navigate to="" />} />
        <Route path="" element={<p>single library</p>} />
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
  );
};

export default memo(SingleHorisonRouter);
