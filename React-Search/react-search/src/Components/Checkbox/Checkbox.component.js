import React from "react";
import './Checkbox.Style.css';
// import { useState } from "react";


function Checkbox({ checkboxdata, inputHandler, checked }) {
  console.log(checked)
  return (
    <div className="checkbox-container">
      <div className="checkboxes">
      {checkboxdata.map((item) => (
        <div className="items" key={item}>
          <input
            type="radio"
            id={item}
            name="filter"
            checked={checked === item}
            onClick={() => inputHandler(item)}
            value={item}
          />
          {item}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Checkbox;