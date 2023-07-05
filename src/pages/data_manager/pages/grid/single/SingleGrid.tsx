import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavDataManager from "../../../components/nav/NavDataManager";
import { GRID_SINGLE_ROOTES_ITEMS } from "../../../router/grid/routes";

const SingleGrid = () => {
  return (
    <div>
      <NavDataManager items={GRID_SINGLE_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SingleGrid;
