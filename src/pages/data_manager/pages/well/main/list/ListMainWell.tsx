import { FC } from "react";
import { Link } from "react-router-dom";
import { SectionsNames } from "../../../../router/routes";

const ITEMS: { id: string; name: string }[] = [...Array(10)].map((_, id) => ({
  id: "id" + id,
  name: "name" + id,
}));

const ListMainWell: FC<{ itemsType: string }> = ({ itemsType }) => {
  return (
    <ul>
      {ITEMS.map((item) => (
        <li key={item.id}>
          <Link
            to={`../../${SectionsNames.WELL}/${item.id}`}
          >{`${itemsType} ${item.name}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListMainWell;
