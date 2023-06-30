import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavDataManager from "../../../components/nav/NavDataManager";
import { GRID_ROOTES_ITEMS } from "../../../routes";

const SingleGrid = () => {
  return (
    <div>
      <NavDataManager items={GRID_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SingleGrid;
