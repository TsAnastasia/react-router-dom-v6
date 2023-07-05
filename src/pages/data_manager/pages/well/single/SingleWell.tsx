import { Suspense } from "react";
import NavDataManager from "../../../components/nav/NavDataManager";
import { Outlet } from "react-router-dom";
import { WELL_SINGLE_ROOTES_ITEMS } from "../../../router/well/routes";

export const SingleWell = () => {
  return (
    <div>
      <NavDataManager items={WELL_SINGLE_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SingleWell;
