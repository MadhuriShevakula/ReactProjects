import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => {
            return <MenuItem key={listItem.id} item={listItem} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
