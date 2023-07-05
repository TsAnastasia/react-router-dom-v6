import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavDataManager from "../../../components/nav/NavDataManager";
import { MAP_SINGLE_ROOTES_ITEMS } from "../../../router/map/routes";

const SingleMap = () => {
  return (
    <div>
      <NavDataManager items={MAP_SINGLE_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SingleMap;
