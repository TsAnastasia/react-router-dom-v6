import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SectionsNames } from "../routes";
import { LibrarySingleRoutes } from "./routes";

const LibrarySingleRouter: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route
        path={`${path}${SectionsNames.LIBRARY}/${LibrarySingleRoutes.SINGLE}`}
        element={<p>library single</p>}
      ></Route>
    </Routes>
  );
};

export default memo(LibrarySingleRouter);
