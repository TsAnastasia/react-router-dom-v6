import { Suspense } from "react";
import BreadСrumbsDataManager from "../breadСrumbs/BreadСrumbsDataManager";
import { Outlet } from "react-router-dom";

const HeaderDataManager = () => {
  return (
    <div
      style={{
        height: 40,
        paddingInline: 12,
        borderBottom: "1px solid",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <BreadСrumbsDataManager />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HeaderDataManager;
