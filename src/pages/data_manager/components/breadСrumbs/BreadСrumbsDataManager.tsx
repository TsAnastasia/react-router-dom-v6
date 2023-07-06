import { Fragment, useCallback, useMemo } from "react";
import { Link, useLocation, useResolvedPath } from "react-router-dom";
import {
  NAMES_ROUTES,
  RootRoutesType,
  SectionsNames,
  SectionsNamesType,
} from "../../router/routes";

const NAMES: Record<SectionsNamesType, string> = {
  seism: "Сейсмика",
  well: "Скважина",
  library: "Библиотека",
  horison: "Горизонт",
  grid: "Сетка",
  map: "Карта",
  polygon: "Полигон",
  pulses: "Импульс",
  "cross-raft": "Кросс-раф",
  contour: "Контур",
  gis: "Гис",
};

export interface ICrumbs {
  name: string;
  to: string;
}

const BreadСrumbsDataManager = () => {
  const { pathname: MFPath } = useResolvedPath("");
  const { pathname } = useLocation();

  const { crumbs, error } = useMemo<{
    crumbs: ICrumbs[];
    error: boolean;
  }>(() => {
    let error = false;
    const arr = pathname.slice(MFPath.length + 1).split("/");

    const crumbs: ICrumbs[] = [];

    const getCrumbs = (arr: string[], path: string) => {
      if (arr.length < 2) return;

      if (!(Object.values(SectionsNames) as string[]).includes(arr[0])) {
        error = true;
        return;
      }

      const newPath = path + "/" + arr.slice(1, 3).join("/");
      crumbs.push({
        name: NAMES[arr[0] as SectionsNamesType] + " " + arr[1],
        to: newPath,
      });

      getCrumbs(arr.slice(2), newPath);
    };

    if ((Object.values(SectionsNames) as string[]).includes(arr[0])) {
      crumbs.push({ name: NAMES_ROUTES[arr[0] as RootRoutesType], to: arr[0] });
      getCrumbs(arr, arr[0]);
    } else {
      crumbs.push({
        name: NAMES_ROUTES[arr[0] as RootRoutesType],
        to: arr.slice(0, 2).join("/"),
      });
      getCrumbs(arr.slice(2), arr.slice(0, 2).join("/"));
    }

    return { crumbs, error };
  }, [MFPath.length, pathname]);

  const handleCopyPath = useCallback(() => {
    const arr = pathname.slice(MFPath.length + 1).split("/");
    let path = "";

    if (!(Object.values(SectionsNames) as string[]).includes(arr[0])) {
      path = arr.slice(0, 2).join("/");
    }

    if (
      (Object.values(SectionsNames) as string[]).includes(arr[arr.length - 1])
    ) {
      path += arr.slice(-3).join("/");
    } else {
      path += arr.slice(-2).join("/");
    }

    const copyPath = MFPath + "/" + path;

    // копировать в буфер обмена
    navigator.clipboard.writeText(copyPath);
    console.log("copyPath", copyPath);
  }, [MFPath, pathname]);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      {error ? (
        <p>wrong path</p>
      ) : crumbs.length <= 1 ? (
        <p>{crumbs[0].name}</p>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to={crumbs[crumbs.length - 2].to}>back</Link>

          <div
            className="crumbs"
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            {crumbs.map((crumb, index) => (
              <Fragment key={index}>
                {index === crumbs.length - 1 ? (
                  <p style={{ fontWeight: 700 }}>{"/" + crumb.name}</p>
                ) : (
                  <Link to={crumb.to}>{`${index !== 0 ? "/" : ""}${
                    crumb.name
                  }`}</Link>
                )}
              </Fragment>
            ))}
          </div>

          <button type="button" onClick={handleCopyPath}>
            copy path
          </button>
        </div>
      )}
    </div>
  );
};

export default BreadСrumbsDataManager;
