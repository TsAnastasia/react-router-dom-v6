import ListDataManager from "../../../components/list/ListDataManager";
import NavDataManager from "../../../components/nav/NavDataManager";

const MainSeism = () => {
  return (
    <div>
      <NavDataManager items={[]} />
      <ListDataManager itemsType="seism" />
    </div>
  );
};

export default MainSeism;
