import { Route, Routes } from "react-router-dom";

import { RootRouters } from "./routes";
import HeaderDataManager from "../components/header/HeaderDataManager";
import WellMainHeaderRouter from "./well/WellMainHeaderRouter";
import { Suspense } from "react";

const RootHeaderRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="*" element={<HeaderDataManager />}>
          <Route path={RootRouters.SEISM} element={<p>seism main tools</p>} />
          <Route
            path={RootRouters.WELL + "/*"}
            element={<WellMainHeaderRouter />}
          />
          <Route
            path={RootRouters.LIBRARY}
            element={<p>library main tools</p>}
          />
          <Route path={RootRouters.MAP} element={<p>map main tools</p>} />
          <Route path={RootRouters.GRID} element={<p>grid main tools</p>} />
          <Route
            path={RootRouters.HORISON}
            element={<p>horison main tools</p>}
          />

          <Route path="*" element={<p>?</p>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RootHeaderRouter;
