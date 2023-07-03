import { FC } from "react";
import { NavLink, RelativeRoutingType } from "react-router-dom";
import { ILinkItem } from "../../router/routes";

const NavDataManager: FC<{
  items: ILinkItem[];
  end?: boolean;
  direction?: "column" | "row";
  relative?: RelativeRoutingType;
}> = ({
  items,
  end = true,
  direction = "row",
  relative = direction === "row" ? "path" : "route",
}) => {
  // TODO: ???
  return (
    <ul style={{ display: "flex", flexDirection: direction, gap: 12 }}>
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} end={end} relative={relative}>
          {item.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavDataManager;
