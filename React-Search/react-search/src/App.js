import { useState } from "react";
import { debounce } from "lodash";
import React from "react";
import List from "./Components/List";
import Checkbox from "./Components/Checkbox/Checkbox.component";
import { TextField } from "@mui/material";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [checkboxdata, setcheckboxdata] = useState([]);
  const [checked, setChecked] = useState("");

  const space = new RegExp(" ");

  const inputHandler = (e) => {
    var lowerCase = e.target.value;
    reqUser(lowerCase)
    debounce((value) => {

      if (
        !space.test(lowerCase) &&
        lowerCase.length > 0 &&
        !checkboxdata.includes(lowerCase)
      ) {
        setcheckboxdata([...checkboxdata, lowerCase]);
        setChecked(e.target.value);
      }
    }, 1000)(inputText);
    
  };

  const reqUser = (val) => {
    setInputText(val);
  }

  const searchClikced = (val) => {
    reqUser(val);
    setChecked(val)
  }
  const SelectAllhandling = (e) => {
    if (e.target.checked) {
      setInputText("");
      setChecked("");
    }
  };

  // const clearAllhandling = (e) => {
  //   setInputText("");
  //   setcheckboxdata([]);
  // };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          className="search-bar"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          value={inputText}
          fullWidth
          label="Search"
        />
      </div>
      {/* <button className="clear-all" onClick={clearAllhandling}>
        Clear All
      </button> */}
      <div className="checkbox">
        <input
          id="allfilter"
          type="checkbox"
          defaultChecked="checked"
          checked={inputText.length === 0}
          onChange={(e) => {
            SelectAllhandling(e);
          }}
        />
        <label htmlFor="allfilter"> Select All</label>
        <Checkbox checkboxdata={checkboxdata} inputHandler={searchClikced} checked={checked}  />
      </div>

      <div className="list-container">
          <List input={inputText} />
      </div>
    </div>
  );
}

export default App;
