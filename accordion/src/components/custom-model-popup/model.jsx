const Model = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Model"} className="model">
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-model-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
      
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Model Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2>This is our footer</h2>}
        </div>
      </div>
    </div>
  );
};
export default Model;
