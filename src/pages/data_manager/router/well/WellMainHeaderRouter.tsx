import { Route, Routes } from "react-router-dom";
import { WellMainRoutes } from "./routes";
import { Suspense } from "react";

export const WellMainHeaderRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path={WellMainRoutes.INFO}
          element={<p>well info main tools</p>}
        />
        <Route path={WellMainRoutes.GIS} element={<p>well gis main tools</p>} />
        <Route
          path={WellMainRoutes.PARAMTERS}
          element={<p>well parameters main tools</p>}
        />
        <Route
          path={WellMainRoutes.MARKERS}
          element={<p>well markers main tools</p>}
        />

        <Route
          path={WellMainRoutes.WELL_TYPES}
          element={<p>well types main tools</p>}
        />
      </Routes>
    </Suspense>
  );
};

export default WellMainHeaderRouter;
