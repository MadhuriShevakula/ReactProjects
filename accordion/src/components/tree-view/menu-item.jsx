import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
const MenuItem = ({ item }) => {
  const [displayCurrChildren, setDisplayCurrChildren] = useState({});

  const handleToggleChildren = (getCurrLabel) => {
    setDisplayCurrChildren({
      ...displayCurrChildren,
      [getCurrLabel]: !displayCurrChildren[getCurrLabel],
    });
  };

  console.log(displayCurrChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
