import React from "react";

function Checkbox({ checkboxdata, clearAllhandling }) {
  return (
    <div className="checkbox">
      {checkboxdata.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            value={item}
            onChange={clearAllhandling}
          />
          {item}
        </div>
      ))}
    </div>
  );
}

export default Checkbox;