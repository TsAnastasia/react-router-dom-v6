import { useMemo } from "react";
import { Link, useLocation, useResolvedPath } from "react-router-dom";
import {
  NAMES_ROUTES,
  RootRouters,
  RootRoutesType,
  SectionsNames,
} from "../../../router/routes";

interface ICrumbs {
  name: string;
  to: string;
}

const BreadСrumbsDataManager = () => {
  const { pathname: MFPath } = useResolvedPath("");
  const { pathname } = useLocation();

  const { crumbs, section } = useMemo<{
    crumbs: ICrumbs[];
    section: RootRoutesType;
  }>(() => {
    const arr = pathname.slice(MFPath.length + 1).split("/");

    const section = (
      (Object.values(RootRouters) as string[]).includes(arr[0])
        ? arr[0]
        : arr[0] + "s"
    ) as RootRoutesType;

    const crumbs: ICrumbs[] =
      (Object.values(SectionsNames) as string[]).includes(arr[0]) &&
      arr.length > 1
        ? [{ to: "", name: "test" }]
        : [];

    console.log("arr", arr);
    return { crumbs, section };
  }, [MFPath.length, pathname]);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      {crumbs.length < 1 ? (
        <p>
          {NAMES_ROUTES[section]} {section}
        </p>
      ) : (
        <>
          <Link to={MFPath + "/" + section} style={{ border: "1px solid" }}>
            back
          </Link>
        </>
      )}
    </div>
  );
};

export default BreadСrumbsDataManager;
