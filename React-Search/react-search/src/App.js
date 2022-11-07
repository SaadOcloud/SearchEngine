import { React, useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import Checkbox from "./Components/Checkbox/Checkbox";
import debounce from "lodash.debounce";

import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [checkboxdata, setcheckboxdata] = useState([]);

  const space = new RegExp(" ");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(lowerCase);
    if (
      !space.test(lowerCase) &&
      lowerCase.length > 0 &&
      !checkboxdata.includes(lowerCase)
    ) {
      setcheckboxdata([...checkboxdata, lowerCase]);
    }
  };

  const debouncedChangeHandler = useCallback(debounce(inputHandler, 1000), [
    inputText,
  ]);

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          className="search-bar"
          id="outlined-basic"
          onChange={debouncedChangeHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className="checkbox">
        <input id="allfilter" type="checkbox" defaultChecked="checked" />
        <label htmlFor="allfilter"> Select All</label>
        <input id="clearfilter" type="checkbox" />
        <label htmlFor="clearfilter"> Clear All</label>
      </div>
      <div className="checkbox-container">
          <Checkbox checkboxdata={checkboxdata} />
        </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
