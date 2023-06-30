import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILinkItem } from "../../routes";

const NavDataManager: FC<{
  items: ILinkItem[];
  end?: boolean;
  direction?: "column" | "row";
}> = ({ items, end = true, direction = "row" }) => {
  return (
    <ul style={{ display: "flex", flexDirection: direction, gap: 12 }}>
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} end={end}>
          {item.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavDataManager;
