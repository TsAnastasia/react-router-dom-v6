import { Suspense } from "react";
import NavDataManager from "../../../components/nav/NavDataManager";
import { WELL_MAIN_ROOTES_ITEMS } from "../../../router/well/routes";
import WellMainRouter from "../../../router/well/WellMainRouter";

export const MainWell = () => {
  return (
    <div>
      <NavDataManager items={WELL_MAIN_ROOTES_ITEMS} />
      <Suspense fallback={null}>
        <WellMainRouter />
      </Suspense>
    </div>
  );
};

export default MainWell;
