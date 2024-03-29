import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavDataManager from "../../../components/nav/NavDataManager";
import { HORISON_SINGLE_ROOTES_ITEMS } from "../../../router/horison/routes";

const SingleHorison = () => {
  return (
    <div>
      <NavDataManager items={HORISON_SINGLE_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SingleHorison;
