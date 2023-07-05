import { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { ILinkItem } from "../../router/routes";

const NavDataManager: FC<{
  items: ILinkItem[];
  end?: boolean;
  direction?: "column" | "row";
}> = ({ items, end = true, direction = "row" }) => {
  return (
    <ul
      style={{
        margin: 0,
        padding: 12,
        borderBottom: direction === "row" ? "1px solid" : "",
        display: "flex",
        justifyContent: "center",
        flexDirection: direction,
        gap: 12,
      }}
    >
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} end={end}>
          {item.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default memo(NavDataManager);
