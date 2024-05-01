import { useState } from "react";
import Model from "./model";
import "./model.css";

const ModelTest = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowModelPopup(!showModelPopup);
  };

  const onClose = () => {
    setShowModelPopup(false);
  };

  return (
    <div className="">
      <button onClick={handleTogglePopup}>Open Model Popup</button>
      {showModelPopup && (
        <Model
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ModelTest;
