import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [checkboxdata, setcheckboxdata] = useState([]);
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const checkboxHandler = (e) => {
    var checkbox = e.target.value;
    setcheckboxdata(checkboxdata.push(checkbox));
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          className="search-bar"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div className="footer">
        <input type="checkbox" />
        <label for="filter"> Select All</label>
        <input type="checkbox" />
        <label for="filter"> Clear All</label>
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
