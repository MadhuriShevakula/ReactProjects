// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected((prevSelected) =>
      getCurrentId === prevSelected ? null : getCurrentId
    );
  };

  const handleMultiSelection = (getCurrentId) => {
    setMultiple((prevMultiple) => {
      const copyMultiple = [...prevMultiple];
      const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

      if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
      else copyMultiple.splice(findIndexOfCurrentId, 1);
      return copyMultiple;
    });
  };

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection((prev) => !prev)}>
        {enableMultiSelection
          ? "Enable Single Selection"
          : "Enable MultiSelection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isItemSelected = enableMultiSelection
              ? multiple.indexOf(dataItem.id) !== -1
              : selected === dataItem.id;
            return (
              <div
                key={dataItem.id}
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="item"
              >
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>{isItemSelected ? "-" : "+"}</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content-box">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content-box">{dataItem.answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <div>No data Found!</div>
        )}
      </div>
    </div>
  );
}
