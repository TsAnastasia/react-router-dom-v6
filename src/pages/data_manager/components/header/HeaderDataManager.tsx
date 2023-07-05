import BreadСrumbsDataManager from "./breadСrumbs/BreadСrumbsDataManager";

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
      <div>tools</div>
    </div>
  );
};

export default HeaderDataManager;
