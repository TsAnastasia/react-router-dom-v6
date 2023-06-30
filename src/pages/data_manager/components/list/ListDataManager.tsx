import { NavLink } from "react-router-dom";

const ITEMS: { id: string; name: string }[] = [...Array(10)].map((_, id) => ({
  id: "id" + id,
  name: "name" + id,
}));

const ListDataManager = () => {
  return (
    <ul>
      {ITEMS.map((item) => (
        <li key={item.id}>
          <NavLink to={item.id} end>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ListDataManager;
