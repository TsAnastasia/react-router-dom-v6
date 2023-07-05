import { FC, memo } from "react";
import { Link } from "react-router-dom";

const ITEMS: { id: string; name: string }[] = [...Array(10)].map((_, id) => ({
  id: "id" + id,
  name: "name" + id,
}));

const ListDataManager: FC<{ itemsType: string }> = ({ itemsType }) => {
  return (
    <ul>
      {ITEMS.map((item) => (
        <li key={item.id}>
          <Link to={item.id}>{`${itemsType} ${item.name}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(ListDataManager);
