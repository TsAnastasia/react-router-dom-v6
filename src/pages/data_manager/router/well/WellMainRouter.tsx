import { Navigate, Route, Routes } from "react-router-dom";
import ListMainWell from "../../pages/well/main/list/ListMainWell";
import { WellMainRoutes } from "./routes";
import { Suspense } from "react";

export const WellMainRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index path="*" element={<Navigate to={WellMainRoutes.INFO} />} />
        <Route
          path={WellMainRoutes.INFO}
          element={<ListMainWell itemsType="info" />}
        />
        <Route
          path={WellMainRoutes.GIS}
          element={<ListMainWell itemsType="gis" />}
        />
        <Route
          path={WellMainRoutes.PARAMTERS}
          element={<ListMainWell itemsType="parameters" />}
        />
        <Route
          path={WellMainRoutes.MARKERS}
          element={<ListMainWell itemsType="markers" />}
        />

        <Route path={WellMainRoutes.WELL_TYPES} element={<p>типы скважин</p>} />
      </Routes>
    </Suspense>
  );
};

export default WellMainRouter;
